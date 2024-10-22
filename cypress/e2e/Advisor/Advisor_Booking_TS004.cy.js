/*
  Description TC019: 
  "The goal of the test is to verify the following functionalities:
  1. Contents of total advisor commission value" 
*/

import Home from "../../support/Page Object/Advisor/Home";
import Bookings from "../../support/Page Object/Advisor/Booking";

// Define custom rounding function
function customRound(value) {
    const floorValue = Math.floor(value);
    const fractionalPart = value - floorValue;

    if (fractionalPart > 0.5) {
        return floorValue + 1;
    }
    return floorValue;
}

describe('Advisor_Booking_TS004', function() {
  it('Advisor_Booking_TC019_To verify if the total Advisor Commission is calculated correctly', () => {
    // Handle uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // Perform login and navigate to bookings
    cy.NotanadvisorclientLogin();
    Home.navbar.click();
    Bookings.booking.click();
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(8000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(2000);

    let sumOfIndividualValues = 0;

    // Fetch individual commission values for non-canceled bookings
    cy.get('[class="hidden md:block"]').each(($bookingRow, index) => {
      const hasExcludedClass = $bookingRow.find('.rounded-button.py-1.px-3.font-bold.text-small.bg-lightRedBg.text-error.w-fit').length > 0;

      if (!hasExcludedClass) {
        const valueText = $bookingRow.find('[data-testid="commissions_payable"]').text().trim();
        const value = parseFloat(valueText.replace(/[^0-9.-]+/g, ''));

        if (!isNaN(value)) {
          sumOfIndividualValues += value;
          cy.log(`Individual Commission Value ${index + 1}:`, value);
        } else {
          cy.log(`Skipping invalid commission value: ${valueText}`);
        }
      }
    });

    // Get the Total Commission Value from the page
    cy.get('[data-testid="commission"]').then(($totalCommissionValue) => {
      const totalCommissionValueText = $totalCommissionValue.text();
      cy.log('Total Commission Value Text:', totalCommissionValueText);

      const totalCommissionValue = parseFloat(totalCommissionValueText.replace(/[^0-9.-]+/g, ''));
      cy.log('Total Commission Value:', totalCommissionValue);

      // Compare the sum of individual Commission Values (excluding canceled) with the Total Commission Value
      expect(customRound(sumOfIndividualValues)).to.equal(customRound(totalCommissionValue));
    });
  });
});
