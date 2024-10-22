/*Description TC001: "The goal of the test is to verify the following functionalities:
1. contents of the user count in home page"			*/	



import Admin from "../../support/Page Object/Admin/Admin"
import Home from "../../support/Page Object/Admin/Home"
describe('Admin_Home_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  it('Admin_Home_TC001_Verify Home page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   // cy.viewport(390,844)
//cy.AdminLogin()
cy.NotanadvisorAdminLogin()  
Admin.navbar.click()
    Home.user.click()
   Home.mainpage.should('be.visible')
   cy.log(Home.mainpage)
   Home.hometitle.should('be.visible')
   cy.log(Home.hometitle)
   Home.totalusericon.should('be.visible')
   Home.totalusertext.should('be.visible')
   Home.totaluser.should('be.visible')
 Home.totaluser
   .invoke('text')
   .then((Totaluser) => {
         cy.log('Total User:', Totaluser);

    
})
})
})