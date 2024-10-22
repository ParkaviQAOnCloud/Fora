
//To validate Advisor_Events_UTC007 - Check filters on event page
//To Validate Advisor_Events_UTC008 - Check all the fields on events page in List view


import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('validate Advisor_Events_UTC004, Advisor_Events_UTC005, Advisor_Events_UTC006 ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
    cy.NotanadvisorclientLogin() 
    cy.viewport(1500,785) 
    cy.wait(4000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    //Assertion
    cy.url().should('include','https://advisor.forastaging.net/events')

    //To validate Advisor_Events_UTC007 - Check filters on event page
/*************** Checking Automation Feasibility ************** */ 

//Advisor_Events_UTC008 - Check all the fields on events page in List view

Event.List.click()
cy.wait(1000)
Event.Arrow.eq(0).click()
///Event.Arrow.eq(0).click()
///Event.Arrow.eq(0).click()
cy.wait(2000)
Event.Pastevent.should('be.visible')
Event.Filter.click()

Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(2000)
Event.certifiedtrainingresult.should('be.visible')
Event.Filtercancelbutton.click()
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(2).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(2000)
Event.Livesupportlistresult.should('be.visible')
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(1000)
Event.Generaltraininglistresult.should('be.visible')


  
})
})
