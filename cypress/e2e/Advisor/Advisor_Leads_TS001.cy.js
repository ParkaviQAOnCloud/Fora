import Home from "../../support/Page Object/Advisor/Home"
import Leads from "../../support/Page Object/Advisor/Leads"

describe('Advisor_Leads_TS001',{ testIsolation: false }, function() {
    before(() => {
        cy.then(Cypress.session.clearCurrentSessionData)
      })
      it('Advisor_Leads_TC001_To verify ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
     cy.NotanadvisorclientLogin() 

     Home.navbar.click()
     Leads.Leads.click()
     cy.url().should('include', 'https://advisor.forastaging.net/leads');
    Leads.Leadsheader.should('be.visible')
   /* cy.get('[type="checkbox"]').eq(0).click()
    cy.get('[type="checkbox"]').eq(1).click()
    cy.get('[type="checkbox"]').eq(2).click()
    cy.get('[type="checkbox"]').eq(3).click()
    cy.get('[type="checkbox"]').eq(4).click()
    cy.get('[type="checkbox"]').eq(5).click()
    cy.get('[type="checkbox"]').eq(6).click()*/
    const specificLinkSelector = 'a[href="https://advisor.fora.travel/leads-program-guidelines"]';

    Leads.Leadstext.should('be.visible')
 //   Leads.LeadsProgramguidelines.should('be.visible').click()
    cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken link found: ${href}`);
          }
        });
      });
      Leads.Leadsreceived.should('be.visible')
      Leads.Leadsbooked.should('be.visible')
      Leads.Closerate.should('be.visible')
Leads.Open.should('be.visible')
Leads.Inprogress.should('be.visible')
Leads.Booked.should('be.visible')
Leads.Didnotbook.should('be.visible')
Leads.Searchbar.should('be.visible')
cy.fixture('Advisor_Leads.json').then(function (dataJson) {

Leads.Searchbar.type(dataJson.Search)
Leads.Phoneicon.scrollIntoView().should('be.visible')
Leads.Noresults.should('be.visible')
Leads.Noresults.should('be.visible')
Leads.Clearfilter.should('be.visible').click()
Leads.Searchbar.type(dataJson.Search1)
Leads.Italy.should('be.visible')
Leads.Searchbar.clear()
/*cy.get('button').contains('Request Lead').then(($button) => {
    if ($button.length > 0) {
      cy.wrap($button).click();
      Leads.Leadrequest.should('be.visible')
      Leads.Cancelicon.should('be.visible')
      Leads.Leadrequesttext.should('be.visible')
      Leads.logo.should('be.visible')
      Leads.Leadrequesttext1.should('be.visible')
      Leads.Submitrequest.should('be.visible').click()
Leads.Error.click()
Leads.Commentbox.click().type(dataJson.Comment)
Leads.Submitrequest.should('be.visible').click()

    } else {
      
      cy.get('button').contains('Requested').should('be.visible');
      
    }
  });*/
Leads.Sortby.click()
Leads.Oldest.click()
Leads.Sortby.click()
Leads.Newest.click()
Leads.Sortby.click()
Leads.Highesttotalbudget.scrollIntoView().click()
cy.wait(1000)
Leads.Sortby.click()
Leads.Highestnightlyudget.scrollIntoView().click()
cy.wait(1000)

Leads.Sortby.click()
Leads.Lowesttotalbudget.scrollIntoView().click()
cy.wait(1000)

Leads.Sortby.click()
Leads.Lowestnightlyudget.scrollIntoView().click()
 Leads.Filter.click()
 Leads.Filterheader.should('be.visible')
 Leads.Nightlyroombudget.should('be.visible')
 Leads.Lengthoftripdate.should('be.visible')
 ///Leads.Travellingwithchildren.should('be.visible')
 Leads.Type.scrollIntoView().should('be.visible')
 Leads.type1.scrollIntoView().should('be.visible')
 Leads.type2.scrollIntoView().should('be.visible')
 Leads.type3.scrollIntoView().should('be.visible')
 Leads.option.eq(0).scrollIntoView().should('be.visible')
 Leads.option.eq(1).should('be.visible')
 Leads.option.eq(2).should('be.visible')
 Leads.option.eq(3).should('be.visible')
 Leads.option.eq(4).should('be.visible')
 Leads.option.eq(5).should('be.visible')
 Leads.option.eq(6).should('be.visible')
 Leads.option.eq(7).should('be.visible')
 Leads.option.eq(8).should('be.visible')
 Leads.option.eq(9).should('be.visible')
 Leads.option.eq(10).should('be.visible')
 Leads.option.eq(11).should('be.visible')
 Leads.option.eq(12).should('be.visible')
 Leads.option.eq(1).should('be.visible').click()
 Leads.option.eq(4).should('be.visible').click()
 Leads.option.eq(7).should('be.visible').click()
 Leads.option.eq(12).should('be.visible').click()
 Leads.type3.scrollIntoView().should('be.visible').click()
Leads.Showleads.should('be.visible').click()
cy.wait(2000)
Leads.Filtercount.should('be.visible')
cy.wait(2000)
cy.get('.relative > .inline-flex').click()
Leads.Clearall.scrollIntoView().click()
Leads.option.eq(0).scrollIntoView().should('be.visible').click()
Leads.option.eq(1).should('be.visible').click()
cy.wait(1000)
Leads.option.eq(3).should('be.visible').click()
cy.wait(1000)
Leads.option.eq(11).should('be.visible').click()

Leads.type1.should('be.visible').click()
Leads.Showleads.should('be.visible').click()
cy.get('[class="flex flex-col p-6 gap-y-6 bg-white"]').eq(0).each(($el) => {
  cy.wrap($el).within(() => {
    cy.get('span.text-headerF24_32.font-semibold')
      .should('contain.text', 'Barcelona, Lisbon, and possibly the Azores'); 
   
    cy.get('span').should('contain.text', 'The last couple weeks of September'); 

   // cy.get('span').should('contain.text', '$2,000'); 
   ////cy.get('span').should('contain.text', 'Posted'); 
    cy.get('span').should('contain.text', '7-14'); 
    cy.get('span').should('contain.text', "We're looking for a relaxed trip in parts of the city where we can walk to as much as possible"); 
    cy.get('span').should('contain.text', 'Hotel booking only'); 
    cy.get('span').should('contain.text', 'No kids'); 
  });
});
})
cy.get('.gap-x-2 > .relative').click()
cy.wait(2000)
Leads.Clearall.scrollIntoView().click()
cy.wait(2000)
Leads.Showleads.should('be.visible').click()
Leads.Filter.click()
cy.wait(2000)
Leads.Clearall.scrollIntoView().click()
cy.wait(2000)
Leads.Filtercancelicon.click()
      })
      it('Advisor_Leads_TC002_To verify In progress',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 

           Leads.Inprogress.click()
           cy.wait(1000)
           cy.url().should('include', 'https://advisor.forastaging.net/leads/in-progress');
           cy.get('[class="bg-white rounded border border-lightGreyBorder flex flex-col items-center justify-center w-full h-[422px]"]').each(($el) => {
            cy.wrap($el).within(() => {
              cy.get('[class="mb-1 text-lg font-bold text-gray-900 text-center"]')
                .should('contain.text', 'No In-Progress Leads'); 
             
              cy.get('[class="flex flex-col gap-y-6 pt-3 items-center w-full max-w-[375px] p-6"]').should('contain.text', 'You can request leads in the “Open” tab. Leads will appear here once they have been assigned to you.'); 
            });
          });
          Leads.Viewopenleads.click()
          cy.url().should('include', 'https://advisor.forastaging.net/leads/open');
cy.wait(1000)
       
      })
      it('Advisor_Leads_TC003_To verify Booked ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 

           Leads.Booked.click()
           cy.wait(1000)
           cy.url().should('include', 'https://advisor.forastaging.net/leads/booked');

           cy.get('[class="bg-white rounded border border-lightGreyBorder flex flex-col items-center justify-center w-full h-[422px]"]').each(($el) => {
            cy.wrap($el).within(() => {
              cy.get('[class="mb-1 text-lg font-bold text-gray-900 text-center"]')
                .should('contain.text', 'Booked'); 
             
              cy.get('[class="flex flex-col gap-y-6 pt-3 items-center w-full max-w-[375px] p-6"]').should('contain.text', 'These are leads that have turned into a successful booking for your new client.'); 
            });
          });
          Leads.Viewopenleads.click()
          cy.url().should('include', 'https://advisor.forastaging.net/leads/open');

       
      })
      it('Advisor_Leads_TC003_To verify Did not book ',() => {
   
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
cy.wait(2000)
           Leads.Didnotbook.click()
           cy.wait(1000)
           cy.url().should('include', 'https://advisor.forastaging.net/leads/did-not-book');

           cy.get('[class="bg-white rounded border border-lightGreyBorder flex flex-col items-center justify-center w-full h-[422px]"]').each(($el) => {
            cy.wrap($el).within(() => {
              cy.get('[class="mb-1 text-lg font-bold text-gray-900 text-center"]')
                .should('contain.text', 'No Open Leads'); 
             
              cy.get('[class="flex flex-col gap-y-6 pt-3 items-center w-full max-w-[375px] p-6"]').should('contain.text', 'Leads that do not result in a booking will show up here.'); 
            });
          });
          Leads.Viewopenleads.click()
          cy.url().should('include', 'https://advisor.forastaging.net/leads/open');

       
      })
    })



































   /*  cy.get('svg[data-tooltip-id="custom-tooltip-3"]')
      .trigger('mouseover'); 

   
    cy.get('#custom-tooltip-2') 
      .should('be.visible')
      .and('contain', 'A good close rate is above 40%')*/