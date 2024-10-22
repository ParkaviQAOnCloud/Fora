/*To Validate Advisor_Client_UTC003 - To Check all the fields on 'Add Clients'
To Validate Advisor_Client_UTC004 - To Check Add client - Cancel Functionality
To Validate Advisor_Client_UTC005 - To  Check Add client - Add client*/


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

  it('Advisor_client_TC003, Advisor_Client_UTC004, Advisor_Client_UTC005', () => {
    cy.readAndSetExcelData()
 
    
    const testscriptId ='TS002_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { Firstname,Lastname,Middlename,Preferedname,Firstname1,Lastname1} = testData
   //Fetch login details using the custom command
    //cy.TestLogin()
    cy.NotanadvisorclientLogin()
  // Click on the menu bar
    Home.navbar.click()
 // click on clients
    Client.Client.click()
// Advisor_client_TC003
// Validate Step 1, Step 2  - Click the 'Add Client' button, Check the popup title
   Client.Addclient.click()
// Assertion - Once click the add client Opens the "Add a New Client" popup and Popup title should be "Add a New Client."
   Client.Add_a_new_clientPOP.should('be.visible')
// Validate Step 3 - Check for fields in the popup
// Assertioon - Popup contains
//First Name, 
  Client.AddFirstnameheader.should('be.visible')
//Last Name
  Client.AddLastnameheader.should('be.visible')
//Preferred Name
  Client.Preferrednameheader.should('be.visible')  
//Middle Name
  Client.Middlename.should('be.visible')
//"Add New Client" button
  Client.Addnewclient_Button.should('be.visible')
// X (close) symbol
  Client.closesymbol_AddClient.should('be.visible')
//Validate step 4 - Verify mandatory fields
//Assertion - First Name and Last Name fields are marked as required.
  Client.AddFirstnameheader.contains('Required')
  Client.AddLastnameheader.contains('Required')
//Validate step 5 - Attempt to submit without filling mandatory fields
//Assertion - Attempt to submit without filling mandatory fields, Displays an error message indicating that required fields must be filled.
  Client.Addnewclient_Button.click()
  cy.contains("First name is required")
  cy.contains("Last name is required")

  //Advisor_Client_UTC004
  // Validate step 1 - Fill in all fields in popup, Fetch the details from custom command
  cy.AddClient_AllFields(Firstname,Lastname,Middlename,Preferedname)
  // Validate step 2  - Click the 'X' symbol , 
  Client.closesymbol_AddClient.click()
  //Validate step 3 - Verify the new client is not created 
  //cy.contains(dataJson.Preferedname).should('not.exist');
  //Assertion - client is not created

  Client.searchbar.type(Preferedname)
  cy.wait(1000)
  cy.contains("No clients found")


//Advisor_Client_UTC005
// Validate step 1,3 - Click the 'Add New Client' button after filling  all required fields , Verify the total client count
    //Validate the initial clients count
    // Click on the menu bar
    Home.navbar.click()
// click on clients
   Client.Client.click()
   //Xpath selector - counts
    cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
 .invoke('text')
 .then((text) => {
     const initialCount = parseInt(text.trim(), 10);
     console.log('Initial Client Count:', initialCount); // Print the initial count  
    //Click the addclient button and add new client so fetch the custom command to create new client each time, so testcase wont fail, we execute the multiple times
    cy.UniqueName_CreateClient()
 //Assertion-Once clicked,the add new client button navigates to the new client page

    //cy.contains(dataJson.Firstname + ' ' + dataJson.Lastname)
    cy.contains("Bookings")

 // Validate step 3 - Verify the total client count after adding new client
 // Click on the menu bar
Home.navbar.click()
// click on clients
   Client.Client.click()
   cy.wait(5000)
   //Xpath selector - counts
   cy.xpath("//span[contains(@class, 'text-medium') and contains(@class, 'whitespace-nowrap')]")
                    .invoke('text')
                    .then((updatedText) => {
                        const updatedCount = parseInt(updatedText.trim(), 10);

//Validate the increment
expect(updatedCount).to.eq(initialCount + 1);
console.log('Updated Client Count:', updatedCount);// Print the updated count

 


    
 


  
            })
        })
    })
})
})
