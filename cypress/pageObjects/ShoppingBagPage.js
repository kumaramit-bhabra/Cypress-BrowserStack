class ShoppingBagPage{
    
    //Shopping Bag Elements
    prdDescElm = "h4.media-heading";
    qtyElm = "#exampleInputEmail1";
    priceElm = ".col-sm-1.col-md-1.text-center";
    removeBttnElm = ".btn.btn-danger";
    contShoppingBttnElm = ".btn.btn-default";
    checkOutBttnElm = ".btn.btn-success";
    overallTotalElm = ".text-right";

    validateProductIsAddedToShoppingBag(prdListingData)
    {
        
        cy.get(this.prdDescElm).then(function($prdDesc){
        const prdDesc = $prdDesc.text();
        expect(prdDesc).equal(prdListingData.phoneModel);
        })
       
    }

    validateuserIsAbleToPerformCheckout()
    {
        cy.get(this.checkOutBttnElm).click();
    }

    validatePriceIsDisplayedCorrectly(prdListingData)
    {
            var qElm = this.qtyElm;
            var totPrElm = this.priceElm;
            var allTotalElm = this.overallTotalElm;

            cy.get(this.priceElm).eq(0).then(function($prdPrice){
            
            var amendedPrice = 0;
            var price = $prdPrice.text();

            cy.get(qElm).clear().type(prdListingData.qtySold);
            amendedPrice = price.substring(2)
            expect(amendedPrice.trim()).equal(prdListingData.iPhonePrice);
            
            //validating Qty * Price = rowTotal and overallTotal
            cy.get(totPrElm).eq(1).then(function($totPrice)
            {
                var rowTotalPrice = $totPrice.text();
                var expectedRowTotalPrice = prdListingData.qtySold * prdListingData.iPhonePrice
                
                rowTotalPrice = rowTotalPrice.substring(2);
                expect(rowTotalPrice.trim()*1).equals(expectedRowTotalPrice*1);

                cy.get(allTotalElm).then(function($allTotal){
                    var overallTotal = $allTotal.text();
                    overallTotal = overallTotal.substring(2);
                    expect(overallTotal.trim()*1).equals(expectedRowTotalPrice*1);
    
                })

            })

            


        })
    }

}

export default ShoppingBagPage;