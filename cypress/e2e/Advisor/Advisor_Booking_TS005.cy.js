/* Description TC019: "The goal of the test is to verify the following functionalities:
1. contents of each bookings commission value"*/



import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking"

describe('Advisor_Booking_TS005', function() {
  it('Advisor_Booking_TC020_To verify the tooltips in boookings page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

   // cy.Login1();
   cy.NotanadvisorLogin()

    Home.navbar.click();
    Bookings.booking.click();
      Bookings.Yourcommissiontooltip.eq(0).trigger('mouseover'); //validating the tooltip of yourcommission
  
      Bookings.Yourcommissiontooltip.should('be.visible');
      Bookings.Yourcommissiontooltip.eq(0).trigger('mouseout');

      Bookings.Commissionablevaluetooltip.eq(0).trigger('mouseover');//validating the tooltip of Commissionablevalue
  
      Bookings.Commissionablevaluetooltip.should('be.visible');
      Bookings.Commissionablevaluetooltip.eq(0).trigger('mouseout');
      Bookings.Totalcommissiontooltip.eq(0).trigger('mouseover'); //validating the tooltip of Totalcommission
  
      Bookings.Totalcommissiontooltip.should('be.visible');
      Bookings.Totalcommissiontooltip.eq(0).trigger('mouseout');
    });
  });

 
  