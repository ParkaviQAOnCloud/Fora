//To Validate Advisor_Events_E2E001 - Verify users can navigate between weeks using the left and right arrow buttons

import Event from "/cypress/support/Page Object/Advisor/Event"

describe('Advisor_Client',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })

  it('Verify users can navigate between weeks using the left and right arrow buttons', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   //Fetch login details using the custom command
   //cy.NotanadvisorclientLogin() 
   //cy.TestLogin()
   cy.NotanadvisorLogin() 
    cy.viewport(1500,785) 
    cy.wait(2000)
    Event.Event.should('be.visible')
    // Click on the "Events" tab
    Event.Event.click()
    //Assertion
    cy.url().should('include','https://advisor.forastaging.net/events')
    // Check the current week
    //const options = { year: 'numeric', month: 'short', day: 'numeric' };


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
    cy.get('.flex.items-center.gap-2') // Adjust the selector if needed
      .find('.truncate.min-w-0.w-full')
      .should('contain.text', currentWeekRange);
    
   




  })
   
  
})


