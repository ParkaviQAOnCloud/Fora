/* Advisor_Client_UTC062 - Check if users deletes their own client card , it should show empty state page
Advisor_Client_UTC063- Check if users enters a search that has 0 results, it should show empty state page
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

 it('Advisor_client_UTC062 - UTC063', () => {
    cy.readAndSetExcelData()
 
    
    const testscriptId ='TS011_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
          const { Advisor_OwnClient,NonExitClient} = testData
   //Fetch login details using the custom command
  cy.TestLogin()
  // cy.NotanadvisorclientLogin()

  // Click on the menu bar
    Home.navbar.click()
 // click on clients
    Client.Client.click()
   //Advisor_Client_UTC062 - Check if users deletes their own client card , it should show empty state page
 //Validate - Verify that there is only one client present in the list, which is the advisor's own client
 //Assertion - initial count should be 1
 //Xpath selector - counts
 cy.wait(1000)
 cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
 .invoke('text')
 .then((text) => {
     const initialCount = parseInt(text.trim(), 10);
     expect(initialCount).to.eq(1);
     console.log('Initial Client Count:', initialCount); // Print the initial count  
     //Assertion - The client list will display only the advisor's own client and click the client
     cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']").
     should('have.text', Advisor_OwnClient).click();
     //Click on the three-dot action icon and select the "Delete" option.
     Client.threedot_Button.should('be.visible').click()
     //Assertion - A confirmation popup titled "Delete Client" will appear.
     cy.contains("Delete Client").click()
    // Validate - The popup should contain: Title: Delete Client, Message: Are you sure you want to delete client, JD Doe? This action is permanent.," No, keep client" button,"Yes, delete client" button
    Client.Deleteclientheader.should('be.visible')
    Client.Nokeepclient.should('be.visible')
    Client.Yesdeleteclient.should('be.visible')
    //Valiate - Click "Yes, delete client" button.
    Client.Yesdeleteclient.click()
    //Assertion - After delete the client The client list will display an empty state page indicating that no clients are available.
    Client.Noclientfound.should('be.visible')
    })
    //Advisor_Client_UTC063  - Check if users enters a search that has 0 results, it should show empty state page
//Validate - Enter a search term that has no matching clients .
Client.searchbar.type(NonExitClient)
//Assertion - The empty state page should display the following:Client icon.Message: "No clients found. We couldn't find any clients that match your search criteria."
Client.Noclientfound.should('be.visible')
Client.Noclientfound1.should('be.visible')
Client.Noclientfound2.should('be.visible')
Client.Noclientfound3.should('be.visible')

  })

  
 	


})
})






    
      


