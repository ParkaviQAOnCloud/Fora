//To validate Advisor_Events_E2E003 - Verify the 'Calendar' and 'List' toggle buttons
//To validate Advisor_Events_E2E004 - Verify GMT timezone
import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_Events_E2E003, Advisor_Events_E2E004 ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
   cy.NotanadvisorLogin() 
    cy.viewport(1500,785) 
    cy.wait(2000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    cy.wait(5000)

Event.Filter.should('be.visible')
//Click on the 'List' button to change the view
Event.List.click()
//The view should change from a calendar layout to a list layout of events and GMT lable should not be exist
Event.GMT.should('not.exist')
Event.List_Events.eq(0).should('be.visible')
Event.List_Events.eq(1).should('be.visible')
//Click on the 'Calendar' button 
Event.Calander.click()
//It should return to the default calendar view
Event.GMT.should('be.visible')

//Advisor_Events_E2E004 - Verify GMT timezone





  })
})