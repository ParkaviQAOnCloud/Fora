class Subscription {

    get Testmode() {
        return cy.contains('Test mode', { timeout: 5000 });
    }

    get Currantplan() {
        return cy.contains('Current plan', { timeout: 5000 });
    }

    get Currantplansec() {
        return cy.get('[class="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"]', { timeout: 5000 });
    }

    get Updateplan() {
        return cy.xpath("//span[contains(text(),'Update plan')]", { timeout: 5000 });
    }

    get Yearlyplan() {
        return cy.get('[data-testid="pricing-table-interval-year"]', { timeout: 5000 });
    }

    get Annualplanheader() {
        return cy.contains('2024 Fora Advisor Plan (Annual)', { timeout: 5000 });
    }

    get Selected() {
        return cy.xpath("//span[normalize-space()='Selected']", { timeout: 5000 });
    }

    get Subtotal() {
        return cy.xpath("//span[normalize-space()='Subtotal']", { timeout: 5000 });
    }

    get Amount() {
        return cy.xpath("//body[1]/div[2]/div[3]/div[1]/span[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]", { timeout: 5000 });
    }

    get selectedcolumn() {
        return cy.get('.as3 > .⚙', { timeout: 5000 });
    }

    get Continue() {
        return cy.get('[data-testid="continue-button"]', { timeout: 5000 });
    }

    get Every3month() {
        return cy.get('[data-testid="pricing-table-interval-month_1"]', { timeout: 5000 });
    }

    get Select() {
        return cy.contains("Select", { timeout: 5000 });
    }

    get Confirmyourupdate() {
        return cy.contains("Confirm your updates", { timeout: 5000 });
    }

    get Plan() {
        return cy.get('[data-test="current-plan"]', { timeout: 5000 });
    }

    get Plandetails() {
        return cy.get('[class="Text-color--dark Text-fontSize--16 Text-fontWeight--regular Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"]', { timeout: 5000 });
    }

    get Backbutton() {
        return cy.get('.Button-align > .Flex-flex', { timeout: 5000 });
    }

    get Confirmbutton() {
        return cy.xpath("//div[@data-auto-transform-content='true']", { timeout: 5000 });
    }

    get Viewdetails() {
        return cy.xpath("//span[contains(text(),'View details')]", { timeout: 5000 });
    }

    get Text() {
        return cy.get(':nth-child(1) > .Box-root > :nth-child(1) > :nth-child(2) > .Text-color--default', { timeout: 5000 });
    }

    get Paymentmethod() {
        return cy.contains("Payment method", { timeout: 5000 });
    }

    get Addpaymentmethodheader() {
        return cy.contains("Add payment method", { timeout: 5000 });
    }

    get Addpaymentmethod() {
        return cy.xpath("//span[contains(text(),'Add payment method')]", { timeout: 5000 });
    }

    get defaulttext() {
        return cy.get('[class="Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--center"]', { timeout: 5000 });
    }

    get Actionbutton() {
        return cy.get('[class="PressableCore-base Box-root"]', { timeout: 5000 });
    }

    get Defaultbutton() {
        return cy.get('[class="Text-color--blue Text-align--left Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"]', { timeout: 5000 });
    }

    get Defaulttag() {
        return cy.get('.Flex-flex > .Badge > .Badge-text > span', { timeout: 5000 });
    }

    get Deletebutton() {
        return cy.xpath("//button[@data-test='nonDefaultPaymentInstrumentDeleteButton']", { timeout: 5000 });
    }

    get Deleteheader() {
        return cy.contains("Delete payment method", { timeout: 5000 });
    }

    get Deletetext() {
        return cy.contains("This will permanently delete your card ending in ", { timeout: 5000 });
    }

    get Deletepayment() {
        return cy.get('[class="Button-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"]', { timeout: 5000 });
    }

    get expirydate() {
        return cy.get('[class="Text-color--dark Text-fontSize--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"]', { timeout: 5000 });
    }

    get invoicehistory() {
        return cy.contains('Invoice history', { timeout: 5000 });
    }

    get invoicehistoryfield() {
        return cy.get('[class="⚙ rs2 ast asu asv ⚙gg9jmq"]', { timeout: 5000 });
    }

    get invoicedownlaod() {
        return cy.get('[class="⚙ rs0 asr asi ass ⚙eph96e"]', { timeout: 5000 });
    }

    get Returntofora() {
        return cy.get('[data-testid="return-to-business-link"] > [style="position: relative;"] > .Flex-alignItems--baseline > .ButtonLink-label > span', { timeout: 5000 });
    }

}

export default new Subscription;
