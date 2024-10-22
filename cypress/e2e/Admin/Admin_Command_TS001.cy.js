
/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Commands page"				*/ 



import Admin from "../../support/Page Object/Admin/Admin"
import Commands from "../../support/Page Object/Admin/commandpage"
describe('Admin_Commands_TS001', function() {
it('Admin_Commands_TC001_To verify if user can access Commands page ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
  //  cy.viewport(390,844)
  //cy.AdminLogin()
  cy.NotanadvisorAdminLogin()
  Admin.navbar.click()
  Commands.commandnav.click()
  Commands.commands.should('be.visible')
  Commands.Nonerun.should('be.visible')
  Commands.sendailyemailrun.click()
Commands.dailyrunmsg.should('be.visible')
  Commands.commissionupdatecacherun.click()
  Commands.commissionrunmsg.should('be.visible')
 // cy.visit('https://mail.google.com/', { target: '_blank' });
})
})