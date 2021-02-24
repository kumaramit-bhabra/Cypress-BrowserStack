
/// <reference types="Cypress" />

const { expect, should } = require("chai");

describe("Amazon - Landing Page", function(){

    it("Check the title of the Page", function(){
        cy.visit("https://www.amazon.co.uk/");
        cy.get("title").then(($titleText)=>{
            const title = $titleText.text();
            cy.log(title);
            expect(title).contains("Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more");
        }
        );
    })

    /*it("Provide Search parameter and validate that results contain the parameter", function(){
        cy.visit("https://www.amazon.co.uk/");
        cy.get("#sp-cc-accept").click();
        cy.get("#twotabsearchtextbox").type("Dresses");
        cy.get(".s-suggestion").each(($el,index,$list)=>{
        //cy.log($list.length);
        const searchResult = $el.text();
        cy.log (searchResult);
        expect(searchResult).to.include("dresses");
    
        })   
    })*/

    /*it("select one of the option from the search list", function(){
        cy.visit("https://www.amazon.co.uk/");
        
        cy.get("#sp-cc-accept").click();
        cy.get("#twotabsearchtextbox").type("Dresses");
    
        cy.get(".s-suggestion").then(($searchList)=>{
            const displayedOptions = $searchList.length;
            if(displayedOptions > 0)
            {
                cy.log(displayedOptions);
                $searchList[displayedOptions-1].click();
            }
        });
        
        
    })*/

}

)