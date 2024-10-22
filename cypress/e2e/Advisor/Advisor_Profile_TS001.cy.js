/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of the profile home page"*/ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of edit google profile"				*/ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of the personal information field"				*/ 

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of the view agreements"				*/ 

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of the billing portal"				*/ 

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of the user logout portal"	*/ 


import Home from "../../support/Page Object/Advisor/Home"
import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"

describe('Advisor_Profile_TS001 ',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Profile_TC001_To verify  user profile Home page', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      //  cy.Login1()
        //cy.viewport(390,844)
        cy.NotanadvisorLogin()

        Home.navbar.click()
        cy.wait(2000)
        Foraprofile.Usersetting.click()
        Foraprofile.Profilename.invoke('text')
        .then((Profilename) => {        
          cy.log('Profilename:',Profilename);
        })
          Foraprofile.Firaemail.should('be.visible')
          Foraprofile.Firaemail1.eq(0).should('be.visible')
          Foraprofile.Recoveryemail
          Foraprofile.Firaemail1.eq(1).should('be.visible')
         Foraprofile.Verification.should('be.visible')
         Foraprofile.Personalinfo.should('be.visible')
         Foraprofile.Edit.should('be.visible')
         Foraprofile.Personalinfosection.invoke('text')
         .then((Personalinfosection) => {        
           cy.log('Personalinfo:',Personalinfosection);
         })
           Foraprofile.Commissionplanandcontract
           Foraprofile.Commissionplanandcontractsection.invoke('text')
           .then((Commissionplanandcontract) => {        
             cy.log('Commissionplan:',Commissionplanandcontract);
           })
         /*  Foraprofile.Previousdocuments.click()
           Foraprofile.Previousdocuments1.invoke('text')
           .then((Previousdocuments1) => {        
             cy.log('Previousdocuments:',Previousdocuments1);
           })*/
           Foraprofile.Gotobillingportal.scrollIntoView().should('be.visible')
           Foraprofile.Logout.should('be.visible')
    })
    it('Advisor_Profile_TC002_To verify if user can edit profile details on google.', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })   
        Foraprofile.Editongoogle.click()
    })
   it('Advisor_Profile_TC003_To verify  if user can edit personal information', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })   
      Foraprofile.Edit.eq(0).click()
      Foraprofile.Editpersonalinfo.should('be.visible')
      Foraprofile.Address.should('be.visible')
      Foraprofile.Addresssubheader.should('be.visible')
      cy.fixture('Advisor_Profile_TS001.json').then(function (dataJson) {

     /* Foraprofile.country.eq(0).click({force:true})
     // Foraprofile.countrytext.eq(0).type('United States of America')
     Foraprofile.typecountryname .click()
      cy.wait(2000)
     Foraprofile.Savebutton.should('be.disabled')*/
     Foraprofile.Addressfield.clear().type(dataJson.Address)
     cy.wait(1000)

     Foraprofile.City.clear().type(dataJson.City)
     cy.wait(1000)

     Foraprofile.State.clear().type(dataJson.State)
     cy.wait(1000)

     Foraprofile.Zipcode.clear().type(dataJson.Zipcodenumber)
     cy.wait(1000)

     Foraprofile.Phonenumber.clear().type(dataJson.Correctnumber)
     cy.wait(2000)
     Foraprofile.Savebutton.click()
     Foraprofile.Personalinfosection.invoke('text')
     .then((Personalinfosection) => {        
      cy.log('Personalinfo:',Personalinfosection);
    })
    cy.contains('yyyy')

  })
})
it('Advisor_Profile_TC004_To verify  if user can view aggrements', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
  const specificLinkSelector = 'a[href="https://fora-advisor-contracts.s3.us-west-2.amazonaws.com/Fora+-+Advisor+Agreement+-+Main+Agreement+and+Exhibits+2022_Portal_v1.pdf"]';
  const specificLinkSelector1 = 'a[href="https://fora-advisor-contracts.s3.us-west-2.amazonaws.com/Fora+-+Advisor+Agreement+-+Schedule+1+20230301_v1_2023Tier79.pdf"]'; 
  cy.wait(2000)
Foraprofile.View.eq(0).click()
/*cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
    if (response.status !== 200) {
      cy.log(`Broken link found: ${href}`);
    }
  });
});*/
Foraprofile.View1.eq(1).click()
/*cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
    if (response.status !== 200) {
      cy.log(`Broken link found: ${href}`);
    }
  });
});*/
//Foraprofile.view1.eq(2).click()

})
it('Advisor_Profile_TC005_To verify if user can  access billing portal', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  Foraprofile.Gotobillingportal.click({force: true} )
  cy.wait(2000)
})
it('Advisor_Profile_TC006_To verify if user can logout of the portal', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  Foraprofile.Logout.click()
  cy.wait(2000)
  //cy.url().should('include', 'https://advisor.forastaging.net/login');

})

})
  
