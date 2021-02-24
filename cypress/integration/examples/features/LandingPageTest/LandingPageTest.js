/// <reference types = "Cypress" />

import LandingPage from "../../../../pageObjects/LandingPage";
import {Given,When,Then,And, Before} from "cypress-cucumber-preprocessor/steps"

const landingPage = new LandingPage();

    /*
    beforeEach(function(){
        cy.visit(Cypress.env("url"));

        cy.fixture('landingData').then(function(data)
        {
            this.userReg = data;   
        })
                
        })*/

    Given("User is on the landing Page",function(){
        cy.visit(Cypress.env("url"));
        cy.fixture('landingData').then(function(data)
        {
            this.userReg = data;
            cy.log("hello World");
        })
    })

    When("User Enters the name",function(){
        cy.log("hello World");
    })
    
    Then("Title of the page should be correct",()=>{
        landingPage.validateTitle();
    })
    
    Then("Binding example should have the same value as name entered",function(){
        landingPage.validateBindingExample(this.userReg);
    })

    Then("Validate the state of the page elements",function(){
        landingPage.validatePageContent();
    })

    And("Fill up the Details for User Registration and Press Submit",function(){
        landingPage.validateFormSubmission(this.userReg);
    })

    Then("User should be successfully Registered",function(){
        landingPage.isUserRegistered(this.userReg);
    })