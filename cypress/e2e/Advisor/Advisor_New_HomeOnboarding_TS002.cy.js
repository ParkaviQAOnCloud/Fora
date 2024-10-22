
import Onboarding from "../../support/Page Object/Advisor/Onboarding";
import Newhome from "../../support/Page Object/Advisor/Newhome"

describe('Advisor_Home Onboarding_TS002',{ testIsolation: false },function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Home_TC001_To Check the home page/Advisor kickoff call section of home page - ', function() {
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
                      cy.fixture('Advisor_Onboarding_TS004 to TS008.json').then(function (dataJson) {
                          Onboarding.Plantext1.should('be.visible')
   Onboarding.Plantext2.should('be.visible')
   Onboarding.Plantext3.should('be.visible')
   Onboarding.Plantext4.should('be.visible')
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
             
                })
             
               Onboarding.createaccountbutton.click()
               cy.wait(20000)
               Onboarding.startyouronboarding.click()
               cy.wait(20000)
               cy.url().should('include', 'https://advisor.forastaging.net/');
 
                

 
    /// verifying the home page
    cy.log('verifying home page')    
   

cy.wait(5000)

cy.get('iframe')
.then(($iframe) => {
  const $body = $iframe.contents().find('body'); 
  cy.wait(5000)
  cy.wrap($body).find('[id="onetrust-accept-btn-handler"]').scrollIntoView().click()

cy.wait(2000)
cy.wrap($body).find('[class="uvkj3lh DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av ZJbG4bxYGUoYsr4rb04C"]').eq(0).click() //clicking next arrow in calander
cy.wrap($body).find('[class="uvkj3lh DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av ZJbG4bxYGUoYsr4rb04C"]').eq(0).click()

cy.wrap($body).find('[class="uvkj3lh o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 mIJUmpwwZd5mH9SMq9XQ"]').eq(0).click() //selecting date
cy.scrollTo("top", { ensureScrollable: false });
cy.wrap($body).find('[class="uvkj3lh _w8iXDi37ZtszlePqV6J k_KP3TT_QEVKk3VAikPN pMHLknis9HAglWN3wYAw"]').should('be.visible') .click() //clicking back arrow after selecting date
cy.wrap($body).find('[class="uvkj3lh o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 mIJUmpwwZd5mH9SMq9XQ"]').eq(0).click()  //selecting date

cy.wrap($body).contains('Select a Time').should('be.visible');
cy.wrap($body).find('[class="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').eq(0).should('be.visible') 
cy.wrap($body).find('[class="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').eq(1).should('be.visible').click()
cy.wrap($body).find('[class="uvkj3lh _NBjM8Q6c03EfxjK90hm _wYinQZCx29_pxs0TZnM Iy168r_YSkmFtzeEXUss uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').should('be.visible').click() //clciking next button
cy.wrap($body).find('[class="tSHP4_7gU1EgmhU4cdix _CTgggv6aoPOIqf8ezib"]').should('be.visible')
cy.wrap($body).contains('45').scrollIntoView().should('be.visible');
cy.wrap($body).contains('Onboarding (staging)').scrollIntoView().should('be.visible');
cy.wrap($body).contains('Web conferencing details provided upon confirmation.').scrollIntoView().should('be.visible');
cy.wrap($body).find('[class="uvkj3lh hfsu4te"]').click()
cy.wrap($body).contains('Join our required Onboarding call with Fora to learn the basics of getting started as an Advisor.').scrollIntoView().should('be.visible');

cy.wrap($body).contains("Zoom Etiquette: Please join with your camera on and mic muted. If possible, please join from a computer with stable wifi as you'll be asked to introduce yourself. Make sure your display name includes your first and last name. Thank you!").should('be.visible');

cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(0).clear().type('testing')

cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(1).clear().type('reenaz@qaoncloud.com')
cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(2).clear().type('+917526412658')
//clicking schedule event button
cy.wait(3000)

cy.wrap($body).find('[class="uvkj3lh l15h8fme b1e1xwjm dyxacjh sbsarjr r9dt397 fsdu8dr"]').eq(0).should('be.visible').click()
cy.wait(3000)
/*cy.wrap($body).find('[class="_DCg81pIT0_JBNNWNnk_ Irang_XWALx_cgdnp2wH"]').scrollIntoView().should('be.visible')
cy.wrap($body).find('[class="UvpRYwD5_4vWY5pYbzns cLY56rKSkXlHXkw9joLs"]').scrollIntoView().should('be.visible')
cy.wrap($body).find('[class="x9naK2ynrgQ_fLym4UJ9 MYq_1vkDa9o_JBS0zGAs"]').scrollIntoView().should('be.visible')
cy.wrap($body).find('[class="x9naK2ynrgQ_fLym4UJ9 MYq_1vkDa9o_JBS0zGAs"]').scrollIntoView().should('be.visible')*/


})
cy.wait(3000)
Newhome.calldropdown.scrollIntoView().click()
cy.wait(3000)

cy.xpath("//h2[normalize-space()='You are scheduled for an Advisor kickoff call']").scrollIntoView().should('be.visible')
                      })

                    })
                  
      })
    })

  })
})