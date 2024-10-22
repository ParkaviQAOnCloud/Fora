/*Description TC026 :"The goal of the test is to verify the following functionalities:
1. Contents of Dates filter" */


/*Description TC027 :"The goal of the test is to verify the following functionalities:
1. contents of date filter - Last week"				*/

/*Description TC028 :"The goal of the test is to verify the following functionalities:
1. contents of dates filter - Last month"				*/

/*Description TC029 :"The goal of the test is to verify the following functionalities:
1. contents of dates filter - Last year"				*/

/*Description TC030 :"The goal of the test is to verify the following functionalities:
1. contents of dates filter - Current week to date"				*/

/*Description TC031 :"The goal of the test is to verify the following functionalities:
1. contents of dates filter - Current month to date"				*/

/*Description TC032 :"The goal of the test is to verify the following functionalities:
1. contents of dates filter - Current year to date"							*/


import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"


describe('Advisor_Booking_TS009', { testIsolation: false },function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Booking_TC013_To verify if the user can sort by Dates --Here we are validating the content of  booked date filter ',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })    
 
 //cy.Login1()
 cy.NotanadvisorLogin()
 cy.viewport(1500,785)

 // Home.navbar.click()

  Bookings.booking.click()  
  cy.wait(5000)
  Bookings.Dates.eq(0).click({force: true})
  cy.wait(3000)
  Bookings.BookDropdown.click({force:true})
  cy.wait(2000)
  Bookings.lastmonth.should('be.visible')
  Bookings.lastweek.should('be.visible')
  Bookings.lastyear.should('be.visible')
  Bookings.currantmonthtodate.scrollIntoView().should('be.visible')
  Bookings.currantweektodate.scrollIntoView().should('be.visible')
  Bookings.currantyeartodate.scrollIntoView().should('be.visible')
 Bookings.Custom.click()
Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
//Bookings.Nextmontharrow.eq(0).click()
Bookings.Date.click({force:true})
Bookings.Date1.click({force: true})
Bookings.Apply.click()

})
it('Advisor_Booking_TC027_To verify if the user can apply last week filter in Booked date',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(1000)

  Bookings.Dates.eq(0).click({ force: true });

  Bookings.BookDropdown.click({ force: true });
  Bookings.lastweek.click();
  
  Bookings.Apply.click();
  cy.get('body').then((body) => {
    const commissionsElement = body.find('[data-testid="commissions"]');
    
    if (commissionsElement.length > 0) {
      const text = commissionsElement.text();
      const numberRegex = /\d+/;
      const foundNumber = text.match(numberRegex);
  
      if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
        const numberValue = parseInt(foundNumber[0], 10);
        cy.log('Bookings available:', numberValue);
        Bookings.Bookeddateresult.invoke('text')
              .then((lastweek) => {        
                cy.log('Last Week:',lastweek);
        })
      } else {
        cy.log('No bookings available or the number is 0.');
      }
    } else {
      cy.log('No bookings available.');
    }
  });
 
})
  
  
  
  
  
  

it('Advisor_Booking_TC028_To verify if the user can apply last month filter of booked status ',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(1000)
  cy.viewport(1500,785)

  Bookings.Dates.eq(0).click({force: true})

  Bookings.BookDropdown.click({force: true})
Bookings.lastmonth.click()

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
      // Assuming you want to log 'Last Week' as well
      Bookings.Bookeddateresult.invoke('text')
            .then((lastmonth) => {        
              cy.log('Last Month:',lastmonth);
      })
    } else {
      cy.log('No bookings available or the number is 0.');
    }
  } else {
    cy.log('No bookings available.');
  }
});

});
it('Advisor_Booking_TC029_To verify if the user can apply last year filter of booked date',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(2000)
  cy.viewport(1500,785)

  Bookings.Dates.eq(0).click({force: true})

  Bookings.BookDropdown.click({force: true})
Bookings.lastyear.click()

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
      // Assuming you want to log 'Last Week' as well
      Bookings.Bookeddateresult.invoke('text')
.then((lastyear) => { 
 cy.log('Last year:',lastyear);
 
 })
    } else {
      cy.log('No bookings available or the number is 0.');
    }
  } else {
    cy.log('No bookings available.');
  }
});

});
it('Advisor_Booking_TC030_To verify if the user can apply Current week to date filter of booked date',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(2000)
  cy.viewport(1500,785)

  Bookings.Dates.eq(0).click({force: true})

  Bookings.BookDropdown.click({force: true})
Bookings.currantweektodate.scrollIntoView().click()

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
      Bookings.Bookeddateresult.invoke('text')
.then((currantweektodate) => {        
 cy.log('Currant week to date:',currantweektodate);
  
 
 })

    } else {
      cy.log('No bookings available or the number is 0.');
    }
  } else {
    cy.log('No bookings available.');
  }
});
})


it('Advisor_Booking_TC031_To verify if the user can apply Current month to date filter of booked date',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(2000)
  cy.viewport(1500,785)

  Bookings.Dates.eq(0).click({force: true})

  Bookings.BookDropdown.click({force: true})
Bookings.currantmonthtodate.scrollIntoView().click()

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
      Bookings.Bookeddateresult.invoke('text')
                  .then((currantmonthtodate) => {        
                    cy.log('Currant month to date:',currantmonthtodate);
              
            
                })

    } else {
      cy.log('No bookings available or the number is 0.');
    }
  } else {
    cy.log('No bookings available.');
  }
});
})

it('Advisor_Booking_TC032_To verify  if the user can apply Current year to date filter of booked date',() => {
   
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.viewport(1500,785)

  cy.wait(2000)
  Bookings.Dates.eq(0).click({force: true}) ///click on the Dtaes button

  Bookings.BookDropdown.click({force: true})
Bookings.currantyeartodate.scrollIntoView().click()

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
      Bookings.Bookeddateresult.invoke('text')
            .then((currantyeartodate) => {        
              cy.log('Currant year to date:',currantyeartodate);
        
        

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
