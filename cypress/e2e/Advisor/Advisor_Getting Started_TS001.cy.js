import Gettingstarted from '../../support/Page Object/Advisor/Gettingstarted'
import Gesttingstarted from '../../support/Page Object/Advisor/Gettingstarted'
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"

import Onboarding from "../../support/Page Object/Advisor/Onboarding";

const { v4: uuidv4 } = require('uuid');
let userData = {};

describe('Advisor_Getting started_TS001',{ testIsolation: false }, function() {
    before(() => {
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
   cy.clearAllLocalStorage()
    })
      
    it('Advisor_Getting started_TC001 to TC003 and TC005 to TC006_To verify the To check Get started page URL and menu bar', () => {
          cy.on('uncaught:exception', (err,runnable) => { 
              return false
          })   
        const timestamp = Date.now();
          const uniqueString = `user${timestamp}`;
          const userData = {
              personal_email: `reenaz+${uniqueString}@team845771.testinator.com`,
              first_name: `reenaz${timestamp}`,
              last_name: `fathima${timestamp}`
          };
  
          // Define the API endpoint for Fora
        const apiEndpoint = 'https://api.forastaging.net/v1/invites/restricted/';
  
          // Authentication token for Fora API (replace with your actual token)
          const authToken = '50eedfb8-3464-4017-8655-272de84ce154';
  
          // Variables to store email and link details
          let emailId;
          let firstLink;
  
          // Make the POST request to create the user
          cy.request({
              method: 'POST',
              url: apiEndpoint,
              body: userData,
              headers: {
                  'XAPIKEY': authToken,
                  'Content-Type': 'application/json'
              },
          }).then((response) => {
              // Assert the status code
              expect(response.status).to.eq(200);
  
              // Assert the response body
              expect(response.body).to.have.property('personal_email', userData.personal_email);
              expect(response.body).to.have.property('first_name', userData.first_name);
              expect(response.body).to.have.property('last_name', userData.last_name);
  
              // Wait briefly before fetching the email from Mailinator
              cy.wait(6000); // Adjust timing as needed
  
              // After successful creation, fetch the email from Mailinator
              const mailinatorApiKey = 'c3cf21ca3af74c6e9bb2b4ddad592e5b';
              const mailinatorInboxUrl = `https://mailinator.com/api/v2/domains/private/inboxes/reenaz+${uniqueString}`;
  
              cy.request({
                  method: 'GET',
                  url: mailinatorInboxUrl,
                  headers: {
                      'Authorization': mailinatorApiKey,
                      'Content-Type': 'application/json'
                  }
              }).then((inboxResponse) => {
                  expect(inboxResponse.status).to.eq(200);
                  expect(inboxResponse.body).to.have.property('msgs').that.is.an('array');
                  cy.wait(5000)

                  // Find the latest email by sorting by received time (assuming 'createdAt' field exists)
                  const messages = inboxResponse.body.msgs;
                  messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by descending 'createdAt'
  cy.wait(5000)
                  // Ensure there is at least one email
                  expect(messages.length).to.be.greaterThan(0);
  
                  // Fetch the latest email's ID and subject
                  const latestEmail = messages[0];
                  expect(latestEmail).to.exist;
                  expect(latestEmail.subject).to.include('Welcome to Fora!');
  
                  // Fetch links for the specific email
                  const emailId = latestEmail.id;
                  const linksUrl = `https://mailinator.com/api/v2/domains/private/inboxes/reenaz+${uniqueString}/messages/${emailId}/links`;
  
                  cy.request({
                      method: 'GET',
                      url: linksUrl,
                      headers: {
                          'Authorization': mailinatorApiKey,
                          'Content-Type': 'application/json'
                      }
                  }).then((linksResponse) => {
                      expect(linksResponse.status).to.eq(200);
                      expect(linksResponse.body).to.have.property('links').that.is.an('array');
                      cy.wait(5000); // Adjust timing as needed

                      // Assert and log the links found in the email
                      const links = linksResponse.body.links;
                      expect(links.length).to.be.greaterThan(0);
  
                      cy.log('Links in Email:', links.join(', '));               
                      // Visit the URL using Cypress with followRedirect: false
                      const foraRegistrationLink = links.find(link => link.includes('advisor.forastaging.net/register'));
                      expect(foraRegistrationLink).to.exist; // Ensure we found a link containing the registration URL
  
                      cy.visit(foraRegistrationLink, { followRedirect: false });// Visit the last link in the array
                      
 
                

                      })
                    })
                  })


          cy.viewport(1500,785) 
          cy.wait(2000)
          cy.fixture('Advisor_Onboarding_TS004 to TS008.json').then(function (dataJson) {
            Onboarding.Plantext1.should('be.visible')
cy.wait(5000)
Onboarding.subscribe.click()
cy.wait(5000)
Onboarding.createaccount.should('be.visible')
Onboarding.continue.click()
//Personal info section

Onboarding.country.click()
Onboarding.countrytext.type(dataJson.Countryname)
Onboarding.typecountryname.click()
Onboarding.address.type(dataJson.Address)
Onboarding.city.type(dataJson.City)
Onboarding.state.type(dataJson.State)
Onboarding.zipcode.type(dataJson.Zipcodenumber)
Onboarding.countryflag.should('be.exist')
Onboarding.phonenumber.clear().type(dataJson.Correctnumber1)
Onboarding.newpassword.type(dataJson.Correctpassword)
cy.wait(2000)
Onboarding.confirmpassword.type(dataJson.Correctpassword)
cy.wait(8000)
Onboarding.submit.click({force: true})
cy.wait(5000)
//Terms and policy section
Onboarding.terms.should('be.visible')
Onboarding.independedntagreement.should('be.visible')
Onboarding.termscheckbox.check()
Onboarding.policy.should('be.visible')
Onboarding.policycheckbox.check()
Onboarding.agreementcontinue.should('be.enabled').click()
cy.wait(2000)

//Payment section
cy.frameLoaded('[title="Secure payment input frame"]');    
cy.get('iframe').then(($iframe) => {          
const $body = $iframe.contents().find('body')
cy.wrap($body).find('[placeholder="1234 1234 1234 1234"]').type(dataJson.Correctcardnumber)
cy.wrap($body).find('[placeholder="MM / YY"]').type(dataJson.Correctexpirynumber)
cy.wrap($body).find('[placeholder="CVC"]').type(dataJson.Correctcvc)
cy.wrap($body).find("#Field-countryInput").select('US').should('have.value', 'US');

cy.wrap($body).find('[placeholder="12345"]').type('78645')

  

 Onboarding.createaccountbutton.click()
 cy.wait(20000)
 Onboarding.startyouronboarding.click()
 cy.wait(20000)
 cy.url().should('include', 'https://advisor.forastaging.net/');

 
cy.viewport(1500,785) 

cy.wait(5000)


Gesttingstarted.Welcometo.should('be.visible')
Gesttingstarted.Fora.should('be.visible')
Gesttingstarted.Gettingstartedtab.click()
cy.wait(5000)
cy.url().should('include', 'https://advisor.forastaging.net/get-started')
Gesttingstarted.Gesttingstarted.should('be.visible')
Gesttingstarted.Progressbar.should('be.visible')
Gesttingstarted.Taskcount.should('be.visible')
Gesttingstarted.Attendinstructorledkickoffcallsection.should('be.visible')
Gesttingstarted.Gettingstartedtaskicon.eq(0).should('be.visible')
Gesttingstarted.Attendinstructorledkickoffcallsubheader.should('be.visible')
Gesttingstarted.Attendinstructorledkickoffcallheader.should('be.visible')
Gesttingstarted.Attendinstructorledkickoffcallctivitycount.should('be.visible')
Gesttingstarted.Activityexpand.eq(0).should('be.visible')
Gesttingstarted.Completecertifiedtraining.should('be.visible')
Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible')
Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible')
Gesttingstarted.Completecertifiedtrainingcount.should('be.visible')
Gesttingstarted.Activityexpand.eq(1).should('be.visible')
Gesttingstarted.Joinourcommunity.should('be.visible')
Gesttingstarted.Joinourcommunitycount.should('be.visible')
Gesttingstarted.Joinourcommunitysubheader.should('be.visible')
Gesttingstarted.Activityexpand.eq(2).should('be.visible')
Gesttingstarted.Gettingstartedtaskicon.eq(2).should('be.visible')
Gesttingstarted.Getthewordout.scrollIntoView().should('be.visible')
Gesttingstarted.Getthewordoutcount.should('be.visible')
Gesttingstarted.Getthewordoutsubheader.should('be.visible')
Gesttingstarted.Activityexpand.eq(3).should('be.visible')
Gesttingstarted.Gettingstartedtaskicon.eq(3).should('be.visible')
Gesttingstarted.Makeyourfirstbooking.scrollIntoView().should('be.visible')
//Gesttingstarted.Makeyourfirstbookingcount.scrollIntoView().should('be.visible')
Gesttingstarted.Makeyourfirstbookingsubheader.scrollIntoView().should('be.visible')
Gesttingstarted.Activityexpand.eq(4).should('be.visible').scrollIntoView().should('be.visible')
Gesttingstarted.Gettingstartedtaskicon.eq(4).should('be.visible').scrollIntoView().should('be.visible')
Gesttingstarted.Skipfornow.should('be.visible')
Gesttingstarted.Dismissguide.should('be.visible')

Gesttingstarted.Makeyourfirstbooking.scrollIntoView().should('be.visible')
Gesttingstarted.Makeyourfirstbookingcount.scrollIntoView().should('be.visible')
    Gesttingstarted.Makeyourfirstbookingsubheader.scrollIntoView().should('be.visible')
    cy.xpath("//span[normalize-space()='Make your first booking & start earning commission']").should('be.visible').scrollIntoView().should('be.visible').click()
Gesttingstarted.Createaexpediataapaccount.should('be.visible').click()
Gesttingstarted.Createaexpediataapaccount1.should('be.visible')
Gesttingstarted.Register.click()
Gesttingstarted.Gettingstartedtab.click()
cy.wait(1000)
cy.xpath("//span[normalize-space()='Make your first booking & start earning commission']").should('be.visible').scrollIntoView().should('be.visible').click()
cy.wait(1000)

Gesttingstarted.Createaexpediataapaccount.should('be.visible').click()
Gesttingstarted.Markasdone.click()
//Gesttingstarted.Sucessiconoutside.should('be.visible');
Gesttingstarted.Learnallthings.should('be.visible').click()
Gesttingstarted.Learnallthings1.should('be.visible')
Gesttingstarted.Gototraining.click()
Gesttingstarted.Markeascomplete.scrollIntoView().click()
Gesttingstarted.Gettingstartedtab.click()
cy.xpath("//span[normalize-space()='Make your first booking & start earning commission']").scrollIntoView().should('be.visible').click()
Gesttingstarted.Sucessiconoutside.eq(1).should('be.visible');

Gesttingstarted.bookMarriotthotels.click()
Gesttingstarted.bookMarriotthotels1.should('be.visible')
Gesttingstarted.Gototraining.click()
Gesttingstarted.Markeascomplete.scrollIntoView().click()
Gesttingstarted.Gettingstartedtab.click()
cy.xpath("//span[normalize-space()='Make your first booking & start earning commission']").scrollIntoView().should('be.visible').click()

Gesttingstarted.Makeyourfirstbooking.should('be.visible')
Gesttingstarted.Makeyourfirstbookingsubheader.should('be.visible')
Gesttingstarted.Makeyourfirstbooking.should('be.visible')
const advisorEmail = `${userData.first_name}.${userData.last_name}@forastaging.net`;

const bookingData = {
"id":uuidv4(),
"email_captured": "2023-12-01",
"advisor":advisorEmail ,
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
});  });

cy.wait(2000)
Foraprofile.Usersetting.click()
cy.wait(5000)
cy.get('.grid > .flex > :nth-child(2) > .font-bold') // Replace with actual selector
.invoke('text')
.then((email) => {
// You can store the email in a variable or a file
cy.writeFile('cypress/fixtures/recoveryEmail.json', { email });
});


        })
    
      })  
    })
     

    