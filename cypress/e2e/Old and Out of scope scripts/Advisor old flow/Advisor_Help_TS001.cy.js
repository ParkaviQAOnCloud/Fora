/* Description For TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of the Help page" */ 

/* Description For TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of the Help Center section"				 */ 

/* Description For TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of the Ask the community section"				 */ 

/* Description For TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of the Email support section" */ 

/* Description For TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of the Changes or questions about a booking"					 */ 


import Home from "../../support/Page Object/Advisor/Home"
import Help from "../../support/Page Object/Advisor/Help"

describe('Advisor_Help_TS001', { testIsolation: false },function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
   it('Advisor_Help_TC001_To verify Help home page ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        cy.Login1()
        Home.navbar.click();
        cy.wait(5000)
        Help.help.scrollIntoView().click()
        Help.helpcentericon.should('be.visible')
        Help.helpcenterheader.should('be.visible')
        Help.helpcentersubheader.should('be.visible')
        Help.Gotohelpcenter.should('be.visible')
        Help.askthecommunityheader.should('be.visible')
        Help.askthecommunityicon.should('be.visible')
        Help.askthecommunitysubheader.should('be.visible')
        Help.Gotoforum.should('be.visible')
        Help.Questionaboutbookingicon.eq(0).scrollIntoView().should('be.visible')
        Help.Questionaboutbookingheader.scrollIntoView().should('be.visible')
        Help.Questionaboutbookingsubheader.scrollIntoView().should('be.visible')
       Help.Questionaboutbookingsubheader1.should('be.visible')
       Help.Questionaboutbookingsubheader2.should('be.visible')
        Help.Gotobooking.scrollIntoView().should('be.visible')
        Help.Emailsupportheader.should('be.visible')
        Help.Emailsupporticon.should('be.visible')
        Help.Emailsupportsubheader.should('be.visible')
        Help.Emailsupportsubheader1.should('be.visible')
        Help.supportlink.should('be.visible')

        
    })
    it('Advisor_Help_TC002_To verify Help Centre section ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
        const specificLinkSelector = 'a[href="https://help.fora.travel/"]';

        Help.Gotohelpcenter.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });

    

    })
    it('Advisor_Help_TC003_To verify  Ask the community section ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
        const specificLinkSelector = 'a[href="https://forum.fora.travel"]';

        Help.Gotoforum.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });
    })

    it('Advisor_Help_TC004_To verify Changes or questions about a booking section',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
        const specificLinkSelector = 'a[href="mailto:support@fora.travel"]';

        Help.supportlink.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });

    })
    it('Advisor_Help_TC005_To verify Email support section ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        Help.Gotobooking.click()
        cy.url().should('include', 'https://advisor.forastaging.net/bookings');

    })

})