class Partner {
    get Partner() {
        return cy.get('[href="/partners/hotels?view_mode=list&supplierType=hotels"]', {timeout: 5000});
    }

    get Preferredpartnertab() {
        return cy.xpath("//button[normalize-space()='Preferred Partners']", {timeout: 5000});
    }

    get Preferedpartner() {
        return cy.contains('Preferred partners', {timeout: 5000});
    }
  
    get Preferedpartnertag() {
        return cy.xpath("(//span[contains(text(),'Preferred Partner')])[1]", {timeout: 5000});
    }

    get Preferedpartnerheader() {
        return cy.xpath("//span[normalize-space()='Preferred partners']", {timeout: 5000});
    }

    get Beta() {
        return cy.xpath("//span[normalize-space()='Beta']", {timeout: 5000});
    }

    get Banner() {
        return cy.get('[class="flex gap-3 justify-between"]', {timeout: 5000});
    }

    get Searchbar() {
        return cy.xpath("//input[@placeholder='Search destinations']", {timeout: 5000});
    }
    get PreferredpartnerSearchbar() {
        return cy.xpath("//input[@placeholder='Search']", {timeout: 5000});
    }
    get PackageSearchbar() {
        return cy.xpath("//input[@placeholder='Search packages']", {timeout: 5000});
    }
    get DmcsSearchbar() {
        return cy.get('[id="search"]', {timeout: 5000});
    }
    get CrusiesSearchbar() {
        return cy.xpath("//input[@placeholder='Search cruises']", {timeout: 5000});
    }
    get FlightsSearchbar() {
        return cy.xpath("//input[@placeholder='Search flights']", {timeout: 5000});
    }
    get HomesandvillasSearchbar() {
        return cy.xpath("//input[@placeholder='Search homes & villas']", {timeout: 5000});
    }
    get ToursandactivitySearchbar() {
        return cy.xpath("//input[@placeholder='Search tours & activities']", {timeout: 5000});
    }
    get InsuranceSearchbar() {
        return cy.xpath("//input[@placeholder='Search insurance']", {timeout: 5000});
    }
    get TransportationSearchbar() {
        return cy.xpath("//input[@placeholder='Search transportation']", {timeout: 5000});
    }
    get Searchbutton() {
        return cy.xpath("//button[@type='submit']", {timeout: 5000});
    }

    get HotelsandPerks() {
        return cy.contains("Hotels with perks", {timeout: 5000});
    }

    get Needtoknow() {
        return cy.xpath("//p[normalize-space()='Need to know']", {timeout: 5000});
    }

    get Needtoknowtext() {
        return cy.contains("Fora’s Preferred Partner programs are exclusive, often invitation-only memberships with leading hotel collections around the world. These special partnerships unlock perks, benefits and VIP treatment for your client’s stay at hundreds of hotels and resorts worldwide.", {timeout: 5000});
    }

    get Resource() {
        return cy.xpath("//p[normalize-space()='Resources']", {timeout: 5000});
    }

    get SDdeepdive() {
        return cy.xpath("//p[normalize-space()='Supplier Database Deepdive']", {timeout: 5000});
    }

    get Researchbestpractice() {
        return cy.xpath("//p[normalize-space()='Research Best Practices']", {timeout: 5000});
    }

    get Brandmatchmaking() {
        return cy.xpath("//p[normalize-space()='Brand Matchmaking']", {timeout: 5000});
    }

    get Recommended() {
        return cy.contains("Recommended", {timeout: 5000});
    }

    get Alphabetical() {
        return cy.contains('Alphabetically', {timeout: 5000});
    }

    get dmcsalphabeticalresult() {
        return cy.xpath("//span[normalize-space()='About Asia']", {timeout: 5000});
    }

    get dmcsrecommendedresult() {
        return cy.xpath("//span[normalize-space()='Namu Travel']", {timeout: 5000});
    }

    get Alphabeticalresult() {
        return cy.xpath("//p[normalize-space()='Accor - STEP']", {timeout: 5000});
    }

    get close1() {
        return cy.xpath("//button[normalize-space()='Close']", {timeout: 5000});
    }

    get Searchresult() {
        return cy.contains("Diamond Club By B Signature", {timeout: 5000});
    }

    /* Uncomment and adjust if needed
    get Reportanissue() {
        return cy.xpath('//div[contains(text(),"Report an issue")]', {timeout: 5000});
    }
    */

    get Diamondclubby() {
        return cy.xpath('//h1[normalize-space()="Diamond Club By B Signature"]', {timeout: 5000});
    }

    get image1() {
        return cy.get('[class="flex justify-center relative bg-white h-[300px] md:h-[528px]"]', {timeout: 5000});
    }

    get Partnerdetailtext() {
        return cy.xpath('//h2[normalize-space()="Partner Program Details"]', {timeout: 5000});
    }

    get Partnerdetailtext1() {
        return cy.xpath('//div[@id="main-container"]//main//div//div//div//div//div//div//p//p', {timeout: 5000});
    }

    get Partnerdetailtext2() {
        return cy.get('[class="flex items-start border-b border-lightGreyBorder"]', {timeout: 5000});
    }

    get Partnerdetailtext3() {
        return cy.get('[class="shrink-0 py-2"]', {timeout: 5000});
    }

    get Partnerdetailtext4() {
        return cy.get('[class="py-2 px-1 text-medium font-bold"]', {timeout: 5000});
    }

    get Partnerdetailtext5() {
        return cy.xpath('//p[normalize-space()="Perks"]', {timeout: 5000});
    }

    get Partnerdetailtext6() {
        return cy.get('[class="shrink-0 py-2"]', {timeout: 5000});
    }

    get Copybutton() {
        return cy.get('[class="text-tertiaryOld"]', {timeout: 5000});
    }

    get perksdetails() {
        return cy.get('[class="supplier-details-content"]', {timeout: 5000});
    }

    get Howtobook() {
        return cy.get('#howToBookSection > .items-start', {timeout: 5000});
    }

    get Howtobookdirectly() {
        return cy.get('.btn-primary-outline', {timeout: 5000});
    }

    get Reportanissueheader() {
        return cy.contains("Report an Issue", {timeout: 5000});
    }
    get Reportanissuetext() {
        return cy.contains("We're sorry to hear you're facing issues. Please let us know the details and we'll work to resolve it.", {timeout: 5000});
    }

    get Issuetypeheader() {
        return cy.contains("Issue type*", {timeout: 5000});
    }

    get Issuetopicdropdown() {
        return cy.get('[data-testid="Partners/Booking"]', {timeout: 5000});
    }

    get Issueseverityheader() {
        return cy.contains("Issue severity*", {timeout: 5000});
    }

    get Issueseveritydropdown() {
        return cy.get('[data-testid="Normal - I need a response quickly but this issue isn’t blocking anything"]', {timeout: 5000});
    }

    get Issueseveritydropdownvalue1() {
        return cy.get('[id="option-0"]', {timeout: 5000});
    }

    get Issueseveritydropdownvalue2() {
        return cy.contains('Urgent - This issue is blocking a booking or important task', {timeout: 5000});
    }

    get Issueseveritydropdownvalue3() {
        return cy.contains('Critical - This is an urgent client travel issue (unable to check into hotel, urgent supplier problem) and needs immediate attention', {timeout: 5000});
    }

    get Issuetypedropdown() {
        return cy.get('[data-testid="Select issue type"]', {timeout: 5000});
    }

    get Issuetopicheader() {
        return cy.contains("Issue topic*", {timeout: 5000});
    }

    get dropdownvalue1() {
        return cy.get('[id="option-0"]', {timeout: 5000});
    }

    get dropdownvalue2() {
        return cy.get('[id="option-1"]', {timeout: 5000});
    }

    get dropdownvalue3() {
        return cy.get('[id="option-2"]', {timeout: 5000});
    }

    get dropdownvalue4() {
        return cy.get('[id="option-3"]', {timeout: 5000});
    }

    get dropdownvalue5() {
        return cy.get('#option-4', {timeout: 5000});
    }
    get dropdownvalue6() {
        return cy.xpath("//div[normalize-space()='Training']", {timeout: 5000});
    }
    get dropdownvalue7() {
        return cy.xpath("//div[normalize-space()='General feedback/Other issue']", {timeout: 5000});
    }
    get trainingdropdown() {
        return cy.xpath("//div[@data-testid='Training']", {timeout: 5000});
    }
get Testpaymentdropdown()
{
    return cy.xpath("//div[normalize-space()='Test Payments']")
}
get Testpaymentdropdown1()
{
    return cy.xpath("//div[normalize-space()='Other Payment Related Issues']")
}
get Testpaymentdropdown2()
{
    return cy.xpath("//div[normalize-space()='Payment Not Received']")
}
get Testpaymentdropdown3()
{
    return cy.xpath("//div[normalize-space()='Test Missing Payment']")
}
  //  get dropdownvalue6() {
    //    return cy.contains('General feedback/Other issue', {timeout: 5000});
   // }

    get Describetheissue() {
        return cy.contains('Describe the issue*', {timeout: 5000});
    }

    get Describetheissuefield() {
        return cy.get('[placeholder="Please provide specific details about the issue. The more details you provide, the better we can address the problem and improve the experience."]', {timeout: 5000});
    }

    get close() {
        return cy.get('div.w-full > .btn-primary', {timeout: 5000});
    }

    get Report() {
        return cy.get('.btn-primary', {timeout: 5000});
    }

    get Cancel() {
        return cy.get('.action-button-bar > .justify-center', {timeout: 5000});
    }

    get Error1() {
        return cy.contains('Type is required', {timeout: 5000});
    }

    get Error2() {
        return cy.contains('Details are required', {timeout: 5000});
    }

    get rightmarks() {
        return cy.get('[class="text-success"]', {timeout: 5000});
    }

    get successtext() {
        return cy.contains('Thank you for reporting!', {timeout: 5000});
    }

    get successsubtext() {
        return cy.contains('Your feedback helps us improve our product', {timeout: 5000});
    }

    get Returntopartner() {
        return cy.xpath("//span[normalize-space()='Back to results']", {timeout: 5000});
    }

    get Noimagefound() {
        return cy.contains("Images not available", {timeout: 5000});
    }

    get Gotoprogramsite() {
        return cy.get('.btn-primary', {timeout: 5000});
    }

    get Hotel() {
        return cy.contains('Hotels', {timeout: 5000});
    }

    get hotelsearchbar() {
        return cy.get('[placeholder="Search for hotels and destinations"]', {timeout: 5000});
    }

    get Selecttraveldate() {
        return cy.xpath("//input[@placeholder='Add dates']", {timeout: 5000});
    }
    get Selecttraveldateinrates()
    {
        return cy.get('[placeholder="Select travel dates"]')
    }
get Nextmonth()
{
    return cy.xpath("//button[@aria-label='Next Month']")
}
get Previousmonth()
{
    return cy.xpath("//button[@aria-label='Previous Month']")
}
get FormDate()
{
return cy.xpath("//div[@aria-label='Choose Thursday, November 28th, 2024']")
}
get Checkin()
{
    return cy.xpath("//div[normalize-space()='Check in']")
}
get Checkindate()
{
    return cy.xpath("//div[normalize-space()='Thu, Nov 28, 2024']")
}
get Checkout()
{
    return cy.xpath("//div[normalize-space()='Check out']")
}
get Checkoutdate()
{
    return cy.xpath("//span[normalize-space()='Sat, Nov 30, 2024']")
}
get Nights()
{
    return cy.xpath("//span[normalize-space()='2 Nights']")
}
get Donebutton()
{
    return cy.xpath("//button[normalize-space()='Done']")
}
get Travelclear()
{
    return cy.xpath("//button[normalize-space()='Clear']")
}
get todate()

{
    return cy.xpath("//div[@aria-label='Choose Saturday, November 30th, 2024']")
}
    get Travellers() {
        return cy.get('[placeholder="2 travelers"]', {timeout: 5000});
    }
    get Travellersrates ()
    {
        return cy.xpath("//input[@placeholder='0 travelers, 1 room']")
    }

    get Rooms() {
        return cy.contains('1 room', {timeout: 5000});
    }

    get Hotelsearchbutton() {
        return cy.xpath('//button[normalize-space()="Search"]', {timeout: 5000});
    }

    get List() {
        return cy.xpath("//button[normalize-space()='Lists']", {timeout: 5000});
    }

    get Map() {
        return cy.get('.absolute > .inline-flex');
    }

    get Comingsoon() {
        return cy.xpath('//span[normalize-space()="Coming soon"]', {timeout: 5000});
    }

    get Preferedpartners() {
        return cy.contains('Preferred hotels', {timeout: 5000});
    }
    get Preferedpartnershotelcheckbox() {
        return cy.xpath("(//input[contains(@type,'checkbox')])[1]")
    }
    get Preferedpartnersearch() {
        return cy.xpath("(//input[@placeholder='Search'])[1]", {timeout: 5000});
    }

    get Brands() {
        return cy.contains('Brands', {timeout: 5000});
    }
get Hoteltype()
{
    return cy.get('[class="mb-1 text-smallLH24 font-bold"]')
}
    get Brandssearch() {
        return cy.xpath("(//input[@placeholder='Search'])[2]", {timeout: 5000});
    }

    get Partnerprogramfilter() {
        return cy.contains('Partner Program', {timeout: 5000});
    }

    get Allexclusivecheckbox() {
        return cy.xpath("(//input[contains(@type,'checkbox')])[2]", {timeout: 5000});
    }

    get Hotelclass() {
        return cy.xpath('//div[normalize-space()="Hotel Class"]', {timeout: 5000});
    }
get Unrated()
{
    return cy.xpath("//main//label[6]//input[1]")
}
    get Onestar() {
        return cy.xpath('//main//label[5]//input[1]', {timeout: 5000});
    }

    get onestarresult() {
        return cy.xpath("(//span[contains(@data-testid,'hotel-class')][normalize-space()='1'])[1]", {timeout: 5000});
    }
get One()
{
    return cy.contains("1")
}
    get Twostar() {
        return cy.xpath("//div[@id='__next']//label[4]//input[1]", {timeout: 5000});
    }

    get Twostarresult() {
        return cy.xpath("(//span[contains(@data-testid,'hotel-class')][normalize-space()='2'])[1]", {timeout: 5000});
    }

    get Threestar() {
        return cy.xpath("(//input[contains(@type,'checkbox')])[6]", {timeout: 5000});
    }

    get Threestarresult() {
        return cy.contains('3', {timeout: 5000});
    }

    get Fourstar() {
        return cy.xpath("(//input[contains(@type,'checkbox')])[5]", {timeout: 5000});
    }

    get Fourstarresult() {
        return cy.xpath('//div[normalize-space()="Hotel Class"]', {timeout: 5000});
    }

    get Fivestar() {
        return cy.xpath("(//input[contains(@type,'checkbox')])[4]", {timeout: 5000});
    }

    get Fivestarresult() {
        return cy.xpath("(//p[contains(text(),'5.0')])[1]", {timeout: 5000});
    }

    get dropdownfilter() {
        return cy.get('[data-testid="dropdownButton"]', {timeout: 5000});
    }

    get month() {
        return cy.contains('December', {timeout: 5000});
    }

    get month1() {
        return cy.contains('October', {timeout: 5000});
    }

    get year() {
        return cy.contains('2025', {timeout: 5000});
    }

    get year1() {
        return cy.contains('2023', {timeout: 5000});
    }

    get date() {
        return cy.get('.react-datepicker__day--025', {timeout: 5000});
    }

    get date1() {
        return cy.get('.react-datepicker__day--028', {timeout: 5000});
    }

    get date3() {
        return cy.get('[class="react-datepicker__day react-datepicker__day--015"]', {timeout: 5000});
    }

    get date4() {
        return cy.get('[class="react-datepicker__day react-datepicker__day--018"]', {timeout: 5000});
    }

    get Apply() {
        return cy.xpath('//button[normalize-space()="Apply"]', {timeout: 5000});
    }

    get Nooftraveller() {
        return cy.get('[placeholder="2 travelers"]', {timeout: 5000});
    }

    get Nooftraveller1() {
        return cy.xpath("//input[@placeholder='0 travelers, 1 room']", {timeout: 5000});
    }

    get Nooftravellertext() {
        return cy.contains('Number of Travelers', {timeout: 5000});
    }

    get adduser() {
        return cy.xpath('//div[normalize-space()="+"]', {timeout: 5000});
    }

    get removeuser() {
        return cy.xpath('//div[normalize-space()="-"]', {timeout: 5000});
    }

    get Updateuser() {
        return cy.contains('Update', {timeout: 5000});
    }

    get Searcherror() {
        return cy.xpath('//div[contains(text(),"Enter a destination or hotel")]', {timeout: 5000});
    }

    get result() {
        return cy.contains('Bill And Coo Hotels Mykonos', {timeout: 5000});
    }

    get bookedby() {
        return cy.xpath("//span[@data-testid='booked-by-advisors']", {timeout: 5000});
    }

    get Noratesfound() {
        return cy.xpath('//div[normalize-space()="No rates found"]', {timeout: 5000});
    }

    get Partnerslogo() {
        return cy.xpath('//img[@alt="Partner logo"]', {timeout: 5000});
    }

    get Viewbookinginstruction() {
        return cy.xpath('//div[normalize-space()="View booking instructions"]', {timeout: 5000});
    }

    get Viewrates() {
        return cy.xpath('//span[normalize-space()="View rates"]', {timeout: 5000});
    }

    get Persksmsg() {
        return cy.contains('This property offers perks.', {timeout: 5000});
    }

    get Perskslink() {
        return cy.xpath('//a[normalize-space()="View perks"]', {timeout: 5000});
    }

    get resultheader() {
        return cy.xpath('//h1[normalize-space()="Capri Palace Jumeirah"]', {timeout: 5000});
    }

    get Perks() {
        return cy.get('[class="inline-flex gap-1 py-2 lg:py-1 text-medium font-bold text-main"]', {timeout: 5000});
    }

    get searchicon() {
        return cy.get('[class="inline-flex w-16 h-16 items-center justify-center rounded-full bg-lightGreyBg"]', {timeout: 5000});
    }

    get noratesmsg() {
        return cy.contains('No rates found', {timeout: 5000});
    }

    get rateAddress() {
        return cy.get('[class="inline-block mr-0 md:mr-3"]', {timeout: 5000});
    }

    get Partnerprogram() {
        return cy.get('[class="text-small"]', {timeout: 5000});
    }

    get brand() {
        return cy.get('[class="inline-flex gap-1 items-center"]', {timeout: 5000});
    }

    get Partnerprogramicon() {
        return cy.get('[class="inline-flex gap-1 items-center"]', {timeout: 5000});
    }

    get noratesmsg1() {
        return cy.contains('Sometimes hotels are available with other channels. To book Jumeirah Passport to Luxury rates, view booking instructions below.', {timeout: 5000});
    }

    get Booksoutsideportal() {
        return cy.xpath("//h4[normalize-space()='Book Outside Portal']", {timeout: 5000});
    }

    get Perkstext() {
        return cy.get('[class="text-smallLH24 text-secondary"]', {timeout: 5000});
    }

    get Perkstext1() {
        return cy.get('[class="flex flex-col pt-[10px] gap-[10px]"]', {timeout: 5000});
    }

    get Perkstext2() {
        return cy.contains('Check perks on a specific property on ', {timeout: 5000});
    }

    get partnerlink() {
        return cy.get('.py-4 > .shadow-gray > .ql-editor > .flex > :nth-child(1) > :nth-child(3) > a', {timeout: 5000});
    }

    get Copyall() {
        return cy.xpath('//span[text()="Copy all"]', {timeout: 5000});
    }

    get Booksoutsideportaltext() {
        return cy.get('[class="text-smallLH24 text-secondary"]', {timeout: 5000});
    }

    get Booksoutsideportaltext1() {
        return cy.get('[class="pt-4"]', {timeout: 5000});
    }

    get Viewpropertydetailsbutton() {
        return cy.xpath('//span[normalize-space()="View property details"]', {timeout: 5000});
    }

    get Nextrate() {
        return cy.xpath('//body/div[@id="__next"]/div/div[@id="main-container"]/main/div/div/div/div/div/div/div/div/div/div/div/div[1]/span[2]//*[name()="svg"]', {timeout: 5000});
    }

    get regularrates() {
        return cy.xpath('//div[@id="main-container"]//main//div//div//div//div//div//div//div//div//div//div//div//div//div//span[contains(text(),"Regular Rates")]', {timeout: 5000});
    }

    get Tenestimed() {
        return cy.get('[class="inline-flex items-center rounded gap-1 p-1 text-small font-bold bg-lightGreenBg text-success"]', {timeout: 5000});
    }

    get Backtoresult() {
        return cy.xpath("//span[normalize-space()='Back to results']", {timeout: 5000});
    }

    get Cancelicon() {
        return cy.get('[class="form-control-icon--error-icon absolute inset-y-0 right-0 pr-3 flex items-center z-9"]', {timeout: 5000});
    }

    get Clear() {
        return cy.xpath('//button[normalize-space()="Clear"]', {timeout: 5000});
    }

    get numberofproperty() {
        return cy.get('[class="text-medium whitespace-nowrap"]', {timeout: 5000});
    }

    get propertyname() {
        return cy.contains('Prince De Galles, A Luxury Collection Hotel, Paris', {timeout: 5000});
    }

    get Nextimage() {
        return cy.xpath('//ul[@role="list"]//button[2]', {timeout: 5000});
    }

    get Previousimage() {
        return cy.xpath('//ul[@role="list"]//button[1]//*[name()="svg"]', {timeout: 5000});
    }

    get moreimage() {
        return cy.get('[class="overflow-hidden relative rounded-lg"]', {timeout: 5000});
    }
    get gridnextimage() {
        return cy.xpath('//div[@id="ReactSimpleImageViewer"]//span[3]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get gridnextimageno1() {
        return cy.contains('5', { timeout: 5000 });
    }
    
    get gridnextimageno2() {
        return cy.contains('/', { timeout: 5000 });
    }
    
    get gridnextimageno3() {
        return cy.contains('146', { timeout: 5000 });
    }
    
    get gridnextimageno4() {
        return cy.get('[class="fixed inset-x-0 bottom-[36px] left-[50%] text-white font-bold text-header"]', { timeout: 5000 });
    }
    
    get gridnextimageno5() {
        return cy.contains('/', { timeout: 5000 });
    }
    
    get gridnextimageno6() {
        return cy.contains('146', { timeout: 5000 });
    }
    
    get gridpreviousimage() {
        return cy.xpath('//div[@id="ReactSimpleImageViewer"]//span[2]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get gridclose() {
        return cy.xpath('//div[@id="ReactSimpleImageViewer"]//span[1]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get PropertyDetails() {
        return cy.contains('Property Details', { timeout: 5000 });
    }
    
    get supplierdescription() {
        return cy.get('[data-testid="SupplierDescription"]', { timeout: 5000 });
    }
    
    get Address() {
        return cy.get('[data-testid="PDAddress"]', { timeout: 5000 });
    }
    
    get Phonenumber() {
        return cy.get('[data-testid="PDPhoneNumber"]', { timeout: 5000 });
    }
    get Phonenumberlink()
    {
        return cy.get('[data-testid="PDPhoneNumberValue-0"] > .text-link')
    }
    
    get DetailsTraveller() {
        return cy.get('[placeholder="0 travelers"]', { timeout: 5000 });
    }
    
    get DetailsSearchbutton() {
        return cy.get('[class="shrink-0 w-full lg:w-auto lg:mt-1 btn-primary"]', { timeout: 5000 });
    }
    
    get regularratesvalue() {
        return cy.get('[class="cursor-pointer mb-2 bg-white border border-lightGreyBorder rounded p-4 flex lg:flex-col gap-1"]', { timeout: 5000 });
    }
    
    get Deposit() {
        return cy.get('[class="inline-block py-1 px-[10px] rounded-xl bg-white border border-main text-gray-800 text-extraSmall font-bold"]', { timeout: 5000 });
    }
    
    get Norefundable() {
        return cy.get('[class="inline-block py-1 px-[10px] rounded-xl text-extraSmall font-bold bg-primary text-main"]', { timeout: 5000 });
    }
    
    get Amount() {
        return cy.get('[class="text-medium font-bold text-secondary"]', { timeout: 5000 });
    }
    
    get AVeragepernight() {
        return cy.get('[class="text-extraSmall text-label"]', { timeout: 5000 });
    }
    
    get Overallprice() {
        return cy.get('[class="text-medium font-bold"]', { timeout: 5000 });
    }
    
    get totalincludingtax() {
        return cy.get('[class="text-extraSmall text-label"]', { timeout: 5000 });
    }
    
    get resultcount() {
        return cy.get('[class="ml-auto text-medium font-bold text-label"]', { timeout: 5000 });
    }
    
    get Regualrratetag() {
        return cy.get('.mb-1 > .inline-block', { timeout: 5000 });
    }
    
    get propertynameinsiderate() {
        return cy.xpath('//div[@id="containerRef1"]//div//div//span[contains(text(),"Prince De Galles, A Luxury Collection Hotel, Paris")]', { timeout: 5000 });
    }
    
    get scrolltobbok() {
        return cy.xpath('//button[normalize-space()="Scroll to Book"]', { timeout: 5000 });
    }
    
    get Bookroom() {
        return cy.xpath('//button[normalize-space()="Book Room"]', { timeout: 5000 });
    }
    
    get Selectclientlabel() {
        return cy.xpath('//span[@data-tooltip-id="clientSelectLabel"]', { timeout: 5000 });
    }
    
    get Selectclient() {
        return cy.xpath('//input[@placeholder="Select a client"]', { timeout: 5000 });
    }
    
    get client() {
        return cy.xpath('//label[1]', { timeout: 5000 });
    }
    
    get card() {
        return cy.get('.pb-6 > :nth-child(3) > .text-secondary', { timeout: 5000 });
    }
    
    get carderror() {
        return cy.xpath('//span[contains(text(),"Billing address is incomplete")]', { timeout: 5000 });
    }
    
    get Editcard() {
        return cy.xpath('//span[normalize-space()="Edit card"]', { timeout: 5000 });
    }
    
    get Cradsave() {
        return cy.get('.btn-primary', { timeout: 5000 });
    }
    
    get Completebooking() {
        return cy.get('.bg-black', { timeout: 5000 });
    }
    
    get downloadconfirmation() {
        return cy.contains('Download confirmation', { timeout: 5000 });
    }
    
    get Preferedpartnersearch1() {
        return cy.get(':nth-child(1) > :nth-child(1) > .relative > .text-secondary', { timeout: 5000 });
    }
    
    get scroll() {
        return cy.get('[class="flex flex-col gap-2 max-h-[392px] overflow-y-auto scroll-narrow scroll-narrow--onhover"]', { timeout: 5000 });
    }
    
    get virtuosocheckbox() {
        return cy.xpath('//label[normalize-space()="Virtuoso"]', { timeout: 5000 });
    }
    
    get Accorcheckbox() {
        return cy.xpath('//label[normalize-space()="Accor - STEP"]', { timeout: 5000 });
    }
    
    get Jumeirahcheckbox() {
        return cy.xpath('//label[normalize-space()="Jumeirah Passport to Luxury"]', { timeout: 5000 });
    }
    
    get Preferedcancel() {
        return cy.get('[class="border-l border-tertiaryOld ml-[9px] -mr-[10px] pl-1"]', { timeout: 5000 });
    }
    
    get Brandscroll() {
        return cy.get('[id="brands-scroll-container"]', { timeout: 5000 });
    }
    
    get Brandsearch() {
        return cy.xpath('//body//div[@id="__next"]//div[@id="main-container"]//div//div//div//div//div//div//div//div[2]//div[1]//div[2]//input[1]', { timeout: 5000 });
    }
    
    get Zazacheckbox() {
        return cy.xpath('//label[normalize-space()="Zaza"]', { timeout: 5000 });
    }
    
    get brandsymbol() {
        return cy.contains('Zaza', { timeout: 5000 });
    }
    
    get dropdown1() {
        return cy.get('[class="dropdown-button react-datepicker__current-month py-[3px] px-2 border-lightGreyBorder"]', { timeout: 5000 });
    }
    
    get clearresult() {
        return cy.contains('Chapter Roma', { timeout: 5000 });
    }
    
    get Nohotelfound() {
        return cy.contains('0 results in Portal', { timeout: 5000 });
    }
    
    get Nohotelfound1() {
        return cy.contains("We couldn't find any properties that matched your search. Try again or see instructions below.", { timeout: 5000 });
    }
    
    get Nohotelfound2() {
        return cy.contains("Can't find what your looking for?", { timeout: 5000 });
    }
    get Nohotelfound3() {
        return cy.contains("When should I book directly with a hotel or with a trusted parter?", { timeout: 5000 });
    }
    get Nohotelfound4() {
        return cy.contains("Can't find what your looking for?", { timeout: 5000 });
    }
    get Allexclusivetag() {
        return cy.xpath("(//span[contains(text(),'All Inclusive')])[1]", { timeout: 5000 });
    }
    
    get Oneone() {
        return cy.xpath("//label[normalize-space()='A by Adina']", { timeout: 5000 });
    }
    
    get Brandcancel() {
        return cy.get('[class="border-l border-tertiary ml-[9px] -mr-[10px] pl-1"]', { timeout: 5000 });
    }
    
    get Hotelalphabeticalresult() {
        return cy.xpath("//span[normalize-space()='(Opening 2024) Rosewood Schloss Fuschl']", { timeout: 10000 });
    }
    
    get Hotelrecomenddedresult() {
        return cy.contains('Chapter Roma', { timeout: 10000 });
    }
    
    get Packages() {
        return cy.xpath("//a[@aria-label='Packages']", { timeout: 10000 });
    }
    
    get TotalPackage() {
        return cy.xpath("//span[@class='text-medium whitespace-nowrap']", { timeout: 5000 });
    }
    
    get TotalPackage1() {
        return cy.contains('results', { timeout: 5000 });
    }
    
    get allexlusivetext() {
        return cy.xpath('//div[@id="main-container"]//div[3]//div[1]', { timeout: 5000 });
    }
    
    get Howtobookbeyond() {
        return cy.xpath('//p[normalize-space()="How to book beyond hotels"]', { timeout: 5000 });
    }
    
    get ClubMedSupplier() {
        return cy.xpath('//p[normalize-space()="Club Med Supplier Training"]', { timeout: 5000 });
    }
    
    get ExploraSupplier() {
        return cy.xpath('//p[normalize-space()="Explora Supplier Training"]', { timeout: 5000 });
    }
    
    get Noexclusivemsg() {
        return cy.xpath("//h3[normalize-space()='No Packages Found']", { timeout: 5000 });
    }
    
    get Noexclusivemsg1() {
        return cy.xpath("//p[contains(text(),'We couldn')]", { timeout: 5000 });
    }
   get Noexclusiveicon()
    {
        return cy.get('[class="mb-2 text-secondaryDark"]')
    }
    
    get Allexclusivename() {
        return cy.xpath("//span[normalize-space()='VAX']", { timeout: 5000 });
    }
    
    get Pckagealphabeticalresult() {
        return cy.xpath("//span[normalize-space()='Delta Vacations']", { timeout: 5000 });
    }
    
    get reportissueflag() {
        return cy.xpath('//div[contains(text(),"Report an issue")]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get Place() {
        return cy.xpath('//p[normalize-space()="Canada"]', { timeout: 5000 });
    }
    
    get About() {
        return cy.xpath('//h2[normalize-space()="About"]', { timeout: 5000 });
    }
    
    get Destinationsymbol() {
        return cy.xpath('//*[name()="path" and contains(@d,"M208,104c0")]', { timeout: 5000 });
    }
    
    get AllexluciveDestination() {
        return cy.xpath('//body/div[@id="__next"]/div/div[@id="main-container"]/main/div/div/div/div/div/div/div/div[1]/div[1]/span[1]', { timeout: 5000 });
    }
    
    get Regularratesallexlucive() {
        return cy.xpath('//span[normalize-space()="Regular Rates"]', { timeout: 5000 });
    }
    
    get Regularratesallexlucivesymbol() {
        return cy.xpath('//body/div[@id="__next"]/div/div[@id="main-container"]/main/div/div/div/div/div/div/div/div/div[2]/div[1]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get Allexlucivelink() {
        return cy.xpath("//a[normalize-space()='https://www.vaxvacationaccess.com/']", { timeout: 5000 });
    }
    
    get notes() {
        return cy.xpath('//h2[normalize-space()="Notes"]', { timeout: 5000 });
    }
    
    get notestext() {
        return cy.get('[class="mt-4 text-medium static-content"]', { timeout: 5000 });
    }
    
    get cruisesreviewlink() {
        return cy.xpath("//span[@role='link']", { timeout: 5000 });
    }
    
    get reviewsbyfora() {
        return cy.xpath("//h2[normalize-space()='Reviews by Fora Clients']", { timeout: 5000 });
    }
    
    get partnerprograms() {
        return cy.xpath('//h2[normalize-space()="Partner Programs"]', { timeout: 5000 });
    }
    
    get partnerprogramstext() {
        return cy.get('[class="text-secondary mt-4"]', { timeout: 5000 });
    }
    
    get Afflication() {
        return cy.contains('Affiliations', { timeout: 5000 });
    }
    
    get regularratedetailspage() {
        return cy.xpath('//button[normalize-space()="Regular Rates"]', { timeout: 5000 });
    }
    
    get Packagerecommendedresult() {
        return cy.xpath("//span[normalize-space()='Delta Vacations']", { timeout: 5000 });
    }
    
    get Crusise() {
        return cy.xpath('//a[@href="/partners/cruises"]', { timeout: 5000 });
    }
    
    get Needtoknowtext1() {
        return cy.get('[class="text-smallLH24"]', { timeout: 5000 });
    }
    
    get SupplierTraining() {
        return cy.xpath('//p[normalize-space()="Virgin Voyages Supplier Training"]', { timeout: 5000 });
    }
    
    get Newcrusisefound() {
        return cy.xpath('//h3[normalize-space()="No Cruises Found"]', { timeout: 5000 });
    }
    
    get Newcrusisefound1() {
        return cy.get('[class="text-medium text-gray-500 text-center"]', { timeout: 5000 });
    }
    
    get PackagesPlace() {
        return cy.xpath("//div[@class='non-supplier-details-about']//span[contains(text(),'Bayside, Wisconsin, United States')]", { timeout: 5000 });
    }
    
    get Crusisename() {
        return cy.xpath("//span[normalize-space()='Princess Cruises']", { timeout: 8000 });
    }
    
    get Crusiseplace() {
        return cy.xpath("//span[normalize-space()='Global, United States']", { timeout: 5000 });
    }
    
    get bookedbytag() {
        return cy.xpath("//span[@data-testid='booked-by-advisors']", { timeout: 5000 });
    }
    
    get Afflicationimage() {
        return cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png"]', { timeout: 5000 });
    }
    
    get Afflicationimage1() {
        return cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png"]', { timeout: 5000 });
    }
    
    get Crusisenameindetails() {
        return cy.xpath('//h1[normalize-space()="Belmond Road to Mandalay"]', { timeout: 5000 });
    }
    
    get Crusiseplacedetails() {
        return cy.xpath('//p[normalize-space()="Myanmar"]', { timeout: 5000 });
    }
    
    get Crusisebrandflag() {
        return cy.xpath("//body/div[@id='__next']/div/div[@id='main-container']/main/div/div/div/div/div/span[1]//*[name()='svg']", { timeout: 5000 });
    }
    
    get Crusisebrandname() {
        return cy.xpath('//div[@id="main-container"]//main//div//div//div//div//div//span//span[contains(text(),"Belmond")]', { timeout: 5000 });
    }
    
    get cruiseslink() {
        return cy.xpath("//a[contains(text(),'https://www.princess.com/ships-and-experience/ship')]", { timeout: 5000 });
    }
    
    get Dmcs() {
        return cy.xpath('//a[@href="/partners/dmcs"]', { timeout: 5000 });
    }
    
    get cruisesalphabeticalresult() {
        return cy.xpath("//span[normalize-space()='Alila Purnama (Ship)']", { timeout: 5000 });
    }
    
    get cruisesrecommendedresult() {
        return cy.contains("Royal Caribbean", { timeout: 5000 });
    }
    
    get Dmcsname() {
        return cy.xpath('//span[normalize-space()="Imago Artis Travel"]', { timeout: 5000 });
    }
    
    get IntroductiontoDmcs() {
        return cy.xpath('//p[normalize-space()="Introduction to DMCs"]', { timeout: 5000 });
    }
    
    get Experiencetomorocco() {
        return cy.xpath('//p[normalize-space()="Experience Morocco Supplier Training"]', { timeout: 5000 });
    }
    
    get Dmcsnameheader() {
        return cy.xpath('//h1[normalize-space()="Imago Artis Travel"]', { timeout: 5000 });
    }
    
    get Dmcsnamecountry() {
        return cy.xpath('//p[normalize-space()="Europe, Italy"]', { timeout: 5000 });
    }
    
    get Dmcslink() {
        return cy.xpath('//a[normalize-space()="https://www.iatravel.com/"]', { timeout: 5000 });
    }
    
    get Dmcslocationicon() {
        return cy.xpath("//body/div[@id='__next']/div/div[@id='main-container']/main/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]//*[name()='svg']", { timeout: 5000 });
    }
    
    get Dmcsregularratesicon() {
        return cy.xpath('//body/div[@id="__next"]/div/div[@id="main-container"]/main/div/div/div/div/div/div/div/div/div[2]/div[1]//*[name()="svg"]', { timeout: 5000 });
    }
    
    get Forareservedtag() {
        return cy.get('[class="inline-flex items-center p-[6px] rounded text-[10px] leading-none bg-purple-500 text-white uppercase"]', { timeout: 5000 });
    }
    get HotelForareservedtag()
    {
        return cy.xpath("(//span[contains(text(),'Fora Reserve')])[1]")
    }
    get Imagenotfound() {
        return cy.contains('Images not available', { timeout: 5000 });
    }
    
    get Cradhighlightedinpurple() {
        return cy.get('[class="block rounded border bg-white border-purple-600 hover:bg-lightPurpleBg"]', { timeout: 5000 });
    }
    
    get Viewonmaplink() {
        return cy.xpath('//a[normalize-space()="View on map"]', { timeout: 5000 });
    }
    
    get Nextratevirtuose() {
        return cy.get('[class="border-t-4 border-transparent bg-white flex-none px-4 py-2 bg-stone-50 shadow flex-col justify-center items-center gap-1 inline-flex w-full max-w-[213px] cursor-pointer"]', { timeout: 5000 });
    }
    
    get Virtuosoratetext1() {
        return cy.contains('Instructions to book ', { timeout: 5000 });
    }
    
    get Homesandvillas() {
        return cy.xpath("//a[@aria-label='Homes & Villas']", { timeout: 5000 });
    }
    
    get Homesandvillasheader() {
        return cy.contains('Homes & Villas', { timeout: 5000 });
    }
    
    get HVNsuppliertraining() {
        return cy.xpath('//p[normalize-space()="HVN Supplier Training"]', { timeout: 5000 });
    }
    
    get Homesandvillaproperties() {
        return cy.xpath("//span[@class='text-medium whitespace-nowrap']", { timeout: 5000 });
    }
    
    get Homesandvillapropertiesresult() {
        return cy.contains("1", { timeout: 5000 });
    }
    
    get Homesnvillasearchresult() {
        return cy.xpath('//span[normalize-space()="ETRA"]', { timeout: 5000 });
    }
    
    get Homesnvillaaffliation() {
        return cy.xpath('//button[normalize-space()="Dominique Debay"]', { timeout: 5000 });
    }
    
    get ETRA() {
        return cy.xpath("//h1[normalize-space()='ETRA']", { timeout: 5000 });
    }
    
    get ETRADestination() {
        return cy.get('[class="text-staticMobileTitle text-secondaryDark"]', { timeout: 5000 });
    }
    
    get HnVDestinationsymbol() {
        return cy.get('[class="shrink-0 text-secondary"]', { timeout: 5000 });
    }
    
    get ETRArate() {
        return cy.contains('Dominique Debay, Regular Rates', { timeout: 5000 });
    }
    
    get ETRAlink() {
        return cy.xpath('//a[normalize-space()="https://www.dominiquedebayprivateretreats.com/etra"]', { timeout: 5000 });
    }
    
    get Homesnvillaalphabeticalresult() {
        return cy.xpath("//span[normalize-space()='Abercrombie & Kent Villas']", { timeout: 5000 });
    }
    
    get Toursandactivityalphabeticalresult() {
        return cy.xpath("//span[normalize-space()='Abercrombie & Kent']", { timeout: 5000 });
    }
    
    get Homesnvillarecommandedresult() {
        return cy.contains('Le Manoir de Lorient', { timeout: 5000 });
    }
    
    get Toursandactivities() {
        return cy.xpath("//a[@aria-label='Tours & Activities']", { timeout: 5000 });
    }
    
    get Toursandactivitiesheader() {
        return cy.contains("Tours & Activities", { timeout: 5000 });
    }
    
  
        get SKIUSASupplier() {
            return cy.xpath("//p[normalize-space()='Ski USA Supplier Training']", { timeout: 5000 });
        }
        get ProjectExpedition() {
            return cy.xpath("//p[normalize-space()='Project Expedition Supplier Training']", { timeout: 5000 });
        }
        get Toursandactivitiescount() {
            return cy.xpath("//span[@class='text-medium whitespace-nowrap']", { timeout: 5000 });
        }
        get Toursandactivitiesresultcount() {
            return cy.contains("1", { timeout: 5000 });
        }
        get Toursandactivitiessearchresult() {
            return cy.contains("Andean Explorer, A Belmond Train, Peru", { timeout: 5000 });
        }
        get Toursandactivitiesdetailspage() {
            return cy.xpath("//h1[normalize-space()='Andean Explorer, A Belmond Train, Peru']", { timeout: 5000 });
        }
        get Toursandactivitiessearchplace() {
            return cy.contains("Arequipa, Peru", { timeout: 5000 });
        }
        get Toursandactivitiesbrand() {
            return cy.xpath("//div[5]//div[1]//div[1]//div[1]//div[2]//div[1]//*[name()='svg']", { timeout: 5000 });
        }
        get Issuetypedropdown1() {
            return cy.contains("General feedback", { timeout: 5000 });
        }
        get Issuetypedropdown2() {
            return cy.contains("Net rates", { timeout: 5000 });
        }
        get Issuetypedropdown3() {
            return cy.contains("Payout", { timeout: 5000 });
        }
        get Issuetypedropdown4() {
            return cy.contains("Trip planning fees", { timeout: 5000 });
        }
        get Issuetypedropdown5() {
            return cy.get('[class="block py-2 text-medium text-main px-4 mb-2 last:mb-0 cursor-pointer hover:bg-successLight hover:font-bold font-normal"]', { timeout: 5000 });
        }
        get Marketingissuetypedropdown1() {
            return cy.contains("Broken link", { timeout: 5000 });
        }
        get Marketingissuetypedropdown2() {
            return cy.contains("General feedback", { timeout: 5000 });
        }
        get Marketingissuetypedropdown3() {
            return cy.contains("Lost review", { timeout: 5000 });
        }
        get Marketingissuetypedropdown4() {
            return cy.contains("Mailchimp troubleshooting", { timeout: 5000 });
        }
        get Marketingissuetypedropdown5() {
            return cy.contains("Missing/wrong profile badge", { timeout: 5000 });
        }
        get Marketingissuetypedropdown6() {
            return cy.contains("Shareable asset issue", { timeout: 5000 });
        }
        get Marketingissuetypedropdown7() {
            return cy.get('[class="block py-2 text-medium text-main px-4 mb-2 last:mb-0 cursor-pointer hover:bg-successLight hover:font-bold font-normal"]', { timeout: 5000 });
        }
        get Partnerissuetypedropdown1() {
            return cy.contains("Can't find partner", { timeout: 5000 });
        }
        get Partnerissuetypedropdown2() {
            return cy.contains("General feedback", { timeout: 5000 });
        }
        get Partnerissuetypedropdown3() {
            return cy.contains("Partner info problem", { timeout: 5000 });
        }
        get Partnerissuetypedropdown4() {
            return cy.contains("Rate issue", { timeout: 5000 });
        }
        get Partnerissuetypedropdown5() {
            return cy.contains("Received error message", { timeout: 5000 });
        }
        get Partnerissuetypedropdown6() {
            return cy.get('[class="block py-2 text-medium text-main px-4 mb-2 last:mb-0 cursor-pointer hover:bg-successLight hover:font-bold font-normal"]', { timeout: 5000 });
        }
        get Trainerissuetypedropdown1() {
            return cy.contains("Certification issue", { timeout: 5000 });
        }
        get Trainerissuetypedropdown2() {
            return cy.contains("General feedback", { timeout: 5000 });
        }
        get Trainerissuetypedropdown3() {
            return cy.contains("Inactive link", { timeout: 5000 });
        }
        get Trainerissuetypedropdown4() {
            return cy.contains("Incorrect/outdated information", { timeout: 5000 });
        }
        get Trainerissuetypedropdown5() {
            return cy.contains("Missing content", { timeout: 5000 });
        }
        get Trainerissuetypedropdown6() {
            return cy.contains("Misspelling", { timeout: 5000 });
        }
        get Trainerissuetypedropdown7() {
            return cy.contains("Video won't load", { timeout: 5000 });
        }
        get Trainerissuetypedropdown8() {
            return cy.get('[class="block py-2 text-medium text-main px-4 mb-2 last:mb-0 cursor-pointer hover:bg-successLight hover:font-bold font-normal"]', { timeout: 5000 });
        }
        get Bookinportal() {
            return cy.contains('Book In Portal', { timeout: 5000 });
        }
        get Bookinportalinfobanner()
        {
            return cy.xpath("//div[contains(@data-testid,'banner-infoalert')]")
        }
        get Bookinportaltext() {
            return cy.contains('No rates found for these dates and number of travelers', { timeout: 5000 });
        }
        get Dmcsimage() {
            return cy.get('.overflow-hidden > .rounded-lg', { timeout: 5000 });
        }
        get Dmcsnextimage() {
            return cy.xpath("//body/div/div/span[2]//*[name()='svg']", { timeout: 5000 });
        }
        get Dmcimageclose() {
            return cy.xpath("//body/div[3]/div[1]/div[1]//*[name()='svg']", { timeout: 5000 });
        }
        get Dmcscount() {
            return cy.xpath("//span[@class='text-medium whitespace-nowrap']", { timeout: 5000 });
        }
        get Dmcscount1() {
            return cy.contains("results", { timeout: 5000 });
        }
        get Reportanissue() {
            return cy.xpath("//button[normalize-space()='Report Issue']", { timeout: 5000 });
        }
        get Flight() {
            return cy.xpath("//a[@aria-label='Flights']", { timeout: 5000 });
        }
        get flightname() {
            return cy.contains("Air Transat", { timeout: 5000 });
        }
        get Viewonmap() {
            return cy.xpath("//button[normalize-space()='View on Google Maps']", { timeout: 5000 });
        }
        get Flightcountry() {
            return cy.xpath("//body/div[@id='__next']/div/div[@id='main-container']/main/div/div/div/div/div/div/div/div/div/span[1]", { timeout: 5000 });
        }
        get flightabout() {
            return cy.xpath("//h2[normalize-space()='About']", { timeout: 5000 });
        }
        get Flightlink() {
            return cy.xpath("//a[contains(text(),'https://www.transatagentdirect.com/Pages/Login.asp')]", { timeout: 5000 });
        }
        get flightnote() {
            return cy.xpath("//h2[normalize-space()='Notes']", { timeout: 5000 });
        }
        get notetext() {
            return cy.xpath("//p[contains(text(),'When making bookings over the phone be sure to men')]", { timeout: 5000 });
        }
        get Insurance() {
            return cy.xpath("//a[@aria-label='Insurance']", { timeout: 5000 });
        }
        get insuranceneedtoknow() {
            return cy.xpath("//p[normalize-space()='Need to know']", { timeout: 5000 });
        }
        get insuranceneedtoknowlink1() {
            return cy.xpath("//p[normalize-space()='Faye Supplier Training']", { timeout: 5000 });
        }
        get insuranceneedtoknowlink2() {
            return cy.get('[href="https://archinsurancesolutions.com/retailer/training/video/ForaTravel"] > .w-full', { timeout: 5000 });
        }
        get insuranceneedtoknowlink3() {
            return cy.get('[href="https://docs.google.com/presentation/d/1UDz19lInGO-xu2wE_hXKgge198QMfBk2vk-NS90zr_M/edit#slide=id.g1bd56c25707_0_97"] > .w-full', { timeout: 5000 });
        }
        get Insuranceresult() {
            return cy.xpath("//span[normalize-space()='Faye Insurance']", { timeout: 5000 });
        }
        get Insurancecountry() {
            return cy.xpath("//h1[normalize-space()='Faye Insurance']", { timeout: 5000 });
        }
        get Insuraceimage() {
            return cy.get('.col-span-3 > .rounded-lg', { timeout: 5000 });
        }
        get Insuraceabout() {
            return cy.xpath("//h2[normalize-space()='About']", { timeout: 5000 });
        }
        get Insurancecountryy() {
            return cy.xpath("//div[@class='non-supplier-details-about']//span[contains(text(),'United States')]", { timeout: 5000 });
        }
        get notessection() {
            return cy.get('[class="visible bg-white border border-lightGreyBorder rounded py-4 px-8"]', { timeout: 5000 });
        }
        get InsuranceAlphabeticalresult() {
            return cy.contains("Arch RoamRight", { timeout: 5000 });
        }
        get Transportation() {
            return cy.xpath("//a[@aria-label='Transportation']", { timeout: 5000 });
        }
        get Transportationcount() {
            return cy.get('[class="text-medium whitespace-nowrap"]', { timeout: 5000 });
        }
        get Rolzo() {
            return cy.contains("Rolzo", { timeout: 5000 });
        }
        get Rolzoname() {
            return cy.xpath("//span[normalize-space()='Rolzo']", { timeout: 5000 });
        }
        get Transportationhowtobook() {
            return cy.xpath("//a[@class='flex items-center']//p[@class='w-full mr-1'][normalize-space()='How to book beyond hotels']", { timeout: 5000 });
        }
        get Rolzosuppliertraining() {
            return cy.xpath("//a[@class='flex items-center']//p[@class='w-full mr-1'][normalize-space()='Rolzo Supplier Training']", { timeout: 5000 });
        }
        get Transportationcountryname() {
            return cy.xpath("//h1[normalize-space()='Rolzo']", { timeout: 5000 });
        }
        get Rolzolink() {
            return cy.xpath("//a[contains(text(),'https://rolzo.com/')]", { timeout: 5000 });
        }
        get Transportationalphabeticalresult() {
            return cy.contains("AutoEurope", { timeout: 5000 });
        }
        get paymentdropdown1()
        {
            return cy.xpath("//div[normalize-space()='Incorrect Amount']")
        }
        get paymentdropdown2()
        {
            return cy.xpath("//div[normalize-space()='Other Payment Related Issues']")
        }
        get paymentdropdown3()
        {
            return cy.xpath("//div[normalize-space()='Payment Not Received']")
        }
        get Defaultcard()
        {
            return cy.get('[class="cursor-pointer flex flex-col p-2 gap-2 rounded-sm border border-lightGreyBorder shadow-[0_2px_10px_0_rgba(181,181,181,0.25)] hover:border-main focus:bg-lightGreyBg focus:border-main focus:shadow-[0_2px_10px_0_rgba(181,181,181,0.25),0_0_0_1px_#000]"]')
        }
get myfavorites()
{
    return cy.xpath("//span[normalize-space()='My favorites']")
}
get Zeroproperties()
{
    return cy.xpath("//div[normalize-space()='0 properties']")
}
get NewCard()
{
    return cy.get('[class="shrink-0 h-[296px] md:h-[178px] w-full flex items-center justify-center rounded bg-whisper text-secondaryDark"]')
}
get Newlist()
{
    return cy.xpath("//span[normalize-space()='New list']")
}
get Addlist()
{
    return cy.xpath("//div[contains(text(),'Add a list')]")
}
get Listname()
{
    return cy.xpath("//div[@data-headlessui-state='open']//div//div[contains(text(),'List name')]")
}
get Listfield()
{
    return cy.xpath("//input[@data-testid='add-favorite-list-on-page']")
}
get Cancelbutton()
{
    return cy.xpath("//div[@data-headlessui-state='open']//div//div//button[@type='button'][normalize-space()='Cancel']")
}
get Addlistbutton()
{
    return cy.xpath("//button[normalize-space()='Add list']")
}
get Errormsg()
{
    return cy.contains("Something went wrong")
}
get Errormsg1()
{
    return cy.contains("This field may not be blank.")
}
get Newfvrtcard()
{
    return cy.xpath("(//a[@data-testid='my-lists-item-link'])[2]")
}
get Searchcancel()
{
    return cy.get('[class="h-5 w-5 text-gray-500 cursor-pointer"]')
}
get Likebutton()
{
    return cy.get('[class="justify-center flex items-center disabled:cursor-default focus-visible:outline-selected focus-visible:outline focus-visible:outline-1 shadow-md shadow-black/10 border-solid border-[1px] border-lightGreyBorder text-main bg-white/80 hover:shadow-black/20 hover:bg-white disabled:text-disabled disabled:hover:shadow-black/10 h-8 min-w-8 rounded-full"]')
}
get Mylist()
{
    return cy.xpath("//div[contains(text(),'My Lists')]")
}
get Listcount()
{
    return cy.get('[class="text-medium"]')
}
get Newlistinsidelist()
{
    return cy.xpath("//span[normalize-space()='New list']")
}
get Newlistinsidelistcard()
{
    return cy.get('[class="shrink-0 h-[296px] md:h-[178px] w-full flex items-center justify-center rounded bg-whisper text-secondaryDark"]')
}
get Mylistcancel()
{
    return cy.xpath("//button[normalize-space()='Cancel']")
}
get Mylistsave()
{
    return cy.xpath("//button[normalize-space()='Save']")
}
get Listfield1()
{
    return cy.xpath("//form[@data-testid='create-favorite-list-in-modal-form']//input[@type='text']")
}
get Selectednumber()
{
    return cy.contains(' (2 selected)')
}
get Likeicon()
{
    return cy.get('[class="favorite-like-icon text-red-600"]')
}
get card()
{
    return cy.get('#favorites-list-scroll-container > .grid > :nth-child(3)')
     
}
get card1()
{
    return cy.get('#favorites-list-scroll-container > .grid > :nth-child(2)')
     
}
get Clickcard()
{
    return cy.xpath("(//img[@config='[object Object]'])[1]")
}
get Endofresult()
{
    return cy.xpath("//p[normalize-space()='End of results']")
}
get CopyIATAbutton()
{
    return cy.get('[data-tooltip-id="_copy-iata"]')
}
get ExpediaTaap()
{
    return cy.contains("Complete your booking through Expedia TAAP")
}
get ExpediaTaaplogo()
{
    return cy.xpath("//img[@alt='expedia-taap-logo']")
}
get Actionbutton()
{
    return cy.get('[data-testid="dropdownButton"]')
}
get Deletebutton()
{
    return cy.xpath("//span[normalize-space()='Delete']")
}
get Editbutton()
{
    return cy.xpath("//span[normalize-space()='Edit']")
}
get Editedcard()
{
    return  cy.get('[class="text-mediumLH18 md:text-smallLH18 font-bold grow break-words-custom"]')
}
get Deletetext()
{
    return cy.contains("Are you sure you want to delete the list")
}
get Deletetext1()
{
    return cy.contains("? This cannot be undone.")
}
get Nokeeplist()
{
    return cy.xpath("//button[normalize-space()='No, keep list']")
}
get Deletelist()
{
    return cy.xpath("//button[normalize-space()='Yes, delete list']")
}
get Currencyselector()
{
    return cy.get('[class="text-mediumFS16 font-bold"]')
}
get Currencyselector1()
{
    return cy.get('[class="text-medium font-bold whitespace-nowrap"]')
}
get Currencydropdown()
{
    return cy.xpath("//button[@data-testid='dropdownButton']//*[name()='svg']")
}
get Currencydropdown1()
{
    return cy.xpath("(//button[@type='button'])[41]")
}
get USD()
{
    return cy.xpath("//div[normalize-space()='USD ($)']")
}
get AUD()
{
    return cy.xpath("//div[normalize-space()='AUD']")
}
get BRL()
{
    return cy.xpath("//div[normalize-space()='BRL']")
}
get CAD()
{
    return cy.xpath("//div[normalize-space()='CAD']")
}
get CHF()
{
    return cy.xpath("//div[normalize-space()='CHF']")
}
get CNY()
{
    return cy.xpath("//div[normalize-space()='CNY']")
}
get EUR()
{
    return cy.xpath("//body//div//div//div//div//div//div//div//div//div//div//div//div//div//div[8]")
}
get GBP()
{
    return cy.xpath("//div[normalize-space()='GBP (£)']")
}
get HKD()
{
    return cy.xpath("//div[normalize-space()='HKD']")
}
get INR()
{
    return cy.xpath("//div[normalize-space()='INR']")
}
get JPY()
{
    return cy.xpath("//div[normalize-space()='JPY']")
}
get MXN()
{
    return cy.xpath("//div[normalize-space()='MXN']")
}
get NZD()
{
    return cy.xpath("//div[normalize-space()='NZD']")
}
get SGD()
{
    return cy.xpath("//div[normalize-space()='SGD']")
}
get Mapzoomin()
{
    return cy.get('.mapboxgl-ctrl-zoom-in > .mapboxgl-ctrl-icon')
}
get Mapzoomout()
{
    return cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon')
}
get Hotelmapcard()
{
    return cy.get('[class="mapboxgl-marker mapboxgl-marker-anchor-bottom"]')
}
get MapForareservedtag() {
    return cy.get('[class="uppercase text-white bg-purple !text-caption font-medium p-1.5 rounded-md select-none h-fit w-fit whitespace-nowrap inline-flex items-center gap-x-1"]', { timeout: 5000 });
}
get amount()
{
    return cy.get('[class="text-medium"]')
}
get Adddatestoseerates()
{
    return cy.contains("Add dates to see rates")
}
get Adddatestoseeprices()
{
    return cy.contains("Add dates to see prices")
}
get Totalamount()
{
    return cy.get('[class="text-secondaryDark text-smallLH20"]')
}
get Estimatedcommissionpercent()
{
    return cy.get('[class="text-smallLH20 text-medium text-success"]')
}
get Mapcardopen()
{
    return cy.get('[class="w-[330px] min-h-[334px] rounded-sm shadow-mapCard bg-white overflow-hidden"]')
}

get Purplecard()
{
    return cy.get('[style="transform: translate(278px, 260px) translate(-50%, -100%) translate(0px); opacity: 1; pointer-events: auto;"] > [data-testid="supplier-pin"] > [data-testid="supplier-pin-content"]')
}
get Highlightedcard()
{
    return cy.get('[class="flex flex-col p-2 gap-2 rounded-sm border border-lightGreyBorder shadow-[0_2px_10px_0_rgba(181,181,181,0.25)] cursor-pointer hover:border-main border-main !shadow-[0_2px_10px_0_rgba(181,181,181,0.25),0_0_0_1px_#000] bg-lightGreyBg"]') 
}
get Browncard()
{
    return cy.get('[style="transform: translate(221px, 188px) translate(-50%, -100%) translate(0px); opacity: 1; pointer-events: auto;"] > [data-testid="supplier-pin"] > [data-testid="supplier-pin-content"]')
}
get Whitecard()
{
    return cy.get('[style="transform: translate(449px, 291px) translate(-50%, -100%) translate(0px); opacity: 1; pointer-events: auto;"] > [data-testid="supplier-pin"]')
}
get ViewList()
{
    return  cy.get('.inline-flex > span')
}
get image()
{
    return cy.xpath("(//img[@config='[object Object]'])[1]")
}
get Hotelcountry()
{
    return cy.xpath("//span[normalize-space()='Rome, Lazio, Italy']")
}
get Hotelname()
{
    return cy.xpath("//span[normalize-space()='Chapter Roma']")
}
get Hotelnameindetailspage()
{
    return cy.xpath("//h1[normalize-space()='Chapter Roma']")
}
get hotelstar()

{
    return cy.xpath("(//span[@data-testid='hotel-class'][normalize-space()='4'])[1]")
}
get Bookedbyadvisor()
{
    return cy.xpath("(//span[@data-testid='booked-by-advisors'][contains(text(),'Booked')])[1]")
}
get Review()
{
    return cy.get('[class="flex flex-row items-center text-extraSmallLH18"]')
}
get Visithotelwebsite()
{
    return cy.xpath("//span[normalize-space()='Visit hotel website']")
}
get Hotelplace1()
{
    return cy.contains("Via Santa Maria")
}
get Hotelclassindetailspage()
{
    return cy.xpath("//span[contains(@data-testid,'hotel-class')]")
}
get Hotelbookedbyindetailspage()
{
    return cy.xpath("//span[contains(@data-testid,'booked-by-advisors')]")
}
get Reviewlink()
{
    return cy.xpath("//span[@role='link']")
}
get Reviewsction()
{
    return cy.get('[id="client-review"]')
}
get Viewperks()
{
    return cy.xpath("//a[normalize-space()='View perks']")
}
get Viewperkstext()
{
    return cy.contains("This property offers perks.")
}
get Image()
{
    return cy.get('[class="rounded-lg object-cover hover:cursor-pointer"]')
}
get Imagecount()
{
    return cy.contains('21 photos')
}
get Imageclose()
{
    return cy.get('[class="text-white absolute top-[33px] right-[30px] text-[40px] font-bold opacity-20 cursor-pointer hover:opacity-100 react-simple-image-viewer__close"]')
}
get Nextimage()
{
    return cy.get('[class="z-[10] h-[80%] text-white cursor-pointer absolute text-6xl font-bold flex items-center opacity-20 py-0 px-[33px] select-none hover:opacity-100 max-[900px]:opacity-100 max-[900px]:py-0 max-[900px]:px-[1/20] right-0 react-simple-image-viewer__next"]')
}
get previousimage()
{
    return cy.get('[class="z-[10] h-[80%] text-white cursor-pointer absolute text-6xl font-bold flex items-center opacity-20 py-0 px-[33px] select-none hover:opacity-100 max-[900px]:opacity-100 max-[900px]:py-0 max-[900px]:px-[1/20] left-0 react-simple-image-viewer__previous"]')
}
get imagecount1()
{
    return cy.get('[class="fixed inset-x-0 bottom-[36px] left-[50%] text-white font-bold text-header"]')
}
get Reviewheader()
{
    return cy.xpath("//h2[normalize-space()='Reviews by Fora Clients']")
}
get Reviewtext()
{
    return cy.xpath("(//p[contains(text(),'4.8')])[3]")
}
get Reviewtext1()
{
    return cy.xpath("//p[normalize-space()='Based on 1 review']")
}
get Reviewstar()
{
    return cy.get('[class="review-star_reviewStars__ZKDr_"]')
}
get Reviewtextnew()
{
    return cy.contains("We loved Chapter Roma! The staff was welcoming and knowledgable, the room was super charming and comfortable, and the restaurants were to die for. The location also could not be beat!")
}
get RatesLike()
{
    return cy.get('.absolute > .ml-auto')
}
get Enterdatestag()
{
    return cy.xpath("//div[normalize-space()='Enter Dates to View Available Rates']")
}
get Selectdates()
{
    return cy.xpath("//div[normalize-space()='Select Dates']")
}
get Selectdatesbutton()
{
    return cy.xpath("//button[normalize-space()='Select dates']")
}
get Foradeserve()
{
    return cy.xpath("//span[contains(@data-testid,'supplier-tab-Fora Reserve')]")
}
get SupplierabDesign()
{
    return cy.xpath("//span[contains(@data-testid,'supplier-tab-Design Hotels Pro')]")
}
get Tabletpro()
{
    return cy.xpath("//span[contains(@data-testid,'supplier-tab-Tablet Pro')]")
}
get Expedia()
{
    return cy.xpath("//span[contains(@data-testid,'supplier-tab-Expedia')]")
}
get SeeForaReserveperks()
{
    return cy.xpath("(//button[contains(text(),'See Fora Reserve perks')])[2]")
}
get SeeForaReserveperkstext()
{
    return cy.xpath("//div[normalize-space()='Fora Reserve Perks']")
}
get SeeForaReserveperkstext1()
{
    return cy.xpath("//div[normalize-space()='Specific perks for Chapter Roma']")
}
get Donebuttondescription()
{
    return cy.xpath("//button[normalize-space()='Done']")
}
get ForareservePerkstext()
{
    return cy.get('[class="pt-2"]')
}
get Copyallperks()
{
    return cy.get('[data-tooltip-id="copy-all-perks-modal"]')
}
get Copiedtooltip()
{
    return cy.get('div.react-tooltip')
}
get WhenshouldIbookoutside()
{
    return cy.xpath("//a[normalize-space()='When should I book outside Portal?']")
}
get SeeForaReserveperksTooltip()
{
   return cy.get('[class="ml-[3px] text-secondaryDark"]')
}
get Searchlogo()
{
    return cy.get('[class="inline-flex w-16 h-16 items-center justify-center rounded-full bg-orange-100"]')
}
get Datenotselected()
{
    return cy.xpath("//h4[normalize-space()='Dates Not Selected']")
}
get Selecthoteldata()
{
    return cy.xpath("//p[normalize-space()='Select dates to see hotel availability and prices']")

}
get Eightresultfound()
{
    return cy.xpath("//div[normalize-space()='(8 results)']")
}
}
export default new Partner