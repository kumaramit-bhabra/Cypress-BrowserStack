class DeliveryPage{

//Web Elements associated with the Page
delLocElement = "#country";
chkBoxTermsCondElm = "#checkbox2";
purchaseBttnElm =".btn.btn-success.btn-lg";
locSuggestionElm = ".suggestions";
successMessageElm = ".alert.alert-success.alert-dismissible"

    validate_User_Is_Able_Purchase_ByEntering_Valid_Location(delData)
    {
    cy.get(this.delLocElement).type(delData.validDelLocation);
    cy.get(this.locSuggestionElm).click();
    cy.get(this.chkBoxTermsCondElm).check({force:true});
    cy.get(this.purchaseBttnElm).click();
    cy.get(this.successMessageElm).then(function(messageText){
        const text = messageText.text();
        expect(text).contain("Success");
    });
    }

}

export default DeliveryPage