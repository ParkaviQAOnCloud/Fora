class Bookingclient {

    get Text() {
        return cy.get('[data-testid="booking_status"]', { timeout: 5000 });
    }

    get Requestreview() {
        return cy.xpath("//h1[normalize-space()='Request a review']", { timeout: 5000 });
    }

    get Requetreviewtext() {
        return cy.contains("Send your client a simple form that will allow them to review the supplier from this booking. You also have the option of requesting a review for your personal travel advisor services.", { timeout: 5000 });
    }

    get subtext() {
        return cy.contains("Ask my client to review", { timeout: 5000 });
    }

    get suppliercheckbox() {
        return cy.get("#supplierReviewRequested", { timeout: 5000 });
    }

    get supplier() {
        return cy.contains("Supplier", { timeout: 5000 });
    }

    get Traveladvisorcheckbox() {
        return cy.get("#advisorReviewRequested", { timeout: 5000 });
    }

    get Traveladvisor() {
        return cy.contains("Travel Advisor (you)", { timeout: 5000 });
    }

    get Learnaboutclientlink() {
        return cy.xpath("//a[normalize-space()='Learn what your clients will see']", { timeout: 5000 });
    }

    get Clientemail() {
        return cy.contains("Client email", { timeout: 5000 });
    }

    get Selectemail() {
        return cy.get('.react-select__input-container', { timeout: 5000 });
    }

    get Addemail() {
        return cy.get(':nth-child(1) > .block', { timeout: 5000 });
    }

    get Personalemail() {
        return cy.contains("Personal", { timeout: 5000 });
    }

    get Personalemail1() {
        return cy.contains("email", { timeout: 5000 });
    }

    get Personalfield() {
        return cy.get("#personal", { timeout: 5000 });
    }

    get Personalfieldvalue() {
        return cy.get(':nth-child(1) > .pr-2', { timeout: 5000 });
    }

    get Workemail() {
        return cy.contains("Work", { timeout: 5000 });
    }

    get Workemail1() {
        return cy.contains("email", { timeout: 5000 });
    }

    get Workfield() {
        return cy.get("#work", { timeout: 5000 });
    }

    get Workfieldvalue() {
        return cy.get(':nth-child(2) > .pr-2', { timeout: 5000 });
    }

    get Optional() {
        return cy.contains("Optional", { timeout: 5000 });
    }

    get Otheremail() {
        return cy.contains("Other", { timeout: 5000 });
    }

    get Othermail1() {
        return cy.contains("email", { timeout: 5000 });
    }

    get Otherfield() {
        return cy.get('#other', { timeout: 5000 });
    }

    get Otherfieldvalue() {
        return cy.get(':nth-child(3) > .pr-2', { timeout: 5000 });
    }

    get Travelreviewunavailable() {
        return cy.get('[class="block text-disabledSecondary text-medium font-bold min1440:whitespace-nowrap empty:hidden"]', { timeout: 5000 });
    }

    get Tooltip() {
        return cy.get('[data-tooltip-id="travelReviewUnavailableCanceled"]', { timeout: 5000 });
    }

    get result() {
        return cy.get('[class="pr-2 break-all"]', { timeout: 5000 });
    }

    get Addpersonalmsg() {
        return cy.xpath("//textarea[@placeholder='Share a brief message for your client. You could thank them for their business, express hope that they enjoyed their trip, or encourage them to share their feedback.']", { timeout: 5000 });
    }

    get savebutton() {
        return cy.get('.btn-primary', { timeout: 5000 });
    }

    get Travelreview() {
        return cy.get('.mt-2.grid.grid-cols-1.sm\\:grid-cols-3.xl\\:grid-cols-5.gap-4.items-center', { timeout: 5000 });
    }

    get Changeclient() {
        return cy.get('[data-testid="submit-button"]', { timeout: 5000 });
    }

    get errormsg() {
        return cy.contains('This field is required.', { timeout: 5000 });
    }

    get firstname() {
        return cy.get('#firstName', { timeout: 5000 });
    }

    get lastname() {
        return cy.get('#lastName', { timeout: 5000 });
    }

    get personalmail() {
        return cy.get('#personalEmail', { timeout: 5000 });
    }

    get edit() {
        return cy.get('[class="inline-block ml-2 align-baseline cursor-pointer text-secondaryDark shrink-0"]', { timeout: 5000 });
    }

    get Hotel() {
        return cy.contains('Hotel', { timeout: 5000 });
    }

    get changeclienttext() {
        return cy.contains('You are about to change the client associated with this booking. Please note, since a review has already been requested for this booking, the review will automatically be moved to the new client.', { timeout: 5000 });
    }

    get Cruise() {
        return cy.contains('Cruise', { timeout: 5000 });
    }

    get newclient() {
        return cy.get('#client', { timeout: 5000 });
    }

    get drop() {
        return cy.get('.react-select__input-container', { timeout: 5000 });
    }

    get dropvalue() {
        return cy.get(':nth-child(1) > .block', { timeout: 5000 });
    }

    get test() {
        return cy.get('[class="my-4 relative bg-white border border-lightGreyBorder shadow-card rounded-lg py-8 px-6 lg:p-8 w-full max-w-[584px]"]', { timeout: 5000 });
    }

    get validemail() {
        return cy.get('[data-testid="emailFormError"]', { timeout: 5000 });
    }

    get Newclientheader() {
        return cy.xpath("//div[contains(text(),'New Client')]", { timeout: 5000 });
    }

    get Addclientbutton() {
        return cy.get('#react-select-client-listbox > :nth-child(1) > .text-link', { timeout: 5000 });
    }

    get Createclient() {
        return cy.xpath("//button[normalize-space()='Create Client']", { timeout: 5000 });
    }
}

export default new Bookingclient;
