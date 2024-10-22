
/* Description TC002: "The goal of the test is to verify the following functionalities:
1. contents of the valid login credentials"	*/ 

/* Description TC003: "The goal of the test is to verify the following functionalities:
1. contents of the invalid login credentials"*/ 

import Login from "../../support/Page Object/Login"

describe('Advisor_Login_TS002 ', function() {
  it('Advisor_Login_TC002', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Advisor_Login_TS001 and TS002.json').then(function (dataJson) {
    cy.visit(dataJson.URL)  //Visit URL
 //  cy.viewport(390,844)
    Login.fora.should('be.visible') //check if fora  logo is visible
    Login.supportlink.should('be.visible') //check if Supportlink is visible
    Login.welcome.should('be.visible') //check if Welcome text is visible
    Login.signinwithfora.should('be.visible').click() // check if signin with for button is clickable
    cy.wait(5000)

    cy.origin('https://accounts.google.com', function () {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })

      cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
        cy.contains('Fora Travel').click({force:true})   
      

 //Fora travel button in usermail page
      
        cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
        cy.get("div[jsname='DKOQHf']").should('be.visible') 
        cy.wait(5000)   //Signing in will redirect you to: https://advisor.forastaging.net text
        cy.get('.VfPpkd-T0kwCb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({force: true})         //got it button
cy.wait(2000)
        cy.get('#identifierId').clear().type(dataJson.Incorrectusername) //Check if accept invalid Username
        cy.wait(1000)
        cy.get('#identifierNext').click({force: true}) 
        cy.contains("Couldn’t find your Google Account").should('be.visible') //error message for entering wrong userid
        cy.wait(1000)
        cy.get('#identifierId').clear().type(dataJson.Correctusername) //Check if accept valid Username
        cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
        cy.get('#password').type(dataJson.Incorrectpassword) ////Check if accept invalid Password
        cy.contains('Next').click({force: true})
        cy.wait(2000)  //Check if it click next button after entering invalid Password
        cy.contains('Wrong password. Try again or click Forgot password to reset it.').should('be.visible') ////error message for entering wrong password
        cy.get('#password').type(dataJson.Correctpassword) //Check if accept valid Password
        cy.contains('Next').click()  //Check if next button is clickable after entering valid password
        cy.wait(8000)
        cy.contains('Continue').click()

      })
    }) 
  })
    cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
    Login.accesstoken.type(dataJson.Accesstoken)  //verifying access token
    Login.loginusingacesstoken.click() //clicking on signin with token
    cy.url().should('eq', 'https://advisor.forastaging.net/') //verifying if its directing to home page after login
    })
  })
  it('Advisor_Login_TC003', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {  
      cy.visit(dataJson.URL)//Visit URL
   //   cy.viewport(390,844)

    Login.fora.should('be.visible') //check if fora  logo is visible
    Login.supportlink.should('be.visible') //check if Supportlink is visible
    Login.welcome.should('be.visible') //check if Welcome text is visible
    Login.signinwithfora.should('be.visible').click() // check if signin with for button is clickable
    cy.wait(4000)
    })
    cy.origin('https://accounts.google.com', function () {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })

      cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
        cy.contains('Fora Travel').click() 
        cy.wait(5000)   //Fora travel button in usermail page
        cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
        cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
        cy.get('.VfPpkd-T0kwCb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({force: true}) //got it button*/
        cy.get('#identifierId').clear().type(dataJson.Incorrectusername) //Check if accept invalid Username
        cy.wait(1000)
        cy.get('#identifierNext').click({force: true}) 
        cy.contains("Couldn’t find your Google Account").should('be.visible') //error message for entering wrong userid
        
       

      })
    })
    
  })
  })


  /* In this test script we are verifying whether user is able to login. And validating the error messages when we give wrong credentials*/