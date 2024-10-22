import Gettingstarted from '../../support/Page Object/Advisor/Gettingstarted'
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
cy.wait(5000)

  cy.viewport(1500,785) 
  Gesttingstarted.Attendinstructorledkickoffcallsection.should('be.visible')
  Gesttingstarted.Gettingstartedtaskicon.eq(0).should('be.visible')
  cy.xpath("//span[normalize-space()='Attend instructor-led kickoff call']").should('be.visible').click()
  Gesttingstarted.Attendinstructorledkickoffcallsubheader.should('be.visible')
  Gesttingstarted.Attendinstructorledkickoffcallheader.should('be.visible')
  Gesttingstarted.Scheduleacall.should('be.visible')
  Gesttingstarted.Scheduleacallradiobutton.click()
  cy.get('iframe')
  .its('0.contentDocument.body')
  .should('not.be.empty')
  .then(cy.wrap)
  .then(($body) => {
    // Wait for the calendar to load (you can adjust this wait time as needed)
    cy.wait(2000);

cy.wrap($body).find('[id="onetrust-accept-btn-handler"]').scrollIntoView().click()
cy.wait(2000)
cy.wrap($body).find('[class="uvkj3lh DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av ZJbG4bxYGUoYsr4rb04C"]').eq(0).click() //clicking next arrow in calander
cy.wrap($body).find('[class="uvkj3lh DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av ZJbG4bxYGUoYsr4rb04C"]').eq(0).click()

cy.wrap($body).find('[class="uvkj3lh o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 mIJUmpwwZd5mH9SMq9XQ"]').eq(0).click() //selecting date
cy.scrollTo("top", { ensureScrollable: false });
cy.wrap($body).find('[class="uvkj3lh _w8iXDi37ZtszlePqV6J k_KP3TT_QEVKk3VAikPN pMHLknis9HAglWN3wYAw"]').should('be.visible') .click() //clicking back arrow after selecting date
cy.wrap($body).find('[class="uvkj3lh o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 mIJUmpwwZd5mH9SMq9XQ"]').eq(0).click()  //selecting date

cy.wrap($body).contains('Select a Time').should('be.visible');
cy.wrap($body).find('[class="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').eq(0).should('be.visible') 
cy.wrap($body).find('[class="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').eq(1).should('be.visible').click()
cy.wrap($body).find('[class="uvkj3lh _NBjM8Q6c03EfxjK90hm _wYinQZCx29_pxs0TZnM Iy168r_YSkmFtzeEXUss uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"]').should('be.visible').click() //clciking next button
cy.wrap($body).find('[class="tSHP4_7gU1EgmhU4cdix _CTgggv6aoPOIqf8ezib"]').should('be.visible')
cy.wrap($body).contains('45').scrollIntoView().should('be.visible');
cy.wrap($body).contains('Onboarding (staging)').scrollIntoView().should('be.visible');
cy.wrap($body).contains('Web conferencing details provided upon confirmation.').scrollIntoView().should('be.visible');
cy.wrap($body).find('[class="uvkj3lh hfsu4te"]').click()
cy.wrap($body).contains('Join our required Onboarding call with Fora to learn the basics of getting started as an Advisor.').scrollIntoView().should('be.visible');

cy.wrap($body).contains("Zoom Etiquette: Please join with your camera on and mic muted. If possible, please join from a computer with stable wifi as you'll be asked to introduce yourself. Make sure your display name includes your first and last name. Thank you!").should('be.visible');

cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(0).clear().type('testing')

cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(1).clear().type('reenaz@qaoncloud.com')
cy.wrap($body).find('[class="i167bxqy i1uya22c"]').eq(2).clear().type('+917526412658')
//clicking schedule event button
cy.wait(3000)

cy.wrap($body).find('[class="uvkj3lh l15h8fme b1vsw93b dyxacjh sbsarjr r9dt397"]').eq(0).should('be.visible').click()
cy.wait(3000)
})
Gesttingstarted.Schedulecallmessage.should('be.visible')
Gesttingstarted.Sucessicon.should('be.visible')
Gesttingstarted.Congrats.should('be.visible')
Gesttingstarted.Completedmessage.should('be.visible')
Gesttingstarted.Continuebutton.click()
cy.get('[data-testid="bar-progress"]').invoke('css', 'width').then((width) => {
const newWidth = parseInt(width); // Extract the width value in pixels
expect(newWidth).to.be.greaterThan(0); // Check that the progress bar width has increased
});
cy.wait(2000)
// Verify the task count is updated
//Gesttingstarted.completedtaskcount.should('be.visible');
//Gesttingstarted.completedtaskcount1.should('be.visible');
Gesttingstarted.Sucessiconoutside.should('be.visible');

Gesttingstarted.Attendinstructorledkickoffcallheader.should('be.visible').click()
Gesttingstarted.Scheduleacall.click()
Gesttingstarted.Greenouterlineinschedulecall.should('be.visible');
Gesttingstarted.Backbutton.click()


      
      })
    })
    it('Advisor_Getting started_TC007_To verify the To check ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
        cy.viewport(1500,785) 
        Gesttingstarted.Joinourcommunity.scrollIntoView().should('be.visible')
        /// Gesttingstarted.Joinourcommunitycount.scrollIntoView().should('be.visible')
                Gesttingstarted.Joinourcommunitysubheader.scrollIntoView().should('be.visible')
                cy.xpath("//span[normalize-space()='Join our community of advisors']").should('be.visible').click()
                Gesttingstarted.Readandagree.click()
                Gesttingstarted.Readandagreetext.should('be.visible')
                Gesttingstarted.Gotopolices.should('be.visible').click()
                cy.wait(2000)
                cy.url().should('include','https://advisor.forastaging.net/community-guidelines')
        
                Gesttingstarted.Gettingstartedtab.should('be.visible').click()
               cy.xpath("//span[normalize-space()='Join our community of advisors']").should('be.visible').click()
                Gesttingstarted.Readandagree.click()
              Gesttingstarted.Markasdone.click()
              Gesttingstarted.Introduceyourself.click()
              cy.wait(2000)
              Gesttingstarted.Introduceyourselftext.should('be.visible')
              Gesttingstarted.Gotoforum.click()
              Gesttingstarted.Markasdone.click()
              Gesttingstarted.Completedmessage.should('be.visible')
              Gesttingstarted.Continuebutton.click()
              cy.get('[data-testid="bar-progress"]').invoke('css', 'width').then((width) => {
                const newWidth = parseInt(width); // Extract the width value in pixels
                expect(newWidth).to.be.greaterThan(0); // Check that the progress bar width has increased
              });
     
    })
      it('Advisor_Getting started_Get word out', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785) 
        cy.wait(2000)
        Gesttingstarted.Getthewordout.scrollIntoView().should('be.visible')
    //    Gesttingstarted.Getthewordoutcount.should('be.visible')
        Gesttingstarted.Getthewordoutsubheader.should('be.visible')
       cy.xpath("//span[normalize-space()='Get the word out']").should('be.visible').click()
Gesttingstarted.Reachout.click()
Gesttingstarted.Text.first().within(() => {
// Verify the text of each list item
cy.get('li').eq(0).should('contain.text', 'Your friends & family');
cy.get('li').eq(1).should('contain.text', 'Your book club');
cy.get('li').eq(2).should('contain.text', 'Your university alumni');

cy.get('li').eq(3).should('contain.text', 'Your IG friend you’ve never met');

cy.get('li').eq(4).should('contain.text', 'Your hairdresser');
cy.get('li').eq(5).should('contain.text', 'Your fellow parents from kids’ school or sports');

});
Gettingstarted.Needinspiration.should('be.visible')
Gesttingstarted.Starterpack.click()
cy.wait(1000)
Gesttingstarted.Draftanemail.click()
cy.wait(1000)

Gesttingstarted.Markasdone.click()
cy.wait(1000)

Gesttingstarted.Learnhowtotalk.click()
cy.wait(2000)
Gesttingstarted.Notsurehow.should('be.visible')
Gesttingstarted.FQA.click()
cy.wait(2000)
Gesttingstarted.Markasdone.click()
cy.wait(2000)


Gesttingstarted.Fellowforaadvisor.should('be.visible').click()
Gesttingstarted.Tipsongetting.should('be.visible')
Gesttingstarted.Gototraining.click()
cy.wait(2000)
Gesttingstarted.Markeascomplete.click()
cy.wait(2000)
Gesttingstarted.Gettingstartedtab.should('be.visible').click()


      })


      it('Advisor_Getting started_Skip button', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785) 
Gesttingstarted.Skipfornow.click()
cy.url().should('include', 'https://advisor.forastaging.net/home')

      })
    
})
