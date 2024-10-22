/* Description TC024: "The goal of the test is to verify the following functionalities:
1. Contents of reporting duplicate to an existing booking"*/


import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"
const { v4: uuidv4 } = require('uuid');


describe('Advisor_Booking_TS007',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Advisor_Booking_TC024_To verify  if user can report duplicate to an existing booking--- Here we are clicking on the Report duplicate button to report any duplicate bookings available', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

  // cy.Login1();
  cy.NotanadvisorLogin()
    cy.fixture('Advisor_Booking_TS007.json').then(function (dataJson) {
      const bookingData = {
        "id":uuidv4(),
        "email_captured": "2023-12-01",
        "advisor": "automation1721627564434@forastaging.net",
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
    Home.navbar.click();
    Bookings.booking.click();
    Bookings.Managebookinglink.click()
    Bookings.Reportduplicate.click()
    Bookings.Notereportduplicate.type(dataJson.Duplicatereason)
   Bookings.yesduplicatebutton.click()
   Bookings.goit.click()
    Bookings.Managebookinglink.click()
    Bookings.Reportduplicate.click()
    Bookings.goback.click()
    Bookings.Reportduplicate.click()

    Bookings.canceliconduplicate.click()

    })

})


})