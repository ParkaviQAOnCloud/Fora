
//To Validate Advisor_Client_UTC011- To Check - Open Client and check header

import Home from "/cypress/support/Page Object/Advisor/Home"
import Client from "/cypress/support/Page Object/Advisor/Client"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    

    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_client_TC011', () => {
    cy.readAndSetExcelData()
    const testscriptId ='TS004_Clients.cy.js';
        // Fetch all test data using the custom command
    cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { FullName_Search} = testData
   //Fetch login details using the custom command
    //cy.TestLogin()
    //cy.wait(3000)
   //Fetch login details using the custom command
   cy.NotanadvisorclientLogin()
  // Click on the menu bar
    Home.navbar.click()
    Client.Client.should('be.visible')
  // click on clients
    Client.Client.click()
  // Assertion - It should navigate to client page
    cy.url().should('include', 'https://advisor.forastaging.net/clients')
  //Validate step 1 - Navigate to the client details page by selecting a client from the client list.
  //click the client from search list
    Client.searchbar.should('be.visible')
    Client.searchbar.type(FullName_Search)
    cy.wait(1000)
    //search results  - selector(Xpath)
    cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']")
  .should('have.text', FullName_Search).click();
  //Assertion - clientname visible after open the details page
  cy.wait(2000)
  cy.contains(FullName_Search)
  //Validate step 2 - Verify the header section of the client details page
  //Bookings, Commissionable Value, .Commissions,about,Creditcard,Loyaltyprograms,Loyaltyprograms,Associatedtravelers,Notes,Contact,Contacticon,threedot_Button
  Client.Booking.should('be.visible')
  Client.CommissionableValue.should('be.visible')
  Client.Commission.should('be.visible')
  Client.About.should('be.visible')
  Client.Creditcard.should('be.visible')
  Client.Loyaltyprograms.should('be.visible')
  Client.Associatedtravelers.should('be.visible')
  Client.Notes.should('be.visible')
  Client.Contact.should('be.visible')
  Client.Contacticon.should('be.visible')
  Client.threedot_Button.should('be.visible')




  
    })   
})
})

