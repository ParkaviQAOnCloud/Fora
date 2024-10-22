/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Maintenance page"						 */	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of Maintenance mode"										 */	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of Maintenance message"										 */	



import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Maintenance from "../../support/Page Object/Admin/Maintenance"
describe('Admin_Sabre-Hotels_TS001',{ testIsolation: false }, function() {
    before(() => {
      // ensure clean test slate for these tests
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
    })
    it('Admin_Maintenance_TC001_To verify the Maintenance page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
      cy.AdminLogin()
      Admin.navbar.click()
      Settings.settings.click()
      Maintenance.Maintenance.click()
      cy.url().should('include', 'https://admin.forastaging.net/settings/maintenance/')
      Maintenance.Maintenanceheader.should('be.visible')
      Maintenance.Maintenancemode.should('be.visible')
      Maintenance.Maintenancemodesubheader.should('be.visible')
      Maintenance.Switch.should('be.visible')
      Maintenance.Message.should('be.visible')
      Maintenance.Messagesubheader.should('be.visible')
      Maintenance.Edit.should('be.visible')
    })


    it('Admin_Maintenance_TC003_To verify the user user can edit maintanence message', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        Maintenance.Message.should('be.visible')
        Maintenance.Messagesubheader.should('be.visible')
        Maintenance.Edit.click()
        Maintenance.Textmessage.clear()
        Maintenance.save.click()
        Maintenance.errormsg.should('be.visible')
        cy.fixture('Admin_Maintenance_TS001.json').then(function (dataJson) {
        Maintenance.Textmessage.type(dataJson.Text)
        Maintenance.save.click()
        Maintenance.Edit.click()
        Maintenance.Cancel.click()
        })
    })
    it('Admin_Maintenance_TC002_To verify the user can turn on/off Maintenance mode', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        Maintenance.Maintenanceheader.should('be.visible')
        Maintenance.Maintenancemode.should('be.visible')
        Maintenance.Maintenancemodesubheader.should('be.visible')
        Maintenance.Switch.click()
        Maintenance.logout.click()
        cy.MaintenanceLogin()
     
       // Maintenance.Errormsg.should('be.visible')
        cy.wait(5000)
        cy.visit('https://admin.forastaging.net/login/?next=/')
    cy.xpath("//a[normalize-space()='Sign in with Fora Google']").click()
        cy.wait(2000)
        Admin.navbar.click()
        Settings.settings.click()
        Maintenance.Maintenance.click()
        Maintenance.Switch.click()
        Maintenance.logout.click()
        cy.MaintenanceLogin()
        cy.url().should('include', 'https://advisor.forastaging.net/')



    })
})