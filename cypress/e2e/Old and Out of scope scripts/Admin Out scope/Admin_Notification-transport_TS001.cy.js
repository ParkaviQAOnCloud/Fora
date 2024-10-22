/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Notification transport page"					*/	

/*Pre condition: Slug name should be unique*/
import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Notificationtransport from "../../support/Page Object/Admin/Notificationtransport"
describe('Admin_Notification-transport_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Admin_Notification-transport_TC001_To verify the Notification transport page ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
  cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()
  Notificationtransport.Notificationtranport.click()
  cy.url().should('include', 'https://admin.forastaging.net/notification-transport/');
  Notificationtransport.Header.should('be.visible')
  Notificationtransport.Serachbar.should('be.visible')
  Notificationtransport.Addbutton.should('be.visible')
  Notificationtransport.Columnname.should('be.visible')
  Notificationtransport.Columnaction.should('be.visible')


  
})

it('Admin_Notification-transport_TC002_To verify the if user can add the notification transport ', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })

Notificationtransport.Addbutton.click()
cy.fixture('Admin_Notification_Transport_TS001.json').then(function (dataJson) {
Notificationtransport.Name.type(dataJson.Name)
Notificationtransport.Save.click()
Notificationtransport.Error.should('be.visible')
Notificationtransport.Slug.type(dataJson.Slug)
Notificationtransport.Module.type(dataJson.Module)
Notificationtransport.Save.click()
Notificationtransport.Alert.should('be.visible')
Notificationtransport.Closebutton.click()
})
})
})