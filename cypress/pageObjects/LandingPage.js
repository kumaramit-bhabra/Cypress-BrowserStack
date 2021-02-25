class LandingPage{


    // All Web elements asscoiated with the Landing Page
    landingPageTitleElm = "title";
    emailTxtBoxElm =   "input[name='email']";
    passwordTxtBoxElm  = "#exampleInputPassword1";
    checkBoxIceCreamElm =   "#exampleCheck1";
    genderDropDownElm  = "#exampleFormControlSelect1";
    radioBttnStudentElm = "#inlineRadio1";
    radioBttnEmployedElm = "#inlineRadio2";
    radioBttnEnterPreElm = "#inlineRadio3";
    birthDateElm = "input[name='bday']";
    submitBttnElm = ".btn.btn-success";
    nameTextBoxElm = "input[name='name']:nth-child(2)";
    bindingTextBoxElm = "input[name='name']:nth-child(1)";
    successConfirmMessElm = ".alert.alert-success.alert-dismissible";
    closeSuccessMessageElm = ".close";
    navItemsElm = ".nav-link";
     
    validateTitle()
    {
        var pageTitle;     
        cy.get(this.landingPageTitleElm).then(function($title){
        pageTitle = $title.text();
        expect(pageTitle).equal("ProtoCommerce");
        })
        
    }

    validateBindingExample(userReg)
    {
        cy.get(this.nameTextBoxElm).type(userReg.name);
        cy.get(this.bindingTextBoxElm).then(function(bindingValue){
            const bindingTextBoxVal = bindingValue.val();
            expect(bindingTextBoxVal).to.be.equal(userReg.name)
        })
        cy.get(this.bindingTextBoxElm).should("have.value",userReg.name);
    }

    validatePageContent()
    {
        cy.get(this.radioBttnEnterPreElm).should("be.disabled");
        cy.get(this.nameTextBoxElm).should("have.attr","minlength",2);
        cy.get(this.navItemsElm).each(function($item, index, $list){
            const clickURL = $item.prop("href");
            expect($item).to.have.prop('href');
            const linkName = $item.text();
        })
    }

    validateFormSubmission(userReg)
    {
        cy.get(this.nameTextBoxElm).type(userReg.name);
        cy.get(this.emailTxtBoxElm).type(userReg.email);
        cy.get(this.passwordTxtBoxElm).type(userReg.password);
        cy.get(this.checkBoxIceCreamElm).check();
        cy.get(this.genderDropDownElm).select(userReg.gender);
        cy.get(this.radioBttnEmployedElm).check();
        cy.get(this.birthDateElm).type(userReg.dateOfBirth);
        cy.get(this.submitBttnElm).click();
        

    }

    isUserRegistered(userReg){
        cy.get(this.successConfirmMessElm).then(function(message){
            const msgTxt = message.text();
            expect(msgTxt).contains(userReg.successMessage);
        })
        cy.get(this.closeSuccessMessageElm).click();
    }

}

export default LandingPage;
