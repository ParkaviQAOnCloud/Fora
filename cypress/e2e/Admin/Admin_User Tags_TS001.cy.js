/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of user tags page"								*/	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"				*/	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of Filter"						*/	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of column"							*/	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of add new user tags"								*/	

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of filter"			*/	


/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of actions"						*/	

/* Description for TC008: "The goal of the test is to verify the following functionalities:
1.  Contents of page scroll up & scroll down"								*/	


/* Precondition: Name should be unique*/


import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Usertag from "../../support/Page Object/Admin/Usertags"
describe('Admin_Usertags_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  })
  
  

it('Admin_Usertags_TC001_To verify User tags page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
 // cy.AdminLogin()
 cy.NotanadvisorAdminLogin()
 Admin.navbar.click()
  Settings.settings.click()
  
  Usertag.Usertags.click()
  cy.url().should('include', 'https://admin.forastaging.net/features-tag/');

  Usertag.Usertagheader.should('be.visible')
  Usertag.Searchbar.should('be.visible')
  Usertag.filter.should('be.visible')
  Usertag.column.should('be.visible')
  Usertag.addbutton.should('be.visible')
  Usertag.Name.should('be.visible')
  Usertag.Action.should('be.visible')
})
it('Admin_Usertags_TC002_To verify user can search using search textbox', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Admin_User tags_TS001.json').then(function (dataJson) {
    Usertag.Searchbar.type(dataJson.Search1+'{enter}')
    Usertag.Searchbar.clear().type(dataJson.Search2+'{enter}')

})
})
it('Admin_Usertags_TC003_To verify if user can apply filter', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    Usertag.filter.click()
    cy.get("select").select(1)
    Usertag.applybutton.click()
    Usertag.deletebutton.should('be.visible')
    Usertag.filter.click()
    cy.get("select").select(2)
    Usertag.applybutton.click()
    Usertag.restorebutton.should('be.visible')
    Usertag.filter.click()
    cy.get("select").select(0)
    Usertag.applybutton.click()

})
it('Admin_Usertags_TC004_To verify if user can access the columns', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Usertag.column.click()
    Usertag.created.click()
    Usertag.changed.click()
    Usertag.savecolumn.click()
    Usertag.createdatcolumn.should('be.visible')
    Usertag.changedcolumn.should('be.visible')
})
it('Admin_Usertags_TC005_To verify if the user can add new user tags', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
   Usertag.addbutton.click()
   cy.url().should('include', 'https://admin.forastaging.net/features-tag/add/');
   cy.fixture('Admin_User tags_TS001.json').then(function (dataJson) {
   Usertag.Namefield.type(dataJson.Search3)
   Usertag.Savebutton.click()
   Usertag.Errormessage.should('be.visible')
   const baseName = 'Usertag';

    const uniqueName = `${baseName}_${Date.now()}`;
   Usertag.Namefield.clear().type(uniqueName)
   Usertag.Savebutton.click()
   Usertag.alert.should('be.visible')
   Usertag.addbutton.click()
   Usertag.Cancel.click()
   })
})
it('Admin_Usertags_TC006_To verify if the user can apply filter', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
 
   Usertag.Sorting.click()
   Usertag.Sortingresult.invoke('text')
   .then((Namesort) => {        
     cy.log('Sorted Name:', Namesort);
   })

   Usertag.Sorting.click()
   Usertag.Sortingresult.invoke('text')
   .then((Namesort) => {        
     cy.log('Sorted Name:', Namesort);
   })
   
})
it('Admin_Usertags_TC007_To verify if user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
 

  Usertag.Sorting.click()
  cy.fixture('Admin_User tags_TS001.json').then(function (dataJson) {
  Usertag.Searchbar.type(dataJson.Search6+'{enter}')
 Usertag.actionedit.eq(0).click()
 const Name = 'Name';

const uniqueName = `${Name}_${Date.now()}`;
  Usertag.Namefield.type(uniqueName)
  Usertag.Savebutton.click()
Usertag.View.eq(0).click()
Usertag.Edit.click()
const EditName = 'EditName';

const EdituniqueName = `${EditName}_${Date.now()}`;
Usertag.Namefield.type(EdituniqueName)
Usertag.Savebutton.click()
Usertag.alert.should('be.visible')
Usertag.Searchbar.type(dataJson.Search6+'{enter}')
Usertag.deletebutton.click()
Usertag.archievemsg.should('be.visible')
Usertag.Nobutton.click()
Usertag.deletebutton.click()  
Usertag.yesbutton.click()
Usertag.filter.click()
    cy.get("select").select(2)
    Usertag.applybutton.click()
    Usertag.restorebutton.should('be.visible')
    Usertag.View.eq(0).click()
    Usertag.Backtouser.click()
    Usertag.restorebutton.click()
    Usertag.restoremsg.should('be.visible')
    Usertag.Cancelbutton.click()
    Usertag.restorebutton.click()
    Usertag.Confirmbutton.click()
  Usertag.closebutton.click()
    

})
})
it('Admin_Usertags_TC008_To verify if the user can scroll up & down through the page', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })

  cy.scrollTo('bottom',{ ensureScrollable: false });
   cy.get('.overflow-x-auto').scrollTo('top',{ensureScrollable: false});
})

})