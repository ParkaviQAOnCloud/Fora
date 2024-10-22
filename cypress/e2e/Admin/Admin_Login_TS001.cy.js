/* Description TC001: "The goal of the test is to verify the following functionalities:
1. contents of the admin portal login page with valid credentials"	*/ 

/* Description TC002: "The goal of the test is to verify the following functionalities:
1. contents of the admin portal login page with invalid credentials"	*/ 

describe('Admin_Login_TS001 and Admin_Login_TS002', function() {
it('Admin_Login_TC001- To Check if user is able to login with valid credentials', function() {
cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.fixture('Admin_Login_TS001 and TS002').then(function (dataJson) {
   // cy.viewport(390,844)
  cy.visit(dataJson.URL)
  cy.xpath("//a[normalize-space()='Sign in with Fora Google']").click()
  cy.wait(5000)
  cy.origin('https://accounts.google.com', function () {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })

  cy.fixture('Admin_Login_TS001 and TS002').then(function (dataJson) {
    cy.contains('Fora Travel').click()    //Fora travel button in usermail page
    cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
    cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
    cy.wait(2000)
    cy.get('.VfPpkd-T0kwCb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({force:true}) //got it button
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

})
  })
})
})


it('Admin_Login_TC002_Login-To Check user should not able to login with invalid credentials', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Admin_Login_TS001 and TS002').then(function (dataJson) {
    cy.visit(dataJson.URL)
    cy.xpath("//a[normalize-space()='Sign in with Fora Google']").click()
   

    cy.origin('https://accounts.google.com', function () {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })

      cy.fixture('Admin_Login_TS001 and TS002').then(function (dataJson) {
        cy.contains('Fora Travel').click()    //Fora travel button in usermail page
        cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
        cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
        cy.wait(2000)
        cy.get('.VfPpkd-T0kwCb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({force:true}) //got it button*/
        cy.get('#identifierId').clear().type(dataJson.Incorrectusername) //Check if accept invalid Username
        cy.wait(1000)
        cy.get('#identifierNext').click({force: true}) 
        cy.contains("Couldn’t find your Google Account").should('be.visible') //error message for entering wrong userid
        
       

      })
    })
    
  })
})
})