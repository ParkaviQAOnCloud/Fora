/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of users role page"															*/	

/* Description for TC002: ""The goal of the test is to verify the following functionalities:
1.  Contents of add new users role"																			*/

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"																			*/

/* Description for TC004:"The goal of the test is to verify the following functionalities:
1.  Contents of column heading"																	*/

/* Description for TC005:"The goal of the test is to verify the following functionalities:
1.  Contents of actions"																			*/

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of Sort"		*/


import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Userrole from "../../support/Page Object/Admin/Userrole"
describe('Admin_User roles_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })

it('Admin_User roles_TC001_To verify users role page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
 // cy.AdminLogin()
 cy.NotanadvisorAdminLogin()
 Admin.navbar.click()
  Settings.settings.click()
  Userrole.Userrole.click()
  cy.url().should('include', 'https://admin.forastaging.net/userrole/');

  Userrole.ID.should('be.visible')
  Userrole.Name.should('be.visible')
  Userrole.Default.should('be.visible')
  Userrole.Action.should('be.visible')
  Userrole.Add.should('be.visible')
})
it('Admin_User roles_TC002_To verify if user can add the new user role', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Userrole.Add.click()
  Userrole.Savebutton.should('be.visible').click()
  Userrole.errorrmsg.should('be.visible')
  cy.fixture('Admin_User roles_TS001.json').then(function (dataJson) {
    const baseName = 'Userrole';

    const uniqueName = `${baseName}_${Date.now()}`;
  Userrole.Namefield.should('be.visible').type(uniqueName)
  Userrole.Descriptionfield.should('be.visible').type(dataJson.Description)
  Userrole.Deafultcheckbox.check()
  Userrole.Cancelbutton.click()
})
})
it('Admin_User roles_TC003_To verify if user can search using search textbox', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.fixture('Admin_User roles_TS001.json').then(function (dataJson) {
  Userrole.Searchbar.type(dataJson.Search1+'{enter}')
  Userrole.Searchbar.clear().type(dataJson.Search2+'{enter}')
  Userrole.Manager.should('be.visible')
  Userrole.Searchbar.clear().type('{enter}')
})
})
it('Admin_User roles_TC004_To verify if user can access the columns', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
Userrole.Column.click()
Userrole.ColumnID.should('be.visible')
Userrole.IDcheckbox.uncheck()
Userrole.coulmnname.should('be.visible')
Userrole.namecheckbox.should('be.checked')
Userrole.ColumnDefault.should('be.visible')
Userrole.defaultcheckbox.uncheck()
Userrole.ColumnActions.should('be.visible')
Userrole.Actioncheckbox.should('be.checked')
Userrole.Savecoulmn.click()
Userrole.tableheader.should('not.contain', 'ID');
Userrole.tableheader.should('not.contain', 'Default');

})

it('Admin_User roles_TC005_To verify if user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
Userrole.Edit.click()
cy.fixture('Admin_User roles_TS001.json').then(function (dataJson) {


Userrole.Descriptionfield.clear().should('be.visible').type(dataJson.Description)
Userrole.Deafultcheckbox.uncheck()
Userrole.Savebutton.click()
Userrole.alert.click()
Userrole.View.click()
//Userrole.Userrolename.should('be.visible')
Userrole.viewedit.click()
Userrole.Namefield.should('be.visible')
Userrole.Descriptionfield.should('be.visible')
Userrole.Cancelbutton.click()
Userrole.Manager.click()
Userrole.Userrolename1.should('be.visible')
Userrole.Backtouserrole.click()


})
})

it('Admin_User roles_TC006_To verify if user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Userrole.Column.click()
  Userrole.IDcheckbox.check()
  Userrole.Savecoulmn.click()
  Userrole.Idsort.click()
  Userrole.result.should('contain','1')
  Userrole.Namesort.click()

  Userrole.nameresult.should('contain','Advisor')
  Userrole.Idsort.click()
  Userrole.result.should('contain','5')
  Userrole.Namesort.click()

  Userrole.nameresult.should('contain','Superadmin')
})
})