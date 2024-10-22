/* Description TC001: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal login page"				*/


import Login from "../../support/Page Object/Login"

describe('Advisor_Login_TS001', function () {
    it('Advisor_Onboarding_TC001', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.fixture('Advisor_Login_TS001 and TS002.json').then(function (dataJson) {
            cy.visit(dataJson.URL)  //visit URL
            // cy.viewport(390,844)
            Login.fora.should('be.visible') // check if fora  logo is visible
            Login.supportlink.should('be.visible') // check if Supportlink is visible
            Login.welcome.should('be.visible') // check if Welcome text is visible
            Login.signinwithfora.should('be.visible').click()  // check if signin with fora button is clickable
            cy.wait(4000)
            cy.origin('https://accounts.google.com', () => {//check if user is navigating to the user's personal email address, to draft an email.
                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                })

            })
        })
    })
})

/* In this test script we are verifying whether user is able to login with wrong credential*/