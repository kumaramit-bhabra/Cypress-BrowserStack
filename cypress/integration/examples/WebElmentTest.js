/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe';

const { should } = require("chai");

describe("Test suite for validating different Web Elements",()=>{

     it("Functionality of the checkbox", ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        
        //Simple command for checking the checkbox
        cy.get("#checkBoxOption1").check();
        cy.get("#checkBoxOption1").uncheck();
        
        //Have 2 or 3 checkboxes and we have to select the checkbox based upon the value
        cy.get("input[type='checkbox']").each(($el,index,$list)=>{
            const txtBoxValue = $el.val();
            cy.log(txtBoxValue);
            
            if( txtBoxValue === 'option2')
            {
                cy.log("inside if")
                cy.get($el).click();
            }

        })
    })

    it("check one of the option from the static dropdown",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#dropdown-class-example").select("option1");
        cy.get("#dropdown-class-example").select("option3");

    })

    it("Check the selection from Static drop down",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get("input[class = 'inputs ui-autocomplete-input']").type("Uni");
        cy.get(".ui-menu-item").each(($cntItem,index,$cntList) =>{
            const cntTxt = $cntItem.text();
            if(cntTxt ==='Tunisia')
            {
                cy.get($cntItem).click()
            }
          
        })
        cy.get("input[class = 'inputs ui-autocomplete-input']").should("have.value","Tunisia");
    })


    it("Behaviour of Visible / Invisible Elements",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");
    })

    it("check the behaviour of radio button ", ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("input[name='radioButton']").check("radio2");
        cy.get("#radio-btn-example").find("input[value ='radio2']").should("be.checked")
        
    })

    it("Check the behaviour of Alert and Confirm", ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#alertbtn").click();
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
        })
        
        cy.get("#confirmbtn").click();
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
        })
        
        cy.get("#confirmbtn").click();
        cy.wait(5000);
        cy.on("window:confirm",(str)=>{
            return false;
        })
    })

    it("Open Tab functionality and navigation back to main page", ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get(".btn-style.class1.class2").invoke('removeAttr','target').click();
        //cy.get(".btn-style.class1.class2").click();
        cy.url().should("include","index");
        //cy.wait(6000);
        cy.go("back");
    })

    
    it("Iterating through the table elements",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#product").find("tr").each(($rowEl,index,$list)=>{
            if (index > 0)
            {
                cy.get($rowEl).find("td").each(($indRow,indRowIndex,$indRowList)=>{
                    const courseText = $indRow.text();
                    if (courseText.includes("Python"))
                    {
                        cy.get($indRow).next().then(($coursePrice)=>{
                            const price = $coursePrice.text();
                            expect(price).to.equal("25");
                        });    
                    }
            });
            }
        });
    })


    it("Validate the mouse over functionality",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get(".mouse-hover-content").invoke('show');
        cy.get("a[href='#top']").click();
        cy.url().should("contain","top");

    })

    it("Grabbing the attribute value",()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get("#openwindow").then(($el)=>{
            // Getting the attribute value
            const clickURL = $el.prop("onclick");
            cy.log($el.contents());
            cy.log(clickURL);
        })
    })
    

    it("Working with Frames",()=>{
        
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        //Load the frame
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href='#/mentorship']").eq(0).click();
    })
})