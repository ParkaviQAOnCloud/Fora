/*Advisor_Client_UTC040 - Advisor_Client_UTC053*/
import Home from "/cypress/support/Page Object/Advisor/Home"
import Client from "/cypress/support/Page Object/Advisor/Client"


describe('Advisor_Client_TS008',{ testIsolation: false }, function() {
  before(() => {
    
  cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })
  

  it('Advisor_client_UTC040 - UTC053', () => {
    cy.readAndSetExcelData()
    const testscriptId ='TS008_Clients.cy.js';
        // Fetch all test data using the custom command
    cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { Traveler_FirstName,InvalidEmail,MobileNumber,Personalemail3,Workemail2,Otheremail2,Traveler_LastName,Suffix,Phone_Number,Addressname,City,State,Zipcode,Legalnameeditfield,Legalnameeditfield1,Legalnameeditfield2,Legalnameeditfield3,KTN} = testData
        ////Fetch login details using the custom command
    cy.NotanadvisorclientLogin() 
   //cy.NotanadvisortravelLogin()
    //Click on menu bar
    Home.navbar.click()
    //Click the client page
    Client.Client.click()
    //Creating new client
    cy.UniqueName_CreateClient()
    //Advisor_Client_UTC040 - Check - 'Clients-Associate Travellers tab with no data
    //Validate - Click on the "Associated Travelers" tab on the client detail page
Client.Associatedtravelers.scrollIntoView().should('be.visible').click()
//Assertion - The page should contain:.Associated Travelers title,Store information about all people who might be traveling with your client,Add Traveler" button
Client.Associatedtravelerstext.scrollIntoView().should('be.visible')
Client.Associatedtravelerstext1.scrollIntoView().should('be.visible')
Client.Addtraveler.should('be.visible')
cy.wait(2000)
//Advisor_Client_UTC042 - Check - Cancel 'Add Traveler' 
Client.Addtraveler.click()
//click the cancel button
Client.AddtravelerCancel.click()
//Assertion - The popup should close and returm to the traveler page

Client.Addtraveler.should('be.visible')
//Advisor_Client_UTC041 - Check all the fields on the 'Add Traveler' page
//Click on the "Add Traveler" button.
Client.Addtraveler.click()
cy.wait(2000)
//Assertion - Verify the "Add Traveler" popup.
Client.Addtravelerheader.should('be.visible')
Client.Addtravelerheadersubheading.should('be.visible')
Client.Addtravelerfirstname.should('be.visible')
//const Firstname1 = generateShortUniqueName1()
Client.AddLastnameheader.should('be.visible')
//const Lastname1 = generateShortUniqueName1();
//Client.Addtravelerfirstnamefield.type(Firstname1)
Client.AddLastnamefield.should('be.visible')
//Client.Addtravelerlastnamefield.type(Lastname1)
//Unique name creation for to add the traveler
cy.UniqueName_Creation()
//Add the realtionship to client
Client.Realtionshiptoclient.should('be.visible')
Client.Realtionshiptoclientdropdown.click()
cy.get('[role="listbox"]').should('be.visible');
Client.Friend.click()
cy.wait(2000)
//Advisor_Client_UTC043 - Check - Add a New Traveler
//After enter all fields click the add traveler button
Client.AddtravelerAdd.click()
cy.wait(5000)
//Validate - The traveler should be saved and the traveler detail popup should appear.
Client.About.should('be.visible')
Client.Creditcard.should('be.visible')
Client.Loyaltyprograms.should('be.visible')
Client.Associatedtravelers.should('be.visible')
Client.Notes.should('be.visible')
Client.Traveleractionbutton.should('be.visible')
//Advisor_Client_UTC044 - Check - Edit Relationship
//Click the Click the three-dot action icon 
Client.Traveleractionbutton.eq(2).click()
//Assertion - A popup should appear with options:Edit Relationship,Delete Traveler
Client.Editrealtionship.should('be.visible')
Client.delete_traveler.should('be.visible')
//Click the edit relationship
Client.Editrealtionship.click()
//Validate - Verify the fields in the "Edit Relationship" popup.
Client.Editrealtionshipwindow.should('be.visible')
Client.Editrealtionshipsubheader.should('be.visible')
Client.Realtionshiptoclientheader.should('be.visible')
Client.Save.should('be.visible')
//Select a new relationship from the dropdown.
Client.Realtionshiptoclientheaderdropdown.should('be.visible').click()
Client.Siblings.click()
cy.wait(1000)
//Click the "Save" button.
Client.Save.click()
//Assertion - The relationship should be updated, and the changes should reflect in the traveler detail view.
Client.Siblingstext.should('be.visible')
//Advisor_Client_UTC045 - Check - Delete Traveler
//Click on the "Delete Traveler" option.
Client.Traveleractionbutton.eq(2).click()
Client.delete_traveler.click()
//The popup should contain:
cy.contains("Delete Traveler")
cy.contains("No, keep traveler")
cy.contains("Yes, delete traveler")
//Click the "No, keep traveler" button.
cy.contains("No, keep traveler").click()
cy.wait(1000)
//Assertion - The popup should close without deleting the traveler.
Client.Traveleractionbutton.should('be.visible')
//Advisor_Client_UTC046 - Check - Convert Traveler to Client
Client.Converttoclient.should('be.visible')


  })
})
})
