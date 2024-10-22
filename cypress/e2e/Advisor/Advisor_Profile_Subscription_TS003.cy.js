/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of the delete payment method"				*/ 

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of the payment method to default"	*/ 

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of the default payment method can not be deleted"*/ 

import Home from "../../support/Page Object/Advisor/Home"
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"
import Subscription from "../../support/Page Object/Advisor/Subscription"


describe('Advisor_Profile_Subscription_TS003',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Profile_Subscription_TC005_To verify if user can delete payment method', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
       // cy.Login1();
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
        // Foraprofile.Gotobillingportal.click() 
        Subscription.Addpaymentmethod.click()
        Subscription.Addpaymentmethodheader.should('be.visible')
        cy.wait(5000)
       //cy.frameLoaded('[class="__PrivateStripeElement"]');     
      
          cy.fixture('Advisor_Profile_Subscription_TS002.json').then(function (dataJson) {
         cy.get('iframe')
           .then(($iframe) => {
             cy.wait(2000)
             const $body = $iframe.contents().find('body'); 
             cy.wrap($body).find('[placeholder="1234 1234 1234 1234"]').type( dataJson.Incorrectcardnumber1)
             cy.wait(2000)
         //   cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Space)
            //Onboarding.carderrormessage.should("be.visible")
            cy.wrap($body).find('[placeholder="1234 1234 1234 1234"]').clear().type(dataJson.Incorrectcardnumber2)
            cy.wrap($body).find('[placeholder="1234 1234 1234 1234"]').clear().type( dataJson.Incorrectcardnumber3)
          //  cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Space)
           //Onboarding.cardnumberincomplete.should("be.visible")
            cy.wrap($body).find('[placeholder="1234 1234 1234 1234"]').type(dataJson.Correctcardnumber)
          //  cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Space)
            cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Incorrectexpirynumber1)
            cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Incorrectexpirynumber1)
          //  cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Space)
           // Onboarding.cardexpirationerror.should("be.visible")
            cy.wrap($body).find('[placeholder="MM / YY"]').clear().type(dataJson.Correctexpirynumber)
           // cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Space)
            cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Incorrectcvc1)
            cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Incorrectcvc2)
            cy.wrap($body).find('[placeholder="MM / YY"]').click()
            //Onboarding.csvcarderror.should("be.visible")
            cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Correctcvc)
            cy.wrap($body).find("#Field-countryInput").select('ZW').should('have.value', 'ZW');
            cy.wrap($body).find("#Field-countryInput").select('IN').should('have.value', 'IN');

//cy.wrap($body).find('[data-auto-transform-content="true"]').click()           
 })
})
cy.get('[data-auto-transform-content="true"]').click()
             cy.wait(5000)
         cy.get('@popup')
             .should("be.called")
             Subscription.defaulttext.eq(0).trigger('mouseover');
             cy.wait(2000)
            Subscription.Defaulttag.should('be.visible').trigger('mouseover');
             Subscription.Actionbutton.eq(1).click()
             Subscription.Deletebutton.click()
           Subscription.Deleteheader.should('be.visible')
           Subscription.Deletetext.should('be.visible')
           Subscription.Deletepayment.should('be.visible')
       Subscription.Deletepayment.click()
             
           
             cy.wait(2000)
           
        })
        it('Advisor_Profile_Subscription_TC006_To verify if user can change a payment method to default', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          Subscription.Actionbutton.eq(1).click()
          Subscription.Defaultbutton.click()
        })
       

        it('Advisor_Profile_Subscription_TC007_To verify if user can not delete the default payment method', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          Subscription.defaulttext.eq(0).trigger('mouseover');
             cy.wait(2000)
         //    Subscription.Defaulttag.should('be.visible').trigger('mouseover');
        })
        it('Advisor_Profile_Subscription_TC008_To verify if a payment method expires', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
         
         Subscription.expirydate.invoke('text')
          .then((Expirydate) => {        
            cy.log('Expiry dates:',Expirydate);
        })
      })
      })