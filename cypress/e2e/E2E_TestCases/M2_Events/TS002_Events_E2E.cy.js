//To Validate Advisor_Events_E2E002 - Verify user can apply filters



import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_Events_E2E002 - Verify user can apply filters', () => {
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
    Event.Filter.should('be.visible').click()
    Event.Generaltraining.should('be.visible')
    Event.Livesupport.should('be.visible')
    Event.certifiedtraining.should('be.visible')
    //Un check anyone/multiple training checkbox and validate colors
    //Un check general traing
    Event.Checkbox.eq(0).click()
  Event.Reset.should('be.enabled')
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
Event.NewEvent.find('div.absolute') .should('have.css', 'background-color', 'rgb(51, 126, 83)')
Event.Filtercancelbutton.click()
cy.wait(2000)
Event.Filter.click()
//Un check live support
Event.Checkbox.eq(1).click()
Event.Applybutton.should('be.visible').click()
Event.NewEvent.find('div.absolute') .should('have.css', 'background-color', 'rgb(66, 58, 49)')
cy.wait(2000)
//Un check certified training
Event.Filtercancelbutton.click()
cy.wait(2000)
Event.Filter.click()
Event.Checkbox.eq(2).click()
Event.Applybutton.should('be.visible').click()
Event.NewEvent.find('div.absolute') .should('have.css', 'background-color', 'rgb(51, 126, 83)')






  

  })
})



