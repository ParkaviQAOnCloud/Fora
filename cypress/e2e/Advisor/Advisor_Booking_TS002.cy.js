/* Description for TC014:	The goal of the test is to verify the following functionalities:
1. contents of booking based on commission status filter*/ 

/* Description for TC015:	The goal of the test is to verify the following functionalities:
1. contents of booking based on commission status */ 

/* Description for TC016:	"The goal of the test is to verify the following functionalities:
1. contents of Bookings based on commisssion%"*/ 

/* Description for TC017:	The goal of the test is to verify the following functionalities:
1. contents of total bookings*/ 


import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking";
import Bookingclient from "../../support/Page Object/Advisor/Bookingclient";

describe('Advisor_Booking_TS002', { testIsolation: false }, function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData);
    });

    it('Advisor_Booking_TC014_To verify if user can sort by booking status - Verifying bookings by applying various booking statuses', () => {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });    
        cy.viewport(1500,785)

        cy.NotanadvisorLogin();
        Bookings.booking.click();
cy.wait(2000)
        Bookings.Bookingstatus.click();
        Bookings.Bookedcheckbox.eq(0).check();
        Bookings.Apply.click();
cy.wait(2000)
        cy.get('body').then((body) => {
            const commissionsElement = body.find('[data-testid="commissions"]');

            if (commissionsElement.length > 0) {
                const text = commissionsElement.text();
                const numberRegex = /\d+/;
                const foundNumber = text.match(numberRegex);

                if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                    cy.wait(3000)
                    Bookings.Bookedstatus.should('be.visible');
                                } else {
                    cy.log('No bookings available or the number is 0.');
                }
            } else {
                cy.log('No bookings available.');
            }
        });
        
        Bookings.Bookingstatus.click();
        cy.wait(2000)
        Bookings.Bookedcheckbox.eq(0).uncheck();
        cy.wait(2000)

        Bookings.Bookingstatuscheckbox.eq(1).check();
        cy.wait(2000)
        Bookings.Apply.click();
        cy.wait(2000)
        cy.get('body').then((body) => {
            const commissionsElement = body.find('[data-testid="commissions"]');

            if (commissionsElement.length > 0) {
                const text = commissionsElement.text();
                const numberRegex = /\d+/;
                const foundNumber = text.match(numberRegex);

                if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                    cy.wait(3000)
                    Bookings.Traveling.should('be.visible');
                } else {
                    cy.log('No bookings available or the number is 0.');
                }
            } else {
                cy.log('No bookings available.');
            }
        });

        Bookings.Bookingstatus.click({force: true});
        cy.wait(2000)

        Bookings.Bookingstatuscheckbox.eq(1).uncheck();
        cy.wait(2000)
        Bookings.Bookingstatuscheckbox.eq(2).check();
        cy.wait(2000)
        Bookings.Apply.click();
        cy.wait(2000)
        cy.get('body').then((body) => {
            const commissionsElement = body.find('[data-testid="commissions"]');

            if (commissionsElement.length > 0) {
                const text = commissionsElement.text();
                const numberRegex = /\d+/;
                const foundNumber = text.match(numberRegex);

                if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                    Bookings.Completed.eq(1).scrollIntoView().should('be.visible');
                } else {
                    cy.log('No bookings available or the number is 0.');
                }
            } else {
                cy.log('No bookings available.');
            }
        });

        Bookings.Bookingstatus.click({force: true});
        cy.wait(2000)

        Bookings.Bookedcheckbox.eq(2).uncheck();
        cy.wait(2000)
        Bookings.Canceledcheckbox.eq(3).check();
        cy.wait(2000)
        Bookings.Apply.click();
cy.wait(3000)
        cy.get('body').then((body) => {
            const commissionsElement = body.find('[data-testid="commissions"]');

            if (commissionsElement.length > 0) {
                const text = commissionsElement.text();
                const numberRegex = /\d+/;
                const foundNumber = text.match(numberRegex);

                if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                    Bookings.Canceledstatus.eq(0).scrollIntoView().should('be.visible');
                } else {
                    cy.log('No bookings available or the number is 0.');
                }
            } else {
                cy.log('No bookings available.');
            }
        });

        Bookings.Bookingstatus.click({force: true});
        cy.wait(2000)
        Bookings.clear.click();
        cy.wait(2000)
        Bookings.Bookingstatus.click({force: true});
        cy.wait(2000)
    });

    it('Advisor_Booking_TC015_To verify if user can sort by commission status - verifying the bookings by applying commission status sort', () => {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });    
        cy.viewport(1500,785)

        Bookings.commissionstatus.click(); // clicking on commission status dropdown
        cy.wait(2000)
        Bookings.Awaitingpayementcheckbox.check(); // selecting the awaiting payment sort option
        cy.wait(2000)
        Bookings.Apply.click();
        cy.wait(3000)
        // verifying if user is able to view the sort result and print the number of bookings available 
        cy.get('body').then((body) => {
            const commissionsElement = body.find('[data-testid="commissions"]');
            const text = commissionsElement.text();
            const numberRegex = /\d+/;
            const foundNumber = text.match(numberRegex);
            if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                if (foundNumber) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                /////     Bookings.Pendingstatus.eq(0).scrollIntoView().should('be.visible')
                } 
            } else {
                // print no bookings found if there is no bookings with sort applied
                cy.log('No bookings found');
            }
        });
cy.wait(3000)
        Bookings.commissionstatus.click();
        cy.wait(3000)

        Bookings.Awaitingpayementcheckbox.uncheck();
        cy.wait(2000)
        Bookings.Paymentcompletecheckbox.check(); // selecting the payment complete checkbox
        Bookings.Apply.click();
        cy.wait(3000)
        cy.get('body').then((body) => {
            // verifying if user is able to view the sort result and print the number of bookings available 
            const commissionsElement = body.find('[data-testid="commissions"]');
            const text = commissionsElement.text();
            const numberRegex = /\d+/;
            const foundNumber = text.match(numberRegex);
            if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                if (foundNumber) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                } else {
                    Bookings.paidstatus.should('be.visible');
                }
            } else {
                // print no bookings found if there is no bookings with sort applied
                cy.log('No bookings found');
            }
        });
        cy.wait(2000)
        Bookings.commissionstatus.click();
        cy.wait(3000)

        Bookings.Paymentcompletecheckbox.uncheck();
        cy.wait(3000)

        Bookings.Noncommissionablecheckbox.check();
        cy.wait(2000) // selecting the Noncommissionable sort checkbox
        Bookings.Apply.click();
        cy.wait(3000)
        cy.get('body').then((body) => {
            // verifying if user is able to view the sort result and print the number of bookings available 
            const commissionsElement = body.find('[data-testid="commissions"]');
            const text = commissionsElement.text();
            const numberRegex = /\d+/;
            const foundNumber = text.match(numberRegex);
            if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                if (foundNumber) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                } 
            } else {
                // print no bookings found if there is no bookings with sort applied
                cy.log('No bookings found');
            }
        });
   
        Bookings.commissionstatus.click();
        cy.wait(2000)

        Bookings.Noncommissionablecheckbox.uncheck();
        cy.wait(2000)

        Bookings.Paymentscheduledcheckbox.check();
        cy.wait(2000) // selecting the payment schedule checkbox
        Bookings.Apply.click();
        cy.wait(3000)
        cy.get('body').then((body) => {
            // verifying if user is able to view the sort result and print the number of bookings available 
            const commissionsElement = body.find('[data-testid="commissions"]');
            const text = commissionsElement.text();
            const numberRegex = /\d+/;
            const foundNumber = text.match(numberRegex);
            if (foundNumber && parseInt(foundNumber[0], 10) !== 0) {
                if (foundNumber) {
                    const numberValue = parseInt(foundNumber[0], 10);
                    cy.log('Bookings available:', numberValue);
                } 
            } else {
                // print no bookings found if there is no bookings with sort applied
                cy.log('No bookings found');
            }
        });
        Bookings.commissionstatus.click({ force: true });
        cy.wait(2000)

        Bookings.clear.click();
        cy.wait(2000)
        Bookings.commissionstatus.click({ force: true });
    });

it('Advisor_Booking_TC016_To verify if user can sort by commission  % value- Verifying bookings by applying commission % sort', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   
    cy.viewport(1500,785)

    cy.fixture('Advisor_Booking_TS002.json').then(function (dataJson) {
        cy.wait(1000)
    Bookings.Commissionsort.click({force: true})
    cy.wait(2000)

    Bookings.commissionfrom.type(dataJson.Commissionpercentfrom)
    Bookings.commissionto.type(dataJson.Commissionpercentto)
    Bookings.Apply.click()
    cy.wait(2000)

    Bookings.Commissionsort.click()
    cy.wait(2000)

    Bookings.commissionto.clear().type(dataJson.Commissionpercentcheck)
    Bookings.errormsg.should('be.visible')
    Bookings.commissionto.click().clear().type(dataJson.Commissionpercentto)
    cy.wait(2000)

    Bookings.Apply.click()
   
})
})
it('Advisor_Booking_TC017_To verify  if the total bookings of the user are displayed correct', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
    cy.viewport(1500,785)

    Bookings.Totalbooking.eq(0)
    .invoke('text')
    .then((Totalbooking) => {        
      cy.log('Totalbookings:',Totalbooking);
    })

})

})