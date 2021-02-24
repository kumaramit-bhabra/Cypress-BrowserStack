///<reference types = "Cypress"/>

import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import ProductListingPage from "../../../../pageObjects/ProductListingPage";

var productListingPage = new ProductListingPage();

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

// describe("Shopping Page Validation",function(){

    Then("Title of the page should be correct",function(){
        productListingPage.validateTitle(this.prdListingData)
    })

    Given("user add the following phone", function(phoneModel){
        productListingPage.validateAddProduct(this.prdListingData, phoneModel);
    })

    Then("Shopping bag should be empty",function(){
        productListingPage.validateBagIsEmpty();
    })

    Then("User is able to add multiple products in the shopping Bag",function(){
        productListingPage.validateAddProduct(this.prdListingData);     
    })
//})