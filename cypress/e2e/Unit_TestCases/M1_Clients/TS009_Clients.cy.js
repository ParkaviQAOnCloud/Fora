/* Advisor_Client_UTC054 - Check - 'Clients-Notes' tab with no data
Advisor_Client_UTC055 - Check - Add Notes
Advisor_Client_UTC056 - Check - Edit Notes
Advisor_Client_UTC057 - Check - Cancel Notes

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

  it('Advisor_client_UTC054 - UTC057', () => {
    cy.readAndSetExcelData()
 
    
    const testscriptId ='TS009_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { Note,Link,Note1} = testData
   //Fetch login details using the custom command
  // cy.TestLogin()
   cy.NotanadvisorclientLogin()

  // Click on the menu bar
    Home.navbar.click()
 // click on clients
    Client.Client.click()
    Client.Addclient.should('be.visible').click()
 //Click the client once created
 cy.UniqueName_CreateClient()
  //Advisor_Client_UTC054
//Validate step 1, step 2  - Click on the "Notes" tab on the client detail page, Verify the Notes page.
//Click the notes
Client.Notes.should('be.visible').click()
//Assertion - Once navigates to notes page following detials should be visible
//Notes icon, Notes title, Message - "Use the notes section for keeping track of custom details you want to record..","Add Note" button.
  Client.Noteicon.should('be.visible')
  Client.Notetext.should('be.visible')
  Client.Notetext1.scrollIntoView().should('be.visible')
  cy.wait(2000)
  Client.AddNotebutton.should('be.visible')
  //Advisor_Client_UTC055
  //Validate Click on the "Add Note" button in the Notes section.
  Client.AddNotebutton.click()
  //Assertion
  Client.NoteTextbox.should('be.visible')
  Client.NoteLink.should('be.visible')
  Client.CancelButton.should('be.visible')
  Client.formatOptions.should('be.visible')
  //Save button shoud be disable initially
  Client.Save.should('be.disabled')
  //Type the text and apply different formatting options
  Client.NoteTextbox.type(Note)
  Client.NoteTextbox.type('{selectall}');
  cy.get('div.ql-toolbar button').each(($button) => {
    cy.wrap($button).click();
  });
  Client.NoteTextbox.type(Note)
  //Validate - After Entering the text, "Save" button should become enabled.
  Client.Save.should('be.enabled')
  Client.NoteTextbox.type('{selectall}');
  Client.NoteLink.click()
  Client.Linktextbox.clear().type(Link)
  Client.Linksave.click()
  //Validate Upload a picture to include in the note.
  cy.get('input[type="file"]').attachFile('Profilepict.jpg');
  Client.Save.click()
  cy.wait(3000)
  //After click the save button, The updated note should be saved and displayed correctly in the "Notes" section.
  //Assertion
  Client.aftersave_notename.should('have.text',Note)
  //Advisor_Client_UTC056
  //Validate - Check - Edit Notes
  cy.get('[data-testid="edit-button"]').click()
  Client.NoteTextbox.clear()
  Client.NoteTextbox.type(Note1)
  Client.Save.click()
  cy.wait(2000)
  //Assertion - Once click the save note was updated with the updated name
  Client.aftersave_notename.should('have.text',Note1)
  //Advisor_Client_UTC057 - Check - Cancel Notes
  //Click the edit 
  cy.get('[data-testid="edit-button"]').click()
  //Enter text 
  Client.NoteTextbox.clear()
  Client.NoteTextbox.type(Note)
  //Click the cancel button
  Client.CancelButton.click()
  //Assertion -  after click the cancel button Note(Testlink) not created under note, it should be Note1(Testlink2)
  Client.aftersave_notename.should('have.text',Note1)
    })
  })

})



    
      


