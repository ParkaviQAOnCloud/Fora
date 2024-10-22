/* Description TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of the resources home page" */

/* Description TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of the Email and itinerary templates that user can access"	 */

/* Description TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of the access forms" */

/* Description TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of the other resources" */



import Home from "../../support/Page Object/Advisor/Home"
import Resource from "../../support/Page Object/Advisor/Resource"
import Partner from "../../support/Page Object/Advisor/Partner"
import Guideandprofile from "../../support/Page Object/Advisor/ForaGuideandProfile"
import Marketing from "../../support/Page Object/Advisor/Marketing";

describe('Advisor_Resource_TS001', { testIsolation: false },function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
   it('Advisor_Resource_TC001_To verify Templates home page ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
       // cy.Login1()
       //cy.NotanadvisorLogin()
      cy.NotanadvisortravelLogin()
        Home.navbar.click();
        Marketing.Resource.scrollIntoView().click()
        cy.wait(2000)
        Resource.Resource.click()
        Resource.resource.should('be.visible')
        Resource.resourcetext.should('be.visible')
       // Resource.Brandresource.should('be.visible')
       Resource.Emailtemplate.should('be.visible')
       Resource.Emailtemplatetext.should('be.visible')

        //Resource.Emailanditineray.should('be.visible')
        Resource.Forms.scrollIntoView().should('be.visible')
    //    cy.scrollTo("bottom")
        Resource.Otherresource.scrollIntoView().should('be.visible')

    })


    it('Advisor_Resource_TC002_To verify if user can access Email templates  ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })  
        const baseLink = 'https://docs.google.com/document/d/1TzXHZlWfFw6cO3hU_PJK4xRM1YpnU0IqscMmsusoRms/edit#heading=h.7rp1qhe6he7n';
        const specificLinkSelector = `a[href^="${baseLink}"]`;
        
        Resource.Emailtemplate.scrollIntoView().should('be.visible')
        Resource.Emailtemplatetext.should('be.visible')
        Resource.openingoogledrive.scrollIntoView().click()
        
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          const url = new URL(href);
          url.searchParams.delete('authuser'); // Remove the authuser parameter
          const validatedHref = url.toString();
          
          cy.request({ url: validatedHref, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${validatedHref}`);
            }
          });
        });
        
        
    })

    it('Advisor_Resource_TC00_To verify if user can access  itinerary templates  ',() => {
   
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })  
     const specificLinkSelector = 'a[href="https://www.canva.com/design/DAGEMADndh4/TBBzk-H9pCorVstS_MgzWg/view?utm_content=DAGEMADndh4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"]';

      Resource.Iternarytemplate.should('be.visible')
      Resource.Iternarytemplatetext.should('be.visible')
      Resource.openingoogledrive.click()
      cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
      
  })

    it('Advisor_Resource_TC003_To verify if user can access Forms  ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })  

        const baseLink = 'https://drive.google.com/drive/folders/1gahh9yQlLkQwDfEwUVy9E6id7YIWM6Fo?usp=sharing';
        const specificLinkSelector = `a[href^="${baseLink}"]`;
        Resource.Forms.should('be.visible')
        Resource.Formstext.should('be.visible')

        Resource.openingoogledrive.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          const url = new URL(href);
          url.searchParams.delete('authuser'); // Remove the authuser parameter
          const validatedHref = url.toString();
          
          cy.request({ url: validatedHref, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${validatedHref}`);
            }
          });
        });
    })
    it('Advisor_Resource_TC004_To verify if user can access other resources  ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })  
       const baseLink = 'https://drive.google.com/drive/folders/1NzGRpFImLwZ9ZbuxEkeoiKFUjyQcJhnc?usp=sharing';
       const specificLinkSelector = `a[href^="${baseLink}"]`;
     
        Resource.Otherresource.should('be.visible')
        Resource.Otherresourcetext.should('be.visible')

        Resource.openingoogledrive.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          const url = new URL(href);
          url.searchParams.delete('authuser'); // Remove the authuser parameter
          const validatedHref = url.toString();
          
          cy.request({ url: validatedHref, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${validatedHref}`);
            }
          });
        });
    })

    
   /* it('Advisor_Resource_TC005_To verify Brand Resource page ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })  
        const specificLinkSelector = 'a[href="https://drive.google.com/drive/folders/1NzGRpFImLwZ9ZbuxEkeoiKFUjyQcJhnc?usp=sharing&authuser=jan.qa@forastaging.net"]';

        Resource.resourcetext.should('be.visible')
        Resource.Brandresource.should('be.visible')
        
        Resource.Brandresourcetext.should('be.visible')
        Resource.openingoogledrive.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });

    })*/
    it('Advisor_Resource_TC005_To verify Report an issue moduel ',() => {
   
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      }) 
cy.wait(3000)
Home.navbar.click()
      Partner.Reportanissue.scrollIntoView().click()
      Partner.Issuetopicheader.should('be.visible')
      Guideandprofile.Issuetopicdropdown.should('be.visible').click()
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
    cy.wait(2000)
    Home.navbar.click()

    Partner.Reportanissue.scrollIntoView().click()
    Partner.Reportanissueheader.should('be.visible')
    Partner.Reportanissuetext.should('be.visible')
    Partner.Issuetopicheader.should('be.visible')
    Guideandprofile.Issuetopicdropdown.should('be.visible').click()
    Partner.dropdownvalue1.should('be.visible')
    Partner.dropdownvalue2.should('be.visible')
    Partner.dropdownvalue3.should('be.visible')
    Partner.dropdownvalue4.should('be.visible')
    Partner.dropdownvalue5.should('be.visible')
    Partner.dropdownvalue6.should('be.visible')
    cy.wait(2000)
    Partner.dropdownvalue2.click()
    cy.wait(2000)
    Partner.Issueseveritydropdown.click()
    Partner.Issueseveritydropdownvalue2.click()
    Partner.Issuetypeheader.should('be.visible')
    Partner.Issuetypedropdown.click()
    cy.wait(2000)
    Partner.Issuetypedropdown1.should('be.visible')
    Partner.Issuetypedropdown2.should('be.visible')
    Partner.Issuetypedropdown3.should('be.visible')
    Partner.Issuetypedropdown4.should('be.visible')
    cy.wait(2000)
    Partner.Issuetypedropdown5.eq(4).should('be.visible')
    Partner.Issuetypedropdown2.click()
    Partner.Describetheissuefield.should('be.visible').type("error")
    Partner.Report.click()
    Partner.rightmarks.should('be.visible')
    Partner.successtext.should('be.visible')
    Partner.successsubtext.should('be.visible')
    Partner.close.click()
    //Marketing
   /* cy.wait(2000)
    Home.navbar.click()
    Partner.Reportanissue.scrollIntoView().click()
    cy.wait(2000)
    Partner.Reportanissueheader.should('be.visible')
    Partner.Reportanissuetext.should('be.visible')
    Partner.Issuetopicheader.should('be.visible')
    Guideandprofile.Issuetopicdropdown.should('be.visible').click()
    Partner.dropdownvalue3.click()
    cy.wait(2000)
    Partner.Issueseveritydropdown.click()
    Partner.Issueseveritydropdownvalue3.should('be.visible').click()
    cy.wait(2000)
    Partner.Issuetypedropdown.click()
    Partner.Marketingissuetypedropdown1.should('be.visible')
    Partner.Marketingissuetypedropdown2.should('be.visible')
    Partner.Marketingissuetypedropdown3.should('be.visible')
    Partner.Marketingissuetypedropdown4.should('be.visible')
    Partner.Marketingissuetypedropdown5.should('be.visible')
    Partner.Marketingissuetypedropdown6.should('be.visible')
    cy.wait(2000)
    Partner.Marketingissuetypedropdown7.eq(6).should('be.visible')
    Partner.Marketingissuetypedropdown3.click()
    Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
    Partner.Report.click()
    Partner.rightmarks.should('be.visible')
    Partner.successtext.should('be.visible')
    Partner.successsubtext.should('be.visible')
    Partner.close.click()
    ////Partners
    cy.wait(2000)
    Home.navbar.click()
    Partner.Reportanissue.scrollIntoView().click()
    cy.wait(2000)
    Partner.Reportanissueheader.should('be.visible')
    Partner.Reportanissuetext.should('be.visible')
    Partner.Issuetopicheader.should('be.visible')
    Guideandprofile.Issuetopicdropdown.should('be.visible').click()
    Partner.dropdownvalue4.click()
    cy.wait(2000)
    Partner.Issueseveritydropdown.click()
    Partner.Issueseveritydropdownvalue2.should('be.visible').click()
    cy.wait(2000)
    Partner.Issuetypedropdown.click()
    Partner.Partnerissuetypedropdown1.should('be.visible')
    Partner.Partnerissuetypedropdown2.should('be.visible')
    Partner.Partnerissuetypedropdown3.should('be.visible')
    Partner.Partnerissuetypedropdown4.should('be.visible')
    Partner.Partnerissuetypedropdown5.should('be.visible')
    Partner.Partnerissuetypedropdown6.eq(5).should('be.visible')
    Partner.Partnerissuetypedropdown5.should('be.visible').click()
    Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
    Partner.Report.click()
    Partner.rightmarks.should('be.visible')
    Partner.successtext.should('be.visible')
    Partner.successsubtext.should('be.visible')
    Partner.close.click()
    //General feedback
    cy.wait(2000)
    Home.navbar.click()
    Partner.Reportanissue.scrollIntoView().click()
    cy.wait(2000)
    Partner.Reportanissueheader.should('be.visible')
    Partner.Reportanissuetext.should('be.visible')
    Partner.Issuetopicheader.should('be.visible')
    Guideandprofile.Issuetopicdropdown.should('be.visible').click()
    Partner.dropdownvalue6.click()
    cy.wait(2000)
    Partner.Issueseveritydropdown.click()
    Partner.Issueseveritydropdownvalue3.should('be.visible').click()
    cy.wait(2000)
    Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
    Partner.Report.click()
    Partner.rightmarks.should('be.visible')
    Partner.successtext.should('be.visible')
    Partner.successsubtext.should('be.visible')
    Partner.close.click()
    cy.wait(2000)
    /// Training
    cy.wait(2000)
    Home.navbar.click()
    Partner.Reportanissue.scrollIntoView().click()
    cy.wait(2000)
    Partner.Reportanissueheader.should('be.visible')
    Partner.Reportanissuetext.should('be.visible')
    Partner.Issuetopicheader.should('be.visible')
    Guideandprofile.Issuetopicdropdown.should('be.visible').click()
    Partner.dropdownvalue5.click()
    Partner.Issueseveritydropdown.click()
    Partner.Issueseveritydropdownvalue3.should('be.visible').click()
    cy.wait(2000)
    Partner.Issuetypedropdown.click()
    Partner.Trainerissuetypedropdown1.should('be.visible')
    Partner.Trainerissuetypedropdown2.should('be.visible')
    Partner.Trainerissuetypedropdown3.should('be.visible')
    Partner.Trainerissuetypedropdown4.should('be.visible')
    Partner.Trainerissuetypedropdown5.should('be.visible')
    Partner.Trainerissuetypedropdown6.should('be.visible')
    Partner.Trainerissuetypedropdown7.should('be.visible')
    Partner.Trainerissuetypedropdown8.eq(7).should('be.visible')
    Partner.Trainerissuetypedropdown3.should('be.visible').click()
    cy.wait(2000)
    Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
    Partner.Report.click()
    Partner.rightmarks.should('be.visible')
    Partner.successtext.should('be.visible')
    Partner.successsubtext.should('be.visible')
    Partner.close.click()
    cy.wait(2000)*/
    })
})