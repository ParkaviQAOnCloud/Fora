/* Description for TC033:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter"				*/ 

/* Description for TC034:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - All Past"				*/ 

/* Description for TC035:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - All future"				*/ 

/* Description for TC036:	"The goal of the test is to verify the following functionalities:
1. contents of Trip date filter - Next 10 days"				*/ 




import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"

describe('Advisor_Booking_TS010', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Booking_TC033_To verify if the user can apply Trip date filter', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

   // cy.Login1()
   cy.NotanadvisorLogin()
    Home.navbar.click()
    Bookings.booking.click()  
    cy.wait(3000)
    Bookings.Dates.eq(0).click({force: true})
    cy.wait(3000)
    Bookings.Tripdate.click()
    cy.wait(2000)

    Bookings.BookDropdown.click({force: true})
  //  Bookings.Custom.should('be.visible')
    Bookings.Allpast.should('be.visible')
    Bookings.Allfuture.should('be.visible')
    Bookings.Next10days.should('be.visible')
    Bookings.next30days.should('be.visible')
    Bookings.Past10days.should('be.visible')
    Bookings.Past30days.should('be.visible')
    Bookings.Custom.click()
    Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
Bookings.Date.click({force:true})
Bookings.Date1.click({force: true})

Bookings.Apply.click({force: true})
 
})

  



   it('Advisor_Booking_TC034_To verify if the user can apply All past trip date filter ', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.wait(1000)

      Bookings.Dates.eq(0).click({force: true})

    Bookings.BookDropdown.click({force: true})
      Bookings.Allpast.click()
  
  
    
     
  
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
                        .then((Allpast) => {        
                          cy.log('All past date:',Allpast);
                    
                    
            
                      })
      
          } else {
            cy.log('No bookings available or the number is 0.');
          }
        } else {
          cy.log('No bookings available.');
        }
      });
      })
      
  
    
  it('Advisor_Booking_TC035_To verify if the user can apply All future trip date filter ', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.wait(1000)

      Bookings.Dates.eq(0).click({force: true})
      //Bookings.Tripdate.click()
      Bookings.BookDropdown.click({force: true})
      Bookings.Allfuture.click()
   //   Bookings.To1.invoke('text').cy.log('Allfuture:',allFuture).should('have.value', Allfuture)
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
                        .then((Allpast) => {        
                          cy.log('All past date:',Allpast);
                    
                    
            
                      })
      
          } else {
            cy.log('No bookings available or the number is 0.');
          }
        } else {
          cy.log('No bookings available.');
        }
      });
    })
      
  it('Advisor_Booking_TC036_To verify if the user can apply Next 10 days trip date filter ', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.wait(1000)

      Bookings.Dates.eq(0).click({force: true})
    
     
      Bookings.BookDropdown.click({force: true})
      Bookings.Next10days.click()
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
            .then((Next10days) => { 
            cy.log('Next 10 days:',Next10days);
           
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
   
  



