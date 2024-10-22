/* Description for TC018: "The goal of the test is to verify the following functionalities:
1. Contents of the preferred partner and book directly with property"*/ 

/* Description for TC019: "The goal of the test is to verify the following functionalities:
1.  Contents of the 'Introduction' in All-Inclusives Page"	*/ 

/* Description for TC020: "The goal of the test is to verify the following functionalities:
1.  Contents of the 'Need to know' in All-Inclusives Page" */ 

/* Description for TC021: "The goal of the test is to verify the following functionalities:
1.  Contents of the 'Resources' in All-Inclusives Page"	*/ 


/* Description for TC022: "The goal of the test is to verify the following functionalities:
1.  Contents of the 'Search' with 'All-Inclusives'"	*/ 

/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/

import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS005',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Supplier_Database_TC018 to Advisor_Supplier_Database_TC021 To verify All-Inclusives Page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.BookingLogin();
   // cy.viewport(390,844)
    cy.wait(2000)
    Home.navbar.click()
    Supplier.supplier.click()
    cy.wait(1000)
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()
    Supplier.Allexclusive.click()
    Supplier.introduction.should('be.visible')

    Supplier.Allexclusiveintroductiontext.should('be.visible')
    Supplier.arrow.eq(0).click()
    Supplier.Needtoknow.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.Allexclusiveneedtoknowtext.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.Resources.should('be.visible')
    Supplier.arrow.eq(2).click()
   Supplier.howtobookbeyond.should('be.visible')
   Supplier.clubmudsupplier.should('be.visible')
   Supplier.explorasuppliertraining.should('be.visible')
    Supplier.arrow.eq(2).click()
    Supplier.Closedetailsbutton.click()
})

it('Advisor_Supplier_Database_TC022 To verify if user can search All-Inclusives', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 /* cy.BookingLogin();
 
  cy.wait(2000)
 // cy.viewport(390,844)

  Home.navbar.click()
  Supplier.supplier.click()
  cy.wait(1000)
  Supplier.Nextbutton.click()
  Supplier.Gotosupplierdb.click()*/
  //Supplier.Allexclusive.click()
  //cy.wait(2000)
  cy.fixture('Advisor_Supplier_Database_TS005.json').then(function (dataJson) {
    cy.get('[id="scroll-container"]').scrollTo('center', { duration: 200 });
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
   Supplier.searchmsg.should('be.visible')

  });
  
  
})
})
