
/* Description for TC006:"The goal of the test is to verify the following functionalities:
1.  Contents of filters in Notification page"	 */	

/* Description for TC007:"The goal of the test is to verify the following functionalities:
1.  Contents of Import & Export Notification"				 */	

/* Description for TC008:"The goal of the test is to verify the following functionalities:
1.  Contents of action in Notification page"			*/	

/*Pre condition: Slug name should be unique*/
import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Notification from "../../support/Page Object/Admin/Notificationpage"

describe('Admin_Settings_TS002',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Admin_Settings_TC006_To verify  if the user can Add new notifications ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
  cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()
 // cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });
  Settings.Notification.click()
 /* cy.fixture('Admin_Setting_TS002.json').then(function (dataJson) {
  Notification.addbutton.click()
  Notification.Subjectheader.should('be.visible')
cy.fixture('Admin_Setting_TS002.json').then(function (dataJson) {

  Notification.Messageheader.should('be.visible')
  
  Notification.Messagehtmlheader.should('be.visible')
Notification.Slugheader.should('be.visible')
Notification.Typeheader.scrollIntoView().should('be.visible')
Notification.Descriptionheader.scrollIntoView().should('be.visible')
Notification.Transportheader.scrollIntoView().should('be.visible')
Notification.Externalidfortransportheader.scrollIntoView().should('be.visible')
  Notification.cancelbutton.scrollIntoView().should('be.visible')
 
  Notification.savebutton.click()
  Notification.Error1.should('be.visible')
  Notification.Error2.should('be.visible')
 Notification.Subject.type(dataJson.Subject) 
 Notification.Message.type(dataJson.Message)
  Notification.Messagehtml.type(dataJson.Messagehtml)
  Notification.Slug.type(dataJson.Slug)
  Notification.savebutton.click()
  Notification.Error1.scrollIntoView().should('be.visible')
Notification.Type.click()
Notification.Search.type(dataJson.Type1+'{enter}')
Notification.savebutton.click()
Notification.clear.click()
Notification.Type.click()
cy.wait(2000)
Notification.Type.click()
Notification.Search.type(dataJson.Type2+'{enter}')
Notification.savebutton.click()
Notification.Description.type(dataJson.Description)
Notification.Transport.click({force:true})
Notification.Search1.type(dataJson.Transport+'{enter}')
Notification.checkbox.check()
Notification.savebutton.click()
Notification.SucessMessage.should('be.visible')

})*/
})


it('Admin_Settings_TC007_To verify if the user is able to Import & Export Notification', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Notification.Exportnotification.click()
  Notification.Importnotification.click()
 // Notification.Uploadfile.click()
 const File ='Training.jpeg' 
 cy.get('[type="file"]').attachFile(File)  
 Notification.savebutton.click()
 cy.get('#imported_file-clear_id').check()
 Notification.savebutton.click()
 Notification.Error1.click()
  const File1='Notification.json' 
    cy.get('[type="file"]').attachFile(File1)  
    Notification.savebutton.click()
    Notification.alert.should('be.visible')
 

})
it('Admin_Settings_TC008_To verify if user can perform actions ', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
Notification.searchbar.type('New{enter}')
Notification.Edit.click()
Notification.Editbutton.click()
cy.fixture('Admin_Setting_TS002.json').then(function (dataJson) {
Notification.Message.clear().type(dataJson.Message)
Notification.cancelbutton.click()
Notification.searchbar.type(dataJson.Search+'{enter}')
Notification.Edit.click()
Notification.atbutton.click()
Notification.Email.type('{enter}')
Notification.Error1.should('be.visible')
Notification.Email.type(dataJson.Email1+'{enter}')
Notification.Error.should('be.visible')
Notification.Email.clear().type(dataJson.Email2+'{enter}')
//Notification.Context.type('Helllo')
cy.wait(2000)
Notification.savebutton.click()
//Notification.alert.should('be.visible')
})
})


})