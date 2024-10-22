/* Description TC010 : "The goal of the test is to verify the following functionalities:
1. contents of the upload profile"										*/ 




/*Pre condition : Enabled new Getting Started Onboarding Flow toggle should be off*/



import Home from "../../support/Page Object/Advisor/Home"


describe('Advisor_Home_TS002',{ testIsolation: false }, function() {
    
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
    })
    it('Advisor_Home_TC010_To verify the Quick links section of the home page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          cy.HomeLogin()
          
          cy.window().then((win) => { //code to open tab in same window
            cy.stub(win, 'open', url => {
                 win.location.href = url;
             }).as("popup")
         })      
          
         Home.createforaprofileaction.click()
           cy.origin('https://foratravel.typeform.com', () => { 
                     cy.on('window:before:load', (win) => {
           ;})
        
                     })
})