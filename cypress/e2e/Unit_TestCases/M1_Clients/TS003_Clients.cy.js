/*Advisor_Client_UTC006 - Check Search - Partial Name
  Advisor_Client_UTC007 - Check Search - valid Name
  Advisor_Client_UTC008 - Check Search - Invalid Name
  Advisor_Client_UTC009 - Check Search -  Clear Functionality
  Advisor_Client_UTC010 - Check Search - when there are more than 20 clients*/

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

  it('Advisor_client_TC006 to TC010', () => {
    cy.readAndSetExcelData()
    const testscriptId ='TS003_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { PartialName_Search,FullName_Search,NonExitClient} = testData
   //Fetch login details using the custom command
  // cy.TestLogin()
  cy.NotanadvisorclientLogin()
  // Click on the menu bar
    Home.navbar.click()
    Client.Client.should('be.visible')
  // click on clients
    Client.Client.click()
  // Assertion - It should navigate to client page
    cy.url().should('include', 'https://advisor.forastaging.net/clients')
  // Advisor_Client_UTC006   
  //Validate step 1 - Verify the presence of the search bar
  //Assertion -  The search bar should be visible with the placeholder text "Search by names."
  Client.searchbar.should('be.visible')
  //cy.wrap($body).find('[placeholder="Search by nams"]')
  //Validate step 2 - Enter a partial client name in the search bar
  Client.searchbar.type(PartialName_Search)
  cy.wait(2000)
  //Assertion - Verify that search results contain partial names
  cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']")//search results selector
  .should('include.text', PartialName_Search);
  //Advisor_Client_UTC007
  //Validate - Enter a valid client name in the search bar
  Client.Searchcancelicon.click()
  Client.searchbar.type(FullName_Search)
  //Assertion - Search results should display the client with the name
  cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']")//search results selector
  .should('have.text', FullName_Search);
  //Advisor_Client_UTC008
  //Validate - Enter a non-existent client name in the search bar
  Client.Searchcancelicon.click()
  Client.searchbar.type(NonExitClient)
  //Assertion -  Search should display the message: "No clients found
  cy.wait(1000)
  cy.contains("No clients found")
  Client.Searchcancelicon.click()
  //Advisor_Cleint_UTC009
  //Validate - Click the 'X' symbol in the search box after entering the query.
  //Assertion - The client list should return to its original state, displaying all available clients after clicking the 'X' symbol.
  //Validate the initial clients count
  cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
 .invoke('text')
 .then((text) => {
     const initialCount = parseInt(text.trim(), 10);
     console.log('Initial Client Count:', initialCount); // Print the initial count  


//Search Valid client name
Client.searchbar.type(FullName_Search)
//Click X symbol
Client.closesymbol_Search.click()
// Assertion - After click the X symbol initial count shoud be the same
cy.wait(1000)
cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
 .invoke('text')
 .then((text) => {
     const updatedCount = parseInt(text.trim(), 10);
     expect(updatedCount).to.eq(initialCount);
console.log('Updated Client Count:', updatedCount);// Print the  count after click the X symbol

//Advisor_Client_UTC010
/************************* Checking Automation feasibility********************/
//Validate - Check the list of clients when exceeding 20

})
})
})
})


})