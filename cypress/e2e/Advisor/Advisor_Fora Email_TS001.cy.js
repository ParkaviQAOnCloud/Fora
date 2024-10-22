/* Description TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of the Fora Email  */

import Home from "../../support/Page Object/Advisor/Home"
import Foraemail from "../../support/Page Object/Advisor/Foraemail"

describe('Advisor_Fora Email_TS001', { testIsolation: false },function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
   it('Advisor_Fora Email_TC001_To verify if user can access Fora Email',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      //  cy.Login1()
      cy.NotanadvisorLogin()
        Home.navbar.click()
        Foraemail.Foraemail.invoke('removeAttr', 'target').click()
      
        //cy.url().should('include', 'https://accounts.google.com');// Replace with your expected origin

       /*cy.origin('https://accounts.google.com', () => {//check if user is navigating to the user's personal email address, to draft an email.
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        }) 
    })*/
   })
})






