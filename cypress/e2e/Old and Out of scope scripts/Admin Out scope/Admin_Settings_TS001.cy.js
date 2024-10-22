/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Settings menu"	*/ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of Settings menu"	 */ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox in Notifications page "				*/ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of filters in Notification page"					 */ 



import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Notification from "../../support/Page Object/Admin/Notificationpage"
describe('Admin_Settings_TS001',{ testIsolation: false }, function() {

  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Admin_Setting_TC001_To verify the Settings menu ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  cy.AdminLogin()
 // cy.viewport(390,844)
  Admin.navbar.click()
  Settings.settings.click()
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

  Settings.Notification.should('be.visible')
  Settings.Notificationtransport.should('be.visible')
  Settings.Accesslist.should('be.visible')
  Settings.Userrole.should('be.visible')
  Settings.Userlogs.should('be.visible')
  Settings.Features.should('be.visible')
  Settings.Usertags.should('be.visible')
  Settings.Revokereason.should('be.visible')
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('bottom', { duration: 800 });

  Settings.Cancelreason.should('be.visible')
  Settings.sabre.should('be.visible')
  Settings.commissionplan.should('be.visible')
  Settings.staticpage.should('be.visible')
  Settings.maintenance.should('be.visible')
  Settings.cache.should('be.visible')
  Settings.advisorcohort.should('be.visible')
  Settings.onboardingchecklist.should('be.visible')
  Settings.Infobanner.should('be.visible')

})


it('Admin_Setting__TC002_To verify  ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
 /* cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()*/
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

  Settings.Notification.eq(0).click({force: true})
 Notification.searchbar.should('be.visible')
 Notification.addbutton.should('be.visible')
 Notification.exportnotification.should('be.visible')
 Notification.importnotification.should('be.visible')
 Notification.filter.should('be.visible')
 Notification.selectcolumn.should('be.visible')

})
it('Admin_Setting_TC003_To verify if user can access search textbox in Notifications page  ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  /*cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()*/
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

 //Settings.Notification.eq(0).click()
 Notification.searchbar.should('be.visible')
 Notification.searchbar.type('Advisor{enter}')
 Notification.searchbar.clear().type('123{enter}')
 Notification.searchbar.clear().type('@#${enter}')
 Notification.searchbar.clear().type('Fora Travel|advisor email confirmation{enter}')

})
it('Admin_Setting_TC004_To verify access filters in Notification page  ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  /*cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()*/
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

  //Settings.Notification.eq(0).click()
  Notification.filter.click()
  Notification.Isactive.select('False');
  Notification.filtersavebutton.click()
  Notification.filter.click()
  Notification.Isactive.select('True');
  Notification.filtersavebutton.click()
})
it('Admin_Setting_TC005_To verify select column in Notification page  ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  /*cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()*/
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

  //Settings.Notification.eq(0).click()
  Notification.selectcolumn.click()
 Notification.enabled.uncheck()
 Notification.save.click()
 Notification.selectcolumn.click()
 Notification.enabled.check()
 Notification.save.click()
 Notification.selectcolumn.click()
 Notification.cancel.click()
})

/*it('Admin_User_TC005_To verify select column in Notification page  ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  cy.AdminLogin()
  Admin.navbar.click()
  Settings.settings.click()
  cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('center', { duration: 800 });

  Settings.Notification.click()
  Notification.addbutton.click()
})*/
})