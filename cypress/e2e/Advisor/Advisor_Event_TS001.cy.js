import Event from "../../support/Page Object/Advisor/Event"
describe('Advisor_Event_TS001',{ testIsolation: false }, function() {
  before(() => {
    
  cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Advisor_Event_TC001_To verify the Event page', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   
    cy.NotanadvisorclientLogin() 
    cy.viewport(1500,785) 
    cy.wait(2000)
    Event.Event.click()
    cy.url().should('include','https://advisor.forastaging.net/events')
Event.Eventheader.should('be.visible')
cy.wait(2000)
/*Event.Today.should('be.visible')
Event.Filter.should('be.visible')
Event.Arrow.should('be.visible')
Event.Calander.should('be.visible')
Event.List.should('be.visible')
Event.Timeslot.should('contain.text', '1 AM'); 
Event.Timeslot.should('contain.text', '2 AM'); 
Event.Timeslot.should('contain.text', '3 AM'); 
Event.Timeslot.should('contain.text', '4 AM'); 
Event.Timeslot.should('contain.text', '5 AM'); 
Event.Timeslot.should('contain.text', '6 AM'); 
Event.Timeslot.should('contain.text', '7 AM'); 
Event.Timeslot.should('contain.text', '8 AM'); 
Event.Timeslot.should('contain.text', '9 AM'); 
Event.Timeslot.should('contain.text', '10 AM'); 
Event.Timeslot.should('contain.text', '11 AM'); 
Event.Timeslot.should('contain.text', '12 AM'); 
Event.Timeslot.should('contain.text', '1 PM'); 
Event.Timeslot.should('contain.text', '2 PM'); 
Event.Timeslot.should('contain.text', '3 PM'); 
Event.Timeslot.should('contain.text', '4 PM'); 
Event.Timeslot.should('contain.text', '5 PM'); 
Event.Timeslot.should('contain.text', '6 PM'); 
Event.Timeslot.should('contain.text', '7 PM'); 
Event.Timeslot.should('contain.text', '8 PM'); 
Event.Timeslot.should('contain.text', '9 PM'); 
Event.Timeslot.should('contain.text', '10 PM'); 
Event.Timeslot.should('contain.text', '11 PM'); 
Event.Dateheader.should('be.visible')
Event.Arrow.eq(0).click()
cy.wait(2000)
Event.Filter.click()
cy.wait(2000)

Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
Event.Reset.should('be.visible')
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
Event.NewEvent.find('div.absolute') .should('have.css', 'background-color', 'rgb(33, 102, 219)')
Event.Filtercancelbutton.click()
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(2).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(2000)
Event.Livesupportfield.eq(1).scrollIntoView().should('have.css', 'background-color', 'rgb(51, 126, 83)'); 
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.get('div.rbc-event-content') 
  .find('div.pl-1')   .find('div.absolute')
  .should('have.css', 'background-color', 'rgb(66, 58, 49)'); 
Event.Filter.click()
Event.Reset.click()
cy.wait(2000)
cy.get('div.size-4.rounded-full.bg-black')
.eq(0)  // First div
.should('have.css', 'background-color', 'rgb(66, 58, 49)');

cy.get('div.size-4.rounded-full.bg-black')
.eq(1)  // Second div
.should('have.css', 'background-color', 'rgb(51, 126, 83)');

// Third color validation
cy.get('div.size-4.rounded-full.bg-black')
.eq(2)  // Third div
.should('have.css', 'background-color', 'rgb(33, 102, 219)');
Event.Today.click()
cy.wait(2000)
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

cy.log(`Current time: ${currentHour}:${currentMinute}`);

cy.get('.rbc-now')
  .should('be.visible') 
  .scrollIntoView() 
  .then(($redLine) => {
    const redLineOffset = $redLine.offset().top;   
    cy.log(`Red line offset (top): ${redLineOffset}`);
     const redLinePosition = $redLine.position().top;
    cy.log(`Red line position relative to parent (top): ${redLinePosition}`);

      });
      Event.Eventcalender.click()
      Event.Certifiedpopupheader.should('be.visible')
      Event.icons.should('be.visible')
      Event.Copytogooglecalendar.click()
              //const specificLinkSelector = 'a[href="&authuser=test.qa0618@forastaging.net"]';

        const specificLinkSelector = 'a[href="https://calendar.google.com/calendar/render?action=TEMPLATE&path=%2Fcalendar%2Faction%2Fcompose&text=certified+1&dates=20240918T133000000Z%2F20240918T143000000Z"]';
        cy.get(specificLinkSelector).should('have.attr', 'href').then((href) => {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${href}`);
            }
          });
          cy.wait(2000)
Event.Closeicon.click()
        })*/
      })



      it('Advisor_Event_TC002_To verify the Event List page', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
        cy.viewport(1500,785) 

cy.wait(2000)
Event.List.click()
cy.wait(1000)
Event.Arrow.eq(0).click()
///Event.Arrow.eq(0).click()
///Event.Arrow.eq(0).click()
cy.wait(2000)
Event.Pastevent.should('be.visible')
Event.Filter.click()

Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(2000)
Event.certifiedtrainingresult.should('be.visible')
Event.Filtercancelbutton.click()
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(2).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(2000)
Event.Livesupportlistresult.should('be.visible')
cy.wait(2000)
Event.Filter.click()
Event.Generaltraining.should('be.visible')
Event.Livesupport.should('be.visible')
Event.certifiedtraining.should('be.visible')
Event.Checkbox.eq(0).click()
Event.Checkbox.eq(1).click()
cy.wait(2000)
Event.Applybutton.should('be.visible').click()
cy.wait(1000)
Event.Generaltraininglistresult.should('be.visible')

Event.Filtercancelbutton.click()

const test = Event.test
      cy.log(test)
      })    

})
