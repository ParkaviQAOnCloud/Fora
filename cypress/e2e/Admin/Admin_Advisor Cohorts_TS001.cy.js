/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Advisor Cohorts page"												 */	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1. Contents of the search textbox on the Advisor Cohorts page "												 */	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of filter on the Advisor Cohort page"													 */	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of columns heading on the Advisor Cohort page"												 */	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of sorting the cohort list on the Advisor Cohort page"												 */	

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of adding new advisor cohort"												 */	

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of actions"												 */	

 /* Precondition : Name feild should be unique*/

import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Cohorts from "../../support/Page Object/Admin/Cohorts"
describe('Admin_Advisor Cohorts_TC001',{ testIsolation: false }, function() {
    before(() => {
      // ensure clean test slate for these tests
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
    })
    it('Admin_Advisor Cohorts_TC001_To verify the Advisor Cohorts page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.NotanadvisorAdminLogin()
        //cy.AdminLogin()
    Admin.navbar.click()
    Settings.settings.click()
    cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('bottom', { duration: 800 });
    Cohorts.Cohort.scrollIntoView().click()
    cy.url().should('include', 'https://admin.forastaging.net/advisor-cohort/')
    Cohorts.Cohortheader.should('be.visible')
    Cohorts.Searchbar.should('be.visible')
    Cohorts.filter.should('be.visible')
    Cohorts.column.should('be.visible')
    Cohorts.addbutton.should('be.visible')
    Cohorts.Name.should('be.visible')
    Cohorts.Actions.should('be.visible')

    })

    it('Admin_Advisor Cohorts_TC002_To verify the user can search using search textbox', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.fixture('Admin_Advisor Cohorts_TS001.json').then(function (dataJson) {
        Cohorts.Searchbar.type(dataJson.Search1+'{enter}')
        Cohorts.Searchbar.clear().type(dataJson.Search2+'{enter}')
        Cohorts.Searchbar.clear().type(dataJson.Search3+'{enter}')
        Cohorts.Result.should('be.visible')

    })
})
it('Admin_Advisor Cohorts_TC003_To verify the if  user can apply filters', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Cohorts.Searchbar.clear().type('{enter}')
Cohorts.filter.click()
cy.get("select").select(1)
cy.get("select").should("have.value", "True");
Cohorts.Applybutton.click()
Cohorts.deletebutton.should('be.visible')
Cohorts.filter.click()
cy.get("select").select(2)
cy.get("select").should("have.value", "False");
Cohorts.Applybutton.click()
Cohorts.restorebutton.should('be.visible')
Cohorts.filter.click()
cy.get("select").select(0)
Cohorts.Applybutton.click()
Cohorts.filter.click()
cy.wait(2000)
Cohorts.Cancelbutton.click()


})
it('Admin_Advisor Cohorts_TC004_To verify the if user can access the columns heading', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Cohorts.column.click()
    Cohorts.Namecolumn.should('be.visible')
    Cohorts.Namecheckbox.should('be.checked');
    Cohorts.Actionscolumn.should('be.visible')
    Cohorts.Actioncheckbox.should('be.checked');
    Cohorts.Createdcolumn.should('be.visible')
    Cohorts.Createdcheckbox.check()
    Cohorts.Changedcolumn.should('be.visible')
    Cohorts.Changedcheckbox.check()
    Cohorts.Savecolumnsetup.click()
    Cohorts.tableheader.should('contain', 'Created');
    Cohorts.tableheader.should('contain', 'Changed');
    Cohorts.column.click()
    Cohorts.Createdcheckbox.uncheck()
    Cohorts.Savecolumnsetup.click()
    Cohorts.tableheader.should('not.contain', 'Created');
    Cohorts.column.click()
    cy.wait(2000)
    Cohorts.cancelicon.click()

})
it('Admin_Advisor Cohorts_TC005_To verify if user can sort the advisor cohort list', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Cohorts.Namesort.click()
    cy.wait(2000)
    Cohorts.sortresult1.should('be.visible')
    Cohorts.Namesort.click()

})
it('Admin_Advisor Cohorts_TC006_To verify if user can add advisor cohort', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Cohorts.addbutton.click()
    Cohorts.Savebutton.click()
    Cohorts.Error.should('be.visible')
    cy.fixture('Admin_Advisor Cohorts_TS001.json').then(function (dataJson) {
// Get the current date to extract the year and month




    Cohorts.Namefield.type(dataJson.Name);
    Cohorts.startdate.click()
    Cohorts.Savebutton.click()
    Cohorts.Error1.should('be.visible')
    Cohorts.Namefield.clear().type(dataJson.Name1)
    Cohorts.Savebutton.click()
    cy.wait(5000)
    Cohorts.Error2.should('be.visible')
    function generateUniqueName() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const level = "Level" + Math.floor(Math.random() * 100000000000000).toString();
      
      return `${year}_${month}_${level}`;
  }
  
  Cohorts.Namefield.clear().type(generateUniqueName());
    Cohorts.Savebutton.click()
    Cohorts.Alert.should('be.visible')

})
})
it('Admin_Advisor Cohorts_TC007_To verify if user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.fixture('Admin_Advisor Cohorts_TS001.json').then(function (dataJson) {

  Cohorts.Searchbar.clear().type(dataJson.Search4+'{enter}')
  Cohorts.Edit.click()
  function generateUniqueName() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const level = "Level" + Math.floor(Math.random() * 100000000000000).toString();
    
    return `${year}_${month}_${level}`;
}

Cohorts.Namefield.clear().type(generateUniqueName());

  Cohorts.Savebutton.click()
  Cohorts.Alert.should('be.visible')
  cy.wait(2000)
  Cohorts.View.click()
  Cohorts.viewedit.click()
  Cohorts.Cancelbutton.click()
  Cohorts.Archieve.click()
  cy.wait(5000)
  Cohorts.Archievemsg.should('be.visible')
  Cohorts.No.click()
  cy.wait(5000)
  Cohorts.Archieve.click()
  Cohorts.Yes.click()
  cy.wait(5000)
  })
})
})