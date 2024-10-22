
import Login from "../../../support/Page Object/Login"

describe('Advisor_Login_TS001', function() {
  it('Advisor_Onboarding_TC001', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.fixture('Advisor_Login_TS001 and TS002.json').then(function (dataJson) {
        cy.visit(dataJson.URL)
        cy.contains("Not an advisor?").should('be.visible')
        cy.xpath("//a[normalize-space()='Sign in here.']").click()
        cy.xpath("//label[normalize-space()='Username']").should('be.visible')
        cy.xpath("//input[@id='username']").type("reenaz+0322@qaoncloud.com")
        cy.xpath("//input[@id='password']").type("Qaoncloud@")
        cy.get('.show_hide_password > .relative > .absolute').click()
        cy.xpath("//button[normalize-space()='Sign in']").click()
        cy.contains("Unable to log in with provided credentials.").should('be.visible')
        cy.xpath("//input[@id='password']").clear().type("Qaoncloud@01")
        })
    })
})
