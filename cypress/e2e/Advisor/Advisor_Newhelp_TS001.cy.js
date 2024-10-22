// Import necessary Cypress modules and custom PageObject files
import Home from "../../support/Page Object/Advisor/Home"

import Help from "../../support/Page Object/Advisor/Help"

describe('Advisor_Help_TS001',{ testIsolation: false }, function() {
    before(() => {
      
     cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
  cy.clearAllLocalStorage()
    })

  it("Advisor_Help_TC001-Contents of Help page", () => {
    // help screen validation
    
    cy.NotanadvisorHomeLogin()

    Home.navbar.click()
    Help.help.click();
    cy.wait(5000);

    Help.help_centre.should('be.visible');
    Help.searchBtn.should('be.visible');
    Help.search_textbx.should('be.visible');

    const textsToCheck = [
      "Ask the community",
      "Policy",
      "Tech",
      "Membership",
      "Booking",
      "Finance",
      "Training",
      "Marketing",
    ];
    textsToCheck.forEach((text) => {
      Help.help_fileds.contains(text).scrollIntoView().should('be.visible');
    });
    cy.wait(2000);

    // search with invalid value
    Help.search_textbx.type("sfxx");
    cy.wait(2000);

    Help.searchBtn.click();
    Help.nosearch.should('be.visible');
    cy.wait(5000);

    // search with valid value
    Help.search_textbx.clear().type("test");
    cy.wait(2000);

    Help.searchBtn.click();
    cy.wait(2000);
    Help.result.should('not.contain.text', "No search results found");

    // back to help center
    Help.back_helpcenter.click();
  });

  it("Advisor_Help_TC002- Contents of 'Ask the community' section", () => {
    // Check 'Ask the community' section

    Help.askCommunity.should('be.visible');
    Help.gotoForum.should('be.visible');
    Help.gotoForum.click();

  

   
      
    
  });

  it("Advisor_Help_TC003- to verify the content of Policy section", () => {
    // Check 'Policy' section
    cy.wait(2000)
    
Help.policy.should('be.visible')
    // Click on the 'Text only' link
    Help.textOnly.should('be.visible').click();
//cy.wait(1000)
    Help.textOnlytitle.should('be.visible');
    Help.isjusttext.should('be.visible');
    Help.lastupdate.should('be.visible');
    Help.back.should('be.visible');

    Help.back.click();

    // verify
    Help.PolicyseeAll.click();
    Help.helppolicy.should('be.visible');
    Help.back_helpcenter.should('be.visible');
    Help.back_helpcenter.click();
    Help.help_centre.should('be.visible');
  });

  it("Advisor_Help_TC004 - To verify tech section", () => {
    // check Tech section
    cy.wait(3000)
  /*  const textsToCheck = [
      
      "12k Bytes Article",
      "TEST Webhook",
      "See all",
    ];
    textsToCheck.forEach((text) => {
      Help.tech.contains(text).should('be.visible');
    });*/

    // clicking all the links and validating
    /*Help.testingArticle.click();
    Help.testing_title.should('be.visible');
    Help.Llamas.should('be.visible');
    Help.Editing.should('be.visible');
    Help.lastupdate.should('be.visible');
    Help.back.click();*/

    Help.byteArticle.click();
    Help.byteTitle.should('be.visible');
    Help.back.should('be.visible');
    Help.back.click();

    Help.testWebhook.should('be.visible').click();
    Help.testWebhook_title.should('be.visible');
    Help.trigger.should('be.visible');
    Help.back2.click();
  });

  it("Advisor_Help_TC005 -To check membership section", () => {
    // membership
    cy.wait(2000)

   /* const texts = [
      "Membership",
      "See all",
    ];
    texts.forEach((text) => {
      Help.membership.contains(text).scrollIntoView().should('be.visible');
    });*/

    // click see all
    Help.MembershipseeAll.scrollIntoView().click();
    Help.helpwithmember.should('be.visible');
    Help.back_helpcenter.click();
  });

  it("Advisor_Help_TC006 - To check booking section", () => {
    // Booking
    cy.wait(2000)

 /*   const texts = [
      "Booking",
      "How do I get an ACCOR star code?",
      "Where do I add the IATA number to a booking?",
      "My client modified their trip while on location, what do I do?",
      "When and how do I send in my booking confirmations?",
      "See all",
    ];
    texts.forEach((text) => {
      Help.booking.contains(text).scrollIntoView().should('be.visible');
    });*/

    Help.Whichproperties.scrollIntoView().click();
    Help.Whichproperties_title.should('be.visible');
    Help.back2.click();

    Help.IATA.click();
    Help.takeover.should('be.visible');
    Help.back2.click();

    Help.clientmodified.click();
    Help.iflcients.should('be.visible');
    Help.back2.click();

    Help.BookingFAQs.click();
    Help.pleaseFind.should('be.visible');
    Help.back2.click();

    Help.BookingseeAll.click();
    Help.helpbooking.should('be.visible');
    Help.Expedia.should('be.visible');
    Help.forahelp.click();
  });

  it("Advisor_Help_TC007 - To check finance section", () => {
    // finance
    cy.wait(2000)

  /*  const texts = [
      "Finance",
      "How do I collect payment information from my clients?",
      "How do I complete a net rate booking?",
      "The supplier is asking for an invoice, what do I do?",
      "When will I get paid my commission?",
      "See all",
    ];
    texts.forEach((text) => {
      Help.finance.contains(text).scrollIntoView().should('be.visible');
    });*/

    Help.payment.scrollIntoView().click();
    Help.Keeping.should('be.visible');
    Help.back2.click();

    Help.supplier.click();
    Help.supplierTells.should('be.visible');
    Help.back2.click();

    Help.commission.click();
    Help.directBookings.should('be.visible');
    Help.back2.click();

    Help.byte8k.click();
    Help.byte8k_title.should('be.visible');
    Help.back2.click();

    Help.FinanceseeAll.click();
    cy.contains('Help with Finance').should('be.visible');
   // cy.xp("a[normalize-space()='How do I update my bank details?']").should('be.visible');
    Help.forahelp.click();
  });

  it("Advisor_Help_TC008 - To check training section", () => {
    // training
    cy.wait(2000)

 /*   const texts = [
      "Training",
      "When will I receive the schedule for cohort training?",
      "Which cohort am I in?",
      "Can I do the Certified and Advanced trainings simultaneously?",
      "What if I fail the certification quiz?",
      "See all",
    ];
    texts.forEach((text) => {
      Help.training.contains(text).scrollIntoView().should('be.visible');
    });*/

    Help.simultaneously.scrollIntoView().click();
    Help.weRecommend.should('be.visible');
    Help.back2.click();

    Help.schedule.click();
    Help.AdvisorsWho.should('be.visible');
    Help.back2.click();

    Help.sessions.click();
    Help.Absolutely.should('be.visible');
    Help.back2.click();

    Help.cohort.click();
    Help.Registration.should('be.visible');
    Help.back2.click();

    Help.TrainingseeAll.click();
    cy.wait(2000);
    cy.contains('Help with Training').should('be.visible');
    Help.fail.should('be.visible');
    Help.back_helpcenter.click();

  });
  it("Advisor_Help_TC009 - To check marketing section", () => {
    // marketing
    cy.wait(2000)

  /*  const texts = [
      "Marketing",
      "See all",
    ];

    texts.forEach((text) => {
      Help.Marketing.contains(text).scrollIntoView().should('be.visible');
    });*/

    // click see all
    Help.MarketingseeAll.scrollIntoView().click();

    Help.helpmarketing.should('be.visible');

    Help.forahelp.click();
  //  Help.back_helpcenter.click();

  });
});