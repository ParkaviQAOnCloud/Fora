/* "The goal of the test is to verify the following functionalities:
1. contents of the Cancel subscription link"				*/ 

import Home from "../../support/Page Object/Advisor/Home"
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"
import Onboarding from "../../support/Page Object/Advisor/Onboarding";
import Marketing from "../../support/Page Object/Advisor/Marketing";

describe('Advisor_Cancel_Subscription_TS001 ',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Cancel_Subscription_TC001_To verify Cancel subscription link- to test if user is able to cancel subscription using cancel subscription link', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
  const uniqueNumber = Math.floor(Math.random() * 10000); // Generates a number between 0 and 9999
        const uniqueString = `user${uniqueNumber}`;
        const userData = {
            personal_email: `reenaz+${uniqueString}@team845771.testinator.com`,
            first_name: `reenaz${uniqueNumber}`,
            last_name: `fathima${uniqueNumber}`
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
            cy.wait(10000); // Adjust timing as needed

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
                cy.wait(5000); // Adjust timing as needed

                // Find the latest email by sorting by received time (assuming 'createdAt' field exists)
                const messages = inboxResponse.body.msgs;
                messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by descending 'createdAt'
                cy.wait(5000); // Adjust timing as needed

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
             cy.viewport(1500,785)

              
        Foraprofile.Usersetting.click() // click on the usersetting tab
        Foraprofile.Cancelsubscription.click() // click on the cancel subscription link
        Foraprofile.Areyousuretext.should('be.visible');
        Foraprofile.Text1.should('be.visible');
        Foraprofile.Text2.should('be.visible');
        Foraprofile.Text3.should('be.visible');
        Foraprofile.Cancelbutton.eq(1).click({force: true}) // click on the cancel button in cancel subscription window
       
        Foraprofile.Cancelsubscription.click()
        Foraprofile.Continuetocancel.click()
        Foraprofile.Cancelsubscription.should('be.visible');
        Foraprofile.Cancelsubscriptiontext.should('be.visible');
        Foraprofile.Cancelsubscriptiontext1.should('be.visible');
        Foraprofile.Cancelsubscriptiontext2.should('be.visible');
        Foraprofile.Cancellationreason.should('be.visible');
        Foraprofile.Cancellationreasondropdown.should('be.visible')
        Foraprofile.Additionalinfo.should('be.visible')
        Foraprofile.Additionalinfotextbox.should('be.visible')
        Foraprofile.Keepaccount.should('be.visible')
        Foraprofile.Confirmcancel.should('be.visible').click()
        Foraprofile.Errormsg.should('be.visible') // verifying the error messsage without entering data
        Foraprofile.Cancellationreasondropdown.click()  //click on the cancellationreason dropdown
        //cancellationreason dropdown value
        Foraprofile.Dropdownoption1.should('be.visible')
        Foraprofile.Dropdownoption2.should('be.visible')
        Foraprofile.Dropdownoption3.should('be.visible')
        Foraprofile.Dropdownoption4.should('be.visible')
        Foraprofile.Dropdownoption5.should('be.visible')
        Foraprofile.Dropdownoption6.should('be.visible')
        Foraprofile.Dropdownoption7.scrollIntoView().should('be.visible')
        Foraprofile.Dropdownoption8.scrollIntoView().should('be.visible')
        Foraprofile.Dropdownoption9.scrollIntoView().should('be.visible')
        cy.wait(2000)
        Foraprofile.Cancellationreasondropdown.click({force: true})
        cy.wait(2000)
        Foraprofile.Keepaccount.should('be.visible').click() // validating keep account button
        Foraprofile.Cancelsubscription.click()  
        Foraprofile.Continuetocancel.click()
        Foraprofile.Cancellationreasondropdown.click()
        Foraprofile.Dropdownoption1.should('be.visible').click()
        Foraprofile.Additionalinfotextbox.type('Error502') // Enter data to additional info text box 
        Foraprofile.Confirmcancel.should('be.visible').click()
        cy.wait(2000)
        Foraprofile.close.click()
        Foraprofile.Canceltextmsg.should('be.visible')
    })

       })
      })
   })
})

    it('Advisor_Marketing_TC001 & TC005_To verify Fora Profile and Guides section-  ', () => {

        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.viewport(1500,785) 

       Marketing.Resource.click()
       cy.wait(2000)
       Marketing.Marketing.click()
       cy.wait(1000)

       Marketing.Status.should('be.visible')
       Marketing.Notpublished.should('be.visible')
Marketing.Createprofile.click()
Marketing.Welcometoforatravel.should('be.visible')
Marketing.Welcometoforatravelsubheader.scrollIntoView().should('be.visible')
Marketing.Fourtipsonhowtomakeprofile.scrollIntoView().click()
Marketing.InprogressProgressbar.should('be.visible')
Marketing.Progressbar.should('be.visible')
Marketing.Submitforreview.should('be.visible')
Marketing.Published.should('be.visible')
Marketing.Missingrequiredcontent.should('be.visible')
Marketing.Addprofilesectionicon.should('be.visible')
Marketing.Edityourprofilecontent.should('be.visible')
Marketing.Aboutyou.should('be.visible')
Marketing.Fullname.should('be.visible')
Marketing.Edittoadd.should('be.visible').click()
///Marketing.Errormessage.scrollIntoView().should('be.visible')
Marketing.Cancelbutton.scrollIntoView().click()
cy.wait(2000)
Marketing.Editicon.eq(0).click()
Marketing.Firstname.should('be.visible')
Marketing.Lastname.should('be.visible')
cy.fixture('Advisor_Marketing_TS002.json').then(function (dataJson) {

Marketing.Firstnamefield.type(dataJson.Firstname)
Marketing.Lastnamefield.type(dataJson.Lastname)
Marketing.Fullnametext.should('be.visible')
Marketing.Fullnametext.should('be.visible')
//Marketing.Supportemail.click()
Marketing.Savebutton.click()
cy.wait(2000)
////////////////
Marketing.Edittoadd.should('be.visible').click()
Marketing.Pronouns.scrollIntoView().should('be.visible')
//Marketing.Cancelbutton.scrollIntoView().click()
cy.wait(2000)
//Marketing.Edittoadd.should('be.visible').click()
Marketing.Chooseanoption.scrollIntoView().click()
Marketing.Sheher.should('be.visible')
Marketing.hehim.should('be.visible')
Marketing.Theythem.should('be.visible')
Marketing.other.should('be.visible')
Marketing.shethey.should('be.visible')
Marketing.Hethey.should('be.visible')
Marketing.Theyshe.should('be.visible')
Marketing.Theyhe.scrollIntoView().should('be.visible')
Marketing.Prefernottospecify.scrollIntoView().should('be.visible')
Marketing.Sheher.scrollIntoView().should('be.visible').click()
Marketing.Pronountext.should('be.visible')
Marketing.Pronounexample.should('be.visible')
Marketing.Savebutton.click()
cy.wait(2000)
///////////////////social linkk
Marketing.Sociallink.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().should('be.visible').click()
cy.wait(2000)
Marketing.Pastallurl.scrollIntoView().should('be.visible')
Marketing.Instagram.scrollIntoView().should('be.visible')
Marketing.Instagramurl.scrollIntoView().type(dataJson.Instagramurl)
Marketing.FB.scrollIntoView().should('be.visible')
Marketing.FBurl.scrollIntoView().type(dataJson.FBurl)
Marketing.Savebutton.click()
Marketing.HTTerror.scrollIntoView().should('be.visible')
Marketing.FBurl.clear().type(dataJson.FBurl1)
Marketing.Linkedin.should('be.visible')
Marketing.Linkedinurl.type(dataJson.Linkedinurl)
Marketing.Pintrest.should('be.visible')
Marketing.Pintresturl.type(dataJson.Pintresturl)
Marketing.Twitter.should('be.visible')
Marketing.Twitterurl.type(dataJson.Twitterurl)
Marketing.Youtube.should('be.visible')
Marketing.Youtubeurl.type(dataJson.Youtubeurl)
Marketing.Tiktok.should('be.visible')
Marketing.Tiktokurl.type(dataJson.Tiktokurl)
Marketing.Website.should('be.visible')
Marketing.Websiteurl.type(dataJson.Websiteurl)
Marketing.Linkimage.should('be.visible')
Marketing.Savebutton.scrollIntoView().click()
cy.wait(2000)
////////////////////Language spoken
Marketing.Languagespoken.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().should('be.visible').click()
Marketing.Whatlangyouspeak.scrollIntoView().should('be.visible')
Marketing.Whatlangyouspeaktextbox.type(dataJson.Languagespoken)
cy.wait(2000)
Marketing.Commaseparated.scrollIntoView().should('be.visible')
Marketing.image.scrollIntoView().should('be.visible')
Marketing.Profileex.scrollIntoView().should('be.visible')
Marketing.Savebutton.click()

/////////////Basedin
cy.wait(2000)
Marketing.Basedin.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().should('be.visible').click()
///Marketing.Errormessage.should('be.visible')
Marketing.Whereareyoubased.scrollIntoView().should('be.visible')
Marketing.Enterlocation.scrollIntoView().should('be.visible').type(dataJson.Whereareyoufrom)
Marketing.image.should('be.visible')
Marketing.Savebutton.click()


////////////////Minibio
cy.wait(2000)
Marketing.Minibio.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().should('be.visible').click()
//Marketing.Errormessage.should('be.visible')
Marketing.Describeyourselftextbox.type(dataJson.Minibio)
Marketing.Minibiosubheader.should('be.visible')  
Marketing.minibioimage.scrollIntoView().should('be.visible')
Marketing.Savebutton.click()

////Contact form
cy.wait(2000)
Marketing.Contactform.scrollIntoView().should('be.visible')
Marketing.Enabled.scrollIntoView().should('be.visible')
Marketing.Editicon.eq(6).scrollIntoView().should('be.visible').click()
Marketing.Contactformtext.scrollIntoView().should('be.visible')
Marketing.Removefromprofile.scrollIntoView().should('be.visible')
Marketing.Removefromprofilecheckbox.click()
Marketing.Savebutton.click()
Marketing.Disabled.should('be.visible')

})
})
it('Advisor_Marketing ', () => {

  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.viewport(1500,785) 

  cy.fixture('Advisor_Marketing_TS002.json').then(function (dataJson) {
Marketing.Bussinessinformationsectionicon.scrollIntoView().should('be.visible')
Marketing.Bussinessinformationsection.scrollIntoView().should('be.visible')
Marketing.Nightlybookingminimum.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().should('be.visible').click()
Marketing.Nightlybookingminimumtext.scrollIntoView().should('be.visible')
Marketing.Nightlybookingminimumtextfield.type(dataJson.budget)
Marketing.Savebutton.click()
cy.wait(2000)
Marketing.Destinationexpertise.scrollIntoView().should('be.visible')
cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[3]/div[4]/button[1]').scrollIntoView().should('be.visible').click()
cy.wait(2000)
Marketing.Destinationexpertisetext.should('be.visible')
Marketing.Destinationexpertisetext1.should('be.visible')
Marketing.Destinationexpertiseimagetext.should('be.visible')
Marketing.Destinationexpertiseimage.should('be.visible')
cy.wait(2000)
Marketing.Destinationexpertisetextfield.type(dataJson.Place).blur()

cy.wait(2000)

Marketing.Savebutton.click()

cy.wait(2000)
Marketing.Traveltype.scrollIntoView().should('be.visible')
cy.xpath("(//*[name()='svg'])[54]").scrollIntoView().should('be.visible').click()
Marketing.Roadtrip.click()
Marketing.Safari.click()
Marketing.Savebutton.click()
cy.wait(2000)
Marketing.Travlestyle.scrollIntoView().should('be.visible')
cy.get(':nth-child(5) > .flex > .text-tertiaryOld').scrollIntoView().click()
Marketing.Travlestyle.should('be.visible')
Marketing.Travlestyletext.should('be.visible')
Marketing.Travelexample.should('be.visible')
Marketing.Travlestyleimage.should('be.visible')
Marketing.Travelstyletextfield.type(dataJson.Travelstyle)
Marketing.Savebutton.click()
cy.wait(2000)

cy.get(':nth-child(6) > .flex > .text-tertiaryOld').click()
Marketing.Favoritehotels.should('be.visible')

Marketing.Pleasewrite.should('be.visible')
Marketing.Foraprofileimage.should('be.visible')
Marketing.Enterhotel.type(dataJson.Hoteldetails)
Marketing.Savebutton.click()

})

})
it('Advisor_Marketing_TC00-To verify Fora Profile and Guides section- Image section  ', () => {

  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.viewport(1500,785) 

  Marketing.Imagesheader.scrollIntoView().should('be.visible')
 // Marketing.Imagesicon.scrollIntoView().should('be.visible')
 cy.get(':nth-child(2) > .flex > .text-tertiaryOld').scrollIntoView().click()
cy.wait(3000)
Marketing.Profilepicturetext.scrollIntoView().should('be.visible')
Marketing.Profilepicturetext1.scrollIntoView().should('be.visible')
Marketing.Profilepicturetext2.scrollIntoView().should('be.visible')
Marketing.Profilepicturetext3.scrollIntoView().should('be.visible')
Marketing.Profilepicturetext4.scrollIntoView().should('be.visible')
Marketing.Profilepictureonfora.scrollIntoView().should('be.visible')
const Picture1='Profilepict.jpg'
cy.get('[type="file"]').attachFile(Picture1) 
 cy.wait(3000) 
 Marketing.Savebutton.click()
cy.wait(5000)
/*Marketing.Orginaltravelimages.scrollIntoView().should('be.visible')
Marketing.Edittoadd.scrollIntoView().click()
Marketing.Orginaltraveltext.scrollIntoView().should('be.visible')
Marketing.Orginaltraveltext1.scrollIntoView().should('be.visible')
Marketing.Orginaltraveltext2.scrollIntoView().should('be.visible')
Marketing.Orginaltravelimag.scrollIntoView().should('be.visible')
const Picture2='Profilepict.jpg'
cy.get('[type="file"]').attachFile(Picture2) 
 cy.wait(3000) 
 Marketing.Savebutton.click()*/

Marketing.Submitforreviewbutton.scrollIntoView().click()
cy.wait(5000)
Marketing.Submitforreviewsuccesstext.scrollIntoView().should('be.visible')
})
  
















})