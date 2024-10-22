import Partner from "../../support/Page Object/Advisor/Partner"
import Newhome from "../../support/Page Object/Advisor/Newhome"

import Policy from "../../support/Page Object/Advisor/Policy"
describe('Advisor_Policies_TS001 ',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Policies_TC001_To verify Community guideline Home page content', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      //  cy.Login1()
      cy.NotanadvisorLogin()
        cy.viewport(1500,785)
        cy.wait(2000)
Policy.Policy.click()
cy.wait(2000)
cy.url().should('include','https://advisor.forastaging.net/community-guidelines')

Policy.Infobanner.should('be.visible')
Policy.Text1.first().within(() => {
    // Verify the text of each list item
    cy.get('li').eq(0).should('contain.text', 'Community support and interaction create a continuous learning environment');
    cy.get('li').eq(1).should('contain.text', 'Size creates influence with our partner network');
    cy.get('li').eq(2).should('contain.text', 'Scale allows us to invest in people to build a world-class technology platform');
    cy.get('li').eq(3).should('contain.text', 'A large and diverse community creates crossover awareness among consumers');
  });
  Policy.Policessubheader.should('be.visible')
Policy.PolicesText1.should('be.visible')
Policy.PolicesText.should('be.visible')
Policy.Policylink.click()
Policy.Textlist.eq(1).within(() => {
    // Verify the text of each list item
    cy.get('li').eq(0).should('contain.text', 'Access to Partners ');
    cy.get('li').eq(1).should('contain.text', 'Advisor Content ');
    cy.get('li').eq(2).should('contain.text', 'Advisor Referral ');
    cy.get('li').eq(3).should('contain.text', 'Cruise FAMs & CLIA ');
    cy.get('li').eq(4).should('contain.text', 'Destination Management Company (DMC) ');
    cy.get('li').eq(5).should('contain.text', 'FAMs & Conference ');
    cy.get('li').eq(6).should('contain.text', 'Instagram ');
    cy.get('li').eq(7).should('contain.text', 'Site Visit policy');
    cy.get('li').eq(8).should('contain.text', 'Travel Agent Rates policy');
    cy.get('li').eq(9).should('contain.text', 'Virtuoso policy');
  });
  Policy.Communityguideline.scrollIntoView().should('be.visible')
  Policy.Communityguidelinesubheader.scrollIntoView().should('be.visible')
  Policy.Communityguidelinesubheader1.scrollIntoView().should('be.visible')
  Policy.Textlist.eq(2).within(() => {
    
  });
  Policy.Communityguidelinesubheader1.scrollIntoView().should('be.visible')
  Policy.Communityguidelinesubheader2.scrollIntoView().should('be.visible')
  Policy.Communityguidelinesubheader3.scrollIntoView().should('be.visible')
  Policy.Communityguidelinesubheader4.scrollIntoView().should('be.visible')
    })


    it('Advisor_Policies_TC002_To verify Community guideline Home page content', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      }) 
      cy.viewport(1500,785)

cy.url().should('include','https://advisor.forastaging.net/access-to-partners-policy')
Policy.Accesstopartnerpolicy.should('be.visible')
Policy.Accesstopartnerpolicy.should('be.visible')
Policy.Accesstopartnerpolicytext.should('be.visible')
Policy.Certifiedandadvancestatus.should('be.visible')
Policy.Partnercontact.should('be.visible')
Policy.Partnercontacttext.should('be.visible')
Policy.Partnercontacttext1.should('be.visible')
Policy.Textlist.eq(0).should('be.visible')
Policy.Partnercontactlink.click()
Policy.Partnercontactlink1.click()
Policy.Partnercontactlink2.click()
Policy.Partnercontactlink3.click()
Policy.Partnerevent.should('be.visible')
Policy.Textlist.eq(1).should('be.visible')
Policy.Partnerproandstatus.should('be.visible')
Policy.Partnerlogin.should('be.visible')
Policy.Partnerproandstatuslink.click()
Policy.Partnercontactsheader.should('be.visible')
Policy.Partnercontactstext.should('be.visible')
Policy.Partnercontactstext1.should('be.visible')
Policy.Partnercontactstext2.should('be.visible')

    })

    it('Advisor_Policies_TC003_To Check Report an issue popup', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
          
        })
        cy.wait(5000)
        cy.viewport(1500,785)

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