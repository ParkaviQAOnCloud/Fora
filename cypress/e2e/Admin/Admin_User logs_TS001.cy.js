/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of user logs page"																*/	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"																				*/	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of column heading"																								*/	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of filter"																											*/	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of page navigation"																												*/	

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of page scroll up & scroll down"																														*/	


import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Userlog from "../../support/Page Object/Admin/Userlog"
describe('Admin_Userlogs_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  })

it('Admin_Userlogs_TC001_To verify users role page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
  //cy.AdminLogin()
  cy.NotanadvisorAdminLogin()
  Admin.navbar.click()
  Settings.settings.click()
  Userlog.Userlog.click()
  cy.url().should('include', 'https://admin.forastaging.net/activity-log/');
  Userlog.Activitylogsheader.should('be.visible')
  Userlog.Searchbar.should('be.visible')
  Userlog.Filterbutton.should('be.visible')

})
it('Admin_Userlogs_TC002_To verify if user can search using search textbox', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Userlog.Placeholder.should('be.visible')
    cy.fixture('Admin_User logs_TS001.json').then(function (dataJson) {

    Userlog.Searchbar.type(dataJson.Search1+'{enter}')
    Userlog.Searchbar.clear().type(dataJson.Search2+'{enter}')
    Userlog.searchresult.should('be.visible')

})
})
it('Admin_Userlogs_TC003_To verify if user can access the columns', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Userlog.Filterbutton.click()
  Userlog.timecheckbox.click()
  Userlog.useridncheckbox.click()
  Userlog.filtersave.click()
  Userlog.Filterbutton.click()
  Userlog.timecheckbox.click()
  Userlog.useridncheckbox.click()
  Userlog.filtersave.click()
Userlog.timetext.should('be.visible')
Userlog.useridtext.should('be.visible')
/*Userlog.Filterbutton.click()
Userlog.closebutton.click()
cy.wait(2000)*/
})
it('Admin_Userlogs_TC004_To verify if the user can apply filter', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
Userlog.timesort.click()
Userlog.timesortresult
  .invoke('text')
  .then((timesort) => {        
    cy.log('Sorted time:', timesort);
  })
  Userlog.timesort.click()
Userlog.timesortresult
  .invoke('text')
  .then((timesort) => {        
    cy.log('Sorted time:', timesort);
  })
 Userlog.levelsort .click()
  Userlog.levelsortresult.invoke('text')
  .then((Levelsort) => {        
    cy.log('Sorted time:', Levelsort);
  })
  Userlog.levelsort .click()
  Userlog.levelsortresult.invoke('text')
  .then((Levelsort) => {        
    cy.log('Sorted time:', Levelsort);
  })
})
it('Admin_Userlogs_TC005_To verify  if user can navigate to Next & Previous pages', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  
 // cy.get('.overflow-x-auto').scrollTo('bottom', { duration: 1000 });
Userlog.gotopage2.scrollIntoView().click()
Userlog.leftarrow.scrollIntoView().click()
Userlog.rightarrow.scrollIntoView().click()
})
it('Admin_Userlogs_TC006_To verify if the user can scroll up & down through the page', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.get('.overflow-x-auto').scrollTo('bottom', { ensureScrollable: false });
  cy.get('.overflow-x-auto').scrollTo('top', { ensureScrollable: false });



})
})
