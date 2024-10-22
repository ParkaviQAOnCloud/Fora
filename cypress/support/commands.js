// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath'
import 'cypress-iframe';
import 'cypress-file-upload';
import Bookings from "/cypress/support/Page Object/Advisor/Booking"
import Home from "/cypress/support/Page Object/Advisor/Home"
import Client from "/cypress/support/Page Object/Advisor/Client"
import * as XLSX from 'xlsx';
const xlsx = require('xlsx');


Cypress.Commands.add('getClipboard', () => {
  cy.window().then((win) => {
    win.navigator.clipboard.readText().then((value) => {
      // split the value into an array of lines
      const lines = value.split('\n');
      // log each line to the console
      lines.forEach((line, index) => {
        cy.log(`Line ${index + 1}: ${line}`);
      });
    });
  });
})

Cypress.Commands.add('search', (input) => {
  Bookings.searchbar.clear().type(input);
  Bookings.Result.should('be.visible');
});

Cypress.Commands.add('getRecoveryEmail', () => {
  cy.fixture('recoveryEmail.json').then((data) => {
    return data.email;
  });
});
  Cypress.Commands.add('Login', ()=> { 
    
    cy.visit('https://advisor.forastaging.net/login')  //Visit URL

    cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
cy.wait(5000)

cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
  return false
})

cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
 
  cy.get('#identifierId').clear().type("new.id@forastaging.net") //Check if accept valid Username
  cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
 ////error message for entering wrong password
  cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
  cy.contains('Next').click()  //Check if next button is clickable after entering valid password
  cy.wait(8000)
  cy.get('[class="VfPpkd-vQzf8d"]').eq(2).click()

})


})

  
cy.get('.button').click();
cy.wait(8000);
// cy.get('#input-accessToken-for-first-time-login-provider').type('ya29.a0AWY7Ckl7EtaEn8GkrETqR73IOcNO1q3Jf4xQn3-RK_5UIkObqHrh19P5LtBawR8A2Z7RbjDkmn4ZKl4PdM1TEgQnE4mJASLjoo-rjotfpQ2_8r_Cy4q-jhu4VARmap12zVafjAAJq8ksotP_8gNgCn2ROJYYWfgaCgYKAYsSARASFQG1tDrpFqbUx2SXBtq7KAamWWecWA0166');
// cy.get(':nth-child(5) > form > button').click()

cy.origin('https://accounts.google.com', {
  args: {  },
}, ({ }) => {
  Cypress.on('uncaught:exception', (err) => {
    return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
  });
  cy.get('[data-identifier="new.id@forastaging.net"]').click()
  /*cy.get('[class="lCoei YZVTmd SmR8"]').eq(1).click()

//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.wait(8000)
cy.get('#identifierId').clear().type("testing.os@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("123Shoot@12") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 // cy.wait(11000)*/

})

/*cy.fixture('Login.json').then(function (dataJson)  {
  cy.get('#input-accessToken-for-first-time-login-provider').type(dataJson.Accesstoken) //verifying access token
  cy.get(':nth-child(5) > form > button').click() //clicking on signin with token
cy.url().should('eq', 'https://advisor.forastaging.net/') //verifying if its directing to home page after login
})*/
  })
//  });
Cypress.Commands.add('AdminLogin1', ()=> { 

  cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    cy.visit('https://admin.forastaging.net/login/?next=/')
    cy.xpath("//a[normalize-space()='Sign in with Fora Google']").click()
    cy.origin('https://accounts.google.com', function () {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    cy.fixture('Admin_Login_TS001 and TS002').then(function (dataJson) {
     
      cy.get('#identifierId').type('new.id22@forastaging.net') //Check if accept valid Username
      cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
     
      cy.wait(2000)  //Check if it click next button after entering invalid Password
      ////error message for entering wrong password
      cy.get('#password').type('Qaoncloud@01') //Check if accept valid Password
      cy.contains('Next').click()  //Check if next button is clickable after entering valid password
      cy.wait(8000)

  })
    })
  })

  
Cypress.Commands.add('AdminLogin', ()=> { 

  cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    cy.visit('https://admin.forastaging.net/login/?next=/')
    cy.xpath("//a[normalize-space()='Sign in with Fora Google']").click()
    cy.origin('https://accounts.google.com', function () {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

   
     
      cy.get('#identifierId').type('new.id22@forastaging.net') //Check if accept valid Username
      cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
     
      cy.wait(2000)  //Check if it click next button after entering invalid Password
      ////error message for entering wrong password
      cy.get('#password').type('Qaoncloud@01') //Check if accept valid Password
      cy.contains('Next').click()  //Check if next button is clickable after entering valid password
      cy.wait(8000)

  })
    })
    Cypress.Commands.add('NotanadvisorAdminLogin', ()=> { 

      cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
    
        cy.visit('https://admin.forastaging.net/login/?next=/')
        cy.contains("Not an advisor?").should('be.visible')
        cy.xpath("//a[normalize-space()='Sign in here.']").click()
        cy.xpath("//label[normalize-space()='Username']").should('be.visible')
        cy.xpath("//input[@id='username']").type("reenaz+0918@qaoncloud.com")
        cy.xpath("//input[@id='password']").type("Qaoncloud@01")
        cy.get('.show_hide_password > .relative > .absolute').click()
        cy.xpath("//button[normalize-space()='Sign in']",{ timeout: 5000 }).click()
        //cy.get('[class="my-1 text-sm text-red-500"]').should('be.visible')
   
        //cy.xpath("//input[@id='password']").clear().type("Qaoncloud@01")
        //cy.xpath("//button[normalize-space()='Sign in']").click()
       // cy.wait(5000)
      })

      Cypress.Commands.add('TestLogin', ()=> { 

        cy.on('uncaught:exception', (err,runnable) => { 
            return false
          })
      
          cy.visit('https://advisor.forastaging.net/login') 
        cy.contains("Not an advisor?").should('be.visible')
          cy.xpath("//a[normalize-space()='Sign in here.']").click()
          cy.xpath("//label[normalize-space()='Username']").should('be.visible')
          cy.xpath("//input[@id='username']").type("reenaz+user5147@team845771.testinator.com")
          cy.xpath("//input[@id='password']").type("Qaoncloud@01")
          cy.get('.show_hide_password > .relative > .absolute').click().click()
         /* cy.xpath("//button[normalize-space()='Sign in']").click()
          cy.contains("Unable to log in with provided credentials.", { timeout: 50000 }).should('be.visible')
     
          cy.xpath("//input[@id='password']", { timeout: 2000 }).clear().type("Qaoncloud@01")*/
          cy.xpath("//button[normalize-space()='Sign in']", { timeout: 10000 }).click()
        })

      
  
  

        Cypress.Commands.add('AddClient_AllFields', (Firstname,Lastname,Middlename,Preferedname)=> { 
          
            Client.Addfirstnamefield.type(Firstname)
            Client.AddLastnamefield.type(Lastname)
            Client.Middlenamefield.type(Middlename)
            Client.Preferrednamefield.type(Preferedname)

          
          })
       
        
        
        Cypress.Commands.add('AddClient_RequiredFields', (Firstname1,Lastname1
        )=> { 
          
            Client.Addfirstnamefield.type(Firstname1)
            Client.AddLastnamefield.type(Lastname1)
      
            

          
          })
        
  
  
          Cypress.Commands.add('readAndSetExcelData', () => {
            const filePath = 'cypress/fixtures/Fora_Clients_TestData.xlsx'; // Adjust the file path as necessary
           
            // Read the Excel file and set the data for all sheets as a Cypress alias
            cy.task('readExcel', filePath).then((allData) => {
              cy.wrap(allData).as('testData'); // Store all sheet data as an alias 'testData'
            });
          });
          
          Cypress.Commands.add('getTestDataForTS', (testscriptId) => {
            
            // Fetch the testData alias containing data from all sheets
            return cy.get('@testData').then((allData) => {
              let foundTestData = null;
          
              // Loop through each sheet's data to find the testscriptId
              for (const sheetName in allData) {
                const sheetData = allData[sheetName];
                const testData = sheetData.find(row => row.Testscript_ID === testscriptId);
                if (testData) {
                  foundTestData = testData;
                  break;
                }
              }
          
              if (!foundTestData) {
                throw new Error(`Test data not found for Testscript_ID: ${testscriptId}`);
              }
          
              // Extract all relevant fields from the row
              const {
                
                Firstname,
                Lastname,
                Middlename,
                Preferedname,
                Firstname1,
                Lastname1,
                PartialName_Search,
                FullName_Search,
                NonExitClient,
                Preferedpartner,
                Suffix,
                InvalidEmail,
                Personalemail3,
                Workemail2,
                Otheremail2,
                CardNumber,
                ExpDate,
                CCV,
                CardName,
                CardAddress,
                address_additional,
                card_cityInput,
                card_stateInput,
                card_postalcode,
                LoyalityProgram,
                LoyalityProgram1,
                Note,
                Link,
                Note1,
                Advisor_OwnClient,
                Traveler_FirstName,
                Traveler_LastName,
                MobileNumber,
                Phone_Number,Addressname,City,State,Zipcode,Legalnameeditfield,Legalnameeditfield1,Legalnameeditfield2,Legalnameeditfield3,KTN

        
              } = foundTestData;
          
              // Return an object with all necessary test data
              return {
                Firstname,
                Lastname,
                Middlename,
                Preferedname,
                Firstname1,
                Lastname1,
                PartialName_Search,
                FullName_Search,
                NonExitClient,
                Preferedpartner,
                Suffix,
                MobileNumber,
                InvalidEmail,
                Personalemail3,
                Workemail2,
                Otheremail2,
                CardNumber,
                ExpDate,
                CCV,
                CardName,
                CardAddress,
                address_additional,
                card_cityInput,
                card_stateInput,
                card_postalcode,
                LoyalityProgram,
                LoyalityProgram1,
                Note,
                Link,
                Note1,
                Advisor_OwnClient,
                Traveler_FirstName,
                Traveler_LastName,
                Phone_Number,Addressname,City,State,Zipcode,Legalnameeditfield,Legalnameeditfield1,Legalnameeditfield2,Legalnameeditfield3,KTN




          
    
              };
            });
          });
        
        
        

    Cypress.Commands.add('NotanadvisorLogin', ()=> { 

      cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
    
        cy.visit('https://advisor.forastaging.net/login') 
        cy.contains("Not an advisor?").should('be.visible')
        cy.xpath("//a[normalize-space()='Sign in here.']").click()
        cy.xpath("//label[normalize-space()='Username']").should('be.visible')
        cy.xpath("//input[@id='username']").type("reenaz+1721627564434@qaoncloud.com")
        cy.xpath("//input[@id='password']").type("Qaoncloud@01")
        cy.get('.show_hide_password > .relative > .absolute').click().click()
       /* cy.xpath("//button[normalize-space()='Sign in']").click()
        cy.contains("Unable to log in with provided credentials.", { timeout: 50000 }).should('be.visible')
   
        cy.xpath("//input[@id='password']", { timeout: 2000 }).clear().type("Qaoncloud@01")*/
        cy.xpath("//button[normalize-space()='Sign in']", { timeout: 10000 }).click()
      })
      Cypress.Commands.add('UniqueName_CreateClient', ()=> { 
        const generateShortUniqueName = (length = 10) => {
          const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let result = '';
          for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return result;
        };
        //cy.get('[class="flex md:justify-between w-full md:items-center flex-col md:flex-row p-6"]').eq(1).click()
       Client.Addclient.should('be.visible').click()
       cy.url().should('include', 'https://advisor.forastaging.net/clients?modal=add-client')
        Client.AddFirstnameheader.should('be.visible')
        const First_name = generateShortUniqueName()
        Client.Addfirstnamefield.should('be.visible').click().type(First_name)
        Client.AddLastnameheader.should('be.visible')
        const Last_name = generateShortUniqueName();
        Client.AddLastnamefield.should('be.visible').type(Last_name)
      Client.Addnewclient_Button.should('be.visible').click()
      
      cy.wait(3000)
        
        })
        Cypress.Commands.add('UniqueName_Creation', ()=> { 
          const generateShortUniqueName1 = (length = 10) => {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
          };
          const Firstname1 = generateShortUniqueName1()
          Client.Addtravelerfirstnamefield.type(Firstname1)
          const Lastname1 = generateShortUniqueName1();
          Client.Addtravelerlastnamefield.type(Lastname1)
          })
   
      Cypress.Commands.add('NotanadvisortravelLogin', ()=> { 

        cy.on('uncaught:exception', (err,runnable) => { 
            return false
          })
      
          cy.visit('https://advisor.forastaging.net/login') 
          cy.contains("Not an advisor?").should('be.visible')
          cy.xpath("//a[normalize-space()='Sign in here.']").click()
          cy.xpath("//label[normalize-space()='Username']").should('be.visible')
          cy.xpath("//input[@id='username']").type("reenaz+1723433700304@qaoncloud.com")
        /*  cy.xpath("//input[@id='password']").type("Qaoncloud@")
          cy.get('.show_hide_password > .relative > .absolute').click().click()
          cy.xpath("//button[normalize-space()='Sign in']").click()
          cy.contains("Unable to log in with provided credentials.", { timeout: 10000 }).should('be.visible')*/
     
          cy.xpath("//input[@id='password']", { timeout: 3000 }).type("Qaoncloud@01")
          cy.xpath("//button[normalize-space()='Sign in']", { timeout: 10000 }).click()
        })

        Cypress.Commands.add('NotanadvisorHomeLogin', ()=> { 

          cy.on('uncaught:exception', (err,runnable) => { 
              return false
            })
        
            cy.visit('https://advisor.forastaging.net/login') 
            cy.contains("Not an advisor?").should('be.visible')
            cy.xpath("//a[normalize-space()='Sign in here.']").click()
            cy.xpath("//label[normalize-space()='Username']").should('be.visible')
            cy.xpath("//input[@id='username']").type("reenaz+1720590948963@qaoncloud.com")
            cy.xpath("//input[@id='password']").type("Qaoncloud@01")
            cy.get('.show_hide_password > .relative > .absolute').click().click()
           /* cy.xpath("//button[normalize-space()='Sign in']").click()
            cy.contains("Unable to log in with provided credentials.",{ timeout: 5000 }).should('be.visible')
            cy.xpath("//input[@id='password']", { timeout: 2000 }).clear().type("Qaoncloud@01")*/
            cy.xpath("//button[normalize-space()='Sign in']",{ timeout: 8000 }).click()
          })

          Cypress.Commands.add('NotanadvisorclientLogin', ()=> { 
            

            cy.on('uncaught:exception', (err,runnable) => { 
                return false
              })
          
              cy.visit('https://advisor.forastaging.net/login') 
              cy.contains("Not an advisor?").should('be.visible')
              cy.xpath("//a[normalize-space()='Sign in here.']").click()
              cy.xpath("//label[normalize-space()='Username']").should('be.visible')
             cy.xpath("//input[@id='username']").type("reenaz+user7974@team845771.testinator.com")
             //cy.xpath("//input[@id='username']").type(Username)
              cy.xpath("//input[@id='password']").type("Qaoncloud@01")
              //cy.xpath("//input[@id='password']").type(Password)
              cy.get('.show_hide_password > .relative > .absolute').click().click()
            /*  cy.xpath("//button[normalize-space()='Sign in']").click()
              cy.contains("Unable to log in with provided credentials.").should('be.visible')
         
              cy.xpath("//input[@id='password']", { timeout: 3000 }).clear().type("Qaoncloud@01")*/
              cy.xpath("//button[normalize-space()='Sign in']", { timeout: 10000 }).click()
            })
  Cypress.Commands.add('HomeLogin', ()=> { 
  cy.visit('https://advisor.forastaging.net/login')  //Visit URL

  cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
cy.wait(4000)

cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
return false
})

cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
cy.contains('Fora Travel').click()    //Fora travel button in usermail page
cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
cy.get("div[class='XfpsVe J9fJmf'] span[class='RveJvd snByac']").click() //got it button

cy.get('#identifierId').clear().type("regression.test0423@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
cy.contains('Continue').click()

})


})


cy.get('.button').click();
cy.wait(10000);
// cy.get('#input-accessToken-for-first-time-login-provider').type('ya29.a0AWY7Ckl7EtaEn8GkrETqR73IOcNO1q3Jf4xQn3-RK_5UIkObqHrh19P5LtBawR8A2Z7RbjDkmn4ZKl4PdM1TEgQnE4mJASLjoo-rjotfpQ2_8r_Cy4q-jhu4VARmap12zVafjAAJq8ksotP_8gNgCn2ROJYYWfgaCgYKAYsSARASFQG1tDrpFqbUx2SXBtq7KAamWWecWA0166');
// cy.get(':nth-child(5) > form > button').click()

cy.origin('https://accounts.google.com', {
args: {  },
}, ({ }) => {
Cypress.on('uncaught:exception', (err) => {
  return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
});
//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.contains('Use another account').click()
//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.wait(8000)
cy.get('#identifierId').clear().type("regression.test0423@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Qaoncloud@01")
 //Check if accept valid Password
 cy.wait(2000)
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 // cy.wait(11000)*/
 cy.contains('Continue').click()
})
  })

  // cy.get('#input-accessToken-for-first-time-login-provider').type('ya29.a0AWY7Ckl7EtaEn8GkrETqR73IOcNO1q3Jf4xQn3-RK_5UIkObqHrh19P5LtBawR8A2Z7RbjDkmn4ZKl4PdM1TEgQnE4mJASLjoo-rjotfpQ2_8r_Cy4q-jhu4VARmap12zVafjAAJq8ksotP_8gNgCn2ROJYYWfgaCgYKAYsSARASFQG1tDrpFqbUx2SXBtq7KAamWWecWA0166');
  // cy.get(':nth-child(5) > form > button').click()
  
  /*cy.origin('https://accounts.google.com', {
  args: {  },
  }, ({ }) => {
  Cypress.on('uncaught:exception', (err) => {
    return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
  });
  cy.get('[data-identifier="tesst.testt@forastaging.net"]').click()
  })
    })*/

    
    Cypress.Commands.add('ClientLogin', ()=> { 
      cy.visit('https://advisor.forastaging.net/login')  //Visit URL
    
      cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
    cy.wait(4000)
    
    cy.origin('https://accounts.google.com', function () {
    cy.on('uncaught:exception', (err,runnable) => { 
    return false
    })
    
    cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
    /*cy.contains('Fora Travel').click()    //Fora travel button in usermail page
    cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
    cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
    cy.get("div[class='XfpsVe J9fJmf'] span[class='RveJvd snByac']").click() *///got it button
    
    cy.get('#identifierId').clear().type("parkavi.s@forastaging.net") //Check if accept valid Username
    cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
    ////error message for entering wrong password
    cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
    cy.contains('Next').click()  //Check if next button is clickable after entering valid password
    cy.wait(8000)
    //
    
    })
    
    
    })
    cy.pause()
    cy.wait(2000)
    cy.contains('Continue').click()
   // cy.wait(10000)
    cy.get('.button').click();
    cy.wait(10000);
    // cy.get('#input-accessToken-for-first-time-login-provider').type('ya29.a0AWY7Ckl7EtaEn8GkrETqR73IOcNO1q3Jf4xQn3-RK_5UIkObqHrh19P5LtBawR8A2Z7RbjDkmn4ZKl4PdM1TEgQnE4mJASLjoo-rjotfpQ2_8r_Cy4q-jhu4VARmap12zVafjAAJq8ksotP_8gNgCn2ROJYYWfgaCgYKAYsSARASFQG1tDrpFqbUx2SXBtq7KAamWWecWA0166');
    // cy.get(':nth-child(5) > form > button').click()
 
    cy.origin('https://accounts.google.com', {
args: {  },
}, ({ }) => {
Cypress.on('uncaught:exception', (err) => {
  return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
});
//cy.get('[data-identifier="testing.os@forastaging.net"]').click()
cy.contains('Use another account').click()

//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.wait(8000)
cy.get('#identifierId').clear().type("new.id22@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
cy.contains('Continue').click()
// cy.wait(11000)*/F

})

/*cy.fixture('Login.json').then(function (dataJson)  {
cy.get('#input-accessToken-for-first-time-login-provider').type(dataJson.Accesstoken) //verifying access token
cy.get(':nth-child(5) > form > button').click() //clicking on signin with token
cy.url().should('eq', 'https://advisor.forastaging.net/') //verifying if its directing to home page after login
})*/
})
   /* cy.origin('https://accounts.google.com', {
    args: {  },
    }, ({ }) => {
    Cypress.on('uncaught:exception', (err) => {
      return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
    });
    cy.get('[data-identifier="regression.test32610@forastaging.net"]').click()
    })
      })*/





Cypress.Commands.add('TrainingLogin', ()=> { 
    
  cy.visit('https://advisor.forastaging.net/login')  //Visit URL

  cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
cy.wait(5000)

cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
return false
})
cy.get('[class="lCoei YZVTmd SmR8"]').eq(1).click()

//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.wait(8000)
cy.get('#identifierId').clear().type("reenaz.fathima@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Testqa@1234") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 // cy.wait(11000)

})
cy.get('.button').click()
cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
return false
})

cy.get('[class="lCoei YZVTmd SmR8"]').eq(1).click()
cy.wait(8000)




cy.get('#identifierId').clear().type("reenaz.fathima@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Testqa@1234") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 
})

})


Cypress.Commands.add('MaintenanceLogin', ()=> { 
    
  cy.visit('https://advisor.forastaging.net/login')  //Visit URL

  cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
cy.wait(5000)

cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
return false
})
cy.get('[class="lCoei YZVTmd SmR8"]').eq(1).click()

//cy.get('[data-identifier="test.automation@forastaging.net"]').click()
cy.wait(8000)
cy.get('#identifierId').clear().type("reenaz.fathima@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Testqa@1234") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 // cy.wait(11000)

})
cy.get('.button').click()
cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => {
return false
})

cy.get('[class="lCoei YZVTmd SmR8"]').eq(1).click()
cy.wait(8000)




cy.get('#identifierId').clear().type("reenaz.fathima@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
////error message for entering wrong password
cy.get('#password').type("Testqa@1234") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
 
})

})
Cypress.Commands.add('Login1', ()=> { 
    
  cy.visit('https://advisor.forastaging.net/login')  //Visit URL

  cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
cy.wait(5000)

cy.origin('https://accounts.google.com', function () {
cy.on('uncaught:exception', (err,runnable) => { 
return false
})

cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {

cy.get('#identifierId').clear().type("new.id22@forastaging.net") //Check if accept valid Username
cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
cy.wait(4000)
cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
cy.contains('Next').click()  //Check if next button is clickable after entering valid password
cy.wait(8000)
cy.contains('Continue').click()
cy.wait(2000)

})


})


cy.get('.button').click();
cy.wait(8000);

cy.origin('https://accounts.google.com', {
args: {  },
}, ({ }) => {
Cypress.on('uncaught:exception', (err) => {
  return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
});
cy.contains('Use another account').click()

  cy.wait(8000);
  cy.get('#identifierId').clear().type("new.id22@forastaging.net");
  cy.get('#identifierNext').click({ force: true });
  cy.wait(4000);
  cy.get('#password').type("Qaoncloud@01");
  cy.contains('Next').click();
  cy.wait(8000);
  cy.contains('Continue').click();
  cy.wait(2000);
});
})




  Cypress.Commands.add('createBooking', (bookingData) => {
    const apiUrl = 'https://api.forastaging.net/v1/booking-restricted/';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'XAPIKEY': '50eedfb8-3464-4017-8655-272de84ce154',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData),
      redirect: 'follow'
    };
  
    return cy.request({
      method: requestOptions.method,
      url: apiUrl,
      headers: requestOptions.headers,
      body: requestOptions.body,
    });
  });
  

  Cypress.Commands.add('Newbookinglogin', ()=> { 
    cy.visit('https://advisor.forastaging.net/login')  //Visit URL
  
    cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
  cy.wait(4000)
  
  cy.origin('https://accounts.google.com', function () {
  cy.on('uncaught:exception', (err,runnable) => { 
  return false
  })
  
  cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
  cy.contains('Fora Travel').click()    //Fora travel button in usermail page
  cy.contains('hi@forastaging.net').should('be.visible')   // fora mail id
  cy.get("div[jsname='DKOQHf']").should('be.visible')   //Signing in will redirect you to: https://advisor.forastaging.net text
  cy.get("div[class='XfpsVe J9fJmf'] span[class='RveJvd snByac']").click() //got it button
  
  cy.get('#identifierId').clear().type("twostep.verification@forastaging.net") //Check if accept valid Username
  cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
  ////error message for entering wrong password
  cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
  cy.contains('Next').click()  //Check if next button is clickable after entering valid password
  cy.wait(8000)
  
  
  })
  
  
  })
  
  
  cy.get('.button').click();
  cy.wait(10000);
  
  
  cy.origin('https://accounts.google.com', {
  args: {  },
  }, ({ }) => {
  Cypress.on('uncaught:exception', (err) => {
    return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
  });
  cy.get('[data-identifier="twostep.verification@forastaging.net"]').click()
  })
    })


    Cypress.Commands.add('BookingLogin', ()=> { 
    
      cy.visit('https://advisor.forastaging.net/login')  //Visit URL
    
      cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']").should('be.visible').click() // check if signin with for button is clickable
    cy.wait(5000)
    
    cy.origin('https://accounts.google.com', function () {
    cy.on('uncaught:exception', (err,runnable) => { 
    return false
    })
    
    cy.fixture('Advisor_Login_TS001 and TS002').then(function (dataJson) {
    
    cy.get('#identifierId').clear().type("tesst.testt@forastaging.net") //Check if accept valid Username
    cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
    ////error message for entering wrong password
    cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
    cy.contains('Next').click()  //Check if next button is clickable after entering valid password
    cy.wait(8000)
    cy.contains('Continue').click()
cy.wait(2000)
    
    })
    
    
    })
    
    
    cy.get('.button').click();
    cy.wait(8000);
    // cy.get('#input-accessToken-for-first-time-login-provider').type('ya29.a0AWY7Ckl7EtaEn8GkrETqR73IOcNO1q3Jf4xQn3-RK_5UIkObqHrh19P5LtBawR8A2Z7RbjDkmn4ZKl4PdM1TEgQnE4mJASLjoo-rjotfpQ2_8r_Cy4q-jhu4VARmap12zVafjAAJq8ksotP_8gNgCn2ROJYYWfgaCgYKAYsSARASFQG1tDrpFqbUx2SXBtq7KAamWWecWA0166');
    // cy.get(':nth-child(5) > form > button').click()
    
    cy.origin('https://accounts.google.com', {
    args: {  },
    }, ({ }) => {
    Cypress.on('uncaught:exception', (err) => {
      return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
    });
  
    cy.contains('Use another account').click()
    
    //cy.get('[data-identifier="test.automation@forastaging.net"]').click()
    cy.wait(8000)
    cy.get('#identifierId').clear().type("tesst.testt@forastaging.net") //Check if accept valid Username
    cy.get('#identifierNext').click({force: true}) //Check if it click next button after entering Username
    ////error message for entering wrong password
    cy.get('#password').type("Qaoncloud@01") //Check if accept valid Password
    cy.contains('Next').click()  //Check if next button is clickable after entering valid password
    cy.wait(8000)
    cy.contains('Continue').click()
cy.wait(2000)
 
    
    })
    
    /*cy.fixture('Login.json').then(function (dataJson)  {
    cy.get('#input-accessToken-for-first-time-login-provider').type(dataJson.Accesstoken) //verifying access token
    cy.get(':nth-child(5) > form > button').click() //clicking on signin with token
    cy.url().should('eq', 'https://advisor.forastaging.net/') //verifying if its directing to home page after login
    })*/
    })


    Cypress.Commands.add('Onbaording', ()=> { 


    const timestamp = Date.now();
          const uniqueString = `user${timestamp}`;
          const userData = {
              personal_email: `reenaz+${uniqueString}@team845771.testinator.com`,
              first_name: `reenaz${timestamp}`,
              last_name: `fathima${timestamp}`
          };
  
          // Define the API endpoint for Fora
        const apiEndpoint = 'https://api.forastaging.net/v1/invites/restricted/';
  
          // Authentication token for Fora API (replace with your actual token)
          const authToken = '50eedfb8-3464-4017-8655-272de84ce154';
  
          // Variables to store email and link details
          let emailId;
          let firstLink;
  
          // Make the POST request to create the user
          cy.request({
              method: 'POST',
              url: apiEndpoint,
              body: userData,
              headers: {
                  'XAPIKEY': authToken,
                  'Content-Type': 'application/json'
              },
          }).then((response) => {
              // Assert the status code
              expect(response.status).to.eq(200);
  
              // Assert the response body
              expect(response.body).to.have.property('personal_email', userData.personal_email);
              expect(response.body).to.have.property('first_name', userData.first_name);
              expect(response.body).to.have.property('last_name', userData.last_name);
  
              // Wait briefly before fetching the email from Mailinator
              cy.wait(6000); // Adjust timing as needed
  
              // After successful creation, fetch the email from Mailinator
              const mailinatorApiKey = 'c3cf21ca3af74c6e9bb2b4ddad592e5b';
              const mailinatorInboxUrl = `https://mailinator.com/api/v2/domains/private/inboxes/reenaz+${uniqueString}`;
  
              cy.request({
                  method: 'GET',
                  url: mailinatorInboxUrl,
                  headers: {
                      'Authorization': mailinatorApiKey,
                      'Content-Type': 'application/json'
                  }
              }).then((inboxResponse) => {
                  expect(inboxResponse.status).to.eq(200);
                  expect(inboxResponse.body).to.have.property('msgs').that.is.an('array');
                  cy.wait(5000)

                  // Find the latest email by sorting by received time (assuming 'createdAt' field exists)
                  const messages = inboxResponse.body.msgs;
                  messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by descending 'createdAt'
  cy.wait(5000)
                  // Ensure there is at least one email
                  expect(messages.length).to.be.greaterThan(0);
  
                  // Fetch the latest email's ID and subject
                  const latestEmail = messages[0];
                  expect(latestEmail).to.exist;
                  expect(latestEmail.subject).to.include('Welcome to Fora!');
  
                  // Fetch links for the specific email
                  const emailId = latestEmail.id;
                  const linksUrl = `https://mailinator.com/api/v2/domains/private/inboxes/reenaz+${uniqueString}/messages/${emailId}/links`;
  
                  cy.request({
                      method: 'GET',
                      url: linksUrl,
                      headers: {
                          'Authorization': mailinatorApiKey,
                          'Content-Type': 'application/json'
                      }
                  }).then((linksResponse) => {
                      expect(linksResponse.status).to.eq(200);
                      expect(linksResponse.body).to.have.property('links').that.is.an('array');
                      cy.wait(5000); // Adjust timing as needed

                      // Assert and log the links found in the email
                      const links = linksResponse.body.links;
                      expect(links.length).to.be.greaterThan(0);
  
                      cy.log('Links in Email:', links.join(', '));               
                      // Visit the URL using Cypress with followRedirect: false
                      const foraRegistrationLink = links.find(link => link.includes('advisor.forastaging.net/register'));
                      expect(foraRegistrationLink).to.exist; // Ensure we found a link containing the registration URL
  
                      cy.visit(foraRegistrationLink, { followRedirect: false });// Visit the last link in the array
                      
 
                

                      })
                    })
                  })
                })
          
                Cypress.Commands.add('NotanadvisorLoginCredentials', (testscriptId) => {
                  // Fetch the testData alias containing data from all sheets
                  return cy.get('@testData').then((allData) => {
                    let foundTestData = null;
                
                    // Loop through each sheet's data to find the testscriptId
                    for (const sheetName in allData) {
                      const sheetData = allData[sheetName];
                      const testData = sheetData.find(row => row.Testscript_ID === testscriptId);
                      if (testData) {
                        foundTestData = testData;
                        break;
                      }
                    }
                
                    if (!foundTestData) {
                      throw new Error(`Test data not found for Testscript_ID: ${testscriptId}`);
                    }
                
                    // Extract all relevant fields from the row
                    const { 
                      Username,Password
                
                    } = foundTestData;
                
                    // Return an object with all necessary test data
                    return {
                      Username,
                      Password
                    };
                  });
                });
                
                
                
                   

    //
    // cypress/support/commands.js

