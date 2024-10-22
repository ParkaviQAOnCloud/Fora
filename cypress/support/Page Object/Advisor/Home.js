class Home {
  get navbar() {
      return cy.get('[class="text-3xl flex items-center"]', { timeout: 8000 });
  }
  get home() {
      return cy.xpath("//a[normalize-space()='Home']", { timeout: 5000 });
  }
  get cancel() {
      return cy.get('.justify-between > .inline-flex', { timeout: 5000 });
  }
  get navbar_New()
     {
        return cy.xpath("//button[@data-testid='icon-button']")
     }
   get dashboard(){
    return cy.xpath("(//a)[15]")
   }
  get alert() {
      return cy.get('.text-title', { timeout: 5000 });
  }
  get alerttext() {
      return cy.xpath("//div[@class='text-title md:text-jumbo font-bold text-main mb-4 md:mb-6']", { timeout: 5000 });
  }
  get banner() {
      return cy.get('[data-testid="new_dashboard_onboarding"] > .flex-1', { timeout: 5000 });
  }
  get bookingsheader() {
      return cy.xpath("//h2[normalize-space()='Bookings']", { timeout: 5000 });
  }
  get totalbookings() {
      return cy.get("p[data-testid='bookings']", { timeout: 5000 });
  }
  get commissionablevalueheader() {
      return cy.xpath("//h3[normalize-space()='Total commissionable value']", { timeout: 5000 });
  }
  get commissionablevalueheader() {
      return cy.get("p[class='text-header font-bold']", { timeout: 5000 });
  }
  get totalcommision() {
      return cy.xpath("//h3[normalize-space()='Your total commission']", { timeout: 5000 });
  }
  get commissionvalue() {
      return cy.get("p[data-testid='earned_commissions']", { timeout: 5000 });
  }
  get paid() {
      return cy.contains("Paid", { timeout: 5000 });
  }
  get pending() {
      return cy.contains("pending", { timeout: 5000 });
  }
  get future() {
      return cy.contains("future", { timeout: 5000 });
  }
  get canceled() {
      return cy.contains("Excludes canceled bookings", { timeout: 5000 });
  }
  get bookinglink() {
      return cy.xpath("//a[normalize-space()='View these bookings']", { timeout: 5000 });
  }
  get sortresult() {
      return cy.get('[class="flex flex-wrap flex-start items-start mb-4 flex-col gap-6"]', { timeout: 5000 });
  }
  get filter() {
      return cy.get('[data-testid="dropdownButton"]', { timeout: 5000 });
  }
  get Yourbookings() {
      return cy.get('[class="-mt-[2px] ml-1 transition-all fill-secondaryDark "]', { timeout: 5000 });
  }
  get alltimetext() {
      return cy.contains('All time', { timeout: 5000 });
  }
  get lastweek() {
      return cy.contains('Last week', { timeout: 5000 });
  }
  get lastmonth() {
      return cy.xpath("//div[normalize-space()='Last month']", { timeout: 5000 });
  }
  get lastyear() {
      return cy.xpath("//div[normalize-space()='Last year']", { timeout: 5000 });
  }
  get currantweek() {
      return cy.xpath("//div[normalize-space()='Current week']", { timeout: 5000 });
  }
  get currantmonth() {
      return cy.xpath("//div[normalize-space()='Current month']", { timeout: 5000 });
  }
  get currantyear() {
      return cy.xpath("//div[@data-testid='bookings_wrapper']//div//div//div//div//div//div//div[contains(text(),'Current year')]", { timeout: 5000 });
  }
  get excludingcanceled() {
      return cy.contains("excluding canceled", { timeout: 5000 });
  }
  get logincheckbox() {
      return cy.get(':nth-child(1) > [data-testid="checklist-onboarding"]', { timeout: 5000 });
  }
  get Logintext() {
      return cy.contains("Login to your Fora email", { timeout: 5000 });
  }
  get welcomeforacall() {
      return cy.get(':nth-child(2) > [data-testid="checklist-onboarding"]', { timeout: 5000 });
  }
  get welcomeforacalltext() {
      return cy.contains('Join a "Welcome to Fora" call', { timeout: 5000 });
  }
  get Logintoforum() {
      return cy.get(':nth-child(3) > [data-testid="checklist-onboarding"]', { timeout: 5000 });
  }
  get Logintoforumtext() {
      return cy.contains('Log in to Forum', { timeout: 5000 });
  }
  get createforaprofile() {
      return cy.get(':nth-child(4) > [data-testid="checklist-onboarding"]', { timeout: 5000 });
  }
  get createforaprofiletext() {
      return cy.contains('Create your Fora profile', { timeout: 5000 });
  }
  get makeyourfirstbooking() {
      return cy.get(':nth-child(5) > [data-testid="checklist-onboarding"]', { timeout: 5000 });
  }
  get makeyourfirstbookingtext() {
      return cy.contains('Make your first booking', { timeout: 5000 });
  }
  get Joinwelcomeforacall() {
      return cy.xpath("//a[@href='https://calendly.com/fora-training/welcome-to-fora-call']//span[@class='lg:hidden text-secondary']//*[name()='svg']", { timeout: 5000 });
  }
  get Logintoforumaction() {
      return cy.xpath("//a[@href='https://forum.fora.travel']//span[@class='lg:hidden text-secondary']//*[name()='svg']", { timeout: 5000 });
  }
  get createforaprofileaction() {
      return cy.xpath("//div[4]//span[1]//a[1]//span[1]//*[name()='svg']", { timeout: 5000 });
  }
  get makeyourfirstbookingaction() {
      return cy.xpath("//div[5]//span[1]//a[1]//span[1]//*[name()='svg']", { timeout: 5000 });
  }
  get Traininghead() {
      return cy.xpath("//h2[normalize-space()='Training']", { timeout: 5000 });
  }
  get Learnaboutcohort() {
      return cy.xpath("//a[normalize-space()='Learn about your cohort here']", { timeout: 5000 });
  }
  get Bookinginfo() {
      return cy.xpath("//h2[contains(text(),'Booking information')]", { timeout: 5000 });
  }
  get companyinfosection() {
      return cy.get('[class="flex-1 bg-white rounded border border-stroke shadow-card p-6 md:p-8 mb-8"]', { timeout: 5000 });
  }
  get IATA() {
      return cy.xpath("//h5[normalize-space()='IATA#']", { timeout: 5000 });
  }
  get Mailingaddress() {
      return cy.xpath("//h5[normalize-space()='MAILING ADDRESS']", { timeout: 5000 });
  }
  get Mailingaddresstext() {
      return cy.contains("Fora Travel, Inc.", { timeout: 5000 });
  }
  get Mailingaddresstext1() {
      return cy.contains("228 Park Ave South #53272", { timeout: 5000 });
  }
  get Mailingaddresstext2() {
      return cy.contains("New York, NY 10003-1502", { timeout: 5000 });
  }
  get Phonenumber() {
      return cy.xpath("//h5[contains(text(),'PHONE NUMBER')]", { timeout: 5000 });
  }
  get Togetpaid() {
      return cy.xpath("//p[normalize-space()='TO GET PAID']", { timeout: 5000 });
  }
  get nextbutton() {
      return cy.xpath("//button[normalize-space()='Next']", { timeout: 5000 });
  }
  get skipfornow() {
      return cy.xpath("//button[normalize-space()='Skip for Now']", { timeout: 5000 });
  }
  get viewbookinglink() {
      return cy.xpath("//a[normalize-space()='View these bookings']", { timeout: 5000 });
  }
  get browsesuppliers() {
      return cy.xpath("//button[normalize-space()='Browse Suppliers']", { timeout: 5000 });
  }
  get nextbuttoninsd() {
      return cy.get('[data-testid="next-cta-button"]', { timeout: 5000 });
  }
  get gotosupplierdatabase() {
      return cy.get('[data-testid="next-cta-button"]', { timeout: 5000 });
  }
  get tourforaheader() {
      return cy.xpath("//div[@class='flex items-center justify-end w-full py-4']", { timeout: 5000 });
  }
  get viewgmail() {
      return cy.xpath("//a[normalize-space()='View Fora Email']", { timeout: 5000 });
  }
  get viewpreferredpartner() {
      return cy.contains("View preferred partners", { timeout: 5000 });
  }
  get IATAnumberheader() {
      return cy.xpath("//div[normalize-space()='Use the Fora IATA number']", { timeout: 5000 });
  }
  get copyIATA() {
      return cy.xpath("//body/div/div/div/main/div/div/div[@data-testid='new_home_page']/div[3]/div[1]/div[1]/div[1]", { timeout: 5000 });
  }
  get stepone() {
      return cy.xpath("//div[normalize-space()='1']", { timeout: 5000 });
  }
  get steptwo() {
      return cy.xpath("//div[normalize-space()='2']", { timeout: 5000 });
  }
  get steptwotext() {
      return cy.contains("Find your first client or book for yourself", { timeout: 5000 });
  }
  get steptwotext1() {
      return cy.contains("Embark on your travel advisor journey by finding your first client using Fora's valuable training and supportive community.", { timeout: 5000 });
  }
  get stepthree() {
      return cy.xpath("//div[normalize-space()='3']", { timeout: 5000 });
  }
  get stepthreetext() {
      return cy.contains("Find a place or experience to book", { timeout: 5000 });
  }
  get stepthreetext1() {
      return cy.contains("Browse our partners and find the best way to book your client's trip.", { timeout: 5000 });
  }
  get stepfour() {
      return cy.xpath("//div[normalize-space()='4']", { timeout: 5000 });
  }
  get stepfourtext() {
      return cy.contains("Use the Fora IATA number", { timeout: 5000 });
  }
  get stepfourtext1() {
      return cy.contains("Booking with our IATA number is necessary for unlocking perks and earning commissions.", { timeout: 5000 });
  }

  get stepfive() {
    return cy.xpath("//div[normalize-space()='5']", { timeout: 5000 });
}
get stepfivetext() {
    return cy.contains("Lock in your commission", { timeout: 5000 });
}
get stepfivetext1() {
    return cy.contains("Email booking confirmations to ", { timeout: 5000 });
}
get lockyourcommission() {
    return cy.xpath("//div[normalize-space()='Lock in your commission']", { timeout: 5000 });
}
get commissionemail() {
    return cy.get('.font-normal > .underline', { timeout: 5000 });
}
get thirdstepbooking() {
    return cy.get('.pb-0 > :nth-child(5)', { timeout: 5000 });
}
get forumarrow() {
    return cy.get(':nth-child(2) > .border > .justify-center', { timeout: 5000 });
}
get foraemailarrow() {
    return cy.get(':nth-child(3) > .border > .justify-center', { timeout: 5000 });
}
get foraimage() {
    return cy.xpath("//img[@alt='Forum Walkthrough']", { timeout: 5000 });
}
get foraemailimage() {
    return cy.xpath("//img[@alt='Fora Email Walkthrough']", { timeout: 5000 });
}
get bookingsarrow() {
    return cy.get(':nth-child(4) > .border > .justify-center', { timeout: 5000 });
}
get bookingimage() {
    return cy.xpath("//img[@alt='Bookings Walkthrough']", { timeout: 5000 });
}
get supplierarrow() {
    return cy.get(':nth-child(5) > .border > .justify-center', { timeout: 5000 });
}
get supplierimage() {
    return cy.xpath("//img[@alt='Supplier Database Walkthrough']", { timeout: 5000 });
}
get cohortheader() {
    return cy.xpath("//h1[normalize-space()='Choose Your Training Cohort']", { timeout: 5000 });
}
get cohorttext() {
    return cy.contains("Enroll in Fora's in-depth, month-long, live training series led by industry experts to equip yourself with essential tools and elevate your expertise in the travel business.", { timeout: 5000 });
}
get cohortsubheader() {
    return cy.contains("Join Your Cohort to Boost Your Travel Advisor Skills", { timeout: 5000 });
}
get cohortsubheader1() {
    return cy.contains("Enroll in a virtual training cohort, connect with like-minded professionals, and elevate your expertise in the travel industry.", { timeout: 5000 });
}
get image() {
    return cy.get('[class="w-full aspect-video lg:aspect-auto relative"]', { timeout: 5000 });
}
get Enrollmentheader() {
    return cy.contains("Enroll in Next Month’s Cohort", { timeout: 5000 });
}
get Startingdate() {
    return cy.contains("Starting Aug 7th,", { timeout: 5000 });
}
get Enrollmentmsg() {
    return cy.contains("We’ve auto enrolled you into this cohort!", { timeout: 5000 });
}
get message() {
    return cy.contains("All training material is available anytime in the Training tab.", { timeout: 5000 });
}
get Futureenrollment() {
    return cy.contains("Enroll in a Future Cohort", { timeout: 5000 });
}
get Futureenrollmentdate() {
    return cy.contains("Starting Sep 4th, ", { timeout: 5000 });
}
get defaultsession() {
    return cy.get('[class="w-4 h-4 text-success bg-gray-100 border-gray-300 focus:ring-success dark:focus:bg-successLight dark:ring-offset-success focus:ring-2 dark:bg-gray-700 dark:border-gray-600"]', { timeout: 5000 });
}
get Noenrollment() {
    return cy.contains("I choose to not enroll in a cohort ", { timeout: 5000 });
}
get tooltip() {
    return cy.get('[class="ml-1 text-tertiary"]', { timeout: 5000 });
}
get optout() {
    return cy.contains('Opt out of cohort experience', { timeout: 5000 });
}
get edittraining() {
    return cy.get(':nth-child(2) > .text-link', { timeout: 5000 });
}
get enrollment() {
    return cy.xpath("//input[@id='2023_07_Certified']", { timeout: 5000 });
}
get arrowforward() {
    return cy.xpath("//div[@class='ml-2 cursor-pointer false']//*[name()='svg']", { timeout: 5000 });
}
get firststep() {
    return cy.get('.pb-0 > :nth-child(1)', { timeout: 5000 });
}
get Mailingaddresscopy() {
    return cy.xpath("//div[@data-testid='new_home_page']//div//div[3]//div[1]//span[1]//button[1]//*[name()='svg']", { timeout: 5000 });
}
get Phonenumbercopy() {
    return cy.xpath("//body//div[@id='__next']//div//div[2]//span[1]//button[1]", { timeout: 5000 });
}
get togetpaidcopy() {
    return cy.xpath("//button[@data-tooltip-id='Commission Email']//*[name()='svg']", { timeout: 5000 });
}
get companyIATAcopy() {
    return cy.xpath("//button[@data-tooltip-id='IATA']//*[name()='svg']", { timeout: 5000 });
}
get Bookoutsideportalinfo() {
    return cy.xpath("//h5[contains(text(),'BOOK OUTSIDE PORTAL')]", { timeout: 5000 });
}
get Bookoutsideportalinfotext() {
    return cy.contains("You can book directly or through trusted 3rd parties.", { timeout: 5000 });
}
get Bookoutsideportalinfotext1() {
    return cy.contains("to see instructions for hotels, cruises, tours, and more.", { timeout: 5000 });
}
get Bookoutsideportalinfotext2() {
    return cy.contains("to see instructions for hotels, cruises, tours, and more.", { timeout: 5000 });
}
get Bookoutsideportalinfotext3() {
    return cy.xpath("//div[contains(text(),'Visit')]//a[normalize-space()='Partners']", { timeout: 5000 });
}
get Bookinsideportalinfo() {
    return cy.xpath("//h5[contains(text(),'BOOK IN PORTAL')]", { timeout: 5000 });
}
get Bookinsideportalinfotext() {
    return cy.contains("Travel partners, rates, and commission details all in the", { timeout: 5000 });
}
get Bookinsideportalinfotext1() {
    return cy.get(':nth-child(2) > .text-main > .text-link', { timeout: 5000 });
}
get video() {
    return cy.get('.video-player-container', { timeout: 5000 });
}
get welcometext() {
    return cy.get('[class="text-displayLargeMobile lg:text-displayLarge font-semibold text-main mb-4 md:mb-6"]', { timeout: 5000 });
}
get bookingheader() {
    return cy.contains('Bookings', { timeout: 5000 });
}
get Bookingsection() {
    return cy.get('[data-testid="bookings_wrapper"] > .bg-white', { timeout: 5000 });
}
get Findpartnerheader() {
    return cy.contains('Find Partners', { timeout: 5000 });
}
get Findpartnertext() {
    return cy.contains("Browse our partners and find the best way to book your client's trip.", { timeout: 5000 });
}
get Manageclient() {
    return cy.xpath("//button[normalize-space()='Manage Clients']", { timeout: 5000 });
}
get BrowsePartner() {
    return cy.contains('Browse Partners', { timeout: 5000 });
}
get Manageyourbookingheader() {
    return cy.contains('Manage your Bookings', { timeout: 5000 });
}
get Findsuppliertext() {
    return cy.contains('Track and manage your bookings and commissions in one place.', { timeout: 5000 });
}
get Viewbookingbutton() {
    return cy.contains('View Bookings', { timeout: 5000 });
}
get Secondstep() {
    return cy.get('[class="btn-primary ml-0 md:ml-8"]', { timeout: 5000 });
}
get Onboardingsessionheader() {
    return cy.contains('Book an Onboarding Session', { timeout: 5000 });
}
get Onboardingsessiontext() {
    return cy.contains('Schedule a 45-minute session to connect with other new advisors', { timeout: 5000 });
}
get Onboardingsessiontext1() {
    return cy.contains('and learn the essentials to getting started.', { timeout: 5000 });
}
get Back() {
    return cy.xpath("//button[normalize-space()='Back']", { timeout: 5000 });
}
get howtobookbutton() {
    return cy.xpath("//button[normalize-space()='How to Book']", { timeout: 5000 });
}
get toolsandresource() {
    return cy.contains("Tools & Resources", { timeout: 5000 });
}
get Forumheader() {
    return cy.xpath("//h5[normalize-space()='Forum']", { timeout: 5000 });
}
get Forumtext() {
    return cy.contains("Our global community hub providing destination intel and a built-in advisor support network.", { timeout: 5000 });
}
get Foraemailheader() {
    return cy.xpath("//h5[normalize-space()='Fora Email']", { timeout: 5000 });
}
get Foraemailtext() {
    return cy.contains("Establish credibility with an @fora.travel email for all your interactions with clients, suppliers, and the Fora HQ.", { timeout: 5000 });
}
get Bookingsheader() {
    return cy.xpath("//h5[normalize-space()='Bookings']", { timeout: 5000 });
}
get Bookingstext() {
    return cy.contains("Track and manage all your bookings and commissions in one place.", { timeout: 5000 });
}
get Partnersheader() {
    return cy.xpath('//h5[normalize-space()="Partners"]', { timeout: 5000 });
}
get Partnerstext() {
    return cy.contains("Browse our partners and find the best way to book your client's trip.", { timeout: 5000 });
}
get thirdstepprogressbar() {
    return cy.get('.pb-0 > :nth-child(6)', { timeout: 5000 });
}
get Thirdstep() {
    return cy.get('.pb-0 > :nth-child(5)', { timeout: 5000 });
}
get viewfirstbookingbutton() {
    return cy.get('[data-tooltip-id="booking-tooltip"]', { timeout: 5000 });
}
get banner() {
    return cy.get('[data-testid="banner-alert"]', { timeout: 5000 });
}
get bannerinfo() {
    return cy.get('[data-testid="banner-info"]', { timeout: 5000 });
}
get loginlink() {
    return cy.xpath("//a[@href='https://advisor.fora.travel/mail']//span[@class='lg:hidden text-secondary']//*[name()='svg']", { timeout: 5000 });
}
get Trainingtext() {
    return cy.contains("Training is an integral part of getting started with Fora and the travel industry. As a new advisor, you are automatically added to a training cohort at the start of the month.", { timeout: 5000 });
}
get Welcomevideo() {
    return cy.contains("Welcome Video", { timeout: 5000 });
}
get Onboardingsession() {
    return cy.contains("Onboarding Session", { timeout: 5000 });
}
get Toolandresource() {
    return cy.contains("Tools & Resources", { timeout: 5000 });
}
get Enrollintraining() {
    return cy.contains("Enroll in training", { timeout: 5000 });
}
get Getbookings() {
    return cy.contains("Get Booking", { timeout: 5000 });
}
get More() {
    return cy.contains("MORE...", { timeout: 5000 });
}
get Sidekick() {
    return cy.xpath("//a[@href='/sidekick'][normalize-space()='Sidekick']", { timeout: 5000 });
}
get Helpcenter() {
    return cy.xpath("//a[normalize-space()='Help Center']", { timeout: 5000 });
}
get Communityguideline() {
    return cy.xpath("//a[normalize-space()='Community Guidelines']", { timeout: 5000 });
}
get text() {
    return cy.contains("Remember when booking outside Portal:", { timeout: 5000 });
}
get text1() {
    return cy.contains("Include IATA# on booking", { timeout: 5000 });
}
get text2() {
    return cy.contains("Forward confirmation to", { timeout: 5000 });
}
get commissionemail1() {
    return cy.xpath("//a[normalize-space()='commissions@fora.travel']", { timeout: 5000 });
}
get CopyIATAbutton()
{
    return cy.xpath("//button[normalize-space()='Copy IATA']")
}
}
export default new Home