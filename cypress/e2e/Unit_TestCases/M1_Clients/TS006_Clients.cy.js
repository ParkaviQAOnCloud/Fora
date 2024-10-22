/* Advisor_Client_UTC024 - Check - 'Clients-CreditCard' tab with no data
Advisor_Client_UTC025 - Check - 'Add card' functionality with Link within 48 hours
Advisor_Client_UTC027 - Check - 'Add card' functionality WIth Enter Manually option
Advisor_Client_UTC028 - Check - Add a payment card leaving mandatory fields
Advisor_Client_UTC030 -  Check - Edit Payment card
Advisor_Client_UTC033 - Check - Multiple card types
Advisor_Client_UTC034 - Check - Delete Payment card
*/


import Home from "/cypress/support/Page Object/Advisor/Home"
import Client from "/cypress/support/Page Object/Advisor/Client"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    
  cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
 
  })

  it('Advisor_client_UTC024 - UTC034 ', () => {
    cy.readAndSetExcelData()
 
    
    const testscriptId ='TS006_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { FullName_Search,CardNumber,ExpDate,CCV,CardName,CardAddress,address_additional,card_cityInput,card_stateInput,card_postalcode} = testData
   //Fetch login details using the custom command
  // cy.TestLogin()
   cy.NotanadvisorclientLogin()

  // Click on the menu bar
    Home.navbar.click()
 // click on clients
    Client.Client.click()
    cy.UniqueName_CreateClient()
    //click the client from search list
   // Client.searchbar.should('be.visible')
    //Client.searchbar.type(FullName_Search)
    //cy.wait(1000)
    //search results  - selector(Xpath)
    //cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']").eq(0)
  //.should('have.text', FullName_Search).click();
  //cy.wait(2000)
  //Advisor_Client_UTC024
  //Validate step 1 - Click on the "Credit Cards" tab on the client detail page
Client.Creditcard.scrollIntoView().should('be.visible')
//Validate step 2 - Click on the credit card
Client.Creditcard.scrollIntoView().should('be.visible').click()
//Assertion - Verify the Credit Card page.
//credit card icon , Message -  "Add your client's credit card for easy booking. Secure and simple to manage.,Add card button 
Client.Cardicon.should('be.visible')
Client.CreditCardtext.should('be.visible')
Client.CreditCardtext1.should('be.visible')
Client.CreditCardtext2.should('be.visible')
Client.Addcardbutton.should('be.visible')
//Advisor_Client_UTC025
//Validate step 1 - click on "Add card" button
Client.Addcardbutton.click()
//Assertion - Opens "Securely add client’s credit card" popup.
Client.Addcardtext.should('be.visible')
//Validate step 2 - Verify the "Securely add client’s credit card" popup.
//Assertion - The popup should open with the following elements:
Client.Addcardtext1.should('be.visible')
Client.Addcardtext2.should('be.visible')
Client.Addcardtext3.should('be.visible')
Client.Link.should('be.visible')
//Validate step 3 - Click on the "Copy link" button.
Client.Copylink.should('be.visible').click()
//Assertion - "Copied!" should be displayed momentarily.
Client.Copied.should('be.visible')
Client.Entermanually.should('be.visible')
Client.Closecard.should('be.visible').click()
Client.Addcardbutton.scrollIntoView().should('be.visible').click()
//Advisor_Client_UTC027 - Check - 'Add card' functionality WIth Enter Manually option
//Click the entermanually button
Client.Entermanually.should('be.visible').click()
//Validate - the "Add Payment Card" popup, 
//Valiadte - Enter valid details in the required fields and click the "Save and add" button.
//Validate - Verify the  confirmation popup.
cy.frameLoaded('[id="tx_iframe_card-tokenex-element"]');
cy.get('iframe').then(($iframe) => {
  cy.wait(8000);
  const $body = $iframe.contents().find('body');
  
  Client.card_information.should('be.visible');
  Client.Cradholdername.should('be.visible');
  
  cy.wait(5000);
  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').scrollIntoView().click({force:true});
  cy.wait(2000);

  Client.Expdate1.scrollIntoView().click();
  cy.wait(3000);
  //cy.contains('Card number is required.').should('be.visible');
  cy.wait(2000);

  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').type(CardNumber);
  Client.Expdate1.click();
  cy.wait(1000);

  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click();
  cy.wait(1000);
 // cy.contains('Expiring date is required.').should('be.visible');

  Client.Expdate1.click().type(ExpDate);
  cy.wait(2000);

  cy.wrap($body).find('[placeholder="CVC"]').click();
  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click();
//  cy.contains('CVC is required.').should('be.visible');

  cy.wrap($body).find('[placeholder="CVC"]').click().type(CCV);

  Client.CardHolder.should('be.visible').click();
  Client.Nickname_card.click();
  cy.contains('This field is required.').scrollIntoView().should('be.visible');

  Client.card_Label.should('be.visible');
  Client.card_Country_region.should('be.visible');
  Client.card_Apt_number_suite_floor.should('be.visible');
  Client.card_city.should('be.visible');
  //Client.card_state.should('be.visible');
  Client.card_zip.should('be.visible');

  Client.card_Input.type(CardName);
  Client.card_country.type('United states of America{enter}', { timeout: 2000 });
  Client.card_address.should('be.visible').type(CardAddress);
  Client.card_address_additional.type(address_additional);
  Client.card_cityInput.type(card_cityInput);
  Client.card_stateInput.type(card_stateInput);
  Client.card_postalcode.type(card_postalcode);
  Client.submit_creditcard.click();
  Client.successfullyAdded_creditcard.should('be.visible');
  Client.securelyAdded_creditcard.should('be.visible');
  Client.Gotit_creditcard.should('be.visible').click();
  //Created card should ve visible with following details

Client.Visaimg.should('be.visible')
Client.cardcount.should('be.visible')
Client.Createdcard.should('be.visible')
Client.Createdcard.should('be.visible').eq(0).click()
cy.wait(5000)
Client.Creditcarddetails.should('be.visible')
Client.Creditcarddetailstext.should('be.visible')
Client.Visaimg.should('be.visible')
Client.Cardnumber.should('be.visible')
Client.Cradholdername.should('be.visible')
Client.Expdate.should('be.visible')
Client.CCV.should('be.visible')
Client.Billingaddress.should('be.visible')
Client.Cardaddedon.should('be.visible')
Client.Deletecard.should('be.visible')
Client.Editcard.should('be.visible')
Client.Cancelcard.should('be.visible')
//Advisor_Client_UTC030 - Validate the Edit Payment card
Client.Editcard.click()
cy.wait(5000)
cy.frameLoaded('[id="tx_iframe_card-tokenex-element"]');     
cy.get('iframe')
.then(($iframe) => {
  cy.wait(5000)
  const $body = $iframe.contents().find('body')
  Client.CardHolder.clear().type('New edited card')
  Client.submit_creditcard.click()
  Client.successfullyAdded_Editcard.should('be.visible')
  Client.gotit_Editcard.should('be.visible').click()
  cy.wait(2000)
  cy.contains('New edited card').should('be.visible')
  //Advisor_Client_UTC034 - Check - Delete Payment card
  Client.Createdcard.should('be.visible').eq(0).click()
  Client.Deletecard.should('be.visible').click()
Client.Deletecardtext.should('be.visible')
Client.Banner.should('be.visible')
Client.Deletecardtext1.should('be.visible')
Client.Deletecardtext2.should('be.visible')
Client.Deletecardtext3.should('be.visible')
Client.Deletecardtext4.should('be.visible')
Client.CardDeletebutton.should('be.visible')
Client.Deletecancel.should('be.visible').click()
Client.Createdcard.should('be.visible').eq(0).click()
Client.Deletecard.should('be.visible').click()
Client.CardDeletebutton.should('be.visible').click()
cy.wait(2000)
Client.Createdcard.should('be.visible').eq(0).click()
Client.Cancelcard.should('be.visible').click()

})
})


            })
        })
      })


