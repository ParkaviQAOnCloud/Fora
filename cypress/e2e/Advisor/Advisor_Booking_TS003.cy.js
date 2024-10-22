

/* Description for TC018:	The goal of the test is to verify the following functionalities:
1. contents of total commissionable value  value*/ 

import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking";

describe('Advisor_Booking_TS003', function () {

  it('Advisor_Booking_TC018_To verify if the total commissionable value is calculated correctly', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

   // cy.Login1();
   cy.NotanadvisorclientLogin()
    Home.navbar.click();
    Bookings.booking.click();
  //  cy.scrollTo('bottom');
  Bookings.Totalbooking.invoke('text').then((totalBookingValue) => {
    Bookings.card.its('length').then((cardCount) => {
      const totalBookingValueNumber = parseFloat(totalBookingValue);
      expect(totalBookingValueNumber).to.equal(cardCount);


});
  })
  cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(8000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    //cy.scrollTo('bottom');
    cy.wait(8000);
    let sumOfIndividualValues = 0;

    // Fetch individual commissionable values excluding bookings with the specified class
    cy.get('[class="hidden md:block"]').each(($bookingRow, index) => {
      const hasExcludedClass = $bookingRow.find('.rounded-button.py-1.px-3.font-bold.text-small.bg-lightRedBg.text-error.w-fit').length > 0;

      if (!hasExcludedClass) {
        const valueText = $bookingRow.find('[data-testid="total_commissionable_booking_usd"]').text().trim();
        const value = parseFloat(valueText.replace(/[^0-9.-]+/g, ''));

        if (!isNaN(value)) {
          sumOfIndividualValues += value; // Update to include the value without rounding
          cy.log(`Individual Commissionable Value ${index + 1}:`, value);
        } else {
          cy.log(`Skipping invalid commissionable value: ${valueText}`);
        }
      } else {
        cy.log(`Skipping value with excluded class - Individual Commissionable Value ${index + 1}`);
      }
    });

    // Get the Total Commissionable Value from the page
    cy.get('[class="text-header md:text-title font-bold"]').eq(1).then(($totalCommissionableValue) => {
      const totalCommissionableValueText = $totalCommissionableValue.text();
      cy.log('Total Commissionable Value Text:', totalCommissionableValueText);

      const totalCommissionableValue = parseFloat(totalCommissionableValueText.replace('$', '').replace(/[^0-9.-]+/g, ''));
      cy.log('Total Commissionable Value:', totalCommissionableValue);

      // Compare the sum of individual Commissionable Values (excluding bookings with the specified class) with the Total Commissionable Value
      expect(Math.round(sumOfIndividualValues)).to.equal(Math.round(totalCommissionableValue));
    });
  });
});
