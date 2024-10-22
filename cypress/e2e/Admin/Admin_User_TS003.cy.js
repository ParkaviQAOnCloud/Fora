/* Description TC018: "The goal of the test is to verify the following functionalities:
1. contents of the Advisor Subscription  section"					*/ 

/* Description TC019: "The goal of the test is to verify the following functionalities:
1. contents of Subscription page"					*/ 

/* Description TC020: "The goal of the test is to verify the following functionalities:
1. contents of sort option in 'Users' page"		*/ 

/* Description TC021: "The goal of the test is to verify the following functionalities:
1. contents of pagination"*/ 

/* Description TC022: "The goal of the test is to verify the following functionalities:
1. contents of page scroll up & down"	*/ 


import Admin from "../../support/Page Object/Admin/Admin"
import User from "../../support/Page Object/Admin/User"
describe('Admin_User_TS003', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  

it('Admin_User_TC020_To verify is user is able to perform sort function ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
   
    cy.NotanadvisorAdminLogin() //  cy.AdminLogin()
Admin.navbar.click()
User.user.click()
  //User.backtouser.click()
    User.namesort.click()
    cy.get("tr[id='user_index_table_row_1'] td:nth-child(1)")
    .invoke('text')
    .then((Namesort) => {        
      cy.log('Sorted Name:', Namesort);
  
    })  
    
   
  User.namesort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(1)")
  .invoke('text')
  .then((Namesort) => {        
    cy.log('Sorted Name:', Namesort);

  })  
//  User.result.should('contain', 'zx')

  User.foraemailsort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(2)")
  .invoke('text')
  .then((Foraemailsort) => {        
    cy.log('Fora email sort:',Foraemailsort);

  })  
 
  User.foraemailsort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(2)")
  .invoke('text')
  .then((Foraemailsort) => {        
    cy.log('Fora email sort:',Foraemailsort);

  })  
  
  User.lastloginsort .click();
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(4)")
  .invoke('text')
  .then((Lastloginsort) => {        
    cy.log('Last Login sort:',Lastloginsort);

  })  
//  User.result.should('contain','May 5, 2022, 9:39 a.m.')
  User.lastloginsort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(4)")
  .invoke('text')
  .then((Lastloginsort) => {        
    cy.log('Last Login sort:',Lastloginsort);

  })  
  //User.result.should('contain',' ')
  User.datausersort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(8)")
  .invoke('text')
  .then((DataUsersort) => {        
    cy.log('Data User sort:',DataUsersort);

  })  

  User.datausersort.click()
  cy.get("tr[id='user_index_table_row_1'] td:nth-child(8)")
  .invoke('text')
  .then((DataUsersort) => {        
    cy.log('Data User sort:',DataUsersort);

  }) 
  
  
  
  User.activecheckbox.check({force: true})
  User.Enable2fcheckbox.check({force: true})
  User.selectcolumn.click({force: true})
  User.savebutton.click();  
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.activesort.click()
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.Inactivestatus.should('be.visible')
  User.activesort.click()
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.activestatus.should('be.visible')
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.enable2fsort.click()
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.Inactivestatus.should('be.visible')
  User.enable2fsort.click()
  cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  User.activestatus.should('be.visible')
  })

  it('Admin_User_TC021_To verfy if the user can navigate to next/previous pages by using Pagination numbers ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

  User.nextpage.click()
  User.nextarrow.click()
  User.previousarrow.click()
 
 
})
it('Admin_User_TC022_To verify if the user can access page scroll up & down ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
 
   cy.get('.overflow-x-auto').scrollTo('right', { duration: 1000 });
  cy.get('.overflow-x-auto').scrollTo('left', { duration: 1000 });
  cy.get('.overflow-x-auto').scrollTo('bottom', { duration: 2000 });
  cy.get('.overflow-x-auto').scrollTo('top', { duration: 2000 });
  
})

it('Admin_User_TC019 to TC020_To verify is user is Subscription section in users view page ', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
 User.searchbar.type('mqa2 0609regQAQAQAQAQAQAQAQA{enter}')
 cy.wait(2000)
  User.view.click()

 User.Subscription.click()
 
 cy.wait(2000)
 User.currancyfield.should('be.visible')
 User.startsofcurrantfield.should('be.visible')
 User.endofcurrantfield.scrollIntoView().should('be.visible')
 User.createdfield.should('be.visible')
 User.description.should('be.visible')
  cy.url().should('include', '#subscription-tab');
  User.Subscriptionlink.click()
  User.currancyfield.should('be.visible')
  User.startsofcurrantfield.should('be.visible')
  User.endofcurrantfield.scrollIntoView().should('be.visible')



})
})