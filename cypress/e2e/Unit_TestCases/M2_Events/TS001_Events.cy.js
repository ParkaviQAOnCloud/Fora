//To Validate Advisor_Events_UTC001 - Check Events tab  
//To Validate Advisor_Events_UTC002 - Check the events page
//To validate Advisor_Events_UTC003 - Check the date on events page

import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_Events_UTC001 & Advisor_Events_UTC002', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
   cy.NotanadvisorclientLogin() 
   //Advisor_Events_UTC001 - Verify the "Events" tab is available in the menu bar
    cy.viewport(1500,785) 
    cy.wait(2000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    //Assertion
    cy.url().should('include','https://advisor.forastaging.net/events')
    // By default the events page bottom should goto bottom of the page when event menu is clicked
    Event.Timeslot.should('contain.text', '11 AM');

    //Advisor_Events_UTC002, Advisor_Events_UTC003  - Check the evetns , Check the date on events page

    Event.Eventheader.should('be.visible')
cy.wait(2000)
Event.Today.should('be.visible')
Event.Filter.should('be.visible')
Event.Arrow.should('be.visible')
Event.Calander.should('be.visible')
Event.List.should('be.visible')
Event.Dateheader.should('be.visible')
Event.GMT.should('be.visible')
 









   
  
})
})
