/* Description for TC037:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - Next 30 days"				*/ 

/* Description for TC038:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - Past 10 days"				*/ 

/* Description for TC039:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - Past 30 days"				*/ 

import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"

describe('Advisor_Booking_TS011', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })



it('Advisor_Booking_TC037_To verify if the user can apply Next 30 days trip date filter ', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  //cy.Login1()
  cy.NotanadvisorLogin()
   Home.navbar.click()
    Bookings.booking.click()  

    cy.wait(5000)

    Bookings.Dates.eq(0).click({force: true})
    cy.wait(2000)
    Bookings.Tripdate.click()
    Bookings.BookDropdown.click({force: true})
    Bookings.next30days.click()
    Bookings.Apply.click()
    cy.get('body').then((body) => {
      const commissionsElement = body.find('[data-testid="commissions"]');
      
      if (commissionsElement.length > 0) {
        const text = commissionsElement.text();
        const numberRegex = /\d+/;
        const foundNumber = text.match(numberRegex);
    
        if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
          const numberValue = parseInt(foundNumber[0], 10);
          cy.log('Bookings available:', numberValue);
          Bookings.tripdateresult.invoke('text')
                    .then((next30Days) => {        
                      cy.log('Next 30 days:',next30Days);
                
              
                  })
        } else {
          cy.log('No bookings available or the number is 0.');
        }
      } else {
        cy.log('No bookings available.');
      }
    });
  })
    

 
  it('Advisor_Booking_TC038_To verify if the user can apply Past 10 days trip date filter ', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(2000)
    Bookings.Dates.eq(0).click({force: true})
    cy.wait(2000)

  
    Bookings.BookDropdown.click({force: true})
    Bookings.Past10days.click()
    Bookings.Apply.click()
    cy.get('body').then((body) => {
      const commissionsElement = body.find('[data-testid="commissions"]');
      
      if (commissionsElement.length > 0) {
        const text = commissionsElement.text();
        const numberRegex = /\d+/;
        const foundNumber = text.match(numberRegex);
    
        if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
          const numberValue = parseInt(foundNumber[0], 10);
          cy.log('Bookings available:', numberValue);
          Bookings.tripdateresult.invoke('text')
                    .then((Past10days) => {        
                      cy.log('Past 10 days:',Past10days);
                
                
             
                  })
    
        } else {
          cy.log('No bookings available or the number is 0.');
        }
      } else {
        cy.log('No bookings available.');
      }
    });
  })
    
    



  
  it('Advisor_Booking_TC039_To verify if the user can apply Past 30 days trip date filter ', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(2000)

    Bookings.Dates.eq(0).click({force: true})
  
    cy.wait(2000)

    Bookings.BookDropdown.click({force: true})
    Bookings.Past30days.click()
    Bookings.Apply.click()
    cy.get('body').then((body) => {
      const commissionsElement = body.find('[data-testid="commissions"]');
      
      if (commissionsElement.length > 0) {
        const text = commissionsElement.text();
        const numberRegex = /\d+/;
        const foundNumber = text.match(numberRegex);
    
        if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
          const numberValue = parseInt(foundNumber[0], 10);
          cy.log('Bookings available:', numberValue);
        
          Bookings.tripdateresult.invoke('text')
                    .then((Past30days) => {        
                      cy.log('Past 30 days:',Past30days);
          
                  })
          
          
    
        } else {
          cy.log('No bookings available or the number is 0.');
        }
      } else {
        cy.log('No bookings available.');
      }
    });
  })
    
})