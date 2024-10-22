/* Description for TC001:	"The goal of the test is to verify the following functionalities:
1. Contents of the bookings"*/ 

/* Description for TC002 :	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with name"				"*/ 

/* Description for TC003	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with confirmation number"				"*/ 

/* Description for TC004:	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with dates"*/ 

/* Description for TC005:	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with booking status"*/ 

/* Description for TC006:	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with commission status"	*/ 

/* Description for TC007:	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox with commission%"	*/ 

/* Description for TC008:	"The goal of the test is to verify the following functionalities:
1. contents of the search textbox"*/ 

/* Description for TC009:	""The goal of the test is to verify the following functionalities:
1. contents of Booked Date dropdown"*/ 

/* Description for TC010:	"The goal of the test is to verify the following functionalities:
1. contents of Booked Date filter dropdown"*/ 

/* Description for TC011:	"The goal of the test is to verify the following functionalities:
1. contents of Bookings based your commission*/ 

/* Description for TC012:	"The goal of the test is to verify the following functionalities:
1. contents of Bookings based on commisssion%"*/ 


/* Pre condition : Make sure that advisor has some bookings */ 


import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "/cypress/support/Page Object/Advisor/Booking"

describe('Advisor_Booking_TS001',{ testIsolation: false }, function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })
    
  it('Advisor_Booking_TC001_To verify the Bookings section -validating the content of bookings page and clicking the download all button', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        cy.NotanadvisorclientLogin()
        Home.navbar.click()
        cy.wait(1000)

        Bookings.booking.click()
        cy.wait(4000)

      Bookings.downloadall.click()  // clicking the downloadall button in bookings page
        Bookings.searchbar.click() /// verifying the filters 
        Bookings.Dates.eq(0).click({force: true})
        Bookings.Dates.eq(0).click({force: true})
        Bookings.Bookingstatus.click({force: true})
        Bookings.Bookingstatus.click({force: true})
        Bookings.commissionstatus.click({force: true})
        Bookings.commissionstatus.click({force: true})
        
        Bookings.Commissionsort.click({force: true})
        Bookings.Commissionsort.click({force: true})
        Bookings.Sort.click({force: true})
        Bookings.Sort.click({force: true})
        
    })
    
    
   it('Advisor_Booking_TC002 to TC008_To verify if user can Search by Name and confirmation number ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
       
   // here in this test script we are verifiyng search functionality 
        cy.fixture('Advisor_Booking_TS001.json').then(function (dataJson) {
          cy.url().should('include', 'https://advisor.forastaging.net/bookings');

      Bookings.searchbar.should('be.visible')
        Bookings.searchbar.click()
        cy.wait(2000)

        Bookings.searchbar.type(dataJson.Searchword) // this function validate search by giving keyword
        Bookings.searchbar.clear().type(dataJson.Searchplace)
        Bookings.searchbar.clear().type(dataJson.Searchconfirmationnumber)
        Bookings.searchbar.clear().type(dataJson.Searchdate)
        Bookings.Result.should('be.visible')
        Bookings.searchbar.clear().type(dataJson.Searchstatus1)
        Bookings.Result.should('be.visible')
        Bookings.searchbar.clear().type(dataJson.Searchstatus2)
        Bookings.Result.should('be.visible')
        Bookings.searchbar.clear().type(dataJson.Searchpercentage)
        Bookings.Result.should('be.visible')

        Bookings.searchbar.clear().type(dataJson.Space)
        Bookings.searchbar.clear().type(dataJson.Forabookingid)
        
        Bookings.searchbar.clear().type(dataJson.Suppliername)
        cy.wait(2000)
    
        Bookings.Cancel.click()
       /* cy.search(dataJson.Searchword);
cy.search(dataJson.Searchplace);
cy.search(dataJson.Searchconfirmationnumber);
cy.search(dataJson.Searchdate);
cy.search(dataJson.Searchstatus1);
cy.search(dataJson.Searchstatus2);
cy.search(dataJson.Searchpercentage);
cy.search(dataJson.Space);
cy.search(dataJson.Forabookingid);
cy.search(dataJson.Suppliername);

Bookings.Cancel.click();*/
      })
    })
  
  
  
        
  
  it('Advisor_Booking_TC009 to TC012_To verify if user can perform sort function- verifying the sort by applying different sort options', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   /// Here in this script we are verifying different sort options
cy.wait(2000)
 Bookings.Sort.click()
 cy.wait(2000)

   Bookings.deafult.click()
   cy.wait(2000)
   Bookings.Sort.click()
   cy.wait(2000)
   Bookings.oldest.click();
   cy.wait(2000)
  /* Bookings.Bookeddateresult.should('have.length.gt', 0).then((dateElements) => {
    const dates = dateElements.map((index, element) => Cypress.$(element).text()).get();
  
    // Validate and log the comparison result.
    let isValid = true;
  

      for (let i = 0; i < dates.length - 1; i++) {
        const currentDate = new Date(dates[i]);
        const nextDate = new Date(dates[i + 1]);
  
      // Compare the current date with the next date.
      const isOlderOrEqual = currentDate <= nextDate;
  
      // Log the comparison result.
      cy.log(`Date ${i + 1}: ${dates[i]} is older or equal to Date ${i + 2}: ${dates[i + 1]}: ${isOlderOrEqual ? 'Pass' : 'Fail'}`);
  
      // If any comparison fails, set isValid to false.
      if (!isOlderOrEqual) {
        isValid = false;
      }
    }
  
    // Assert that the isValid flag is true (pass the test).
    expect(isValid).to.be.true;
  });*/
   Bookings.Sort.click()
   cy.wait(3000)
   Bookings.tripdatemostrecent.click()
   cy.wait(1000)

  Bookings.Tripdateresult.eq(0)
   .invoke('text')
   .then((Mostrecent) => {        
     cy.log('Mostrecent:',Mostrecent);
   })
   Bookings.Sort.click()
   cy.wait(2000)
   Bookings.tripdateoldest.click()
   cy.wait(1000)
   Bookings.Tripdateresult.eq(0)
   .invoke('text')
   .then((Oldest) => {        
     cy.log('Oldest:',Oldest);
   })
   Bookings.Sort.click()
   cy.wait(2000)
   Bookings.Commissionhightolow.click()
   cy.wait(2000)
   cy.get('[data-testid="commissions_payable"]').then($commissionsPayableElements => {
    const commissionsPayableValues = $commissionsPayableElements.toArray().map(element => {
      
      const value = parseFloat(element.innerText.replace('$', '').replace(',', ''));
      return isNaN(value) ? null : value;  
    });

  
    commissionsPayableValues.forEach((value, index) => {
      cy.log(`Commissions Payable Value ${index + 1}: ${value}`);
    });


    const validValues = commissionsPayableValues.filter(value => value !== null);

   
    for (let i = 0; i < validValues.length - 1; i++) {
      expect(validValues[i]).to.be.gte(validValues[i + 1]);//value is greater than or equal to the next value, ensuring a high-to-low order
    }
  });
   Bookings.Sort.click()
   cy.wait(2000)
   Bookings.Commissionlowtohigh.click()
   cy.wait(8000)
   cy.get('[data-testid="commissions_payable"]').then($commissionsPayableElements => {
    const commissionsPayableValues = $commissionsPayableElements.toArray().map(element => {
   
      const value = parseFloat(element.innerText.replace('$', '').replace(',', ''));
      return isNaN(value) ? null : value;  
    });
  
    
    commissionsPayableValues.forEach((value, index) => {
      cy.log(`Commissions Payable Value ${index + 1}: ${value}`);
    });
  
    
    const validValues = commissionsPayableValues.filter(value => value !== null);
  
  
    for (let i = 0; i < validValues.length - 1; i++) {
      expect(validValues[i]).to.be.lte(validValues[i + 1]); // Change this line for low to high verification
    }
  });
  
  Bookings.Yourcommissionresult
   .invoke('text')
   .then((LowtoHigh) => {        
     cy.log('Low to high:',LowtoHigh);
     Bookings.Sort.click();
     cy.wait(2000)

     Bookings.commissionhightolowpercent.click();
     cy.wait(1000)

   /* Bookings.Commissionpercentresult
       .invoke('text')
       .then((commissionPercentages) => {
         const sortedPercentages = [...commissionPercentages]
           .sort((a, b) => {
             const aPercentage = parseFloat(a.match(/[\d.]+/));
             const bPercentage = parseFloat(b.match(/[\d.]+/));
             return bPercentage - aPercentage;
           })
           .join('');
     
         expect(commissionPercentages).to.equal(sortedPercentages);
       });
     
 cy.contains('$977.88').should('be.visible')*/
 Bookings.Sort.click()
cy.wait(2000)
 Bookings.commissionlowtohighpercent.click()
 cy.wait(1000)

 Bookings.Commissionpercentresult
 .invoke('text')
 .then((lowtohighpercent) => {        
   cy.log('Low to high:',lowtohighpercent);

   }) 
   
})
})
})
