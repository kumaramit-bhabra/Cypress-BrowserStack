///<reference types = "Cypress"/>

import ProductListingPage from "../../pageObjects/ProductListingPage";
import ShoppingBagPage from "../../pageObjects/ShoppingBagPage";

describe("Validate the functionality of the Shopping Bag", function(){

beforeEach(function(){

    cy.visit(Cypress.env("url"));
    
    cy.fixture('landingData').then(function(userData){
        this.userReg = userData; 
        cy.get(this.userReg.navItems).contains('Shop').click();
    })

    cy.fixture('prdListingData').then(function(prdData){
        this.prdListingData = prdData; 
    })
    
})


it("Validate the single product is added to shopping Bag",function(){
    const prdListingPage = new ProductListingPage();
    const shoppingBagPage = new ShoppingBagPage();
    
    prdListingPage.validateAddSingleProduct(this.prdListingData);
    shoppingBagPage.validateProductIsAddedToShoppingBag(this.prdListingData);
})

it("validate user is able to perform CheckOut",function(){
    const prdListingPage = new ProductListingPage();
    const shoppingBagPage = new ShoppingBagPage();
    
    prdListingPage.validateAddSingleProduct(this.prdListingData);
    shoppingBagPage.validateuserIsAbleToPerformCheckout();
})

it("validate price is displayed correctly and use able to perform checkout",function(){
    const prdListingPage = new ProductListingPage();
    const shoppingBagPage = new ShoppingBagPage();
    
    prdListingPage.validateAddSingleProduct(this.prdListingData);
    shoppingBagPage.validatePriceIsDisplayedCorrectly(this.prdListingData);

})







})
