class ForaProfile {
    get Usersetting() {
        return cy.xpath("//span[normalize-space()='Account']", { timeout: 5000 })
    }
    get Profilename() {
        return cy.get('[class="text-displayLargeMobile font-semibold tracking-tightest text-center min1280:tracking-normal min1280:text-displayLarge min1280:text-left"]', { timeout: 5000 })
    }
    get Firaemail() {
        return cy.contains("Fora email", { timeout: 5000 })
    }
    get Recoveryemail() {
        return cy.contains("Recovery email", { timeout: 5000 })
    }
    get Verification() {
        return cy.contains("2-Step Verification", { timeout: 5000 })
    }
    get Personalinfo() {
        return cy.contains("Personal information", { timeout: 5000 })
    }
    get Edit() {
        return cy.xpath("//button[normalize-space()='Edit']", { timeout: 5000 })
    }
    get Personalinfosection() {
        return cy.get('[class="flex flex-col gap-4"]', { timeout: 5000 })
    }
    get Firaemail1() {
        return cy.get('[class="text-medium font-bold break-all"]', { timeout: 5000 })
    }
    get Commissionplanandcontract() {
        return cy.contains("Commission plan & contract", { timeout: 5000 })
    }
    get Commissionplanandcontractsection() {
        return cy.get('[class="rounded-b-lg bg-white p-6 min1280:py-4 min1280:px-6"]', { timeout: 5000 })
    }
    get Previousdocuments() {
        return cy.contains("Previous documents", { timeout: 5000 })
    }
    get Yoursubscription() {
        return cy.contains("Your subscription", { timeout: 5000 })
    }
    get Yoursubscriptionsubheader() {
        return cy.contains("Manage your Advisor Subscription in the Billing Portal, including changing payment methods and viewing receipts.", { timeout: 5000 })
    }
    get Previousdocuments1() {
        return cy.get('[class="mb-4 min1280:mb-0 min1280:py-4 min1280:grid min1280:grid-cols-[450px_150px_auto] min1280:gap-x-4 border-b border-stroke last:pb-4 last:mb-0 last:border-none last:-mb-6 min1280:last:mb-0 min1280:last:pb-2"]', { timeout: 5000 })
    }
    get Gotobillingportal() {
        return cy.get('.btn-primary', { timeout: 5000 })
    }
    get Logout() {
        return cy.contains("Log out of Portal", { timeout: 5000 })
    }
    get Editongoogle() {
        return cy.xpath("//a[normalize-space()='Edit on Google']", { timeout: 5000 })
    }
    get Editpersonalinfo() {
        return cy.contains("Edit personal info", { timeout: 5000 })
    }
    get Address() {
        return cy.contains("Address", { timeout: 5000 })
    }
    get Addresssubheader() {
        return cy.contains("Please enter your primary residence address & telephone number.", { timeout: 5000 })
    }
    get Country() {
        return cy.get('.css-1wy0on6', { timeout: 5000 })
    }
    get Countryname() {
        return cy.get('#react-select-country_id-option-0', { timeout: 5000 })
    }
    get Countrytext() {
        return cy.get(".css-19bb58m", { timeout: 5000 })
    }
    get Nooption() {
        return cy.get('.css-9x5mqu', { timeout: 5000 })
    }
    get Typecountryname() {
        return cy.get('#react-select-country_id-option-0', { timeout: 5000 })
    }
    get Savebutton() {
        return cy.xpath("//button[normalize-space()='Save']", { timeout: 5000 })
    }
    get Addressfield() {
        return cy.get('#address', { timeout: 5000 })
    }
    get Appartment() {
        return cy.xpath("//input[@id='address_additional']", { timeout: 5000 })
    }
    get City() {
        return cy.get('#city', { timeout: 5000 })
    }
    get State() {
        return cy.get('#state', { timeout: 5000 })
    }
    get Zipcode() {
        return cy.get('#postal_code', { timeout: 5000 })
    }
    get Countryflag() {
        return cy.get('.PhoneInputCountrySelect', { timeout: 5000 })
    }
    get Phonenumber() {
        return cy.get('[data-testid="phone-input"]', { timeout: 5000 })
    }
    get Timezone() {
        return cy.get('.css-14qxd58-control > .css-hlgwow > .css-19bb58m', { timeout: 5000 })
    }
    get View() {
        return cy.contains('View', { timeout: 5000 })
    }
    get View1() {
        return cy.get('[class="underline"]', { timeout: 5000 })
    }
    get View2() {
        return cy.get('[class="underline"]', { timeout: 5000 })
    }
    get Cancelsubscription() {
        return cy.contains('Cancel your subscription', { timeout: 5000 })
    }
    get Areyousuretext() {
        return cy.contains('Are you sure?', { timeout: 5000 })
    }
    get Text1() {
        return cy.contains('Please note that at the end of your billing cycle your account will close and you will lose access to the Fora Advisor Portal and your Fora email.', { timeout: 5000 })
    }
    get Text2() {
        return cy.contains('At this time, we can not accommodate membership pauses.', { timeout: 5000 })
    }
    get Text3() {
        return cy.contains('At this time, we can not accommodate membership pauses.', { timeout: 5000 })
    }
    get Cancelbutton() {
        return cy.xpath("//span[@class='flex w-full items-center']//*[name()='svg']//*[name()='line']", { timeout: 5000 })
    }
    get Continuetocancel() {
        return cy.xpath("//button[normalize-space()='Continue to cancel']", { timeout: 5000 })
    }
    get Cancelsubscriptiontext() {
        return cy.contains('Cancel your subscription', { timeout: 5000 })
    }
    get Cancelsubscriptiontext1() {
        return cy.contains('Once you cancel your subscription, any future commissions you are owed will be paid once those commissions have been received from the travel partner by Fora.', { timeout: 5000 })
    }
    get Cancelsubscriptiontext2() {
        return cy.contains('After you cancel, you will not be charged any further subscription fees and your account will automatically deactivate at the end of the current pay period.', { timeout: 5000 })
    }
    get Cancellationreason() {
        return cy.contains('Cancellation reason*', { timeout: 5000 })
    }
    get Cancellationreasondropdown() {
        return cy.get('[data-testid="Select reason"]', { timeout: 5000 })
    }
    get Additionalinfo() {
        return cy.contains('Additional information*', { timeout: 5000 })
    }
    get Additionalinfotextbox() {
        return cy.get('[placeholder="Tell us about why you are choosing to cancel your Fora Advisor subscription. We are sad to see you go!"]', { timeout: 5000 })
    }
    get Keepaccount() {
        return cy.xpath("//button[normalize-space()='Keep account']", { timeout: 5000 })
    }
    get Confirmcancel() {
        return cy.get('[class="justify-center px-6 py-3 whitespace-nowrap btn-primary cursor-pointer bg-red-500"]', { timeout: 5000 })
    }
    get Errormsg() {
        return cy.get('[class="flex items-center justify-start gap-2 text-error mt-2"]', { timeout: 5000 })
    }
    get Dropdownoption1() {
        return cy.contains("Moving to a different host agency", { timeout: 5000 })
    }
    get Dropdownoption2() {
        return cy.contains("Attempted to find clients and could not", { timeout: 5000 })
    }
    get Dropdownoption3() {
        return cy.contains("Fora requires more time than I can commit to right now", { timeout: 5000 })
     }
    get Dropdownoption4() {
        return cy.contains("Membership fee is too expensive", { timeout: 5000 })
    }
    get Dropdownoption5() {
        return cy.contains("Fora’s partners are over my clients’ budgets", { timeout: 5000 })
    }
    get Dropdownoption6() {
        return cy.contains("Fora Portal is hard to use", { timeout: 5000 })
    }
    get Dropdownoption7() {
        return cy.contains("I’m unsure where to start", { timeout: 5000 })
    }
    get Dropdownoption8() {
        return cy.contains("Fora did not meet my expectations", { timeout: 5000 })
    }
    get Dropdownoption9() {
        return cy.contains("Other", { timeout: 5000 })
    }
    get Communityguideline() {
        return cy.xpath("//span[normalize-space()='Community Guidelines']", { timeout: 5000 })
    }
    get Communityguidelineviewbutton() {
        return cy.xpath("//a[@href='/community-guidelines']//span[@class='underline'][normalize-space()='View']", { timeout: 5000 })
    }
    get CommunityGuidelinesheader() {
        return cy.contains('Community Guidelines', { timeout: 5000 })
    }
    get Weareprofessionals() {
        return cy.contains("For in-person events, we show up on time, prepared and dressed professionally (see full policy ", { timeout: 5000 })
    }
    get Here() {
        return cy.contains('here', { timeout: 5000 })
    }
    get Policy() {
        return cy.xpath("//a[@rel='noopener noreferrer']//u[contains(text(),'policy')]", { timeout: 5000 })
    }
    get Canceltextmsg()
    {
        return cy.contains('Account will deactivate at the end of pay period')
    }
    get close()
    {
        return cy.get('div.w-full > .btn-primary')
    }
}

export default new ForaProfile();
