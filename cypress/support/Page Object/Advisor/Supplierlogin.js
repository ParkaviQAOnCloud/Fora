class Supplierlogin {
    get Requestloginheader() {
        return cy.contains('Request a Supplier Login', { timeout: 5000 });
    }

    get Whatsupplierheader1() {
        return cy.contains('Which supplier?', { timeout: 5000 });
    }

    get Whatsupplierheader2() {
        return cy.contains('*', { timeout: 5000 });
    }

    get whichsupplierdropdown() {
        return cy.get('[data-testid="supplier-caret"]', { timeout: 5000 });
    }

    get Avalonwaterway() {
        return cy.get('#prefix-option-avalon-waterways', { timeout: 5000 });
    }

    get Stageofbookingheader1() {
        return cy.contains('Which stage of the booking process are you currently in for this request?', { timeout: 5000 });
    }

    get Stageofbookingheader2() {
        return cy.contains('*', { timeout: 5000 });
    }

    get Boookingprocessdropdown() {
        return cy.get('[data-testid="stage"]', { timeout: 5000 });
    }

    get Option1() {
        return cy.contains('Getting setup and looking around', { timeout: 5000 });
    }

    get Option2() {
        return cy.contains('Researching options for a client', { timeout: 5000 });
    }

    get Option3() {
        return cy.contains('Quoting for a client who is ready to book', { timeout: 5000 });
    }

    get Option4() {
        return cy.get('[data-testid="option-4"]', { timeout: 5000 });
    }

    get Error() {
        return cy.get('[class="flex items-center justify-start gap-2 text-error mt-2"]', { timeout: 5000 });
    }

    get Next() {
        return cy.xpath("//button[normalize-space()='Next']", { timeout: 5000 });
    }

    get Cancel() {
        return cy.get('[class=" fill-main cursor-pointer"]', { timeout: 5000 });
    }

    get Avalontext() {
        return cy.contains('Supplier Name: Avalon Waterways', { timeout: 5000 });
    }

    get text1() {
        return cy.contains('Great news! You can create a login without our help!', { timeout: 5000 });
    }

    get text2() {
        return cy.contains('Simply visit the supplier page linked here.', { timeout: 5000 });
    }

    get text3() {
        return cy.contains('You will have access to this supplier immediately.', { timeout: 5000 });
    }

    get Text4() {
        return cy.contains('Login requests are approved at the beginning of each day. You will have access to this supplier within 1 business day.', { timeout: 5000 });
    }

    get text5() {
        return cy.contains('This supplier login is for Pro level Advisors only.', { timeout: 5000 });
    }

    get text6() {
        return cy.contains('When you receive your Pro qualification, you will have these accounts created for you.', { timeout: 5000 });
    }

    get text7() {
        return cy.contains('If you are a Pro Advisor and are missing supplier login for Virtuoso or Four Seasons, please email support@fora.travel.', { timeout: 5000 });
    }

    get Gotosupplierpage() {
        return cy.xpath("//a[normalize-space()='Go to Supplier Page']", { timeout: 5000 });
    }

    get cancelicon() {
        return cy.get('[class=" fill-main cursor-pointer"]', { timeout: 5000 });
    }

    get Cancelbutton() {
        return cy.xpath("//button[normalize-space()='Cancel']", { timeout: 5000 });
    }

    get Azmara() {
        return cy.get('#prefix-option-azamara', { timeout: 5000 });
    }

    get Azmaratext() {
        return cy.contains('Supplier Name: Azamara', { timeout: 5000 });
    }

    get Supplierlogintext() {
        return cy.contains('Please confirm this is the correct supplier login by submitting this form. We appreciate your patience.', { timeout: 5000 });
    }

    get Supplierlogintext1() {
        return cy.contains("You will have access to this supplier within 1 business day.", { timeout: 5000 });
    }

    get Submitbutton() {
        return cy.xpath("//button[normalize-space()='Submit']", { timeout: 5000 });
    }

    get Rightmark() {
        return cy.get('[data-testid="checkCircle-icon"]', { timeout: 5000 });
    }

    get Thankyoumsg() {
        return cy.contains("Thank you for contacting us!", { timeout: 5000 });
    }

    get Thankyoumsg1() {
        return cy.contains("We will respond to your request soon", { timeout: 5000 });
    }

    get close() {
        return cy.xpath("//button[normalize-space()='Close']", { timeout: 5000 });
    }

    get Blacklane() {
        return cy.get('#prefix-option-blacklane', { timeout: 5000 });
    }

    get Blacklanesupplier() {
        return cy.contains("Supplier Name: Blacklane", { timeout: 5000 });
    }

    get Carnivalcrusiesline() {
        return cy.get('#prefix-option-carnival-cruise-line', { timeout: 5000 });
    }

    get Carnivalcrusieslinesupplier() {
        return cy.contains('Supplier Name: Carnival Cruise Line', { timeout: 5000 });
    }

    get Classicvacation() {
        return cy.get('#prefix-option-classic-vacations', { timeout: 5000 });
    }

    get Classicvacationsupplier() {
        return cy.contains('Supplier Name: Classic Vacations', { timeout: 5000 });
    }

    get Crusingpower() {
        return cy.get('#prefix-option-cruising-power', { timeout: 5000 });
    }

    get Crusingpowersupplier() {
        return cy.contains('Supplier Name: Cruising Power', { timeout: 5000 });
    }

    get Gotosupplierpagelink() {
        return cy.xpath("//span[normalize-space()='Go to Supplier Page']", { timeout: 5000 });
    }

    get Deltavacation() {
        return cy.get('#prefix-option-delta-vacations', { timeout: 5000 });
    }

    get Deltavacationsupplier() {
        return cy.contains('Supplier Name: Delta Vacations', { timeout: 5000 });
    }

    get Expediataap() {
        return cy.get('#prefix-option-expedia-taap', { timeout: 5000 });
    }

    get Expediataapsupplier() {
        return cy.contains("Supplier Name: Expedia TAAP", { timeout: 5000 });
    }

    get Explorajourney() {
        return cy.get('#prefix-option-explora-journeys', { timeout: 5000 });
    }

    get Explorajourneysupplier() {
        return cy.contains('Supplier Name: Explora Journeys', { timeout: 5000 });
    }

    get Fourseason() {
        return cy.get('#prefix-option-four-seasons', { timeout: 5000 });
    }

    get Fourseasonsupplier() {
        return cy.contains("Supplier Name: Four Seasons", { timeout: 5000 });
    }

    get Gate1() {
        return cy.get('#prefix-option-gate-1', { timeout: 5000 });
    }

    get Gate1supplier() {
        return cy.contains("Supplier Name: Gate 1", { timeout: 5000 });
    }

    get Glided() {
        return cy.get('#prefix-option-gilded-globe', { timeout: 5000 });
    }

    get Glidedsupplier() {
        return cy.contains("Supplier Name: Gilded Globe", { timeout: 5000 });
    }

    get Globus() {
        return cy.get('#prefix-option-globus', { timeout: 5000 });
    }

    get Globussupplier() {
        return cy.contains("Supplier Name: Globus", { timeout: 5000 });
    }

    get H10() {
        return cy.get('#prefix-option-h10', { timeout: 5000 });
    }

    get H10supplier() {
        return cy.contains("Supplier Name: H10", { timeout: 5000 });
    }

    get Hoshinoya() {
        return cy.get('#prefix-option-hoshinoya', { timeout: 5000 });
    }

    get Hoshinoyasupplier() {
        return cy.contains("Supplier Name: HOSHINOYA", { timeout: 5000 });
    }

    get Iberostar() {
        return cy.get('#prefix-option-iberostar', { timeout: 5000 });
    }

    get Iberostarsupplier() {
        return cy.contains("Supplier Name: Iberostar", { timeout: 5000 });
    }

    get Livtours() {
        return cy.get('#prefix-option-livtours', { timeout: 5000 });
    }

    get Livtourssupplier() {
        return cy.contains("Supplier Name: Livtours", { timeout: 5000 });
    }

    get MSC() {
        return cy.get('#prefix-option-msc', { timeout: 5000 });
    }

    get MSCsupplier() {
        return cy.contains("Supplier Name: MSC", { timeout: 5000 });
    }

    get Melia() {
        return cy.get('#prefix-option-melia', { timeout: 5000 });
    }

    get Meliasupplier() {
        return cy.contains("Supplier Name: Melia", { timeout: 5000 });
    }

    get Norwegiancruiseline() {
        return cy.get('#prefix-option-norwegian-cruise-line', { timeout: 5000 });
    }

    get Norwegiancruiselinesupplier() {
        return cy.contains("Supplier Name: Norwegian Cruise Line", { timeout: 5000 });
    }

    get Onesource() {
        return cy.xpath("//li[@id='prefix-option-one-source']", { timeout: 5000 });
    }

    get Onesourcesupplier() {
        return cy.contains("Supplier Name: OneSource", { timeout: 5000 });
    }
}

export default new Supplierlogin();
