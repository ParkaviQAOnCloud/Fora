/* Description TC001: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page"				*/

/* Description TC002: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Getting started section"								*/




import Home from "../../support/Page Object/Advisor/Home"
describe('Advisor_Home Onboarding_TS001',{ testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Home Onboarding_TC001_To verify the home page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
       cy.HomeLogin()
     //  cy.viewport(390,844)
    Home.navbar.click()
    Home.home.click()
    Home.cancel.click()
    Home.welcometext.should('be.visible') 
   
    Home.firststep.click()
    Home.video.should('be.visible')
    cy.scrollTo('center');
    cy.wait(1000)
   //Home.bookingheader.should('be.visible')
    Home.Bookingsection.should('be.visible').invoke('text')
    .then((Bookingsection) => {        
      cy.log('Booking section:',Bookingsection);
    })
    Home.viewbookinglink.scrollIntoView().should('be.visible') 
    Home.Findpartnerheader.scrollIntoView().should('be.visible') 
    Home.Findpartnertext.scrollIntoView().should('be.visible') 
    Home.BrowsePartner.scrollIntoView().should('be.visible') 
    Home.Manageyourbookingheader.scrollIntoView().should('be.visible') 
    Home.Findpartnertext.scrollIntoView().should('be.visible') 
    Home.Viewbookingbutton.scrollIntoView().should('be.visible') 
Home.Companyinfo.should('be.visible')
Home.companyinfosection.invoke('text')
.then((companyinfosection) => {        
  cy.log('Company section:',companyinfosection);
})

})

it('Advisor_Home Onboarding_TC002_To verify the Getting started section of the home page', function() {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.scrollTo('top');


  cy.get('[class="video-player-container spotlightr"]');     
  cy.get('iframe')
  .then(($iframe) => {
    cy.wrap($iframe)
      
      .then((body) => {
        cy.wrap(body)
          .get('.video-player-container').eq(0).click();
          cy.wait(2000)
      })

  })
 
    
})

  });











        
        
    