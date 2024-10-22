
//To validate Advisor_Events_UTC004 - Check filters on event page
//To Validate Advisor_Events_UTC005 - Check the calender/list view toggle button
//To Validate Advisor_Events_UTC006 - Check the calender  

import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('validate Advisor_Events_UTC004, Advisor_Events_UTC005, Advisor_Events_UTC006 ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
    cy.NotanadvisorclientLogin() 
    cy.viewport(1500,785) 
    cy.wait(4000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    //Assertion
    cy.url().should('include','https://advisor.forastaging.net/events')

    //Advisor_Events_UTC004 - Check filters on event page
    cy.wait(4500)
    Event.Filter.should('be.visible')
    Event.Filter.should('have.text', '3 Calendars')
    //Click on calenders filter button - It should show calenders filter popup options
    Event.Filter.click()
    Event.Generaltraining.should('be.visible')
    Event.Livesupport.should('be.visible')
    Event.certifiedtraining.should('be.visible')
    Event.Applybutton.should('be.visible')
    Event.Reset.should('be.disabled')
    Event.Applybutton.click()
    //Advisor_Events_UTC005 - Check the calender/list view toggle button
    Event.Calander.should('be.visible')
    Event.List.should('be.visible')
    //Valiadtion of background color of calander and list
   // Event.Calander.should('have.css', 'background-color', 'rgb(255, 255, 255)');
    //Event.List.should('have.css', 'background-color', 'rgb(128, 128, 128)')

    //Advisor_Events_UTC006 - Check the calender

    Event.Calander.click()
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

// By default, today's date should be highlighted with a black background
Event.todaydate_BackgroundColor
.should('have.css', 'background-color', 'rgb(20, 20, 20)') // Checking for black background

//The calender should show current week

// Helper function to format the current week's date range
const getCurrentWeekRange = () => {
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const start = new Date('2024-10-20');
  const end = new Date(start);
  end.setDate(start.getDate() + 6); // Adding 6 days to create a range of 7 days

  // Format the start and end dates
  const formattedStart = start.toLocaleDateString('en-US', options);
  const formattedEnd = end.toLocaleDateString('en-US', options).split(' ')[1]; // Get just the day part of the end date

  return `${formattedStart} - ${formattedEnd}, ${end.getFullYear()}`;

};


  const currentWeekRange = getCurrentWeekRange();

  

  // Check that the current week range is displayed
  cy.xpath('//div[@class="truncate min-w-0 w-full"]')
    .should('contain.text', currentWeekRange);
    


    

      



  
    
    

   
  
})
})
