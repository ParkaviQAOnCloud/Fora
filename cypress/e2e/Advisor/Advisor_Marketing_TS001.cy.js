import Home from "../../support/Page Object/Advisor/Home"
import Guideandprofile from "../../support/Page Object/Advisor/ForaGuideandProfile"
import Marketing from "../../support/Page Object/Advisor/Marketing";
import Shareableasset from "../../support/Page Object/Advisor/Shareabelasset"
import Partner from "../../support/Page Object/Advisor/Partner";




describe('Advisor_Marketing_TS001', { testIsolation: false }, function() {
 before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
    it('Advisor_Marketing_TC001 & TC005_To verify Fora Profile and Guides section-  ', () => {

        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
       // cy.NotanadvisorLogin()
       cy.NotanadvisortravelLogin()
        Home.navbar.click()
        Marketing.Resource.click()
        cy.wait(2000)
        Marketing.Marketing.click()
        cy.url().should('include', 'https://advisor.forastaging.net/marketing');
        Marketing.ForawebcontentHeader.should('be.visible')
        Marketing.Subheading.should('be.visible')
        Guideandprofile.foraprofileheader.should('be.visible')
        Guideandprofile.Foraprofileicon.should('be.visible')
        Guideandprofile.Mailchimp.should('be.visible')
       Guideandprofile.signupform.click()
       const baseLink = 'https://docs.google.com/presentation/d/1mRTBtU9x6MBtoqwDbw1qucbjQJNMr4c2yP1hqSJHwS8/view';
       const specificLinkSelector = `a[href^="${baseLink}"]`;
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
    
       
    

/*it('Advisor_Marketing_TC002_To verify if user can turn their availability on/off with Vacancy feature', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      const specificLinkSelector = 'a[href="https://www.foratravel.com/the-journal/vacancy-or-no-vacancy-introducing-a-new-business-feature-for-fora-advisors"]';
     const specificLinkSelector1 = 'a[href="mailto:support@fora.travel"]';
   
      Guideandprofile.vacancyfeature.click()
      cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken link found: ${href}`);
          }
        });
      });
      Guideandprofile.Emailtochangeyourvaccancystatus.should('be.visible')
      Guideandprofile.Supportemail.click()
      cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken link found: ${href}`);
          }
        });
      });
      Guideandprofile.Emailtochangeyourvaccancystatus2.should('be.visible')
      Guideandprofile.Toeditexistingtest.should('be.visible')
Guideandprofile.text.click()
cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
    cy.request({ url: href, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Broken link found: ${href}`);
      }
    });
  });
    })*/
    
    
 it('Advisor_MArketing_TC003_To verify  if user can submit a guide in guide and reports', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        Guideandprofile.Guideandtripresult.should('be.visible')
        Guideandprofile.Guideandtripresulticon.should('be.visible')
        //const specificLinkSelector = 'a[href="&authuser=test.qa0618@forastaging.net"]';
        //const specificLinkSelector1 = 'a[href="&authuser=test.qa0618@forastaging.net"]';
        const specificLinkSelector2 = 'a[href="mailto:support@fora.travel"]';
        const baseLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfhBA1EZF8r2DGl8oGZxmiqbzAMCGHz2qwPtcXMRV-cbx_0rA/viewform?usp=sharing';
        const specificLinkSelector = `a[href^="${baseLink}"]`;

        const baseLink1 = 'https://docs.google.com/forms/d/e/1FAIpQLSfhBA1EZF8r2DGl8oGZxmiqbzAMCGHz2qwPtcXMRV-cbx_0rA/viewform?usp=sharing';
        const specificLinkSelector1 = `a[href^="${baseLink1}"]`;
        Guideandprofile.Guidereport.click()
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
        
          Guideandprofile.guideortripresult.should('be.visible')
          Guideandprofile.Supportemail.click()
          cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
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
              
 it('Advisor_Marketing_TC004_To verify   Review section', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    const specificLinkSelector = 'a[href="https://advisor.fora.travel/help/articles/what-does-the-travel-reviews-feature-do"]';

Guideandprofile.Reviewtext.scrollIntoView().should('be.visible')
Guideandprofile.Reviewicon.should('be.visible')
Guideandprofile.Reviewtext1.should('be.visible')
Guideandprofile.Reviewtext2.scrollIntoView().should('be.visible')
Guideandprofile.Reviewtext3.scrollIntoView().should('be.visible')
Guideandprofile.Reviewtext4.scrollIntoView().should('be.visible')
Guideandprofile.Reviewtext5.scrollIntoView().should('be.visible')
Guideandprofile.Reviewtext6.scrollIntoView().should('be.visible')
Guideandprofile.Reviewtext7.scrollIntoView().should('be.visible').click()
cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
    cy.request({ url: href, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Broken link found: ${href}`);
      }
    });
  });



})
        it('Advisor_Marketing_TC005_To verify Template page', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
           
            Marketing.Switchtotemplates.click()
            cy.wait(3000)
           // Shareableasset.Template.should('be.visible')
            Shareableasset.Emailicon.should('be.visible')
            Shareableasset.Emailtext.should('be.visible')
            Shareableasset.setuptext.should('be.visible')
           Shareableasset.Magiccontent.scrollIntoView().should('be.visible')
            Shareableasset.Magiccontenticon.should('be.visible')
            Shareableasset.Magiccontenttext.scrollIntoView().should('be.visible')
            Shareableasset.Socialmedia.scrollIntoView().should('be.visible')
            Shareableasset.Socialmediaicon.should('be.visible')
            Shareableasset.Socialmediatext.scrollIntoView().should('be.visible')
         
           /* Shareableasset.Evergreencontent.scrollIntoView().should('be.visible')
            Shareableasset.Evergreencontenttext.should('be.visible')
            Shareableasset.Evergreencontenticon.should('be.visible')
            Shareableasset.Travelagentlink.should('be.visible')
        
            Shareableasset.Travelagenttext.should('be.visible')*/
          
    
        })
       it('Advisor_Marketing_TC006_To verify  email campaigns section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
     
       const baseLink = 'https://drive.google.com/drive/u/0/folders/1L-7_QyAMlq1uapq7Yz4__giWmZDUHiXQ';
       const specificLinkSelector = `a[href^="${baseLink}"]`;

       const baseLink1 = 'https://docs.google.com/spreadsheets/d/1ub19wcmOEBmD82Gr05Qw_0Zmn5klXtxxy6ZOBxhyqmQ';
       const specificLinkSelector1 = `a[href^="${baseLink1}"]`;

       //   Marketing.Templates.scrollIntoView().should('be.visible')
            Shareableasset.Emailtext.scrollIntoView().should('be.visible')
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
    
       it('Advisor_Marketing_TC007_To verify Magic Content Section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
            const baseLink ='https://docs.google.com/spreadsheets/d/1ub19wcmOEBmD82Gr05Qw_0Zmn5klXtxxy6ZOBxhyqmQ';
            const specificLinkSelector = `a[href^="${baseLink}"]`;
   
         //   const specificLinkSelector = 'a[href="?authuser=test.qa0618@forastaging.net"]';
            const specificLinkSelector1 = 'a[href="https://www.loom.com/share/57fe970f86014c00a3ca55d97661b994?sid=9382b269-4fe5-43e7-8686-09393a28a7f1"]';
            Shareableasset.Magiccontent.scrollIntoView().should('be.visible')
            Shareableasset.Magiccontenticon.should('be.visible')
            Shareableasset.Magiccontenttext.scrollIntoView().should('be.visible')
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
    
        it('Advisor_Marketing_TC008_To verify Social Media section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
         
               
       const baseLink = 'https://docs.google.com/spreadsheets/d/1ub19wcmOEBmD82Gr05Qw_0Zmn5klXtxxy6ZOBxhyqmQ';
       const specificLinkSelector = `a[href^="${baseLink}"]`;
       const baseLink1 = 'https://drive.google.com/drive/folders/1lzLoa4L1T5WckR4U159r7zc1S8vpMBpj';
       const specificLinkSelector1 = `a[href^="${baseLink1}"]`;
    
            Shareableasset.Socialmedia.scrollIntoView().should('be.visible')
            Shareableasset.Socialmediaicon.should('be.visible')
            Shareableasset.Socialmediatext.scrollIntoView().should('be.visible')
            Shareableasset.SocialmediaShareableAssets.click()
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
          /*  Shareableasset.Acessforallsocialmedia.click()
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
            });*/
        })
        it('Advisor_Shareable Assets_TC009_To verify Sharable pdf section', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          Shareableasset.shareablepdficon.scrollIntoView().should('be.visible')
          Shareableasset.shareablepdf.should('be.visible')
          Shareableasset.shareablepdftext.should('be.visible')
          Shareableasset.shareablepdflink.should('be.visible')

        })
     /*   it('Advisor_Marketing_TC010_To verify Evergreen Content section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
            const specificLinkSelector = 'a[href="https://www.foratravel.com/the-journal/what-can-i-expect-working-with-a-travel-agent-your-questions-answered"]';
            const specificLinkSelector1 = 'a[href="https://www.foratravel.com/the-journal/booking-through-a-fora-advisor-versus-amex-platinum-why-were-better"]';
            const specificLinkSelector2 = 'a[href="https://www.foratravel.com/why-book-with-fora"]';
             const specificLinkSelector3= 'a[href="https://www.canva.com/design/DAFIKQlxtaE/IbxM-sX2KuikFGkYQwSDew/view?utm_content=DAFIKQlxtaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview "]';
            const specificLinkSelector4 = 'a[href="https://www.youtube.com/watch?v=bB0rU8Hv19M"]';
     
            Shareableasset.Evergreencontent.scrollIntoView().should('be.visible')
            Shareableasset.Evergreencontenticon.should('be.visible')
            Shareableasset.Evergreencontenttext.scrollIntoView().should('be.visible')
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
              Shareableasset.Instagramlink.scrollIntoView().should('be.visible').click()
           cy.get(specificLinkSelector3).should('have.attr', 'href').then((href) => {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                if (response.status !== 200) {
                  cy.log(`Broken link found: ${href}`);
                }
              });
            });
            Shareableasset.Youtubelink.should('be.visible').click()
            cy.get(specificLinkSelector4).should('have.attr', 'href').then((href) => {
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
       
        it('Advisor_Marketing_TC011_To verify Brandresource section', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          const specificLinkSelector = 'a[href="https://docs.google.com/spreadsheets/d/1zIR65okfPruOH8rQCOW1GdiaKKY0SedqkCj38kFH7BE/view?authuser=new.id22@forastaging.net"]';
          Marketing.Switchtobrandresource.click()
          cy.wait(2000)
          Marketing.BrandAssets.should('be.visible')
          Marketing.Brandresources.should('be.visible')
          Marketing.Brandresourcesicon.should('be.visible')
          Marketing.Brandresourcestext.should('be.visible')
          cy.wait(2000)
          Marketing.opengoogledrive.click()
          cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
            cy.request({ url: href, failOnStatusCode: false }).then((response) => {
              if (response.status !== 200) {
                cy.log(`Broken link found: ${href}`);
              }
          
            });
          });

        })*/
    
       it('Advisor_Marketing_TC012_To verify photography assets section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
            Marketing.BrandAssets.should('be.visible')
            const baseLink = 'https://drive.google.com/drive/folders/16468qCivE8e4pP3YeQGR4zRngKxrd8GY?usp=sharing';
            const specificLinkSelector = `a[href^="${baseLink}"]`;
            const specificLinkSelector1 = 'a[href="https://unsplash.com/collections/_FLgge8o2Bo/fora"]';
            const specificLinkSelector2 = 'a[href="https://www.pexels.com/collections/fora-inex4sy/"]';
            const baseLink3 = 'https://docs.google.com/document/d/1NnL3K6NhZxzFRd6h338v7Kf9lNAfaiPFXK92icwwhdU/edit?usp=sharing';
            const specificLinkSelector3 = `a[href^="${baseLink3}"]`;
            Shareableasset.Photographyasset.scrollIntoView().should('be.visible')
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
            Shareableasset.imageassetsfromhotels.click()
          cy.get(specificLinkSelector3).should('have.attr', 'href').then((href) => {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                if (response.status !== 200) {
                  cy.log(`Broken link found: ${href}`);
                }
              });
            });
          })    
          it('Advisor_Marketing_TC0_To verify Fora brand guideline section', () => {
            cy.on('uncaught:exception', (err, runnable) => {
              return false;
            });
      const baseLink = 'https://drive.google.com/drive/folders/1ouCAkejr9ot1PCog5klBZb7ddhg3MxxR?usp=sharing';
      const specificLinkSelector = `a[href^="${baseLink}"]`;
            cy.wait(2000)
            Marketing.Brandguideline.should('be.visible')
            Marketing.Brandguidelineicon.should('be.visible')
           
            Marketing.Brandguidelinetext.should('be.visible')
            cy.wait(2000)
            Marketing.Forabrandguideline.click()
            cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                if (response.status !== 200) {
                  cy.log(`Broken link found: ${href}`);
                }
            
              });
            });
    
          })
          
            it('Advisor_Marketing_TC013_To verify Report an issue module', () => {
              cy.on('uncaught:exception', (err, runnable) => {
                return false;
              });
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
            Partner.dropdownvalue2.click()
            Partner.Issueseveritydropdown.click()
            Partner.Issueseveritydropdownvalue2.click()
            Partner.Issuetypeheader.should('be.visible')
            Partner.Issuetypedropdown.click()
            Partner.Issuetypedropdown1.should('be.visible')
            Partner.Issuetypedropdown2.should('be.visible')
            Partner.Issuetypedropdown3.should('be.visible')
            Partner.Issuetypedropdown4.should('be.visible')
            Partner.Issuetypedropdown5.eq(4).should('be.visible')
            Partner.Issuetypedropdown2.click()
            Partner.Describetheissuefield.should('be.visible').type("error")
            Partner.Report.click()
            Partner.rightmarks.should('be.visible')
            Partner.successtext.should('be.visible')
            Partner.successsubtext.should('be.visible')
            Partner.close.click()
            //Marketing
   /*         Home.navbar.click()
            Partner.Reportanissue.scrollIntoView().click()
            Partner.Reportanissueheader.should('be.visible')
            Partner.Reportanissuetext.should('be.visible')
            Partner.Issuetopicheader.should('be.visible')
            Guideandprofile.Issuetopicdropdown.should('be.visible').click()
            Partner.dropdownvalue3.click()
            Partner.Issueseveritydropdown.click()
            Partner.Issueseveritydropdownvalue3.should('be.visible').click()
            Partner.Issuetypedropdown.click()
            Partner.Marketingissuetypedropdown1.should('be.visible')
            Partner.Marketingissuetypedropdown2.should('be.visible')
            Partner.Marketingissuetypedropdown3.should('be.visible')
            Partner.Marketingissuetypedropdown4.should('be.visible')
            Partner.Marketingissuetypedropdown5.should('be.visible')
            Partner.Marketingissuetypedropdown6.should('be.visible')
            Partner.Marketingissuetypedropdown7.eq(6).scrollIntoView().should('be.visible')
            Partner.Marketingissuetypedropdown3.click()
            Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
            Partner.Report.click()
            Partner.rightmarks.should('be.visible')
            Partner.successtext.should('be.visible')
            Partner.successsubtext.should('be.visible')
            Partner.close.click()
            ////Partners
            Home.navbar.click()

            Partner.Reportanissue.scrollIntoView().click()
            Partner.Reportanissueheader.should('be.visible')
            Partner.Reportanissuetext.should('be.visible')
            Partner.Issuetopicheader.should('be.visible')
            Guideandprofile.Issuetopicdropdown.should('be.visible').click()
            Partner.dropdownvalue4.click()
            Partner.Issueseveritydropdown.click()
            Partner.Issueseveritydropdownvalue2.should('be.visible').click()
            Partner.Issuetypedropdown.click()
            Partner.Partnerissuetypedropdown1.should('be.visible')
            Partner.Partnerissuetypedropdown2.should('be.visible')
            Partner.Partnerissuetypedropdown3.should('be.visible')
            Partner.Partnerissuetypedropdown4.should('be.visible')
            Partner.Partnerissuetypedropdown5.should('be.visible')
            Partner.Partnerissuetypedropdown6.eq(5).should('be.visible')
            Partner.Partnerissuetypedropdown5.scrollIntoView().should('be.visible').click()
            Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
            Partner.Report.click()
            Partner.rightmarks.should('be.visible')
            Partner.successtext.should('be.visible')
            Partner.successsubtext.should('be.visible')
            Partner.close.click()
            //General feedback
            Home.navbar.click()

            Partner.Reportanissue.scrollIntoView().click()
            Partner.Reportanissueheader.should('be.visible')
            Partner.Reportanissuetext.should('be.visible')
            Partner.Issuetopicheader.should('be.visible')
            Guideandprofile.Issuetopicdropdown.should('be.visible').click()
            Partner.dropdownvalue6.click()
            Partner.Issueseveritydropdown.click()
            Partner.Issueseveritydropdownvalue3.should('be.visible').click()
            Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
            Partner.Report.click()
            Partner.rightmarks.should('be.visible')
            Partner.successtext.should('be.visible')
            Partner.successsubtext.should('be.visible')
            Partner.close.click()
            /// Training
            Home.navbar.click()

            Partner.Reportanissue.scrollIntoView().click()
            Partner.Reportanissueheader.should('be.visible')
            Partner.Reportanissuetext.should('be.visible')
            Partner.Issuetopicheader.should('be.visible')
            Guideandprofile.Issuetopicdropdown.should('be.visible').click()
            Partner.dropdownvalue5.click()
            Partner.Issueseveritydropdown.click()
            Partner.Issueseveritydropdownvalue3.should('be.visible').click()
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
            Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
            Partner.Report.click()
            Partner.rightmarks.should('be.visible')
            Partner.successtext.should('be.visible')
            Partner.successsubtext.should('be.visible')
            Partner.close.click()*/
           
       
      })
  



       })
