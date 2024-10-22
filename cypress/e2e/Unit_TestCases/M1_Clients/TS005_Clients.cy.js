/* To Validate Advisor_Client_UTC012 - Check all the fields on Clients-About Tab
To Validate Advisor_Client_UTC013 - Check - Edit/Cancel Functionality in 'Name' section under 'About - Contact'
To Validate Advisor_Client_UTC014 - Check - Edit/Cancel Functionality in 'Email' section under 'About - Contact'
To Validate Advisor_Client_UTC015 - Check - Edit/Cancel Functionality in 'Phone Number' section under 'About - Contact'
To Validate Advisor_Client_UTC016 - Check - Edit/Cancel Functionality in 'Address section under 'About - Contact'
To Validate Advisor_Client_UTC017 - Check -  Add/Delete ' another address' in 'Address' section
To Validate Advisor_Client_UTC018 - Check - Edit/Cancel Functionality in 'Important Dates' section under 'About - Contact'
To Validate Advisor_Client_UTC019 - Check -  Add/Delete ' another date' in 'Important Dates' section
To Validate Advisor_Client_UTC020 - Check - Edit/Cancel Functionality in 'Allergies & Dietary Restrictions' section under 'About - Personal Details'
To Validate Advisor_Client_UTC021 - Check -  Add/Delete 'Custom Options' in 'Allergies & Dietary Restrictions' section
To Validate Advisor_Client_UTC022 - Check - Edit/Cancel Functionality in 'Flight Ready?' section under 'About - Flight Info'
To Validate Advisor_Client_UTC023 - Check - Edit/Cancel Functionality in 'Known Traveler Number' in 'Flight Ready?' section*/


  import Home from "/cypress/support/Page Object/Advisor/Home"
  import Client from "/cypress/support/Page Object/Advisor/Client"
  
  describe('Advisor_Client',{ testIsolation: false }, function() {
    before(() => {
      
  
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
   cy.clearAllLocalStorage()
    })
  
    it('Advisor_client_TC012 to TC023', () => {
      cy.readAndSetExcelData()
 
    
    const testscriptId ='TS005_Clients.cy.js';
        // Fetch all test data using the custom command
        cy.getTestDataForTS(testscriptId).then((testData) => {
          console.log(testData);
        const { Firstname,Lastname,Middlename,Preferedpartner,Suffix,FullName_Search,InvalidEmail,Personalemail3,Workemail2,Otheremail2} = testData
     //Fetch login details using the custom command
   // cy.TestLogin()
    cy.NotanadvisorclientLogin()
   //cy.ClientLogin()
    // Click on the menu bar
      Home.navbar.click()
      Client.Client.should('be.visible')
    // click on clients
      Client.Client.click()
    // Assertion - It should navigate to client page
      cy.url().should('include', 'https://advisor.forastaging.net/clients')
    //Advisor_Client_UTC012
    //Validate step 1 - Verify the About tab is displayed
    //Click on the client details page 
    Client.searchbar.should('be.visible')
    Client.searchbar.type(FullName_Search)
    cy.wait(1000)
    //search results  - selector(Xpath)
    cy.xpath("//h4[@class='block text-header font-bold text-ellipsis overflow-hidden mr-2']")
  .should('have.text', FullName_Search).click();
   cy.wait(2000)
    //Assertion - The About tab should contain the following sections:
    //Contact
    Client.Contact.scrollIntoView().should('be.visible')
    //Personal Details
    Client.Personaldetails.scrollIntoView().should('be.visible')
    //Flight Info
    Client.Flightinfo.scrollIntoView().should('be.visible')
    // Validate step 2 -  Verify the Contact Section 
    //Name
    Client.Name.scrollIntoView().should('be.visible')
    //Email
    Client.Email.scrollIntoView().should('be.visible')
    //Phone Number
   Client.Phonenumber.scrollIntoView().should('be.visible')
    //Address
   Client.Addressname.scrollIntoView().should('be.visible')
    //Validate step 3 - Verify the Personal Details Section
    //Important Dates
    Client.Importantdates.scrollIntoView().should('be.visible')
    // Allergies & Dietary Restrictions
    Client.Allergies.scrollIntoView().should('be.visible')
    // Validate step 4 - Verify the Flight Info Section
    Client.Flightready.scrollIntoView().should('be.visible')
    Client.KTN.scrollIntoView().should('be.visible')
    //Advisor_Client_UTC013
    //The Cancel button should be visible and clickable after click the pencil icon
    Client.Edit.eq(0).click()
    //click the cancel button
    Client.CancelButton.should('be.visible').click()
    // Validate - Validate the functionality of the "Save" button.
    //Enter the  data in the Name fields.


Client.Edit.eq(0).click()

Client.Editing.should('be.visible')
Client.Prefix.should('be.visible')
Client.Prefixfield.click()
Client.Mrs.should('be.visible')
Client.Miss.should('be.visible')
Client.Ms.should('be.visible')
Client.Dr.should('be.visible')
Client.Ms.click()
Client.Firstname_Edit.scrollIntoView().should('be.visible')

Client.Firstnamefield.eq(0).should('be.visible').clear().type(Firstname)
Client. Middlename_edit.scrollIntoView().should('be.visible')
Client.Middlenamefield_Contact.scrollIntoView().should('be.visible').type(Middlename)
Client.Lastname_edit.scrollIntoView().should('be.visible')
Client.Lastnamefield.eq(2).should('be.visible').clear().type(Lastname)
Client.Preferrednameheader_edit.scrollIntoView().should('be.visible')
Client.Preferrednamefield_edit.scrollIntoView().should('be.visible').type(Preferedpartner)
Client.Suffixheader.scrollIntoView().should('be.visible')
Client.Suffixfield.scrollIntoView().should('be.visible').type(Suffix)
Client.Pronounsheader.scrollIntoView().should('be.visible')
Client.Pronounsfield.scrollIntoView().should('be.visible').click()
Client.sheorher.should('be.visible')
Client.heorhim.should('be.visible')
Client.Theyorthem.should('be.visible')
Client.sheorher.should('be.visible').click()
Client.Save.click()
//Assertion - After saving, the name fields should collapse and display the entered details.
cy.wait(2000)
//Xapth selector for name grid
cy.xpath("//div[@class='flex flex-col gap-y-1']").eq(0)
.should('include.text', "Ms" + " " + Firstname + " " + Middlename + " " + Lastname + " " + Suffix)
//Validate step 11 - Validate the name text fields for error message on missing mandatory fields.
Client.Edit.eq(0).click()
Client.Firstnamefield.eq(0).should('be.visible').clear()
Client.Lastnamefield.eq(2).should('be.visible').clear()
Client.Save.click()
//Assertion
cy.contains("First name is required")
cy.contains("Last name is required")
cy.wait(1000)
Client.CancelButton.should('be.visible').click()

//Advisor_Client_UTC014 - Verify the "Email" field.
Client.Edit.eq(1).click()
Client.PersonalEmail.should('be.visible')
Client.WorkEmail.should('be.visible')
Client.OtherEmail.should('be.visible')
//Validate - Enter an invalid email ID then get It will display an error message: "Please enter a valid email."
Client.PersonalEmailtextfield.eq(0).clear().click().type(InvalidEmail)
cy.wait(2000)
Client.Save.click()
Client.Error.should('be.visible')
//Validate save functionality
Client.PersonalEmailtextfield.eq(0).click().clear().type(Personalemail3)
Client.WorkEmailtextfield.click().clear().type(Workemail2)
Client.OtherEmailtextfield.click().clear().type(Otheremail2)
Client.Save.click()
//cy.wait(2500)
//cy.xpath("//span[normalize-space()='Work'])[1]").contains(Workemail2)







    })
  })
})
  
  
  