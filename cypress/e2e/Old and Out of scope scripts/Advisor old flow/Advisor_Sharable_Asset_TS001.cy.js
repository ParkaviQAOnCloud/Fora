/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. contents of Shareable Assets home page"*/ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1. contents of email campaigns section"	*/ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1. contents of Magic Content Section"*/ 


/* Description for TC004: "The goal of the test is to verify the following functionalities:
1. contents of social Media section"*/ 

/* Description for TC005:"The goal of the test is to verify the following functionalities:
1. contents of photography assets section"*/ 

/* Description for TC006:"The goal of the test is to verify the following functionalities:
1. contents of photography assets section"*/ 




import Home from "../../support/Page Object/Advisor/Home"
import Shareableasset from "../../support/Page Object/Advisor/Shareabelasset"




describe('Advisor_Shareable Assets_TS0001', { testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
   it('Advisor_Shareable Assets_TC0001_To verify Shareable Assets home page', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        cy.Login1();
        cy.wait(2000)
        Home.navbar.click()
        cy.wait(4000)
        Shareableasset.Shareableasset.click()
        Shareableasset.Header.should('be.visible')
        Shareableasset.Emailicon.should('be.visible')
        Shareableasset.Emailtext.should('be.visible')
        Shareableasset.setuptext.should('be.visible')
        Shareableasset.Magiccontent.should('be.visible')
        Shareableasset.Magiccontenticon.should('be.visible')
        Shareableasset.Magiccontenttext.should('be.visible')
        Shareableasset.Socialmedia.should('be.visible')
        Shareableasset.Socialmediaicon.should('be.visible')
        Shareableasset.Socialmediatext.should('be.visible')
        Shareableasset.Photographyasset.should('be.visible')
        Shareableasset.Photographyasseticon.should('be.visible')
        Shareableasset.Photographyassettext.should('be.visible')
        Shareableasset.Evergreencontent.should('be.visible')
        Shareableasset.Evergreencontenticon.should('be.visible')
        Shareableasset.Evergreencontenttext.should('be.visible')

    })
   it('Advisor_Shareable Assets_TC002_To verify  email campaigns section', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        const specificLinkSelector = 'a[href="https://drive.google.com/drive/u/0/folders/1L-7_QyAMlq1uapq7Yz4__giWmZDUHiXQ?authuser=jan.qa@forastaging.net"]';
        const specificLinkSelector1 = 'a[href="https://docs.google.com/spreadsheets/d/1GyFwVJ7ty5_fPoitAvdURUFynLl-IMCDTPmxYaMTiWU/edit#gid=0?authuser=jan.qa@forastaging.net"]';

       /* cy.BookingLogin();
        cy.wait(2000)
        Home.navbar.click()
        Shareableasset.Shareableasset.click()*/
        Shareableasset.Emailtext.should('be.visible')
        Shareableasset.Emailtext.should('be.visible')
        Shareableasset.Emailtext.should('be.visible')
        Shareableasset.setuptext.should('be.visible')
        Shareableasset.marketingyourselflink.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Emailtemplatelink.click()
        cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });

    })

    it('Advisor_Shareable Assets_TC003_To verify Magic Content Section', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        const specificLinkSelector = 'a[href="https://docs.google.com/spreadsheets/d/1GyFwVJ7ty5_fPoitAvdURUFynLl-IMCDTPmxYaMTiWU/edit#gid=1351162029?authuser=jan.qa@forastaging.net"]';
        const specificLinkSelector1 = 'a[href="https://www.loom.com/share/942f7928e48f49b4acd9dfa06185ca82"]';
        Shareableasset.Magiccontent.should('be.visible')
        Shareableasset.Magiccontenticon.should('be.visible')
        Shareableasset.Magiccontenttext.should('be.visible')
        Shareableasset.Viewallink.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Magicfeaturelink.click()
        cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
    })

    it('Advisor_Shareable Assets_TC004_To verify Social Media section', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        const specificLinkSelector = 'a[href="https://www.canva.com/design/DAFIKQlxtaE/IbxM-sX2KuikFGkYQwSDew/view?utm_content=DAFIKQlxtaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview "]';
        const specificLinkSelector1 = 'a[href="https://www.canva.com/design/DAFMteXtyYk/6rVXytQ3s_iPtd2sd07ngA/view?utm_content=DAFMteXtyYk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview "]';
        const specificLinkSelector2 = 'a[href="https://docs.google.com/spreadsheets/d/1GyFwVJ7ty5_fPoitAvdURUFynLl-IMCDTPmxYaMTiWU/edit#gid=824314441?authuser=jan.qa@forastaging.net"]';
        const specificLinkSelector3 = 'a[href="https://docs.google.com/document/d/1NnL3K6NhZxzFRd6h338v7Kf9lNAfaiPFXK92icwwhdU/edit?usp=sharing&authuser=jan.qa@forastaging.net"]';
        const specificLinkSelector4 = 'a[href="https://drive.google.com/drive/folders/16468qCivE8e4pP3YeQGR4zRngKxrd8GY?usp=sharing&authuser=jan.qa@forastaging.net"]';

    

        Shareableasset.Socialmedia.should('be.visible')
        Shareableasset.Socialmediaicon.should('be.visible')
        Shareableasset.Socialmediatext.should('be.visible')
        Shareableasset.instastory.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.instafeed.click()
        cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Acessforallsocialmedia.click()
        cy.get(specificLinkSelector2).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Requestimageaccess.click()
        cy.get(specificLinkSelector3).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Acessourhomeimage.click()
        cy.get(specificLinkSelector4).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
    })

   it('Advisor_Shareable Assets_TC005_To verify photography assets section', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        const specificLinkSelector = 'a[href="https://drive.google.com/drive/folders/16468qCivE8e4pP3YeQGR4zRngKxrd8GY?usp=sharing&authuser=jan.qa@forastaging.net"]';
        const specificLinkSelector1 = 'a[href="https://unsplash.com/collections/_FLgge8o2Bo/fora"]';
        const specificLinkSelector2 = 'a[href="https://www.pexels.com/collections/fora-inex4sy/"]';
        Shareableasset.Photographyasset.should('be.visible')
        Shareableasset.Photographyasseticon.should('be.visible')
        Shareableasset.Photographyassettext.should('be.visible')
        Shareableasset.Acesshotel.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
     
        Shareableasset.Unsplashlibrary.click()
        cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
     
        Shareableasset.Pexellibrary.click()
        cy.get(specificLinkSelector2).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
     

    })

    it('Advisor_Shareable Assets_TC006_To verify Evergreen Content section', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        const specificLinkSelector = 'a[href="https://www.foratravel.com/the-journal/what-can-i-expect-working-with-a-travel-agent-your-questions-answered"]';
        const specificLinkSelector1 = 'a[href="https://www.foratravel.com/the-journal/booking-through-a-fora-advisor-versus-amex-platinum-why-were-better"]';
        const specificLinkSelector2 = 'a[href="https://www.foratravel.com/why-book-with-fora"]';
 
        Shareableasset.Evergreencontent.should('be.visible')
        Shareableasset.Evergreencontenticon.should('be.visible')
        Shareableasset.Evergreencontenttext.should('be.visible')
        Shareableasset.Travelagent.click()
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Foraversusamex.click()
        cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
        });
        Shareableasset.Whybookwithfora.click()
        cy.get(specificLinkSelector2).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
        
          });
        });
   
    })
})