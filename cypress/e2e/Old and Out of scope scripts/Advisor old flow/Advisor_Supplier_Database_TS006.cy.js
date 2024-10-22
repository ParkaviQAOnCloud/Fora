/* Description for TC023: "The goal of the test is to verify the following functionalities:
1.  Contents of the 'Cruises' page"	*/ 

/* Description for TC024: "The goal of the test is to verify the following functionalities:
1.  Contents of the Introduction section on the 'Cruises' page"					*/ 


/* Description for TC025: "The goal of the test is to verify the following functionalities:
1.  Contents of the Need to Know section on the 'Cruises' page"					*/ 


/* Description for TC026: "The goal of the test is to verify the following functionalities:
1.  Contents of the Resources section on the 'Cruises' page"					*/ 


/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/

import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS006',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Supplier_Database_TC023_To verify Cruises - Introduction', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        cy.BookingLogin();
      //  cy.viewport(390,844)
        cy.wait(2000)
        Home.navbar.click()
        Supplier.supplier.click()
        cy.wait(1000)
        Supplier.Nextbutton.click()
        Supplier.Gotosupplierdb.click()
        cy.wait(2000)
        Supplier.Cruises.click()
        Supplier.Cruisesheader.should('be.visible')
        Supplier.introduction.should('be.visible')
        Supplier.arrow.eq(0).click()
        Supplier.Needtoknow.should('be.visible')
        Supplier.arrow.eq(1).click()
        Supplier.arrow.eq(1).click()
        Supplier.Resources.should('be.visible')
        Supplier.arrow.eq(2).click()
        Supplier.arrow.eq(2).click()
        Supplier.Closedetailsbutton.click()
        Supplier.searchfield.should('be.visible')
    })
it('Advisor_Supplier_Database_TC024_To verify Cruises - Introduction', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

  /*  cy.BookingLogin();
   // cy.viewport(390,844)
    cy.wait(2000)
    Home.navbar.click()
    Supplier.supplier.click()
    cy.wait(1000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()*/
    cy.wait(2000)
    Supplier.Cruises.click()
    Supplier.Opendetailsbutton.click()
    Supplier.introduction.should('be.visible')
    Supplier.introductiontext1.should('be.visible')
    Supplier.arrow.eq(0).click()
    

})
it('Advisor_Supplier_Database_TC025 To verify Check Cruises  - Need to Know', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   // cy.viewport(390,844)
   /* cy.BookingLogin();
    Home.navbar.click()
    Supplier.supplier.click()
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()*/
    Supplier.Cruises.click()
    Supplier.Needtoknow.should('be.visible')
    cy.wait(2000)
    Supplier.arrow.eq(1).click()
    Supplier.Needtoknowtext1.should('be.visible')
    
})

it('Advisor_Supplier_Database_TC026 To verify Cruises - Resources', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
// cy.viewport(390,844)
 /* cy.BookingLogin();
  Home.navbar.click()
  Supplier.supplier.click({force: true})
  cy.wait(2000)
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  Supplier.Cruises.click()
 // cy.get('[id="scroll-container"]').scrollTo('top', { duration: 1000 });

  Supplier.Resources.scrollIntoView().should('be.visible')
  Supplier.arrow.eq(2).click()
  Supplier.howtobookbeyondlink.should('be.visible')
  Supplier.Voyageslink.should('be.visible')
  Supplier.arrow.eq(2).click()



  
})

it('Advisor_Supplier_Database_TC027_To verify if user can search Cruises ', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
// cy.viewport(390,844)
 /*cy.BookingLogin();
  cy.wait(2000)
  Home.navbar.click()
  Supplier.supplier.click({force: true})
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  Supplier.Cruises.click()
  cy.wait(2000) 
  cy.fixture('Advisor_Supplier_Database_TS005.json').then(function (dataJson) {

  Supplier.searchfield.type(dataJson.Search1+ '{enter}')
  Supplier.Searchbutton.eq(0).click()
 // Supplier.searchfield.type(dataJson.Search1+ '{enter}')
 // Supplier.Searchbutton.click()
  cy.get('[class="text-medium font-bold text-secondary break-words"]')
   
      .invoke('text')
      .then((text) => {
        cy.log('Search result:', text);
      });
      Supplier.searchfield.clear().type(dataJson.Search2+ '{enter}')
   Supplier.Searchbutton.eq(0).click()
   Supplier.searchmsg.scrollIntoView().should('be.visible')

  });
})
})
