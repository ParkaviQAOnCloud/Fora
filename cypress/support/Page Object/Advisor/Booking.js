class Bookings {
    get booking()
    {
        return cy.get('[href="/bookings"]',{ timeout: 8000 })//cy.get('[title="Bookings"]')
    }
    get downloadall()
    {
        return cy.xpath("//button[normalize-space()='Download all']",{ timeout: 8000 })
    }
    get searchbar()
    {
        return  cy.get('[placeholder="Search by names or confirmation number..."]',{ timeout: 8000 })//cy.xpath("//input[@placeholder='Search by names or confirmation number...']")
    }
    get Dates()
    {
        return cy.get('[data-testid="dropdownButton"]',{ timeout: 8000 })
    }
    get commissionstatus()
    {
        return cy.xpath("//div[@data-testid='Commission status']",{ timeout: 8000 })
    }
    get Bookingstatuscheckbox()
    {
        return cy.get('[type="checkbox"]',{ timeout: 8000 })//cy.xpath("//div[@data-testid='Booking status']")
    }
    get Traveling()
    {
        return cy.xpath("//div[@class='xl:flex xl:items-center']//span[@class='rounded-button py-1 px-3 font-bold text-small text-link bg-blueLight'][normalize-space()='Traveling']",{ timeout: 8000 })
    }
    get Completed()
    {
        return cy.xpath("//div[@class='xl:flex xl:items-center']//span[@class='rounded-button py-1 px-3 font-bold text-small bg-successLight text-success'][normalize-space()='Completed']",{ timeout: 8000 })
    }
    get Commissionsort()
    {
        return cy.xpath("//div[@data-testid='Commission %']",{ timeout: 8000 })
    }
    get Sort()
    {
        return cy.xpath("//div[@data-testid='Sort by']",{ timeout: 8000 })
    }
    get Result()
    {
        return cy.contains("No results found.",{ timeout: 8000 })
    }
    get Result1()
    {
        return cy.contains("Automation Test",{ timeout: 8000 })
    }
    get Cancel()
    {
        return   cy.xpath("//div[@class='form-control-icon--error-icon absolute inset-y-0 right-0 pr-3 flex items-center z-9']//*[name()='svg']",{ timeout: 8000 })
    }
    get deafult()
    {
        return cy.get('#sorting-option-1',{ timeout: 8000 })
    }
    get oldest()
    {
        return cy.get('#sorting-option-2',{ timeout: 8000 })
    }
    get tripdatemostrecent()
    {
        return cy.get('#sorting-option-3',{ timeout: 8000 })
    }
    get tripdateoldest()
    {
        return cy.get('#sorting-option-4',{ timeout: 8000 })
    }
    get Commissionhightolow()
    {
        return cy.get('#sorting-option-5',{ timeout: 8000 })
    }
    get Commissionlowtohigh()
    {
        return cy.get('#sorting-option-6',{ timeout: 8000 })
    }
    get commissionhightolowpercent()
    {
        return cy.get('#sorting-option-7',{ timeout: 8000 })
    }
    get commissionlowtohighpercent()
    {
        return cy.get('#sorting-option-8',{ timeout: 8000 })
    }
    get Yourcommissionresult()
    {
        return cy.get('[data-testid="commissions_payable"]',{ timeout: 8000 })
    }
    get Commissionpercentresult()
    {
        return cy.get('[data-testid="total_commission_usd_plus_est_commission"]',{ timeout: 8000 })
    }
    get Bookeddateresult()
    {
        return cy.get('[data-testid="category"]',{ timeout: 8000 })
    }
    get Tripdateresult() {
        return cy.get('[data-testid="trip_dates"]', { timeout: 8000 });
    }
    
    get Custom() {
        return cy.get('#custom', { timeout: 8000 });
    }
    
    get Nextmontharrow() {
        return cy.get('[class="react-datepicker__navigation-icon react-datepicker__navigation-icon--next"]', { timeout: 8000 });
    }
    
    get BookDropdown() {
        return cy.get('[class="text-left dropdown-button form-control-v3 text-main"]', { timeout: 10000 });
    }
    
    get From() {
        return cy.get('[class="md:relative inline-block text-left w-full md:w-auto"]', { timeout: 8000 });
    }
    
    get From1() {
        return cy.get('[placeholder="From"]', { timeout: 8000 });
    }
    
    get To() {
        return cy.get('[class="md:relative inline-block text-left w-full md:w-auto"]', { timeout: 8000 });
    }
    
    get To1() {
        return cy.get('[placeholder="To"]', { timeout: 8000 });
    }
    
    get Date() {
        return cy.xpath("//div[@aria-label='Choose Tuesday, October 22nd, 2024']", { timeout: 8000 });
    }
    
    get Date1() {
        return cy.xpath("//div[@aria-label='Choose Friday, October 25th, 2024']", { timeout: 8000 });
    }
    
    get Apply() {
        return cy.get('.btn-primary', { timeout: 8000 });
    }
    
    get lastweek() {
        return cy.get('#lastWeek', { timeout: 8000 });
    }
    
    get lastmonth() {
        return cy.get('#lastMonth', { timeout: 8000 });
    }
    
    get lastyear() {
        return cy.get('#lastYear', { timeout: 8000 });
    }
    
    get currantweektodate() {
        return cy.get('#currentWeekToDate', { timeout: 8000 });
    }
    
    get currantmonthtodate() {
        return cy.get('#currentMonthToDate', { timeout: 8000 });
    }
    
    get currantyeartodate() {
        return cy.get('#currentYearToDate', { timeout: 8000 });
    }
    
    get canceldatesort() {
        return cy.get('[data-testid="dropdownButton"]', { timeout: 8000 });
    }
    
    get Nextmontharrow() {
        return cy.get('[class="react-datepicker__navigation react-datepicker__navigation--next"]', { timeout: 8000 });
    }
    
    get Previousmontharrow() {
        return cy.xpath("//div[contains(@class,'flex flex-col gap-y-4 mb-//div[contains(@class,'md:hidden bg-white order-1 mx-6 mt-2 py-4 border-b border-stroke')]//div//button[contains(@aria-label,'Previous Month')]", { timeout: 5000 });
    }
    
    get clear() {
        return cy.xpath("//button[normalize-space()='Clear']", { timeout: 8000 });
    }
    
    get Bookedcheckbox() {
        return cy.get('[type="checkbox"]', { timeout: 10000 });
    }
    
    get Canceledcheckbox() {
        return cy.get('[type="checkbox"]', { timeout: 10000 });
    }
    
    get Bookingstatus() {
        return cy.get('[data-testid="Booking status"]', { timeout: 10000 });
    }
    
    get Awaitingpayementcheckbox() {
        return cy.xpath("//div//div//div//div//div//div//div//div//div//div//div//div//label[contains(text(),'Awaiting partner payment')]//input[@type='checkbox']", { timeout: 10000 });
    }
    
    get Paymentscheduledcheckbox() {
        return cy.xpath("//div//div//div//div//div//div//div//div//div//div//div//div//label[contains(text(),'Payment scheduled')]//input[@type='checkbox']", { timeout: 10000 });
    }
    
    get Paymentcompletecheckbox() {
        return cy.xpath("//div//div//div//div//div//div//div//div//div//div//div//div//label[contains(text(),'Payment complete')]//input[@type='checkbox']", { timeout: 10000 });
    }
    
    get Noncommissionablecheckbox() {
        return cy.xpath("//div//div//div//div//div//div//div//div//div//div//div//div//label[contains(text(),'Non-commissionable')]//input[@type='checkbox']", { timeout: 10000 });
    }
    
    get commissionfromlink() {
        return cy.xpath("//a[normalize-space()='commissions@fora.travel']", { timeout: 8000 });
    }
    
    get Modifybooking() {
        return cy.contains("Modify booking", { timeout: 5000 });
    }
    
    get Modifybookingtext() {
        return cy.contains("If details of the booking have changed (excluding cancellation), please forward the updated supplier confirmation email to", { timeout: 8000 });
    }
    
    get Bookedstatus() {
        return cy.get('[class="rounded-button py-1 px-3 font-bold text-small bg-blueLight text-link"]', { timeout: 8000 });
    }
    
    get Travellingstatus() {
        return cy.get('[class="rounded-button py-1 px-3 font-bold text-small text-link bg-blueLight"]', { timeout: 8000 });
    }
    
    get Completedstatus() {
        return cy.get('[class="rounded-button py-1 px-3 font-bold text-small bg-successLight text-success"]', { timeout: 8000 });
    }
    
    get Canceledstatus() {
        return cy.get('[class="rounded-button py-1 px-3 font-bold text-small bg-lightRedBg text-error w-fit"]', { timeout: 8000 });
    }
    
    get commissionto() {
        return cy.get('.mb-3 > .flex > :nth-child(2) > #max', { timeout: 8000 });
    }
    
    get errormsg() {
        return cy.contains("The minimum value must be less than maximum value", { timeout: 8000 });
    }
    
    get Pendingstatus() {
        return cy.get('[class="rounded-button py-1 text-small pr-3 pl-3 inline-flex items-center gap-[6px] whitespace-nowrap capitalize shrink-0 text-link bg-blueLight whitespace-nowrap font-semibold"]', { timeout: 8000 });
    }
    
    get paidstatus() {
        return cy.get('[data-testid="paid-status"]', { timeout: 8000 });
    }
    
    get Totalbooking() {
        return cy.get('[data-testid="commissions"]', { timeout: 8000 });
    }
    
    get Managebookinglink() {
        return cy.contains("Manage booking", { timeout: 8000 });
    }
    
    get card() {
        return cy.get('[class="hidden md:block"]', { timeout: 8000 });
    }
    
    get Reportcancellation() {
        return cy.xpath("//button[normalize-space()='Report cancellation']", { timeout: 8000 });
    }
    
    get Cancelbookingtitle() {
        return cy.xpath("//p[normalize-space()='Cancel booking']", { timeout: 8000 });
    }
    
    get Cancelbookingtext() {
        return cy.contains("If the booking has been canceled with the supplier already, let us know here", { timeout: 8000 });
    }
    
    get ReportBooking() {
        return cy.contains("Report Booking", { timeout: 8000 });
    }
    
    get ReportBookingtext() {
        return cy.contains("Please select the reason the booking was canceled. Completing this form only reports the cancellation to Fora and you should have already canceled the booking with the supplier directly.", { timeout: 8000 });
    }
    
    get Managebooking() {
        return cy.xpath('//p[normalize-space()="Manage Booking"]', { timeout: 8000 });
    }
    
    get Revisebookingtitle() {
        return cy.xpath("//p[normalize-space()='Revise booking']", { timeout: 8000 });
    }
    
    get Reportincorrectdatatitle() {
        return cy.xpath("//p[normalize-space()='Report incorrect data']", { timeout: 8000 });
    }
    
    get Duplicatebookingtitle() {
        return cy.xpath("//p[normalize-space()='Duplicate booking']", { timeout: 8000 });
    }
    
    get Otherissuetitle() {
        return cy.xpath("//p[normalize-space()='Other issue']", { timeout: 8000 });
    }
    
    get advisorradiobutton() {
        return cy.xpath("//input[@id='advisor']", { timeout: 8000 });
    }
    
    get cancelradiobutton() {
        return cy.xpath("//input[@id='supplier']", { timeout: 8000 });
    }
    
    get clientradiobutton() {
        return cy.xpath("//input[@id='client']", { timeout: 8000 });
    }
    
    get otherradiobutton() {
        return cy.xpath("//input[@id='other']", { timeout: 8000 });
    }
    
    get comment() {
        return cy.xpath("//textarea[@placeholder='Please provide additional details/notes.']", { timeout: 8000 });
    }
    
    get submit() {
        return cy.get('[data-testid="submit-button"]', { timeout: 8000 });
    }
    
    get submitreport() {
        return cy.get('.btn-primary', { timeout: 8000 });
    }
    
    get goback() {
        return cy.xpath("//button[normalize-space()='Go back']", { timeout: 8000 });
    }
    
    get goit() {
        return cy.xpath('//a[normalize-space()="Got it!"]', { timeout: 8000 });
    }
    
    get reason() {
        return cy.xpath("//div[@data-testid='Select (required)']", { timeout: 8000 });
    }
    
    get selectreason() {
        return cy.xpath("//div[@class='block py-2 text-medium text-main px-4 mb-2 last:mb-0 cursor-pointer hover:bg-successLight hover:font-bold w-full font-normal']", { timeout: 5000 });
    }
    
    get test() {
        return cy.xpath("//input[@id='test1']", { timeout: 8000 });
    }
    
    get cancelicon() {
        return cy.get('[data-testid="xIcon"]', { timeout: 8000 });
    }
    
    get Reportincorrectdata() {
        return cy.xpath("//button[normalize-space()='Report incorrect data']", { timeout: 8000 });
    }
    
    get arrival() {
        return cy.xpath("//input[@id='arrival']", { timeout: 8000 });
    }
    
    get departure() {
        return cy.xpath("//input[@id='departure']", { timeout: 8000 });
    }
    
    get bookingsdropdown() {
        return cy.get('[data-testid="dropdownButton"]', { timeout: 8000 });
    }
    
    get arrivaldate() {
        return cy.get(':nth-child(3) > .react-datepicker > .react-datepicker__month-container > .react-datepicker__month > :nth-child(1) > .react-datepicker__day--001', { timeout: 8000 });
    }
    
    get Guestname() {
        return cy.xpath("//input[@id='primary_guest_name']", { timeout: 8000 });
    }
    
    get Correctconfirmationnumber() {
        return cy.xpath("//input[@id='confirmation_num']", { timeout: 8000 });
    }
    
    get Correctsupplier() {
        return cy.xpath("//input[@id='supplier']", { timeout: 8000 });
    }
    
    get Correctdmc() {
        return cy.get('[data-testid="dropdownButton"]', { timeout: 8000 });
    }
    
    get homebooking() {
        return cy.xpath("//div[@id='option-5']", { timeout: 8000 });
    }
    
    get totalcommissionvalue() {
        return cy.xpath("//input[@id='total_commissionable_booking_usd']", { timeout: 8000 });
    }
    
    get totalcommissionrate() {
        return cy.xpath("//input[@id='est_commission']", { timeout: 8000 });
    }
    
    get Note() {
        return cy.xpath("//textarea[@id='note']", { timeout: 8000 });
    }
    
    get Reportduplicate() {
        return cy.xpath("//button[normalize-space()='Report duplicate']", { timeout: 8000 });
    }
    
    get Notereportduplicate() {
        return cy.xpath("//textarea[@placeholder='Any additional comments/details?']", { timeout: 8000 });
    }
    
    get yesduplicatebutton() {
        return cy.get('[data-testid="submit-button"]', { timeout: 8000 });
    }
    
    get contactfora() {
        return cy.xpath("//button[normalize-space()='Contact Fora']", { timeout: 8000 });
    }
    
    get canceliconduplicate() {
        return cy.get('[class="h-6 w-6 fill-main cursor-pointer"]', { timeout: 8000 });
    }
    
    get Otherissuetext() {
        return cy.xpath("//textarea[@placeholder='Any additional context about this booking...']", { timeout: 8000 });
    }
    
    get Yourcommissiontooltip() {
        return cy.get('[data-tooltip-id="yourCommissionTooltip"]', { timeout: 8000 });
    }
    
    get Commissionablevaluetooltip() {
        return cy.get('[data-tooltip-id="commissionableValue"]', { timeout: 8000 });
    }
    
    get Totalcommissiontooltip() {
        return cy.get('[data-tooltip-id="commissionableValue"]', { timeout: 8000 });
    }
    
    get month() {
        return cy.get('[data-testid="May"]', { timeout: 8000 });
    }
    
    get month1() {
        return cy.get('[class="text-left dropdown-button react-datepicker__current-month py-[3px] px-2 border-lightGreyBorder"]', { timeout: 8000 });
    }
    
    get commissionfrom() {
        return cy.get('.mb-3 > .flex > :nth-child(1) > #min', { timeout: 8000 });
    }
    
    get Tripdate() {
        return cy.contains('Trip dates', { timeout: 8000 });
    }
    
    get Allpast() {
        return cy.get('#allPast', { timeout: 8000 });
    }
    
    get Allfuture() {
        return cy.get('#allFuture', { timeout: 8000 });
    }
    
    get Next10days() {
        return cy.xpath("//div[@id='next10Days']", { timeout: 8000 });
    }
    
    get next30days() {
        return cy.xpath("//div[@id='next30Days']", { timeout: 8000 });
    }
    
    get Past10days() {
        return cy.xpath("//div[@id='past10Days']", { timeout: 8000 });
    }
    
    get Past30days() {
        return cy.xpath("//div[normalize-space()='Past 30 days']", { timeout: 8000 });
    }
    
    get tripdateresult() {
        return cy.get('[data-testid="trip_dates"]', { timeout: 8000 });
    }
    
    get noresultfound() {
        return cy.xpath("//p[normalize-space()='No results found.']", { timeout: 8000 });
    }
    
    get text() {
        return cy.get('[class="font-bold text-smallLH20 mb-1 flex items-center"]', { timeout: 8000 });
    }
    

}
export default new Bookings