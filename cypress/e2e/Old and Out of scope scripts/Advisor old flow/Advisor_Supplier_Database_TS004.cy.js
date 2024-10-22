/* Description for TC012: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and book directly with property"					*/ 

/* Description for TC013: "The goal of the test is to verify the following functionalities:
1. Contents of the Introduction present in the Hotels with perks page"									*/ 

/* Description for TC014: "The goal of the test is to verify the following functionalities:
1. Contents of the Need to Know section present on the Hotels with Perks page"	*/ 

/* Description for TC015: "The goal of the test is to verify the following functionalities:
1. Contents of the resources section present on the Hotels with Perks page"	*/ 

/* Description for TC016: "The goal of the test is to verify the following functionalities:
1.  Contents of the Search text box with Hotels with perk name"					*/ 

/* Description for TC017:"The goal of the test is to verify the following functionalities:
1.  Contents of the Search text box with Hotels with perk name" */	

/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/

import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS004', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Supplier_Database_TC012_to Advisor_Supplier_Database_TC015 To verify Hotels with perks Page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    //cy.viewport(390,844)
    cy.Login();
    
    cy.wait(2000)
  //  cy.viewport(390,844)

    Home.navbar.click()
    Supplier.supplier.click()
    cy.wait(1000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()
    Supplier.Hotelswithperks.click()
    Supplier.introduction.should('be.visible')

    Supplier.Hotelnperksintroductiontext.should('be.visible')
    Supplier.arrow.eq(0).click()
    Supplier.Needtoknow.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.Hotelnperksneedtoknowtext.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.Resources.should('be.visible')
    Supplier.arrow.eq(2).click()
    Supplier.howtobooklink.should('be.visible')
    Supplier.Brandmatchmaking.should('be.visible')
    Supplier.thehotelecosystem.should('be.visible')
    Supplier.arrow.eq(2).click()
    Supplier.Closedetailsbutton.click()
   
   
   
   

    cy.get('[id="scroll-container"]').scrollTo('top', { duration: 1000 });

    Supplier.searchfield.should('be.visible')
    Supplier.Sortbutton.eq(0).click()
    Supplier.Partnerprogramdropdown.click()
  


})

it('Advisor_Supplier_Database_TC016 To verify  if user can access search box in Hotels with Perks', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    //cy.viewport(390,844)
    /*cy.Login();
     //    cy.viewport(390,844)

    cy.wait(2000)
    Home.navbar.click()
    Supplier.supplier.click()
    cy.wait(1000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()*/
    Supplier.Hotelswithperks.click()
    cy.fixture('Advisor_Supplier_Database_TS004.json').then(function (dataJson) {
    cy.get('[id="scroll-container"]').scrollTo('center', { duration: 500 });
    Supplier.searchfield.type(dataJson.Search1+ '{enter}')
    Supplier.searchfield.clear().type(dataJson.Search2+ '{enter}')
    cy.wait(2000)
  //  Supplier.searchmsg.should("be.visible")




})
})
it('Advisor_Supplier_Database_TC017 To verify if user can filter Hotels with Perks based on Partner Programs', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   // cy.viewport(390,844)
   /* cy.Login();
  
    cy.wait(2000)
    Home.navbar.click()
    Supplier.supplier.click()
    cy.wait(2000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()*/
    Supplier.searchfield.clear()
    Supplier.Hotelswithperks.click()
    cy.wait(2000)
    Supplier.searchfield.type('{enter}')
   // Supplier.Closedetailsbutton.click()
    cy.wait(2000)
    cy.fixture('Advisor_Supplier_Database_TS004.json').then(function (dataJson) {
    cy.get('[id="scroll-container"]').scrollTo('center', { duration: 500 });
    cy.wait(1000)

    Supplier.Partnerprogramdropdown.click()
   cy.wait(1000)
    Supplier.Forax.click()
    Supplier.Designhotelpro.click()
    Supplier.Apply.click()
    cy.wait(2000)
Supplier.homesearchresult.eq(3)
    .each(($result) => {
      cy.wrap($result)
        .invoke('text')
        .then((text) => {
          cy.log('Search result:', text);
        });
    });
    



})
})
})
