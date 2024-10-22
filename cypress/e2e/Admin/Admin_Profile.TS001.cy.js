
/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. Contents of Admin Profile Page."	*/




import Admin from "../../support/Page Object/Admin/Admin"
import Profile from "../../support/Page Object/Admin/Profile"
describe('Admin_Profile_TS001',{ testIsolation: false }, function() {

    before(() => {
     
      cy.then(Cypress.session.clearCurrentSessionData)
    })
  it('Admin_Profile_TC001_To verify  if user can perform action on Admin Profile.', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
  //  cy.AdminLogin1()
  cy.NotanadvisorAdminLogin()
  Admin.navbar.click()
   Profile.Profile.click()
   Profile.User
   Profile.Edituser.should('be.visible')
   cy.url().should('include', 'https://admin.forastaging.net/user/profile/')
   Profile.Personalemail.should('be.visible')
   Profile.Personalemailfield.should('be.visible')
   Profile.Foraemail.should('be.visible')
   Profile.Foraemailfield.should('be.visible')
   Profile.Firstname.should('be.visible')
   Profile.Firstnamefield.should('be.visible')
   Profile.Lastname.should('be.visible')
   Profile.Lastnamefield.should('be.visible')
   Profile.Profilepicture.should('be.visible')
   Profile.Clear.should('be.visible')
   Profile.Clearcheckbox.should('be.visible')
   Profile.Commissionplan.scrollIntoView().should('be.visible')
   Profile.Commissionplanfield.should('be.visible')
   
   Profile.Advisorcohort.scrollIntoView().should('be.visible')
   Profile.Advisorcohortfield.scrollIntoView().should('be.visible')
   Profile.Timezone.scrollIntoView().should('be.visible')
   Profile.Personalemailfield.clear()
   Profile.Savebutton.click()
   Profile.error.should('be.visible')
   cy.fixture('Admin_Profile_TS001').then(function (dataJson) {
   const baseUsername = 'rqa';
   const uniqueUsername = `${baseUsername}_${Date.now()}@qaoncloud.com`;
  Profile.Personalemailfield.type(uniqueUsername);
  Profile.Savebutton.click()
  Profile.alert.should('be.visible')
  Profile.Commissionplanfield.click()
  Profile.searchfield.type(dataJson.Commissionplan+'{enter}')
  cy.wait(2000)
  Profile.Searchresult.should('be.visible')
  Profile.Commissionplanfield.click().type(dataJson.Commissionplan1+'{enter}')
  const Picture1='Profilepict.jpg'
cy.get('[type="file"]').attachFile(Picture1) 
 cy.wait(3000) 
  Profile.Advisorcohortfield.click()
  Profile.searchfield.type(dataJson.Advisorcohort+'{enter}')
  //Profile.Searchresult.should('be.visible')
  Profile.Advisorcohortfield.click()
Profile.searchfield.type(dataJson.Advisorcohort1+'{enter}')
Profile.Timefield.click()
  Profile.searchfield.type(dataJson.Timezone+'{enter}')
  cy.wait(2000)
Profile.Searchresult.should('be.visible')
cy.wait(2000)
  Profile.Timefield.click()
  Profile.Timefield.click()
  Profile.searchfield.type(dataJson.Timezone+'{enter}')
  Profile.Savebutton.click()
  Profile.alert.should('be.visible')
  
   })
  })
})