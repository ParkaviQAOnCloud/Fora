/* Description TC003: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Onboarding Session step"					*/

/* Description TC004: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Tools & Resources step"				*/

/* Description TC005: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Enroll in training step"				*/

/* Description TC006: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Get Booking step"				*/

/*Booking id should be unique*/

import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"
describe('Advisor_Home Onboarding_TS002',{ testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
      
    })
  })
it('Advisor_Home Onboarding_TC003_To verify the Onboarding Session step in getting started section ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
        
      })
      cy.HomeLogin()
     // Home.navbar.click()
    //Home.home.click()
    cy.wait(2000)
    //Home.cancel.click()
    //cy.wait(2000)
    cy.get('.pb-0 > :nth-child(1)').click()
Home.Welcomevideo.should('be.visible') 
    Home.Secondstep.click()
    cy.wait(2000)
    Home.Onboardingsessionheader.should('be.visible') 
    Home.Onboardingsessiontext.should('be.visible') 
    Home.Onboardingsessiontext1.should('be.visible') 
    Home.Back.click()
    Home.Secondstep.click()
    Home.Onboardingsession.should('be.visible') 
    Home.skipfornow.click()
   
  
    })

    it('Advisor_Home Onboarding_TC004_To verify the Tools & Resources step in getting started section', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
Home.Toolandresource.should('be.visible')
          Home.toolsandresource.should('be.visible')
          Home.thirdstepprogressbar.should('be.visible')
          Home.Forumheader.should('be.visible')
          Home.Forumtext.should('be.visible')
          Home.forumarrow.click()
          cy.wait(2000)
          cy.get('img[alt="Forum Walkthrough"]')
          .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fassets.forastaging.net%2Fonboarding%2Fresources_example_forum.jpg&w=3840&q=75')
          .should('have.attr', 'decoding', 'async')
          .should('have.attr', 'data-nimg', 'fill')
          .should('have.class', 'object-contain')
          .should('have.class', 'mx-auto')
          .should('have.attr', 'loading', 'lazy')
          .should('have.css', 'position', 'absolute')
          .should('have.css', 'height', '100%')
          .should('have.css', 'width', '100%')
          .should('have.css', 'inset', '0px')
       
          cy.wait(2000)
          Home.forumarrow.click()
         
          Home.foraimage.should('be.visible')
          Home.Foraemailheader.should('be.visible')
          Home.Foraemailtext.should('be.visible')
          Home.foraemailarrow.click()
cy.wait(2000)
          Home.foraemailimage.should('be.visible')
          cy.get('img[alt="Fora Email Walkthrough"]')
          .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fassets.forastaging.net%2Fonboarding%2Fresources_example_fora_email.jpg&w=3840&q=75')
          .should('have.attr', 'decoding', 'async')
          .should('have.attr', 'data-nimg', 'fill')
          .should('have.class', 'object-contain')
          .should('have.class', 'mx-auto')
          .should('have.attr', 'loading', 'lazy')
          cy.wait(1000)
       

          Home.Bookingsheader.should('be.visible')
          Home.Bookingstext.should('be.visible')
          Home.bookingsarrow.click()
          Home.bookingimage.should('be.visible')
          cy.get('img[alt="Bookings Walkthrough"]')
          .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fassets.forastaging.net%2Fonboarding%2Fresources_example_bookings.jpg&w=3840&q=75')
          .should('have.attr', 'decoding', 'async')
          .should('have.attr', 'data-nimg', 'fill')
          cy.wait(1000) 
          Home.Partnersheader.should('be.visible')
          Home.Partnerstext.should('be.visible')
          Home.supplierarrow.click()
          Home.supplierimage.should('be.visible')
          cy.get('img[alt="Supplier Database Walkthrough"]')
          .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fassets.forastaging.net%2Fonboarding%2Fresources_example_partners.jpg&w=3840&q=75')
          .should('have.attr', 'decoding', 'async')
          .should('have.attr', 'data-nimg', 'fill')
          
      
          Home.Back.click()
          cy.wait(2000)

          Home.Thirdstep.click()
     Home.toolsandresource.should('be.visible')
          Home.nextbutton.click()
      //    Home.cohortheader.should('be.visible')
    
        })
        
   /* it('Advisor_Home Onboarding_TC005_To verify the Enroll in training step in getting started section', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })


          cy.get('body').find('label:visible, p:visible').then(($element) => {
            if ($element.length > 0) {
              if ($element.is('label')) {
               
                $element.click();
                Home.nextbutton.click();
              } else if ($element.is('p') && $element.text().includes('Edit training selection')) {
                cy.wait(2000)
                // Click on the "Edit training selection" paragraph
                $element.click();
          
                // Additional actions for the "Edit training selection" case
               // Home.edittraining.click();
                Home.cohortsubheader.should('be.visible');
                Home.cohortsubheader1.should('be.visible');
                Home.image.should('be.visible');
                // Add more actions as needed
          
                // Example: Clicking the "Next" button
                Home.nextbutton.click();
                cy.wait(8000); // Adding a wait for demonstration purposes
              }
            } else {
              // Handle the case where neither element is found or visible
              cy.log('Neither Opt Out label nor Edit training selection found or visible');
            }
          });
          
          });*/
          

          it('Advisor_Home Onboarding_TC006_To verify the Get Booking step in getting started section', function() {
            cy.on('uncaught:exception', (err,runnable) => { 
                return false
                
              })
              Home.Getbookings.should('be.visible')
              Home.stepone.should('be.visible')
            //  Home.viewgmail.click({force: true}, { timeout: 30000 })
            Home.steptwo.should('be.visible') 
            Home.steptwotext.should('be.visible') 
            Home.steptwotext1.should('be.visible') 
              Home.stepthree.should('be.visible') 
              Home.stepthreetext.should('be.visible') 
              Home.stepthreetext1.should('be.visible') 
              /*Home.viewpreferredpartner.click()
              cy.wait(2000)
              Home.nextbuttoninsd.click()
              Home.gotosupplierdatabase.click()
              Home.navbar.click()
            Home.home.click()*/
         /*   Home.stepfour.should('be.visible') 
            Home.stepfourtext.should('be.visible') 
            Home.stepfourtext1.should('be.visible') 
            Home.IATAnumberheader.scrollIntoView().should('be.visible') 
            cy.wait(2000)
            Home.copyIATA.click()
            Home.stepfive.should('be.visible')
            Home.stepfivetext.should('be.visible')
            Home.stepfivetext1.should('be.visible')
            Home.lockyourcommission.should('be.visible') 
            Home.commissionemail.click()*/
         Home.viewfirstbookingbutton.trigger('mouseover');
          const bookingData = {
            
    id :"c69fe54a-9191-2852-d0be-3061012cf834",
    email_captured: "2023-12-23",
    advisor: "automation1698898139229@forastaging.net",
    arrival: "2023-12-24",
    departure: "2023-12-26",
    booking_category: "Hotel",
    primary_guest_name: "Home booking ",
    avg_gross_nightly_rate: 12,
    fx_rate: 1.1234999,
    rooms: 3,
    booking_status: "Original",
    total_commissionable_booking: 1900.24,
    est_commission: 0.1,
    resource_link: "https://fora.kustomerapp.com/app/customers/636ecafb3ee7ff7209b2014f/event/637afc19d3637b39d65b156d",
    booking_channel: "Direct",
    confirmation_num: "34277715",
    hotel_brand: "brand",
    hotel_group: "group",
    supplier_id: "1aece09a-e51d-4548-bfc3-23d6d16abce2",
    supplier: "Le Meridien Chicago - Oakbrook Center",
    booking_currency: "USD",
    hotel_contact: "no-reply@t1.hpe-esp.hyatt.com",
    invoice_on_departure: "YES",
    full_address: "full address",
    country: "country",
    state: "state",
    city: "city",
    zip_code: "zip_code",
    primary_guest_email: "primaryguest@some.email",
    client: null
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
            cy.get('body').then(($body) => {
              if ($body.find('button:contains("View these bookings")').is(':visible')) {
               
                cy.get('button:contains("View these bookings")').click();
              } else {
              
                cy.get('a:contains("View these bookings")').should('be.visible').click();
              }
            })
            cy.wait(5000)
            Bookings.Dates.eq(0).click({force: true})
        
            Bookings.clear.click()
            Bookings.Bookingstatus.eq(0).click()
        cy.wait(1000)
        Bookings.clear.click()
        Bookings.searchbar.type("Home booking 8{enter}")
        cy.wait(2000)

            })

        })
      

