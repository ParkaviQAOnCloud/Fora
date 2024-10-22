/* Description for TC001:	"The goal of the test is to verify the following functionalities:
1.  Contents of Bookings Page edit client option"				*/ 

/* Description for TC002:"The goal of the test is to verify the following functionalities:
1.  Contents of Change Client popup window"								*/ 

/* Description for TC003:	"The goal of the test is to verify the following functionalities:
1.  Contents of New Client popup window and adding new client"									*/ 


/* Description for TC004:	"The goal of the test is to verify the following functionalities:
1.  Contents of change the client"								*/ 

import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking";
import Bookingclient from "../../support/Page Object/Advisor/Bookingclient";

describe('Advisor_Bookings_change client_TS001', { testIsolation: false }, function() {
  before(() => {
    // Ensure a clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData);
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.clearAllLocalStorage();
  });

  it('Advisor_Bookings_change client_TC001- To verify the edit client option in Bookings module.- to validate if user is able to change client using edit option in client name ', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //cy.Login1();
  cy.NotanadvisorLogin()
    Home.navbar.click();
    Bookings.booking.click();
    cy.wait(5000);
    

    cy.fixture('Advisor_Bookings_change_client_TS001.json').then(function (dataJson) {
      Bookingclient.edit.then(($elements) => {

        const numElements = $elements.length;

        const randomIndex = Math.floor(Math.random() * numElements);

        cy.wrap($elements[randomIndex]).click({force: true});
      });

      cy.get('button').should('be.visible').then(($buttons) => {
   
        const proceedButton = $buttons.filter(':contains("Proceed")');
     
        const changeClientButton = $buttons.filter(':contains("Change Client"):disabled');

        if (proceedButton.length > 0) {
       
          cy.wrap(proceedButton).click();
          Bookingclient.newclient.click();
          Bookingclient.Addclientbutton.invoke('show').click();
          Bookingclient.Newclientheader.should('be.visible');
          Bookingclient.Createclient.should('be.disabled');
          Bookingclient.firstname.click();
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.firstname.type(dataJson.Firstname);
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.lastname.type(dataJson.Lastname);
          Bookingclient.personalmail.type(dataJson.Personalemail);
          Bookingclient.Createclient.should('be.enabled').click();
        } else if (changeClientButton.length > 0) {
     
         

      
          Bookingclient.newclient.click();
          Bookingclient.Addclientbutton.invoke('show').click();
          Bookingclient.Newclientheader.should('be.visible');
          Bookingclient.Createclient.should('be.disabled');
          Bookingclient.firstname.click();
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.firstname.type(dataJson.Firstname);
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.lastname.type(dataJson.Lastname);
          Bookingclient.personalmail.type(dataJson.Personalemail);
          Bookingclient.Createclient.should('be.enabled').click();
        } else {
       
          cy.log('No matching buttons found.');
        }
      });
    });
  });
});
