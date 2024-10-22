/* Description For TC007: "The goal of the test is to verify the following functionalities:
1. Contents of the Search text box with the name"					*/ 

/* Description For TC008: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and verify the content"				"					*/ 

/* Description For TC009: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and book via program site"								*/ 

/* Description For TC010: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and book via email"					

/* Description For TC011: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and book directly with property"	*/

/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/

import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS003', { testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Advisor_Supplier_Database_TC007_To verify  if user can search a preferred partner', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   // cy.viewport(390,844)
    cy.Login();
    //cy.viewport(390,844)
    Home.navbar.click()
    cy.wait(2000)
    Supplier.supplier.click()
    cy.wait(2000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()
    cy.fixture('Advisor_Supplier_Database_TS003.json').then(function (dataJson) {

    Supplier.Searchbar.type(dataJson.Search1)
    Supplier.Searchbutton.eq(0).click()
    //Supplier.searchmsg.should("be.visible")
    Supplier.Cancelbutton.click()
    Supplier.Searchbar.clear().type(dataJson.Search2+'{enter}')
    cy.wait(3000)
    
    Supplier.Searchresult
  .each(($result) => {
    cy.wrap($result)
      .invoke('text')
      .then((text) => {
        cy.log('Search result:', text);
      });
  });

})
})

it('Advisor_Supplier_Database_TC008_To verify  if user can open a preferred partner and verify the content', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 /* cy.Login();
     //  cy.viewport(390,844)

  Home.navbar.click()
  Supplier.supplier.click()
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  cy.fixture('Advisor_Supplier_Database_TS003.json').then(function (dataJson) {

  Supplier.Searchbar.clear().type(dataJson.Search3)
  Supplier.Searchbutton.eq(0).click()
  cy.wait(2000)
Supplier.Searchresult.eq(0).click()
Supplier.Copylink.click()
Supplier.Copy.click()
Supplier.cancel.click()

})
})

it('Advisor_Supplier_Database_TC009_To verify if user can open a preferred partner and book via program site', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

/*  cy.Login();
    //   cy.viewport(390,844)

  Home.navbar.click()
  Supplier.supplier.click()
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  cy.fixture('Advisor_Supplier_Database_TS003.json').then(function (dataJson) {
  Supplier.Searchbar.clear().type(dataJson.Search3)
  Supplier.Searchbutton.eq(0).click()
  cy.wait(2000)
  Supplier.Searchresult.eq(0).click()
  //Supplier.Gotoprogramsite.should('be.visible')
})

})

it('Advisor_Supplier_Database_TC010_To verify if user can open a preferred partner and book via program site', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 /* cy.Login();
// cy.viewport(390,844)

  Home.navbar.click()
  Supplier.supplier.click()
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  cy.wait(1000)
  cy.fixture('Advisor_Supplier_Database_TS003.json').then(function (dataJson) {
  Supplier.Searchbar.clear().type(dataJson.Search4 +'{enter}')
  cy.wait(2000)
  Supplier.Searchresult.click()
  cy.wait(2000)

  Supplier.Mailtext.scrollIntoView().should("be.visible")
 

  
  

})
})

it('Advisor_Supplier_Database_TC011_To verify if user can open a preferred partner and book directly with property', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  /*cy.Login();
  //cy.viewport(390,844)

  Home.navbar.click()
  Supplier.supplier.click()
  cy.wait(1000)
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  cy.fixture('Advisor_Supplier_Database_TS003.json').then(function (dataJson) {
      Supplier.Searchbar.clear().type(dataJson.Search5+ '{enter}')
  })
  cy.wait(2000)
  Supplier.Searchresult.click()

})

})