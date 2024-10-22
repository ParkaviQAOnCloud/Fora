/* Description for TC001:	The goal of the test is to verify the following functionalities:
1. contents of Request Travel Review button */ 

/* Description for TC002:	"The goal of the test is to verify the following functionalities:
1. contents of Travel review button"				*/ 

/* Description for TC003:	"The goal of the test is to verify the following functionalities:
1. contents of 'Ask my client to review' section"							*/ 


/* Description for TC004:	"The goal of the test is to verify the following functionalities:
1. contents of 'Ask my client to review' section"							*/ 


/* Description for TC005:	"The goal of the test is to verify the following functionalities:
1. contents of 'Client email' section"								*/ 


/* Description for TC006:	"The goal of the test is to verify the following functionalities:
1. contents of 'personal message' section"										*/ 


/* Pre condition : Make sure that advisor has some bookings */ 

const { v4: uuidv4 } = require('uuid');
import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"
import Bookingclient from "../../support/Page Object/Advisor/Bookingclient"

describe('Advisor_Bookings_Travel Review_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })
    
  it('Advisor_Bookings_Travel Review_TC001_To verify the Request Travel Review button in bookings page', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
     // cy.BookingLogin()
    cy.NotanadvisortravelLogin()
//    cy.viewport(1500,785)
     //   Home.navbar.click()
     cy.viewport(1500,785)

        Bookings.booking.click()
        cy.wait(5000)
    
//Create a bookings using postman tool
  const bookingData = {
      "id":uuidv4(),
      "email_captured": "2023-12-01",
      "advisor": "automation1723433700305@forastaging.net",
      "arrival": "2023-12-11",
      "departure": "2023-12-12",
      "booking_category": "Hotel",
      "primary_guest_name": "Fora travel",
      "avg_gross_nightly_rate": 12,
      "fx_rate": 1.1234999,
      "rooms": 3,
      "booking_status": "Original",
      "total_commissionable_booking": 1900.24,
      "est_commission": 0.1,
      "resource_link": "https://fora.kustomerapp.com/app/customers/636ecafb3ee7ff7209b2014f/event/637afc19d3637b39d65b156d",
      "booking_channel": "Direct",
      "confirmation_num": "34277715",
      "hotel_brand": "brand",
      "hotel_group": "group",
      "supplier_id": "1aece09a-e51d-4548-bfc3-23d6d16abce2",
      "supplier": "Le Meridien Chicago - Oakbrook Center",
      "booking_currency": "USD",
      "hotel_contact": "no-reply@t1.hpe-esp.hyatt.com",
      "invoice_on_departure": "YES",
      "full_address": "full address",
      "country": "country",
      "state": "state",
      "city": "city",
      "zip_code": "zip_code",
      "primary_guest_email": "primaryguest@some.email",
      "client": null
  
}
    
    cy.createBooking(bookingData)
      .then((response) => {
    
        expect(response.status).to.be.oneOf([200, 201]); 
  
      
        expect(response.body.id).to.equal(bookingData.id); 
      })
      .should((response) => {
        
        if (response.status !== 200 && response.status !== 201) {
          console.error('Failed to create booking:', response);
          throw new Error(`Failed to create booking: Received status ${response.status}`);
        }
      });
     Bookings.searchbar.type('Fora travel{enter}')
      })
      
  it('Advisor_Bookings_Travel Review_TC00_To verify the ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })   
       // cy.viewport(1500,785)
 
          cy.fixture('Advisor_Bookings_change_client_TS001.json').then(function (dataJson) {
      Bookingclient.edit.eq(0).click()

      cy.get('button').should('be.visible').then(($buttons) => {
   
        const proceedButton = $buttons.filter(':contains("Proceed")');
     
        const changeClientButton = $buttons.filter(':contains("Change Client"):disabled');

        if (proceedButton.length > 0) {
       
          cy.wrap(proceedButton).click();

          Bookingclient.newclient.click();

        } else if (changeClientButton.length > 0) {
     
       Bookingclient.newclient.click();
          cy.wait(8000)
          const generateShortUniqueName = (length = 10) => {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
          };
          const Firstname1 = generateShortUniqueName()
          const Lastname1 = generateShortUniqueName();

          Bookingclient.Addclientbutton.invoke('show').click();
          Bookingclient.Newclientheader.should('be.visible');
          Bookingclient.Createclient.should('be.disabled');
          Bookingclient.firstname.click();
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.firstname.type(Firstname1);
          Bookingclient.lastname.click();
          Bookingclient.errormsg.should('be.visible');
          Bookingclient.lastname.type(Lastname1);
          Bookingclient.personalmail.type(dataJson.Personalemail);
          cy.wait(1000)
          Bookingclient.Createclient.should('be.enabled').click();

        } else {
       
          cy.log('No matching buttons found.');
        }
      });
    });

  })
    it('Advisor_Bookings_Travel Review_TC002 and TC004 and TC006_Bookings - To Check the Request a review modal, Ask my client to review section, Client email section and Add a personal message section', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
    cy.viewport(1500,785)

      cy.wait(6000)
   Bookings.Cancel.click()
       cy.wait(5000)
        const Link = 'a[href="https://advisor.fora.travel/help/articles/what-will-my-clients-see-when-i-send-a-review-request"]';
        cy.fixture('Advisor_Bookings_Travel Review_TS001.json').then(function (dataJson) {

        Bookingclient.Text.invoke('text').then((text) => {
          if (text.includes('Completed')) {
           Bookingclient.Hotel .should('be.visible').then(() => {
              Bookingclient.Travelreview.eq(0).scrollIntoView().should('be.visible')
                .then(($element) => {
                  const elementText = $element.text();
    
                  if (elementText.includes('Request Travel Review')) {
                    cy.get($element).contains('Request Travel Review').click({ force: true });
    
                    Bookingclient.Requetreviewtext.should('be.visible');
                    Bookingclient.subtext.should('be.visible');
                    Bookingclient.suppliercheckbox.should('be.checked');
                    Bookingclient.Traveladvisor.should('be.visible');
    
                    Bookingclient.Traveladvisorcheckbox.uncheck();
                    Bookingclient.Traveladvisorcheckbox.check();
                    Bookingclient.subtext.should('be.visible')
                    Bookingclient.Learnaboutclientlink.click()
                    cy.get(Link).should('have.attr', 'href').then((href) => {
                      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                        if (response.status !== 200) {
                          cy.log(`Broken link found: ${href}`);
                        }
                      });
                    });
          Bookingclient.Clientemail.should('be.visible')
         cy.get('.react-select__input-container').click()
          cy.wait(2000)
         
          
         Bookingclient.Selectemail.type(dataJson.Mail,{timeout:2000})
         cy.wait(8000)
          Bookingclient.result.invoke('show').click()
          Bookingclient.Addpersonalmsg.type(dataJson.Personalmsg)
          Bookingclient.savebutton.click()
          cy.wait(2000)
                  } else if (elementText.includes('Travel Review Requested')) {
                    cy.log('Travel Review Requested message found.');
                  } else {
                    cy.log('No review request button or message available.');
                  }
                });
            });
          } else if (text.includes('Booked')) {
            cy.log('No travel review available');
          } else if (text.includes('Completed')) {
       Bookingclient.Cruise.should('be.visible');
             Bookingclient.Travelreview.should('be.visible')
              .then(($element) => {
                const elementText = $element.text();
    
                if (elementText.includes('Request Travel Review')) {
                  cy.get($element).contains('Request Travel Review').click({ force: true });
    
                  Bookingclient.Requetreviewtext.should('be.visible');
                  Bookingclient.subtext.should('be.visible');
                  Bookingclient.suppliercheckbox.should('be.checked');
                  Bookingclient.Traveladvisor.should('be.visible');
    
                  Bookingclient.Traveladvisorcheckbox.uncheck();
              
                  Bookingclient.Traveladvisor.should('be.visible')
                  Bookingclient.Traveladvisorcheckbox.uncheck()
                  Bookingclient.Traveladvisorcheckbox.check()
                  Bookingclient.Learnaboutclientlink.click()

                  cy.get(Link).should('have.attr', 'href').then((href) => {
                    cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                      if (response.status !== 200) {
                        cy.log(`Broken link found: ${href}`);
                      }
                    });
                  });
        Bookingclient.Clientemail.should('be.visible')
        cy.wait(2000)
      
        
        
        Bookingclient.Selectemail.type(dataJson.Mail,{timeout:2000})
      //  Bookingclient.result.click()
        Bookingclient.Addpersonalmsg.type("Client")
        Bookingclient.savebutton.click()
        cy.wait(2000)
                } else if (elementText.includes('Travel Review Requested')) {
                  cy.log('Travel Review Requested message found.');
                } else {
                  cy.log('No review request button or message available.');
                }
              });
          }
        });
        })
 

  
})
it('Advisor_Bookings_Travel Review_TC005_Bookings - To Check Add email section', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
})
cy.viewport(1500,785)

    const bookingData = {
      "id":uuidv4(),
      "email_captured": "2023-12-01",
      "advisor": "automation1723433700305@forastaging.net",
      "arrival": "2023-12-11",
      "departure": "2023-12-12",
      "booking_category": "Hotel",
      "primary_guest_name": "Fora travel",
      "avg_gross_nightly_rate": 12,
      "fx_rate": 1.1234999,
      "rooms": 3,
      "booking_status": "Original",
      "total_commissionable_booking": 1900.24,
      "est_commission": 0.1,
      "resource_link": "https://fora.kustomerapp.com/app/customers/636ecafb3ee7ff7209b2014f/event/637afc19d3637b39d65b156d",
      "booking_channel": "Direct",
      "confirmation_num": "34277715",
      "hotel_brand": "brand",
      "hotel_group": "group",
      "supplier_id": "1aece09a-e51d-4548-bfc3-23d6d16abce2",
      "supplier": "Le Meridien Chicago - Oakbrook Center",
      "booking_currency": "USD",
      "hotel_contact": "no-reply@t1.hpe-esp.hyatt.com",
      "invoice_on_departure": "YES",
      "full_address": "full address",
      "country": "country",
      "state": "state",
      "city": "city",
      "zip_code": "zip_code",
      "primary_guest_email": "primaryguest@some.email",
      "client": null
}
    
    cy.createBooking(bookingData)
      .then((response) => {
    
        expect(response.status).to.be.oneOf([200, 201]); 
  
      
        expect(response.body.id).to.equal(bookingData.id); 
      })
      .should((response) => {
        
        if (response.status !== 200 && response.status !== 201) {
          console.error('Failed to create booking:', response);
          throw new Error(`Failed to create booking: Received status ${response.status}`);
        }
      });
     Bookings.searchbar.type('Fora travel{enter}')
        cy.wait(5000)
      
      cy.fixture('Advisor_Bookings_Travel Review_TS001.json').then(function (dataJson) {
    Bookingclient.Text.invoke('text').then((text) => {
      if (text.includes('Completed')) {
        Bookingclient.Hotel.should('be.visible').then(() => {
          Bookingclient.Travelreview.eq(0).scrollIntoView().should('be.visible').then(($element) => {
            const elementText = $element.text();

            if (elementText.includes('Request Travel Review')) {
              cy.get($element).contains('Request Travel Review').click({ force: true });

              Bookingclient.Requetreviewtext.should('be.visible');
              Bookingclient.subtext.should('be.visible');
              Bookingclient.suppliercheckbox.should('be.checked');
              Bookingclient.Traveladvisor.should('be.visible');

              Bookingclient.subtext.should('be.visible');

             

              Bookingclient.Clientemail.should('be.visible');
              cy.wait(2000);

              Bookingclient.Selectemail.click();
              cy.wait(2000);
              Bookingclient.Addemail.should('be.visible');
              cy.wait(2000)
              Bookingclient.Addemail.click();
              cy.wait(2000);

              Bookingclient.Workfield.type("trrrr");
              Bookingclient.Otherfield.click();
              Bookingclient.validemail.should('be.visible');

              Bookingclient.Workfield.clear().type("reenaz.fathima@forastaging.net");
              Bookingclient.Otherfield.type('reenaz');
              Bookingclient.validemail.should('be.visible');

              Bookingclient.Otherfield.clear().type('mythili.v@forastaging.net');
              Bookingclient.savebutton.click()
              Bookingclient.Selectemail.click()
              
          //Bookingclient.Personalemail1.should('be.visible')
          Bookingclient.Personalfieldvalue.invoke('text')
          .then((Personalfieldvalue) => {        
            cy.log('Personalfield:',Personalfieldvalue);
          
          })
          //Bookingclient.Workemail1.should('be.visible')
          Bookingclient.Workfieldvalue.invoke('text')
          .then((Workfieldvalue) => {        
            cy.log('Work Field:',Workfieldvalue);
          
          })
            }else if (elementText.includes('Travel Review Requested')) {
              cy.log('Travel Review Requested message found.');
            }
              else {
              cy.log('No review request button or message available.');
            }
          });
        });
      }
    });
 });
})

})


     










