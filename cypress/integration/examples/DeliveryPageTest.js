/// <reference types = "Cypress"/>

import DeliveryPage from "../../pageObjects/DeliveryPage";
import ProductListingPage from "../../pageObjects/ProductListingPage";
import ShoppingBagPage from "../../pageObjects/ShoppingBagPage";

beforeEach(function(){

    cy.visit(Cypress.env("url"));
    
    cy.fixture('landingData').then(function(userData){
        this.userReg = userData; 
        cy.get(this.userReg.navItems).contains('Shop').click();
    })

    cy.fixture('prdListingData').then(function(prdData){
        this.prdListingData = prdData; 
        this.prdListingPage = new ProductListingPage();
        this.shoppingBagPage = new ShoppingBagPage();
    
        this.prdListingPage.validateAddSingleProduct(this.prdListingData);
        this.shoppingBagPage.validateProductIsAddedToShoppingBag(this.prdListingData);
        this.shoppingBagPage.validateuserIsAbleToPerformCheckout();
    })
    
    cy.fixture('deliveryData').then(function(delData){
        this.deliverData = delData;
    })
    
})

describe("Delivery Location and click on Purhase",function(){

    it("User able to Purchase by entering the delivery location and accepting terms and conditions", function(){
        const deliveryPage = new DeliveryPage();
        deliveryPage.validate_User_Is_Able_Purchase_ByEntering_Valid_Location(this.deliverData);
    })

})