class ProductListingPage{

    //Shopping Page Web elements
    shoppingPageTitleElm = "title";
    productListingElm = ".card-title";
    addBttnElm = ".btn.btn-info";
    checkOutBttnElm = ".nav-link.btn.btn-primary";

    validateTitle(prdLisiting)
    {
        cy.get(this.shoppingPageTitleElm).then(function($pageTitle){
            const pageTitle = $pageTitle.text();
            expect(pageTitle).equal(prdLisiting.pageTitle);
        });
    }

    validateBagIsEmpty()
    {
        cy.get(this.checkOutBttnElm).then(function($shoppingBag){
            const zeroProduct = $shoppingBag.text();
            expect(zeroProduct.trim()).contains("Checkout ( 0 )");
        })
    }

    validateAddProduct(prdLisiting, phoneModel)
    {

        var prdElement = this.addBttnElm;
        var chkOutBttn = this.checkOutBttnElm;
        var numberOfPrd = phoneModel.raw().length;
        var modelExt = phoneModel.raw();
                    
        if((phoneModel.raw().length) === 1)
        {
            modelExt.forEach(function($element){
            cy.get(this.productListingElm).each(function($el, index, $list){
                
            const prdName = $el.text();    
            if(prdName.trim() === $element.toString())
                {
                cy.get(prdElement).eq(index).click();
                }
            })
            },this)
        }

        if((phoneModel.raw().length) === 2)
        {
            modelExt.forEach(function($element){
            cy.get(this.productListingElm).each(function($el, index, $list){
            const prdName = $el.text();    
               
                if(prdName.trim() === $element.toString())
                {
                    cy.get(prdElement).eq(index).click()
                }
                })
                },this)  
        }
        cy.get(this.checkOutBttnElm).then(function($shoppingBag){
        const zeroProduct = $shoppingBag.text();
        expect(zeroProduct.trim()).contains("Checkout ( "+numberOfPrd+" )");
        cy.get(chkOutBttn).click();
        })
        
    }

}

export default ProductListingPage;