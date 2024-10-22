import Gesttingstarted from '../../support/Page Object/Advisor/Gettingstarted'



describe('Advisor_Getting started_TS001',{ testIsolation: false }, function() {
    before(() => {
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
   cy.clearAllLocalStorage()
    })
it('Advisor_Getting started_TC007_To verify the complete certified training ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
// In a separate Cypress test
cy.getRecoveryEmail().then((email) => {
  
  // Use the email to perform actions, e.g., launch a link and log in
  cy.visit('https://advisor.forastaging.net/login') 
  cy.contains("Not an advisor?").should('be.visible')
  cy.xpath("//a[normalize-space()='Sign in here.']").click()
  cy.xpath("//label[normalize-space()='Username']").should('be.visible')
  cy.xpath("//input[@id='username']").type(email);
  cy.xpath("//input[@id='password']").type("Qaoncloud@01")
  cy.get('.show_hide_password > .relative > .absolute').click().click()

  cy.xpath("//button[normalize-space()='Sign in']", { timeout: 10000 }).click()

    cy.viewport(1500,785) 
    cy.wait(5000)
    Gesttingstarted.Gettingstartedtab.should('be.visible').click()

    Gesttingstarted.Completecertifiedtraining.should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
   /// Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
   cy.wait(1000)
    cy.xpath("//span[normalize-space()='Complete certified training']").scrollIntoView().should('be.visible').click();
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
    Gesttingstarted.Watchtrainingsession.should('be.visible');
    Gesttingstarted.Watchtrainingsessionradiobutton.should('be.visible');
    Gesttingstarted.Passcertifiedquiz.should('be.visible');
    Gesttingstarted.Passcertifiedquizradioibutton.should('be.visible');
    Gesttingstarted.Subscribetotrainingcalendar.should('be.visible');
    Gesttingstarted.Subscribetotrainingcalendarradiobutton.should('be.visible');
  
    Gesttingstarted.Passcertifiedquiz.should('be.visible');
    Gesttingstarted.Passcertifiedquizradioibutton.should('be.visible').click();
    Gesttingstarted.Passcertifiedquizcontent.should('be.visible');
    Gesttingstarted.Takequiz.click();
  cy.wait(5000)
  cy.get('button') // Or replace with the actual button selector
  .then(($btn) => {
    if ($btn.hasClass('bg-white') && $btn.hasClass('rounded-3xl')) {

cy.wait(2000)
      Gesttingstarted.Markeascomplete.click();
    } else if ($btn.hasClass('bg-success')) {
      // If the button is already marked as "Complete", log it and move on
      cy.log('Lesson already marked as complete, skipping the click');
    } else {
      cy.log('No matching button found');
    }
  });    Gesttingstarted.Backtotraining.scrollIntoView().click();
    cy.wait(5000)
    Gesttingstarted.Trainingdropdown.eq(7).click();
    Gesttingstarted.Gettingstartedtab.should('be.visible').click();
  cy.wait(5000)

    Gesttingstarted.Completecertifiedtraining.scrollIntoView().should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.scrollIntoView().should('be.visible');
  //  Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
   cy.xpath("//span[normalize-space()='Complete certified training']").scrollIntoView().should('be.visible').click();
  
    cy.get('[data-testid="bar-progress"]')
      .invoke('css', 'width')
      .then((width) => {
        const newWidth = parseInt(width);
        expect(newWidth).to.be.greaterThan(0);
      });
  
    Gesttingstarted.Watchtrainingsessionradiobutton.should('be.visible').click();
    cy.wait(2000)
    Gesttingstarted.Watchcertifiedtrainigsubheader.should('be.visible');
    Gesttingstarted.Timespent.should('be.visible');
    Gesttingstarted.Gototraining.click();
    cy.wait(5000)
    
    Gesttingstarted.Trainingdropdown.eq(2).click();
    Gesttingstarted.Lessondropdown.eq(0).click();
    const completeLessons = () => {
      cy.wait(2000);
    
      // First, check if the "Mark as complete" button is present
      cy.get('button') // Or replace with the actual button selector
        .then(($btn) => {
          if ($btn.hasClass('bg-white') && $btn.hasClass('rounded-3xl')) {
            // If the button has the class for "Mark as complete", click it
            Gesttingstarted.Markeascomplete.click();
          } else if ($btn.hasClass('bg-success')) {
            // If the button is already marked as "Complete", log it and move on
            cy.log('Lesson already marked as complete, skipping the click');
          } else {
            cy.log('No matching button found');
          }
        });
    
      // Proceed to the next step after checking the button
      cy.get('body').then(($body) => {
        const hasNextButton = $body.find('a:contains("Next")').length > 0;
    
        if (hasNextButton) {
          cy.get('a').contains('Next').scrollIntoView().click();
          cy.wait(1000);
          completeLessons(); // Recursively go to the next lesson
        } else {
          cy.wait(5000);
          cy.get('a').contains('Back to Training').click();
          cy.wait(5000);
        }
      });
    };
    
    completeLessons();
    
    
    
    Gesttingstarted.Trainingdropdown.eq(2).click();
    Gesttingstarted.Trainingdropdown.eq(3).click();
    Gesttingstarted.Lessondropdown.eq(0).click();
    completeLessons();
  
    Gesttingstarted.Trainingdropdown.eq(3).click();
    Gesttingstarted.Trainingdropdown.eq(4).click();
    Gesttingstarted.Lessondropdown.eq(0).click();
    completeLessons();
  
    Gesttingstarted.Trainingdropdown.eq(4).click();
    Gesttingstarted.Trainingdropdown.eq(5).click();

    Gesttingstarted.Lessondropdown.eq(0).click();
    completeLessons();
    Gesttingstarted.Trainingdropdown.eq(5).click();

    Gesttingstarted.Trainingdropdown.eq(6).scrollIntoView().click();
    Gesttingstarted.Lessondropdown.eq(0).click();
   
    
    completeLessons();
  
    Gesttingstarted.Trainingdropdown.eq(6).click();
    cy.wait(2000);



    Gesttingstarted.Gettingstartedtab.should('be.visible').click();
    cy.wait(2000);
    Gesttingstarted.Completecertifiedtraining.should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
    ///Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
    cy.xpath("//span[normalize-space()='Complete certified training']").scrollIntoView().should('be.visible').click();
    cy.wait(2000);
    cy.get('[data-testid="bar-progress"]')
      .invoke('css', 'width')
      .then((width) => {
        const newWidth = parseInt(width);
        expect(newWidth).to.be.greaterThan(0);
      });
  
    Gesttingstarted.Subscribetotrainingcalendar.should('be.visible');
    Gesttingstarted.Subscribetotrainingcalendarradiobutton.should('be.visible').click();
    Gesttingstarted.Subscribertotraining.should('be.visible');
    Gesttingstarted.Subscribertotrainingtext.should('be.visible');
    Gesttingstarted.Subscribe.click();
    Gesttingstarted.Markasdone.click();
    cy.get('[data-testid="bar-progress"]')
      .invoke('css', 'width')
      .then((width) => {
        const newWidth = parseInt(width);
        expect(newWidth).to.be.greaterThan(0);
      });
  
    Gesttingstarted.Backbutton.click();
    })
})

})