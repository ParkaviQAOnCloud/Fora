//To Validate Advisor_Events_E2E001 - Verify users can navigate between weeks using the left and right arrow buttons


import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Verify users can navigate between weeks using the left and right arrow buttons', () => {
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
  //Click the left arrow button ("<") 
    Event.Arrow.eq(0).click()
    //Assertion
//If we click the left arrow it shows past week so today date[along with black color] not appear, 
Event.todaydate_BackgroundColor.should('not.exist')
//Click the right arrow button (">")
Event.Arrow.eq(1).click()
//Today date should be visible
Event.todaydate_BackgroundColor.should('be.visible')
//If again we click the right arrow today date should not visible
Event.Arrow.eq(1).click()
Event.todaydate_BackgroundColor.should('not.exist')

  })
})



