/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Sabre hotels page"				 */	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"				 */	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of Columns"				 */	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of applying sort"				 */	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of actions"				*/	

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of Navigation"				0 */	



import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Sabre from "../../support/Page Object/Admin/Sabre"
describe('Admin_Sabre-Hotels_TS001',{ testIsolation: false }, function() {
    before(() => {
      // ensure clean test slate for these tests
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
    })
    it('Admin_Sabre-Hotels_TC001_To verify the Sabre hotels page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
       // cy.viewport(390,844)
      cy.AdminLogin()
      Admin.navbar.click()
      Settings.settings.click()
      Sabre.Sabre.click()
      cy.url().should('include', 'https://admin.forastaging.net/sabre/')
      Sabre.Searchbar.should('be.visible')
      Sabre.column.should('be.visible')
      Sabre.Namecolumn.should('be.visible')
      Sabre.Action.should('be.visible')
    })

    
    it('Admin_Sabre-Hotels_TC002_To verify the user can search using search textbox', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.fixture('Admin_Sabre-hotels_TS001.json').then(function (dataJson) {
        Sabre.Searchbar.should('be.visible')
        Sabre.Searchbar.type(dataJson.Search1+'{enter}')
        Sabre.Searchbar.clear().type(dataJson.Search2+'{enter}')
        Sabre.Result.should('be.visible')
        Sabre.Searchbar.clear().type('{enter}')  
    })
})
it('Admin_Sabre-Hotels_TC003_To verify if user can access the columns', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Sabre.column.click()
    Sabre.Created.should('be.visible')
    Sabre.Createdcheckbox.check()
    Sabre.Changed.should('be.visible')
    Sabre.Changedcheckbox.check()
    Sabre.globalcode.should('be.visible')
    Sabre.Globalcheckbox.check()
    Sabre.Name.should('be.visible')
    Sabre.Namecheckbox.should('be.checked');
    Sabre.Actions.should('be.visible')
    Sabre.Acctionscheckbox.should('be.checked');
    Sabre.Savecolumnsetup.click()
    
  Sabre.tableheader.should('contain', 'Created');
  Sabre.tableheader.should('contain', 'Changed');
  Sabre.tableheader.should('contain', 'Global code');
  Sabre.column.click()
  Sabre.Createdcheckbox.uncheck()
  Sabre.Changedcheckbox.uncheck()
  Sabre.Savecolumnsetup.click()
  Sabre.tableheader.should('not.contain', 'Created');
  Sabre.tableheader.should('not.contain', 'Changed');

})

it('Admin_Sabre-Hotels_TC004_To verify if user can apply sort', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Sabre.column.click()
  Sabre.Createdcheckbox.check()
  Sabre.Changedcheckbox.check()
  Sabre.Savecolumnsetup.click()
  Sabre.Createdsort.click()
  Sabre.Createdresult.should('be.visible')
  Sabre.Createdsort.click()
  Sabre.Createdresult1.should('be.visible')
  Sabre.Globalcodesort.click()
  Sabre.Globalcodesort.click()
  Sabre.Namesort.click()
  Sabre.Namesort.click()
})

it('Admin_Sabre-Hotels_TC005_To verify if user can perform actions', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
Sabre.View.click()
Sabre.Viewname.should('be.visible')
Sabre.Viewcode.should('be.visible')
Sabre.backtosabre.click()
})
it('Admin_Sabre-Hotels_TC006_To verify if user can scroll up & down through the page ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })   
    
    cy.get('.flex-1').eq(1).scrollTo('bottom', { ensureScrollable: false });
    cy.get('.flex-1').eq(1).scrollTo('top', { ensureScrollable: false });


})
it('Admin_Sabre-Hotels_TC007_To verify if user can Navigate to next & previous pages', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.get('.z-0 > :nth-child(2)').click()
    cy.url().should('include', 'https://admin.forastaging.net/sabre/?page=2')
    cy.get('.z-0 > .rounded-l-md').click()
    cy.url().should('include', 'https://admin.forastaging.net/sabre/?page=1')
    cy.get('.z-0 > .rounded-r-md').click()
    cy.url().should('include', 'https://admin.forastaging.net/sabre/?page=2')
    
   
    

})

})