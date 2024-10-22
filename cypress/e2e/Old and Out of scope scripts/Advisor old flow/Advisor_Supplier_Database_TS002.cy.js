/* Description For TC002: "The goal of the test is to verify the following functionalities:
1. Contents of the Supplier Database home page"	*/ 

/* Description For TC003: "The goal of the test is to verify the following functionalities:
1. Contents of the Preferred partners Introduction"	*/ 

/* Description For TC004: "The goal of the test is to verify the following functionalities:
1. Contents of the Need to know section present in Preferred partners" */ 

/* Description For TC005: "The goal of the test is to verify the following functionalities:
1. Contents of the Resources present in the  Preferred partners section" */

/* Description For TC006: "The goal of the test is to verify the following functionalities:
1. Contents of the Close and Open details under the Preferred partners section  */

/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/

import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS002', { testIsolation: false }, function() {

  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Supplier_Database_TC002_To verify preferred partners - Introduction',() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
 //  cy.viewport(390,844)
    cy.Login();
    
    Home.navbar.click()
    Supplier.supplier.click()
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()
    Supplier.Preferredpartner.should('be.visible')
    Supplier.introduction.should('be.visible')
    Supplier.introductiontext.should('be.visible')
    Supplier.arrow.eq(0).click()
    Supplier.arrow.eq(0).click()
})
it('Advisor_Supplier_Database_TC003_To verify preferred partners - Need to Know', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  // cy.viewport(390,844)
   /* cy.Login();
    Home.navbar.click()
    Supplier.supplier.click()
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()*/
   // cy.get('[id="scroll-container"]').scrollTo('center').wait(500);
   //Supplier.Closedetailsbutton.click()

  
    Supplier.Needtoknow.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.Needtoknowtext.should('be.visible')
    
})

it('Advisor_Supplier_Database_TC004 to Advisor_Supplier_Database_TC005 _To verify preferred partners - Need to Know', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
//cy.viewport(390,844)
 /* cy.Login();
  Home.navbar.click()
  Supplier.supplier.click({force: true})
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  //Supplier.arrow.eq(0).click()
  //Supplier.Closedetailsbutton.click()
 
  cy.wait(2000)
  //cy.get('[id="scroll-container"]').scrollTo('center').wait(500);

  Supplier.arrow.eq(2).click()
  Supplier.Resources.should('be.visible')
  
  Supplier.Supplierdatbasedeepdive.should('be.visible')
  Supplier.Researchbestpractice.should('be.visible')
  Supplier.Brandmatchmaking.should('be.visible')
  Supplier.arrow.eq(2).click()



  
})

it('Advisor_Supplier_Database_TC006_To verify Check preferred partners - Close and Open details', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
 //cy.viewport(390,844)
 /* cy.Login();
  
  Home.navbar.click()
  Supplier.supplier.click({force: true})
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/

  Supplier.Closedetailsbutton.click()
  cy.get('[id="scroll-container"]').scrollTo('top', { duration: 200 });
  Supplier.Opendetailsbutton.click()
})
})