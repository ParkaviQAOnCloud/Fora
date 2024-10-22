/* Description TC001: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page"				*/ 

/* Description TC002:"The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Get Started section"								*/ 

/* Description TC003:"The goal of the test is to verify the following functionalities:
1. contents of the quick link section"												*/ 

/* Description TC004:"The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Bookings section"											*/ 

/* Description TC005:"The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Training section"												*/ 

/* Description TC006:"The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Information section"											*/ 

/* Description TC007:"The goal of the test is to verify the following functionalities:
1. contents of the book a time"											*/ 

/* Description TC008:"The goal of the test is to verify the following functionalities:
1. contents of the Fora email login"											*/ 

/* Description TC009:"The goal of the test is to verify the following functionalities:
1. contents of the Fora forum community"										*/ 

/* Description TC011:"The goal of the test is to verify the following functionalities:
1. contents of the first booking"													*/ 

/*Pre condition : Enabled new Getting Started Onboarding Flow toggle should be off*/
import Home from "../../support/Page Object/Advisor/Home"

describe('Advisor_Home_TS001', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Home_TC001_To verify the welcome section of the home page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
        cy.HomeLogin()
    Home.navbar.click()
    Home.home.click()
    Home.cancel.click()
    cy.wait(2000)
    Home.banner.should('be.visible') 
    Home.bannerinfo.should('be.visible') 
    Home.alert.should('be.visible') 
    Home.alerttext.should('be.visible') 
  })
  it('Advisor_Home_TC002_To verify the Get Started section of the home page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
        
      })
  

Home.Logintext.should('be.visible')
Home.welcomeforacalltext.should('be.visible')
Home.Logintoforumtext.should('be.visible')
Home.createforaprofiletext.should('be.visible')
Home.makeyourfirstbookingtext.should('be.visible')
Home.logincheckbox.should('be.visible')
Home.welcomeforacall.should('be.visible')
Home.Logintoforum.should('be.visible')
Home.createforaprofile.should('be.visible')
Home.makeyourfirstbooking.should('be.visible')

    })
    it('Advisor_Home_TC003_To verify the Quick links section of the home page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          const specificLinkSelector = 'a[href="https://advisor.fora.travel/mail"]';
          const specificLinkSelector1 = 'a[href="https://calendly.com/fora-training/welcome-to-fora-call"]';
          const specificLinkSelector3 = 'a[href="https://forum.fora.travel"]';
          const specificLinkSelector4 = 'a[href="https://foratravel.typeform.com/to/M137XtOj"]';
          const specificLinkSelector5 = 'a[href="https://docs.google.com/presentation/d/15Ses_6YaphPesU_HNLR35HzlVZht_N5hGAlLtRdupVQ/edit#slide=id.g13659b905dc_0_5?authuser=test.automation@forastaging.net"]';

 Home.loginlink.click()
 cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
    if (response.status !== 200) {
      cy.log(`Broken link found: ${href}`);
    }
  });
});
    Home.Joinwelcomeforacall.click()
    cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });

    Home.Logintoforumaction.click()
    cy.get(specificLinkSelector3).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });
    Home.createforaprofileaction.click()
    cy.get(specificLinkSelector4).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });
    Home.makeyourfirstbookingaction.click()
    cy.get(specificLinkSelector5).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });

    })
      it('Advisor_Home_TC004_To verify the Quick links section of the home page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          const specificLinkSelector = 'a[href="/bookings?bs=booked&dashboardDataRange=ytd"]';

          Home.bookingsheader.scrollIntoView().should('be.visible')
          Home.commissionablevalueheader.should('be.visible')
Home.totalcommision.should('be.visible')
Home.commissionvalue.should('be.visible')
Home.paid.should('be.visible')
Home.pending.should('be.visible')
Home.future.should('be.visible')
Home.viewbookinglink.click()
cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
    if (response.status !== 200) {
      cy.log(`Broken link found: ${href}`);
    }
  });
});
cy.wait(2000)
Home.filter.click()

//Home.alltime.should('be.visible')       
Home.lastmonth.should('be.visible')   
Home.lastweek.should('be.visible')
Home.lastyear.should('be.visible')  
Home.currantweek.should('be.visible')  
Home.currantmonth.should('be.visible')  
Home.currantyear.should('be.visible') 
Home.filter.click()
Home.bookingsheader.should('be.visible') 
Home.totalbookings.should('be.visible') 
Home.commissionablevalueheader.should('be.visible') 
Home.totalcommision.should('be.visible') 
Home.commissionvalue.should('be.visible') 
Home.paid.should('be.visible') 
Home.pending.should('be.visible') 
Home.future.should('be.visible') 
//Home.canceled.should('be.visible') 
Home.bookinglink.should('be.visible') 






        })

 it('Advisor_Home_TC005_To verify the Training section of the home page', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
          
        })
        cy.wait(2000)
        Home.navbar.click()
        Home.home.click()
        Home.cancel.click()
        const specificLinkSelector = 'a[href="https://forum.fora.travel/c/training/"]';

  Home.Traininghead.should('be.visible') 
  Home.Trainingtext.should('be.visible') 
  Home.Learnaboutcohort.click()
  cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
    cy.request({ url: href, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Broken link found: ${href}`);
      }
    });
  });

      })
      it('Advisor_Home_TC006_To verify the Company Information section of the home page', function() {
          cy.on('uncaught:exception', (err,runnable) => { 
              return false
              
            })


    Home.Companyinfo.scrollIntoView().should('be.visible') 
    Home.IATA.scrollIntoView().eq(0).should('be.visible') 
   Home.Mailingaddress.should('be.visible') 
    Home.Phonenumber.should('be.visible') 
    Home.Togetpaid.should('be.visible') 
          })

          it('Advisor_Home_TC007_To verify the Quick links section of the home page', function() {
            cy.on('uncaught:exception', (err,runnable) => { 
                return false
                
              })
          const specificLinkSelector1 = 'a[href="https://calendly.com/fora-training/welcome-to-fora-call"]';

          Home.Joinwelcomeforacall.click()
          cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
            });
          });
        })
        it('Advisor_Home_TC008_To verify if user is able to login to Fora email', function() {
          cy.on('uncaught:exception', (err,runnable) => { 
              return false
              
            })
            const specificLinkSelector = 'a[href="https://advisor.fora.travel/mail"]';

            Home.loginlink.click()
            cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
             cy.request({ url: href, failOnStatusCode: false }).then((response) => {
               if (response.status !== 200) {
                 cy.log(`Broken link found: ${href}`);
               }
             });
           });
          })
          it('Advisor_Home_TC009_To verify  if user is able to access Fora forum community', function() {
            cy.on('uncaught:exception', (err,runnable) => { 
                return false
                
              })
              const specificLinkSelector3 = 'a[href="https://forum.fora.travel"]';
              
    Home.Logintoforumaction.click()
    cy.get(specificLinkSelector3).should('have.attr', 'href').then((href) => {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status !== 200) {
          cy.log(`Broken link found: ${href}`);
        }
      });
    });


            })


            it('Advisor_Home_TC011_To verify  if user is able to access Fora forum community', function() {
              cy.on('uncaught:exception', (err,runnable) => { 
                  return false
                  
                })
                const specificLinkSelector5 = 'a[href="https://docs.google.com/presentation/d/15Ses_6YaphPesU_HNLR35HzlVZht_N5hGAlLtRdupVQ/edit#slide=id.g13659b905dc_0_5?authuser=test.automation@forastaging.net"]';

                Home.makeyourfirstbookingaction.click()
                cy.get(specificLinkSelector5).should('have.attr', 'href').then((href) => {
                  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status !== 200) {
                      cy.log(`Broken link found: ${href}`);
                    }
                  });
                });
              })

})

