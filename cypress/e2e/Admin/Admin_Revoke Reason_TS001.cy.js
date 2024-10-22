
/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Revoke reasons page"	*/	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"					*/	


/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of Filter"									*/	


/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of columns popup"										*/	


/* Precondition: Name should be unique in Add revoke reason page*/


import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Revokereason from "../../support/Page Object/Admin/Revokereason"
describe('Admin_Revoke Reason_TS001',{ testIsolation: false }, function() {
    before(() => {
      // ensure clean test slate for these tests
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
    })
    it('Admin_Revoke Reason_TC001_To verify the Revoke Reasons page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
       // cy.viewport(390,844)
     // cy.AdminLogin()
     cy.NotanadvisorAdminLogin()
     Admin.navbar.click()
      Settings.settings.click()
      Revokereason.Revokereason.click()
      Revokereason.Revokereasonheader.should('be.visible')
      cy.url().should('include', 'https://admin.forastaging.net/revoke-reason/')

      Revokereason.Searchbar.should('be.visible')
      Revokereason.filter.should('be.visible')
      Revokereason.column.should('be.visible')
      Revokereason.addbutton.should('be.visible')
      Revokereason.Name.should('be.visible')
      Revokereason.Order.should('be.visible')
      Revokereason.Actions.should('be.visible')

    })
    it('Admin_Revoke Reason_TC002_To verify the if user can search using search textbox', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.fixture('Admin_Revoke Reason_TS001.json').then(function (dataJson) {

        Revokereason.Searchbar.type(dataJson.Search1+'{enter}')
        Revokereason.Searchbar.clear().type(dataJson.Search2+'{enter}')
        Revokereason.Result.should('be.visible')
    })
})
it('Admin_Revoke Reason_TC003_To verify the if user can apply filters', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Revokereason.filter.click()
  cy.get("select").select(1)
  cy.get("select").should("have.value", "True");
  Revokereason.Applybutton.click()
  Revokereason.deletebutton.should('be.visible')
  Revokereason.filter.click()
  cy.get("select").select(2)
  cy.get("select").should("have.value", "False");
  Revokereason.Applybutton.click()
  Revokereason.restorebutton.should('be.visible')
  Revokereason.filter.click()
  cy.get("select").select(0)
  Revokereason.Applybutton.click()
  Revokereason.filter.click()
  cy.wait(2000)

  Revokereason.Cancelbutton.click()
  cy.wait(2000)

})

it('Admin_Revoke Reason_TC004_To verify the  if user can access the columns', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
Revokereason.column.click()
Revokereason.Namecheckbox.should('be.checked');
Revokereason.Ordercheckbox.should('be.checked');
Revokereason.Actioncheckbox.should('be.checked');
Revokereason.createdatcheckbox.check()
Revokereason.Updatedatcheckbox.check()
Revokereason.Savecolumnsetup.click()
Revokereason.coulmncreated.should('be.visible')
Revokereason.Coulmnupdated.should('be.visible')
Revokereason.column.click()
Revokereason.createdatcheckbox.should('be.checked');
Revokereason.Updatedatcheckbox.should('be.checked');
cy.wait(2000)
Revokereason.Cancelicon.click()
cy.wait(2000)


})

it('Admin_Revoke Reason_TC005_To verify the  if user can access the columns', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
 Revokereason.addbutton.click()
 cy.url().should('include', 'https://admin.forastaging.net/revoke-reason/add/')
 Revokereason.Revokereasonheader.should('be.visible')
 Revokereason.nameheader.should('be.visible')
 Revokereason.requirenote.should('be.visible')
 Revokereason.Savebutton.click()
 Revokereason.errormsg.should('be.visible')
 cy.fixture('Admin_Revoke Reason_TS001.json').then(function (dataJson) {
 Revokereason.revokereasonname.type(dataJson.Revokename)
 Revokereason.Savebutton.click()
 Revokereason.errormsg1.should('be.visible')
 const baseName = 'Revoke reason';

    const uniqueName = `${baseName}_${Date.now()}`;

 Revokereason.revokereasonname.clear().type(uniqueName)
 Revokereason.checkbox.check()
 Revokereason.Savebutton.click()
Revokereason.addbutton.click()
Revokereason.Cancelbutton.click()

 })
})

it('Admin_Revoke Reason_TC006_To verify the user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })

Revokereason.Editbutton.scrollIntoView().should('be.visible')
Revokereason.Viewbutton.scrollIntoView().should('be.visible')
Revokereason.Archivebutton.scrollIntoView().should('be.visible')
Revokereason.Editbutton.scrollIntoView().click()
cy.fixture('Admin_Revoke Reason_TS001.json').then(function (dataJson) {
Revokereason.revokereasonname.clear().type(dataJson.EditReason)
Revokereason.Savebutton.click()
Revokereason.alert.should('be.visible')
Revokereason.Revokereasonmsg.should('be.visible')
Revokereason.editedreason.scrollIntoView().should('be.visible')
Revokereason.Viewbutton.scrollIntoView().click()
Revokereason.editname.should('be.visible')
Revokereason.Noterequireedit.should('be.visible')
Revokereason.Creatededit.should('be.visible')
Revokereason.Updatededit.should('be.visible')
Revokereason.viewedit.click()
Revokereason.revokereasonname.clear().type(dataJson.EditReason1)
Revokereason.Savebutton.click()
Revokereason.alert.should('be.visible')
Revokereason.Archivebutton.scrollIntoView().click()
Revokereason.archivemsg.should('be.visible')
Revokereason.archivemsg.should('be.visible')
Revokereason.yes.should('be.visible')
Revokereason.No.should('be.visible')
cy.wait(2000)
Revokereason.No.click()
cy.wait(2000)
Revokereason.Archivebutton.scrollIntoView().click()
cy.wait(2000)
Revokereason.yes.click()
cy.wait(2000)
Revokereason.alert.should('be.visible')
Revokereason.filter.click()
  cy.get("select").select(2)
  Revokereason.Applybutton.click()
  Revokereason.restorebutton.should('be.visible')
  cy.wait(2000)
  Revokereason.restorebutton.click()
  cy.wait(2000)
  Revokereason.restoremsg.should('be.visible')
  Revokereason.Revokecancel.click()
  cy.wait(2000)
  Revokereason.restorebutton.click()
  cy.wait(2000)
Revokereason.confirmbutton.click()
cy.wait(2000)
Revokereason.filter.click()
  cy.get("select").select(1)
  Revokereason.Applybutton.click()
  cy.wait(2000)
Revokereason.Orderarrowup.click()
cy.wait(2000)
Revokereason.drownarrowresult.should('be.visible')
Revokereason.Orderarrowdown.click()
cy.wait(2000)
})
})
})