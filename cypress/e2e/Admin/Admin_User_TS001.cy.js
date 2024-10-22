/* Description TC001 to TC006: "The goal of the test is to verify the following functionalities:
1. contents of the Users page"		*/ 

/* Description TC007 to TC013: "The goal of the test is to verify the following functionalities:
1. contents of the Users page search textbox"	*/ 



import Admin from "../../support/Page Object/Admin/Admin"
import User from "../../support/Page Object/Admin/User"

describe('Admin_User_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Admin_User_TC001 to TC006_To verify if user is able to perform search actions', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
     // cy.viewport(390,844)
    //  cy.AdminLogin()
      cy.NotanadvisorAdminLogin()
      cy.fixture('Admin_User_TS001').then(function (dataJson) {
      Admin.navbar.click()
      User.user.click()
      User.searchbar.click().type(dataJson.Name+ '{enter}')
      ///User.result.should('contain', 'reenaz')
      User.searchbar.click().clear().type(dataJson.Name1+ '{enter}')
      User.result.should('contain', 'fathima')
      //User.searchbar.click().clear().type('reenazfathima{enter}')
      //User.result.should('contain', 'reenazfathima')
      User.searchbar.click().clear().type(dataJson.ForaMail+ '{enter}')
      User.result.should('contain', 'reenaz.fathima@forastaging.net')  
      User.selectcolumn.click()
      User.personalemail.check()
      User.savebutton.click();    
      User.searchbar.click().clear().type(dataJson.Personalmail+ '{enter}')
      User.result.should('contain', 'reenaz@qaoncloud.com')
      User.searchbar.clear('{enter}')
      User.searchbar.type('{enter}')
      User.selectcolumn.click()
      User.profilepic.check()
      User.savebutton.click();  
      User.result.should('contain', 'Profile pic')
    })
  })
   /* it('Admin_User_TS007_to TS0013 To verify if user is able to do filter function', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
      cy.viewport(1500,785)

    cy.fixture('Admin_User_TS001').then(function (dataJson) {
   User.activecheckbox.check({force: true})

User.selectcolumn.click({force: true})
User.savebutton.click(); 
    User.filter.click()
      User.Isactive.select('true'); //---
      User.filtersavebutton.click()
      
cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
      User.filter.click()
      User.Isactive.select('false');//Yes
      User.filtersavebutton.click()
      
cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
      User.filter.click()
      
      User.Isactive.select('0'); // No
      User.filtersavebutton.click()
      
cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
User.selectcolumn.click({force: true})
User.activesubscriptioncheckbox.check({force: true})

User.savebutton.click(); 

      User.filter.click()
      User.slider.click()
      User.filtersavebutton.click()
      cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
      User.filter.click()
      User.slider.click()
      User.filtersavebutton.click()
      cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
      User.selectcolumn.click({force: true})
      User.Rolesinfilter.check()
      User.savebutton.click()
      User.filter.click()
      User.Roles.click()
      User.Roles.type(dataJson.Role1+ '{enter}')
   cy.wait(5000)
      User.filtersavebutton.click()
      cy.wait(5000)
      cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
      cy.viewport(1500,785)
      User.filter.click()
      User.cancelicon.click( {force: true})
      User.Roles.click()
      User.cancelicon.click()
      User.Roles.type(dataJson.Role2+ '{enter}')
      User.filtersavebutton.click()
      cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
     User.filter.click()
      User.usertag.type(dataJson.Usertag+ '{enter}')
      User.filtersavebutton.click({force: true})
      User.filter.click()
      User.Roles.click()
      User.cancelicon.eq(0).click()
      User.Roles.type(dataJson.Role1+ '{enter}')
      User.cohart.type(dataJson.Cohart+ '{enter}')

    User.filtersavebutton.click({force: true})
    User.result.should('contain', 'fora_team')
    User.result.should('contain', '2022_10_Certified')

  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
    })
 User.filter.click()
 User.Isactive.select('0');
 User.cancelicon.eq(0).click( {force: true})
User.Roles.click()
 User.cancelicon.eq(0).click( )
 
 User.filtersavebutton.click({force: true})



 
})
*/
})