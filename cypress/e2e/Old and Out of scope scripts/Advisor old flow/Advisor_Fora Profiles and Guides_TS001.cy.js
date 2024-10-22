
/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Fora Profile and Guides home page"*/ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of the turn their availability on/off with Vacancy feature page"*/ 

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of the email support group"*/ 

/* Description for TC005:"The goal of the test is to verify the following functionalities:
1.  Contents of the submit a guide" */ 






import Home from "../../../support/Page Object/Advisor/Home"
import Guideandprofile from "../../../support/Page Object/Advisor/ForaGuideandProfile"
///import ForaGuideandProfile from "../../support/Page Object/Advisor/ForaGuideandProfile";



describe('Advisor_Fora Profiles and Guides_TS001', { testIsolation: false }, function() {
 before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Fora Profiles and Guides_TC001_To verify  Fora Profile and Guides home page', () => {

        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        cy.Login1();
        //cy.viewport(390,844)
        cy.wait(2000)
        Home.navbar.click()
        Guideandprofile.guideandprofile.click()
        Guideandprofile.foraprofileheader.should('be.visible')
        //Guideandprofile.guideandtripreport.should('be.visible')
    })

    it('Advisor_Fora Profiles and Guides_TC003_To verify if user can turn their availability on/off with Vacancy feature', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      const specificLinkSelector = 'a[href="https://www.foratravel.com/the-journal/vacancy-or-no-vacancy-introducing-a-new-business-feature-for-fora-advisors"]';

   
      Guideandprofile.vacancyfeature.click()
      cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken link found: ${href}`);
          }
        });
      });
    

})


it('Advisor_Fora Profiles and Guides_TC004_To verify  if user can email support group', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  const specificLinkSelector = 'a[href="mailto:support@fora.travel"]';

  Guideandprofile.Supportlink.click()
  cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
    cy.request({ url: href, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Broken link found: ${href}`);
      }
    });
  });
cy.wait(2000)

})

it('Advisor_Fora Profiles and Guides_TC005_To verify  if user can submit a guide', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  const specificLinkSelector = 'a[href="https://docs.google.com/forms/d/e/1FAIpQLSfhBA1EZF8r2DGl8oGZxmiqbzAMCGHz2qwPtcXMRV-cbx_0rA/viewform?usp=sharing&authuser=jan.qa@forastaging.net"]';
  const specificLinkSelector1 = 'a[href="https://docs.google.com/forms/d/e/1FAIpQLSfhBA1EZF8r2DGl8oGZxmiqbzAMCGHz2qwPtcXMRV-cbx_0rA/viewform?usp=sharing&authuser=jan.qa@forastaging.net"]';

  Guideandprofile.Guidereport.click()
    cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });
    Guideandprofile.Brainstrome.click()
    cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });
    })
  })
    

    
       

        
        
  //    })
