


/*Description of TC001 : "The goal of the test is to verify the following functionalities:
1.  Check if user can access Fora Forum via Fora.Travel email"	*/



import Home from "../../support/Page Object/Advisor/Home"
import Forum from "../../support/Page Object/Advisor/Forum"

describe('Advisor_Forum_TS001',{ testIsolation: false }, function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
      it('Advisor_Fora Forum_TC001_To verify if user can access Fora Forum via Fora.Travel email',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
     //   cy.Login1()
     cy.NotanadvisorLogin()
        Home.navbar.click()
        Forum.Forum.invoke('removeAttr', 'target').click()
        

    })

})