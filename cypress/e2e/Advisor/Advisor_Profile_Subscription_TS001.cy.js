/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of the subscription home page"				*/ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of the user can update the plan"*/ 

/*Pre condition: make sure that subscription page link is not expired*/

import Home from "../../support/Page Object/Advisor/Home"
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"
import Subscription from "../../support/Page Object/Advisor/Subscription"


describe('Advisor_Profile_Subscription_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Profile_Subscription_TC001_To verify subscription Home page', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
     //   cy.Login1();
     cy.NotanadvisorHomeLogin()
        Home.navbar.click()
        Foraprofile.Usersetting.click()
        //Foraprofile.Gotobillingportal.click() 
   // cy.get('.ButtonLink-label > span').click()
    cy.wait(2000)
        cy.window().then((win) => { //code to open tab in same window
            cy.stub(win, 'open', url => {
                 win.location.href = url;
             }).as("popup")
         })
         Foraprofile.Gotobillingportal.scrollIntoView().click() 
        
             cy.wait(5000)
         cy.get('@popup')
             .should("be.called")
             
                    
        
        Subscription.Testmode.should('be.visible')
        Subscription.Currantplan.should('be.visible')
        Subscription.Currantplansec.eq(0).invoke('text')
        .then((Currantplansection) => {        
          cy.log('Currantplan:',Currantplansection);
        })
        Subscription.Currantplansec.eq(1).invoke('text')
        .then((Currantplansection) => {        
          cy.log('Currantplan:',Currantplansection);
        })
        Subscription.Currantplansec.eq(2).invoke('text')
        .then((Currantplansection) => {        
          cy.log('Currantplan:',Currantplansection);
        })
        Subscription.Currantplansec.eq(3).invoke('text')
        .then((Currantplansection) => {        
          cy.log('Currantplan:',Currantplansection);
        })
        Subscription.Currantplansec.eq(4).invoke('text')
        .then((Currantplansection) => {        
          cy.log('Currantplan:',Currantplansection);
        })

    })
    it('Advisor_Profile_Subscription_TC002_To verify if user can update plan', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });

       Subscription.Text.invoke('text').then((text) => {
          if (text.includes('2023 Quarterly Plan')) {
            cy.contains('Update plan').click()

          
          } else if (text.includes('Annual')) {
            Subscription.Annualplanheader.should('be.visible')
       // Subscription.Yearlyplan.should('be.visible')
       cy.contains('Update plan').click()
        Subscription.Selected.should('be.visible')
        Subscription.Amount.should('be.visible')
        Subscription.selectedcolumn.should('be.visible')
        Subscription.Continue.should('not.have.attr', 'disabled')
        Subscription.Every3month.click()
        Subscription.Select.click()
        Subscription.Continue.should('be.visible')
        Subscription.Continue.click()
        Subscription.Plan.should('be.visible')
        Subscription.Plandetails.invoke('text')
        .then((Plandetails) => {        
          cy.log('Plandetails:',Plandetails);
          Subscription.Backbutton.click()
          Subscription.Every3month.click()
          Subscription.Select.click()
          Subscription.Continue.click()
          Subscription.Viewdetails.click()
          Subscription.Confirmbutton.click()
          
        })
      }
        });
        
      })
        })
    

