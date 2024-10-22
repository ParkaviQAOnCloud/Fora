//To Validate Advisor_Client_UTC001 - To Check Clients Tab
//To Validate Advisor_Client_UTC002 - To Check all the fields on the 'Clients' page

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

  it('Advisor_client_TC001 & Advisor_Client_UTC002', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   // cy.NotanadvisorclientLogin() 
   cy.TestLogin()
   // Advisor_client_TC001
  // Validate Step1 - Verify the "Clients" option is available in the menu bar
  // Click on the menu bar
    Home.navbar.click()
    Client.Client.should('be.visible')
  // Validate Step2 - Click on the "Clients" tab
  // click on clients
    Client.Client.click()
  // Assertion - It should navigate to client page
    cy.url().should('include', 'https://advisor.forastaging.net/clients')

  // Advisor_client_TC002
 // Validate step 1 - Check the client page
 // Assertion - Clients page should have following Details, 
//Clients header
Client.clientheader.should('be.visible')
//Search bar
Client.searchbar.should('be.visible')
//Add Client button
Client.Addclient.should('be.visible')
//Clients Count
//Xpath selector for clients count
cy.wait(1000)
cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
 .invoke('text')
 .then((text) => {
     const initialCount = parseInt(text.trim(), 10);
     console.log('Initial Client Count:', initialCount); // Print the initial count
 })
    
})
})
