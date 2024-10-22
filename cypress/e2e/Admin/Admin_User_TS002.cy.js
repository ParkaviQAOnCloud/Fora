/* Description TC014: "The goal of the test is to verify the following functionalities:
1. contents of adding new user"						*/ 

/* Description TC015: "The goal of the test is to verify the following functionalities:
1. contents of edit user details"	*/

/* Description TC016: "The goal of the test is to verify the following functionalities:
1. contents of view user details"					*/ 

/* Description TC017: "The goal of the test is to verify the following functionalities:
1. contents of the Advisor notes section"					*/ 


import Admin from "../../support/Page Object/Admin/Admin"
import User from "../../support/Page Object/Admin/User"
describe('Admin_User_TS002',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  it('Admin_User_TC014_To verify if user is able to add new user', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
     // cy.viewport(390,844)
     // cy.AdminLogin()
     cy.NotanadvisorAdminLogin()
     cy.fixture('Admin_User_TS002').then(function (dataJson) {
      Admin.navbar.click()
      User.user.click()
     /* User.adduser.click()
      User.personalemailfield.type(dataJson.Personalmail+ '{enter}')
      User.firstname.type(dataJson.Firstname+'{enter}')
      User.lastname.type(dataJson.Lastname+'{enter}')
      User.selectrole.type(dataJson.Role2+'{enter}')
      User.commission.type(dataJson.Commission+'{enter}')
      User.cohart.type(dataJson.Cohart+'{enter}')
      const Picture1='Profilepict.jpg' 
 cy.get('[type="file"]').attachFile(Picture1)  
  cy.wait(3000)
  User.savenote.click()

  User.successalert.should('be.visible')
 
  User.backtouser.click()

      User.adduser.click()
      User.personalemailfield.type(dataJson.Personalmail1+ '{enter}')
      User.firstname.type(dataJson.Firstname1+ '{enter}')
      User.lastname.type(dataJson.Lastname1+ '{enter}')
      User.selectrole.type(dataJson.Role2+'{enter}')
      User.commission.type(dataJson.Commission+'{enter}')
      
      User.cohart.type(dataJson.Cohart+'{enter}')

  cy.wait(3000)
  User.savenote.click()
  cy.contains('User with this Personal email already exists')
  cy.contains('User with this Fora email already exists')  
  User.cancelbutton.click()*/
    })

  })
  it('Admin_User_TC016_To verify if user is able to view the user', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
 
      cy.get(':nth-child(2) > .flex > .ml-4').click()
      User.view.click()
  
 User.enable2ftext.should('be.visible')
 User.enable2fsymbol.should('be.visible')

 
})
it('Admin_User_TC017_To verify if user is able to view Advisor notes section', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
 
   
    cy.fixture('Admin_User_TS002').then(function (dataJson) {
User.addnote.scrollIntoView().click()
User.typenote.type(dataJson.Note1+ '{enter}')
User.savenote.click()
User.addnote.click()
User.typenote.type(dataJson.Note2+ '{enter}')
User.cancelnote.click()
User.editnote.eq(0).click()
User.typenote.clear().type(dataJson.Note2+ '{enter}')
User.savenote.click()
User.alertmessage.scrollIntoView().should('be.visible')
cy.log("Advisor note  was successfully added")
User.archivenote.eq(0).click()
cy.wait(2000)
User.Nobutton.click()
User.archivenote.eq(0).click({force: true})
User.Yesbutton.eq(0).click({force: true})

User.alertmessage.scrollIntoView().should('be.visible')
cy.log("Advisor note  was successfully archieved")
User.addnote.click()
User.typenote.type(dataJson.Note2+ '{enter}')
User.savenote.click()
User.searchbar.click().type(dataJson.Searchnote+ '{enter}')

User.searchbar.click().clear().type(dataJson.Note2+ '{enter}')
User.filter.click()
User.Isactive.select('True'); //---
      User.filtersavebutton.click()
    })
  })

 it('Admin_User_TC015_To verify if user is able to edit the user', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    User.Viewedit.click()
   

 User.cancelbutton.click()
 User.edit.click()
 cy.fixture('Admin_User_TS002').then(function (dataJson) {
 User.lastname.type(dataJson.Lastname+'{enter}')
 
User.Loginasadvisor.invoke('removeAttr', 'target').click()

 


 })
})

 
 
  

 /* 

*/

})


 
    /* User.notactivetag.scrollIntoView().should('be.visible')
 User.resendinvite.click()
 User.resendinvitesucessmessage.scrollIntoView().should('be.visible')*/



  //User.filter.click()
      //User.Isactive.select('false');//Yes
    // User.filtersavebutton.click()
     // User.filter.click()
      
      //User.Isactive.select('0'); // No
      //User.filtersavebutton.click()