/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Cache page"									 */	


import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Cache from "../../support/Page Object/Admin/Cache"
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
      Cache.Cache.click()
      cy.url().should('include', 'https://admin.forastaging.net/cache/')
      Cache.Cacheheader.should('be.visible')
      Cache.Flushbookingcachebutton.should('be.visible').click()
      Cache.Alert.should('be.visible')
      cy.get('.close').click()
    })
})