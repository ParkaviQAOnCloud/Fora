
//To validate Advisor_Events_UTC004 - CCheck filters on event page

import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_Events_UTC004', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
    cy.NotanadvisorclientLogin() 
    cy.viewport(1500,785) 
    cy.wait(2000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    //Assertion
    cy.url().should('include','https://advisor.forastaging.net/events')

    //Advisor_Events_UTC004 - Check filters on event page
    cy.wait(3000)
    Event.Filter.should('be.visible')
    Event.Filter.should('have.text', '3 Calendars')
    Event.Filter.click()
    

   
  
})
})
