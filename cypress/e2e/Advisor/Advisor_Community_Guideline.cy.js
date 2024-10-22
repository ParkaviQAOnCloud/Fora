/*Description : The goal of the test is to verify the following functionalities:
1.  Contents of Community Guideline page */

/*Description for TC002 : The goal of the test is to verify the following functionalities:
1.  Contents of Report an issue page */

import Foraprofile from "../../support/Page Object/Advisor/Foraprofile"
import Partner from "../../support/Page Object/Advisor/Partner"
import Newhome from "../../support/Page Object/Advisor/Newhome"
describe('Advisor_Communityguideline_TS001 ',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Community Guideline_TC001_To verify Community guideline Home page content', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      //  cy.Login1()
      cy.NotanadvisorLogin()
        cy.viewport(1500,785)
        Foraprofile.Usersetting.click()
        Foraprofile.Communityguideline.scrollIntoView().should('be.visible')
        
        cy.window().then((win) => { 
            cy.stub(win, 'open', url => {
                 win.location.href = url;
             }).as("popup")

         })
         const specificLinkSelector = 'a[href="/community-guidelines"]';
         Foraprofile.Communityguidelineviewbutton.invoke('removeAttr', 'target').click()
         cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });
       cy.visit('https://advisor.forastaging.net/community-guidelines')
       Foraprofile.CommunityGuidelinesheader.should('be.visible')
    //   Foraprofile.Weareprofessionals.should('be.visible')
Foraprofile.Policy.click()

    })
    it('Advisor_Community Guideline_TC002_To Check Report an issue popup', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          cy.viewport(1500,785)
          cy.wait(5000)
          Partner.Reportanissue.scrollIntoView().click()
        //  cy.wait(5000)
          Partner.Reportanissueheader.should('be.visible')
          Partner.Reportanissuetext.should('be.visible')
          Partner.Issuetopicheader.should('be.visible')
          Newhome.issuetypedropdown.should('be.visible').eq(0).click()
          cy.wait(2000)
          Partner.dropdownvalue1.should('be.visible')
          Partner.dropdownvalue2.should('be.visible')
          Partner.dropdownvalue3.should('be.visible')
          Partner.dropdownvalue4.should('be.visible')
          Partner.dropdownvalue5.should('be.visible')
          Partner.dropdownvalue6.should('be.visible')
          
          Partner.dropdownvalue1.click()
          Partner.Describetheissue.should('be.visible')
          Partner.Describetheissuefield.should('be.visible')
          Partner.Cancel.should('be.visible')
          Partner.Report.should('be.visible').click()
          //Partner.Error1.should('be.visible')
          Partner.Error2.should('be.visible')
          Partner.Issueseverityheader.should('be.visible')
          Partner.Issueseveritydropdown.click()
          Partner.Issueseveritydropdownvalue1.should('be.visible')
          Partner.Issueseveritydropdownvalue2.should('be.visible')
          Partner.Issueseveritydropdownvalue3.should('be.visible')
          Partner.Issueseveritydropdownvalue2.should('be.visible').click()
          Partner.Describetheissuefield.should('be.visible').type("error")
          Partner.Report.click()
          Partner.rightmarks.should('be.visible')
          Partner.successtext.should('be.visible')
          Partner.successsubtext.should('be.visible')
          Partner.close.click()
     
        })

       
})