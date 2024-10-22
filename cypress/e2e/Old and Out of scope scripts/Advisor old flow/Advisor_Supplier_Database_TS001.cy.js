/*Pre condition :  Enables booking platform (browse milestone) feature toggle button should be disabled*/


/* Description For TC001: "The goal of the test is to verify the following functionalities:
1. Contents of welcome screen"*/ 


import Home from "../../support/Page Object/Advisor/Home"
import Supplier from "../../support/Page Object/Advisor/Supplierdatabase"


describe('Advisor_Supplier_Database_TS001', function() {


it('Advisor_Supplier_Database_TS001_To verify Supplier Database home page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  //cy.viewport(390,844)
    cy.Login();
  
    Home.navbar.click()
    Supplier.supplier.click({force: true})
    Supplier.Nextbutton.click()
    Supplier.Gotosupplierdb.click()
    Supplier.Hoteslandperks.should('be.visible')
    Supplier.Allexclusive.should('be.visible')
    Supplier.Cruises.should('be.visible')
    Supplier.Dmcs.should('be.visible')
    Supplier.Homesandvillas.should('be.visible')
    cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
    Supplier.Toursandactivity.should('be.visible')
    Supplier.Transportation.should('be.visible')
    Supplier.Preferredpartner.should('be.visible')
    Supplier.introduction.should('be.visible')
    Supplier.arrow.eq(0).click()
    Supplier.Needtoknow.should('be.visible')
    Supplier.arrow.eq(1).click()
    Supplier.arrow.eq(1).click()
    Supplier.Resources.should('be.visible')
    Supplier.arrow.eq(2).click()
    Supplier.arrow.eq(2).click()
    Supplier.Closedetailsbutton.click()
    Supplier.Searchbar.should('be.visible')
    

    
})
})