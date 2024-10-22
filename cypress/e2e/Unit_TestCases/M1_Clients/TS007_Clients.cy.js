/* Advisor_Client_UTC035 - Check - 'Clients-Loyalty Programs' tab with no data
Advisor_Client_UTC036 - Check - Add Loyalty Program
Advisor_Client_UTC037 - Check - Edit Loyalty Program
Advisor_Client_UTC038 - Check - Add Another Program
Advisor_Client_UTC038 - Check - Delete Loyalty Program
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

  it('Advisor_client_UTC035 - UTC038', () => {
    cy.readAndSetExcelData()
 
    
    const testscriptId ='TS007_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { FullName_Search,LoyalityProgram,LoyalityProgram1} = testData
   //Fetch login details using the custom command
  // cy.TestLogin()
   cy.NotanadvisorclientLogin()

  // Click on the menu bar
    Home.navbar.click()
 // click on clients
    Client.Client.click()
    //click the client from search list
   Client.searchbar.should('be.visible')
    Client.searchbar.type(FullName_Search)
    cy.wait(1000)
    //search results  - selector(Xpath)
    cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']").eq(0)
  .should('have.text', FullName_Search).click();
  cy.wait(2000)
  //Click the client after creating new client
  //Advisor_Client_UTC035 - Check - 'Clients-Loyalty Programs' tab with no data
  //Validate - Click on the "Loyalty Programs" tab on the client detail page.
  Client.Loyaltyprograms.should('be.visible').click()
  Client.Loyaltyprogramsheader.should('be.visible')
  Client.Loyaltyprogramssubheader.should('be.visible')
  Client.Addloyalityprogram.click()
  Client.Loyalityprogrlabel.should('be.visible')
  Client.Loyalityprogrameditingdropdown.should('be.visible').click()
  Client.Loyalityprogrameditingdropdown1.should('be.visible').click()
  cy.get('[role="listbox"]').should('be.visible');
  Client.AirAsia.click()
  Client.Save.click()
  Client.Errorloyalty.should('be.visible')
  Client.Enternumber.type(LoyalityProgram)
  Client.Save.click()
  Client.Loyalityprogramupdateddata.should('be.visible');
  //Advisor_Client_UTC037 - Check - Edit Loyalty Program
  //Advisor_Client_UTC038 - Check - Add Another Program
  Client.Loyalityprogramedit.click()
  Client.Loyalityprogramaddanotherprogram.click()
  Client.Option1.should('be.visible').click()
  cy.get('[role="listbox"]').should('be.visible');
  Client.Jetairways.click()
  Client.Enternumber.eq(1).type(LoyalityProgram1)
  Client.Save.click()
  cy.get('div.flex.flex-col.gap-y-4')
  .children(':visible')
  .should('have.length', 2);
  Client.Loyalityprogramedit.click()
  //Advisor_Client_UTC039 - Check - Delete Loyalty Program
  Client.LoyalityDeletebutton.eq(0).click()
  Client.Save.click()
  cy.get('div.flex.flex-col.gap-y-4')
  .children(':visible')
  .should('have.length', 1);
  Client.Loyalityprogramedit.click()
  Client.CancelButton.click()
  //Delete the loyalityprograms so we can execute the scripts multiple times
  Client.Loyalityprogramedit.click()
  Client.LoyalityDeletebutton.eq(0).click()
  Client.Save.click()

})


            })
        })
      


