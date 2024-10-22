class Guideandprofile {

   get guideandprofile() {
       return cy.xpath("//span[normalize-space()='Fora Profile & Guides']", { timeout: 5000 });
   }
   
   get foraprofileheader() {
       return cy.xpath("//p[normalize-space()='Fora Profile']", { timeout: 5000 });
   }
   
   get Foraprofileicon() {
       return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
   }
   
   get guideandtripreport() {
       return cy.xpath("//p[normalize-space()='Guides & Trip Reports']", { timeout: 5000 });
   }
   
   get setupprofilelink() {
       return cy.xpath("//a[normalize-space()='set up your profile']", { timeout: 5000 });
   }
   
   get Mailchimp() {
       return cy.contains("If you have a Mailchimp newsletter, learn how to", { timeout: 5000 });
   }
   
   get signupform() {
       return cy.contains("add a sign-up form to your profile page", { timeout: 5000 });
   }
   
   get Emailtochangeyourvaccancystatus() {
       return cy.contains(". Email", { timeout: 5000 });
   }
   
   get text() {
       return cy.xpath("//span[contains(text(),'If you have any edits to your existing profile pag')]//a[@href='mailto:support@fora.travel'][normalize-space()='support@fora.travel']", { timeout: 5000 });
   }
   
   get Supportemail() {
       return cy.contains("support@fora.travel", { timeout: 5000 });
   }
   
   get Emailtochangeyourvaccancystatus2() {
       return cy.contains("to change your vacancy status.", { timeout: 5000 });
   }
   
   get Toeditexistingtest() {
       return cy.contains("If you have any edits to your existing profile page, simply email", { timeout: 5000 });
   }
   
   get signupform() {
       return cy.contains("add a sign-up form to your profile page", { timeout: 5000 });
   }
   
   get Iamready() {
       return cy.contains("I'm ready", { timeout: 5000 });
   }
   
   get vacancyfeature() {
       return cy.xpath("//a[normalize-space()='Vacancy feature']", { timeout: 5000 });
   }
   
   get Supportlink() {
       return cy.xpath("//span[contains(text(),'Turn your availability on')]//a[@class='text-link underline'][normalize-space()='support@fora.travel']", { timeout: 5000 });
   }
   
   get Guidereport() {
       return cy.xpath("//a[normalize-space()='Submit a new guide or trip report']", { timeout: 5000 });
   }
   
   get Brainstrome() {
       return cy.xpath("//a[normalize-space()='Brainstorm with our SEO keyword research']", { timeout: 5000 });
   }
   
   get Guideandtripresult() {
       return cy.xpath("//p[normalize-space()='Guides & Trip Reports']", { timeout: 5000 });
   }
   
   get Guideandtripresulttext() {
       return cy.contains('Travel stories inspire wanderlust. They’re the first step toward a booking, and make a traveler think, "I want to go there." Guides & trip reports are powerful marketing tools. When you create one, it’ll appear on your Fora profile, so you can share your expertise and drive bookings.', { timeout: 5000 });
   }
   
   get Guideandtripresulticon() {
       return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
   }
   
   get Brainstrome() {
       return cy.xpath("//a[normalize-space()='Brainstorm with our SEO keyword research']", { timeout: 5000 });
   }
   
   get guideortripresult() {
       return cy.contains("Need edits to an existing guide or trip report? Email", { timeout: 5000 });
   }
   
   get Reviewicon() {
       return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
   }
   
   get Reviewtext() {
       return cy.contains("Reviews", { timeout: 5000 });
   }
   
   get Reviewtext1() {
       return cy.contains("Advisor reviews live on your Fora profile and are a great way to build trust with new clients. Follow the steps below to request a travel review.", { timeout: 5000 });
   }
   
   get Reviewtext2() {
       return cy.xpath("//dd[contains(text(),'Advisor reviews live on your Fora profile and are ')]", { timeout: 5000 });
   }
   
   get Reviewtext3() {
       return cy.contains("When you request a review, your client will be prompted to review the travel partner and (optionally) you as their advisor; this action will send a review request to your client via email.", { timeout: 5000 });
   }
   
   get Reviewtext4() {
       return cy.contains("Once your client completes the review, you'll get an email notification.", { timeout: 5000 });
   }
   
   get Reviewtext5() {
       return cy.contains("All completed advisor reviews will automatically be added to your Fora profile and you'll get a notification when they are live.", { timeout: 5000 });
   }
   
   get Reviewtext6() {
       return cy.contains("Have questions? Check out our", { timeout: 5000 });
   }
   
   get Reviewtext7() {
       return cy.contains("full reviews policy", { timeout: 5000 });
   }
   
   get Issuetopicdropdown() {
       return cy.get('[data-testid="Marketing (profile + guides)"]', { timeout: 5000 });
   }
}

export default new Guideandprofile;
