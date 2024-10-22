import Gesttingstarted from '../../support/Page Object/Advisor/Gettingstarted'
it.only('Advisor_Getting started_TC007_To verify the complete certified training', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.NotanadvisorHomeLogin()

    cy.viewport(1500, 785);
    Gesttingstarted.Gettingstartedtab.should('be.visible').click()

    Gesttingstarted.Completecertifiedtraining.should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
    Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
    Gesttingstarted.Activityexpand.eq(0).scrollIntoView().should('be.visible').click();
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
  
   Gesttingstarted.Markeascomplete.scrollIntoView().click();
    Gesttingstarted.Backtotraining.scrollIntoView().click();
    Gesttingstarted.Trainingdropdown.eq(7).click();
    Gesttingstarted.Gettingstartedtab.should('be.visible').click();
  
    Gesttingstarted.Completecertifiedtraining.should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
    Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
    Gesttingstarted.Activityexpand.eq(0).scrollIntoView().should('be.visible').click();
  
    cy.get('[data-testid="bar-progress"]')
      .invoke('css', 'width')
      .then((width) => {
        const newWidth = parseInt(width);
        expect(newWidth).to.be.greaterThan(0);
      });
  
    Gesttingstarted.Watchtrainingsessionradiobutton.should('be.visible').click();
    Gesttingstarted.Watchcertifiedtrainigsubheader.should('be.visible');
    Gesttingstarted.Timespent.should('be.visible');
    Gesttingstarted.Gototraining.click();
    Gesttingstarted.Trainingdropdown.eq(2).click();
    Gesttingstarted.Lessondropdown.eq(0).click();
  
    const completeLessons = () => {
      Gesttingstarted.Markeascomplete.scrollIntoView().click();
      cy.get('body').then(($body) => {
        const hasNextButton = $body.find('a:contains("Next")').length > 0;
  
        if (hasNextButton) {
          cy.get('a').contains('Next').scrollIntoView().click();
          cy.wait(1000);
          completeLessons();
        } else {
          cy.get('a').contains('Back to Training').click();
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

    

    Gesttingstarted.Trainingdropdown.eq(8).scrollIntoView().click();
    Gesttingstarted.Lessondropdown.eq(0).click();
   
    
    completeLessons();
    cy.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[2]/div[7]/div[1]/div[2]/div[3]/a[1]/div[2]").click()
    completeLessons();

    Gesttingstarted.Trainingdropdown.eq(8).click();





    Gesttingstarted.Gettingstartedtab.should('be.visible').click();
    cy.wait(2000);
    Gesttingstarted.Completecertifiedtraining.should('be.visible');
    Gesttingstarted.Completecertifiedtrainingsubheader.should('be.visible');
    Gesttingstarted.Gettingstartedtaskicon.eq(1).should('be.visible');
    Gesttingstarted.Activityexpand.eq(0).scrollIntoView().should('be.visible').click();
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
  });
  
