/* Description for TC009: "The goal of the test is to verify the following functionalities:
1.  Contents of the invoice history data"				*/ 

/* Description for TC010: "The goal of the test is to verify the following functionalities:
1.  Contents of the download invoice"							*/ 

/* Description for TC012: "The goal of the test is to verify the following functionalities:
1.  Contents of returning to the Fora from subscription section"	*/ 




import Home from "../../support/Page Object/Advisor/Home"
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"
import Subscription from "../../support/Page Object/Advisor/Subscription"


describe('Advisor_Profile_Subscription_TS004',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Profile_Subscription_TC009_To verify invoice history data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
      //  cy.Login1();
      cy.NotanadvisorHomeLogin()
        Home.navbar.click()
        Foraprofile.Usersetting.click({force: true})
        
    cy.wait(2000)
        cy.window().then((win) => { //code to open tab in same window
            cy.stub(win, 'open', url => {
                 win.location.href = url;
             }).as("popup")
         })
         Foraprofile.Gotobillingportal.click() 
        
             cy.wait(5000)
         cy.get('@popup')
             .should("be.called")
             Subscription.invoicehistory.scrollIntoView().should('be.visible')
             Subscription.invoicehistoryfield.invoke('text')
             .then((invoicehistoryfield) => {        
               cy.log('invoice history field:\n',invoicehistoryfield);
        })
    })
   it('Advisor_Profile_Subscription_TC010_To verify if user can download invoice', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
       
   /*   cy.window().then((win) => { //code to open tab in same window
            cy.stub(win, 'open', url => {
                 win.location.href = url;
             }).as("popup")
         })*/
         Subscription.invoicedownlaod.eq(0).invoke('removeAttr', 'target').click()
       //cy.contains('Copy Link').should('be.visible')
        })


        it('Advisor_Profile_Subscription_TC012_To verify if user can return to Fora from subscription section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
            Subscription.Returntofora.click()
            cy.url().should('include', 'https://advisor.forastaging.net/settings');


        })    
    })
   
