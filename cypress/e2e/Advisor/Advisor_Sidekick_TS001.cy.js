
import Home from "../../support/Page Object/Advisor/Home"
import Sidekick from "../../support/Page Object/Advisor/Sidekick"


describe('Advisor_Sidekick_TS001',{ testIsolation: false }, function() {
    before(() => {
      
    cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
   cy.clearAllLocalStorage()
    })
  
    it('Advisor_Sidekick_TC001 _To verify the Sidekick page', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })  
      cy.NotanadvisorHomeLogin() 
      Home.navbar.click()
Sidekick.Sidekick.click()
Sidekick.Sidekickheader.should('be.visible')
///cy.url().should('include', 'https://advisor.forastaging.net/sidekick/new')
Sidekick.Questionmark.should('be.visible')
Sidekick.Reversebutton.should('be.visible')
Sidekick.Newbutton.should('be.visible').click()
Sidekick.textbox.should('be.visible')
Sidekick.Predefinedquestion.eq(0).click()
Sidekick.Predefinedquestiontext.should('be.visible')
//Sidekick.Buttondisableed.should('be.visible')
//Sidekick.textbox.type('Can you earn commission on trips booked for yourself?')
Sidekick.textbox.type('gg')

cy.wait(2000)
Sidekick.Buttonenabled.should('be.visible').click()
Sidekick.Sidekicktext.should('be.visible')
Sidekick.Reversebutton.click()
Sidekick.sidekickreversenewchat.click()
Sidekick.Reversebutton.click()
Sidekick.closebutton.click()
cy.wait(2000)
Sidekick.Questionmark.should('be.visible').click()
    })


    
    
})