/* Description for TC003:"The goal of the test is to verify the following functionalities:
1.  Contents of search"								*/	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of column filter"									*/	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of actions"													*/	




import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Notificationtransport from "../../support/Page Object/Admin/Notificationtransport"
describe('Admin_Notification-transport_TS002',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Admin_Notification-transport_TC003_To verify if user can search', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
  cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()
  Notificationtransport.Notificationtranport.click()
  cy.fixture('Admin_Notification_Transport_TS002.json').then(function (dataJson) {
  Notificationtransport.Serachbar.type(dataJson.Search1+'{enter}')
  Notificationtransport.Serachbar.clear().type(dataJson.Search2+'{enter}')
  Notificationtransport.Desktop.should('be.visible')
  Notificationtransport.Filterbutton.click()
  Notificationtransport.Slugcheckbox.click()
  Notificationtransport.Columnsave.click()
  Notificationtransport.slugheader.should('be.visible')
  Notificationtransport.Serachbar.type(dataJson.Search3+'{enter}')
Notificationtransport.test.should('be.visible')

})
})

it('Admin_Notification-transport_TC004_To verify if user can access the columns', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  Notificationtransport.Filterbutton.click()
  Notificationtransport.Modulecheckbox.click()
  Notificationtransport.Columnsave.click()
})

it('Admin_Notification-transport_TC005_To verify if user can perform the actions', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Admin_Notification_Transport_TS002.json').then(function (dataJson) {

    Notificationtransport.Serachbar.type(dataJson.Search3+'{enter}')
    Notificationtransport.Edit.click()
    Notificationtransport.Slug.type(dataJson.Slug)
    Notificationtransport.Save.click()
    Notificationtransport.Alert.should('be.visible')
    Notificationtransport.Edit.click()
Notificationtransport.Cancel.click()
    })
})
})