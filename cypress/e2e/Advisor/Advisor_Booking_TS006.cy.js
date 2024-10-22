import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking";
const { v4: uuidv4 } = require('uuid');

describe('Advisor_Booking_TS006', { testIsolation: false }, function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData);
    });

    it('Advisor_Booking_TC020_To verify the Manage booking link', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.NotanadvisorLogin();
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
        Bookings.Managebookinglink.click();
        Bookings.commissionfromlink.should("be.visible");
        Bookings.Managebooking.should("be.visible");
        Bookings.Cancelbookingtitle.should("be.visible");
        Bookings.Reportincorrectdatatitle.should("be.visible");
        Bookings.Duplicatebookingtitle.should("be.visible");
        Bookings.Otherissuetitle.scrollIntoView().should("be.visible");
    });

    it('Advisor_Booking_TC021_To verify if user can modify an existing booking', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        Bookings.Modifybooking.should("be.visible");
        Bookings.Modifybookingtext.should("be.visible");
        Bookings.commissionfromlink.should("be.visible");
    });

    it('Advisor_Booking_TC022_To verify if user can cancel an existing booking', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.fixture('Advisor_Booking_TS006.json').then(function(dataJson) {
            Bookings.Cancelbookingtitle.should("be.visible");
            Bookings.Cancelbookingtext.should("be.visible");
            Bookings.Reportcancellation.click();
            Bookings.ReportBooking.should("be.visible");
            Bookings.ReportBookingtext.should("be.visible");
            Bookings.advisorradiobutton.click();
            Bookings.goback.click();
            Bookings.Reportcancellation.click();
            Bookings.test.click();
            Bookings.submit.click({force: true});
            Bookings.goit.click();
            cy.wait(2000)
            Bookings.Canceledstatus.eq(0).scrollIntoView().should("be.visible");
            Bookings.Managebookinglink.click();
            Bookings.Reportcancellation.click();
            Bookings.advisorradiobutton.click();
            Bookings.comment.type(dataJson.Cancelationreason);
            Bookings.submit.click({force: true});
            Bookings.cancelicon.click();
        });
    });

    it('Advisor_Booking_TC023_To verify if user can report incorrect data to an existing booking', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.fixture('Advisor_Booking_TS006.json').then(function(dataJson) {
            Bookings.Managebookinglink.click();
            Bookings.Reportincorrectdata.click();
            Bookings.arrival.click();
            cy.xpath("//form[@action='#']//div//div//div//div//div[@aria-label='Choose Date']//div//div[@aria-label='Month September, 2024']//div//div[@aria-label='Choose Sunday, September 29th, 2024'][normalize-space()='29']").click()
           
            Bookings.departure.click();
            cy.xpath("//form[@action='#']//div//div//div//div//div[@aria-label='Choose Date']//div//div[@aria-label='Month September, 2024']//div//div[@aria-label='Choose Monday, September 30th, 2024'][normalize-space()='30']").click();
                        Bookings.Guestname.type(dataJson.Guestname);
            Bookings.Correctconfirmationnumber.type(dataJson.Confirmationnumber);
            Bookings.Correctsupplier.type(dataJson.Supplier);
            Bookings.Correctdmc.eq(6).click();
            Bookings.homebooking.click();
            Bookings.totalcommissionrate.type(dataJson.Commissionrate);
            Bookings.totalcommissionvalue.type(dataJson.Commissionvalue);
            Bookings.Note.type(dataJson.Note);
            Bookings.submitreport.click();
            Bookings.goit.click();
            Bookings.Managebookinglink.click();
            Bookings.Reportincorrectdata.click();
            Bookings.goback.click();
        });
    });
});
