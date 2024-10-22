class Help {
   get help() { return cy.xpath("//span[normalize-space()='Help']", { timeout: 5000 }); }
   get help_centre() { return cy.xpath("//h1[normalize-space()='Help Center']", { timeout: 5000 }); }
   get searchBtn() { return cy.xpath("//a[normalize-space()='Search']", { timeout: 5000 }); }
   get search_textbx() { return cy.xpath("//input[@placeholder='Find answers and resources']", { timeout: 5000 }); }
   get help_fileds() { return cy.get('[class="w-full container-1440 flex flex-col flex-grow"]', { timeout: 5000 }); }
   get nosearch() { return cy.xpath("//h3[normalize-space()='No search results found']", { timeout: 5000 }); }
   get result() { return cy.xpath("//h2[normalize-space()='TEST Webhook']", { timeout: 5000 }); }
   get ask_community() { return cy.xpath("//*[@id=\"main-container\"]/main/div/div[1]/div[2]/div/p", { timeout: 5000 }); }
   get askCommunity() { return cy.xpath("//p[normalize-space()='Ask the community']", { timeout: 5000 }); }
   get gotoForum() { return cy.xpath("//a[normalize-space()='Go to Forum']", { timeout: 5000 }); }
   get login() { return cy.xpath("//h1[normalize-space()='Log in to your account']", { timeout: 5000 }); }
   get continue1() { return cy.xpath("//button[contains(text(),'Continue with your fora.travel email single sign-o')]", { timeout: 5000 }); }
   get legacy() { return cy.xpath("//button[contains(text(),'Legacy Login: Sign in using your existing email & ')]", { timeout: 5000 }); }
   get forgotpass() { return cy.xpath("//a[normalize-space()='Forgot your password?']", { timeout: 5000 }); }
   get policy() { return cy.xpath("//p[normalize-space()='Policy']", { timeout: 5000 }); }






   get textOnly() { return cy.xpath("//a[normalize-space()='Text Only']", { timeout: 5000 }); }
   get textOnlytitle() { return cy.xpath("//h1[normalize-space()='Text Only']", { timeout: 5000 }); }
   get isjusttext() { return cy.xpath("//p[normalize-space()='Is just text.']", { timeout: 5000 }); }
   get lastupdate() { return cy.get('[class="mt-6 text-small text-secondaryDark"]', { timeout: 5000 }); }
   get back() { return cy.xpath("//a[normalize-space()='Back']", { timeout: 5000 }); }
   get PolicyseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[1]", { timeout: 5000 }); }
   get helppolicy() { return cy.contains('Help with Policy', { timeout: 5000 }); }
   get back_helpcenter() { return cy.xpath("//a[normalize-space()='Fora Help Center']", { timeout: 5000 }); }
   get help_centre() { return cy.xpath("//h1[normalize-space()='Help Center']", { timeout: 5000 }); }
   get tech() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[2]/div', { timeout: 5000 }); }
   get testingArticle() { return cy.xpath("//a[normalize-space()='Testing That this Article Makes it to Algolia Search']", { timeout: 5000 }); }
   get testing_title() { return cy.xpath("//h1[contains(text(),'Testing That this Article Makes it to Algolia Sear')]", { timeout: 5000 }); }
   get Llamas() { return cy.xpath("//p[contains(text(),'Llamas are cool! You should be able to type \"Llama\"')]", { timeout: 5000 }); }
   get Editing() { return cy.xpath("//p[contains(text(),'Editing the body to add the word \"sup\" which shoul')]", { timeout: 5000 }); }
   get lastupdate() { return cy.get('[class="mt-6 text-small text-secondaryDark"]', { timeout: 5000 }); }
   get byteArticle() { return cy.xpath("//a[normalize-space()='12k Bytes Article']", { timeout: 5000 }); }
   get byteTitle() { return cy.xpath("//*[contains(text(), '12k Bytes Article')]", { timeout: 5000 }); }
   get back() { return cy.xpath("//*[contains(text(), 'Back')]", { timeout: 5000 }); }
   get testWebhook() { return cy.xpath("//a[normalize-space()='TEST Webhook']", { timeout: 5000 }); }
   get testWebhook_title() { return cy.xpath("//h1[normalize-space()='TEST Webhook']", { timeout: 5000 }); }
   get trigger() { return cy.xpath("//p[normalize-space()='Testing webhook trigger']", { timeout: 5000 }); }
   get back2() { return cy.xpath("(//a[normalize-space()='Back'])[1]", { timeout: 5000 }); }
   get membership() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[3]/div', { timeout: 5000 }); }
   get MembershipseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[3]", { timeout: 5000 }); }
   get helpwithmember() { return cy.xpath("//*[contains(text(), 'Help with Membership')]", { timeout: 5000 }); }
   get forahelp() { return cy.xpath("//*[contains(text(), 'Fora Help Center')]", { timeout: 5000 }); }
   get booking() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[4]/div', { timeout: 5000 }); }
   get Whichproperties() { return cy.xpath("//a[normalize-space()='How do I get an ACCOR star code?']", { timeout: 5000 }); }
   get Whichproperties_title() { return cy.xpath("//h1[normalize-space()='How do I get an ACCOR star code?']", { timeout: 5000 }); }
   get IATA() { return cy.xpath("//a[normalize-space()='Where do I add the IATA number to a booking?']", { timeout: 5000 }); }
   get takeover() { return cy.xpath("//h1[normalize-space()='Where do I add the IATA number to a booking?']", { timeout: 5000 }); }
   get clientmodified() { return cy.xpath("//a[normalize-space()='My client modified their trip while on location, what do I do?']", { timeout: 5000 }); }
   get iflcients() { return cy.xpath("//p[contains(text(),'If your clients added or removed a night, changed ')]", { timeout: 5000 }); }
   get BookingFAQs() { return cy.xpath("//a[normalize-space()='When and how do I send in my booking confirmations?']", { timeout: 5000 }); }
   get pleaseFind() { return cy.xpath("//h1[contains(text(),'When and how do I send in my booking confirmations')]", { timeout: 5000 }); }
   get BookingseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[4]", { timeout: 5000 }); }
   get helpbooking() { return cy.xpath("//*[contains(text(), 'Help with Booking')]", { timeout: 5000 }); }
   get Expedia() { return cy.xpath("//a[normalize-space()='Can I book using Expedia TAAP?']", { timeout: 5000 }); }
   get finance() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[5]', { timeout: 5000 }); }
   get payment() { return cy.xpath("//a[normalize-space()='How do I collect payment information from my clients?']", { timeout: 5000 }); }
   get Keeping() { return cy.xpath("//p[contains(text(),'Keeping your clients payment info is a great way t')]", { timeout: 5000 }); }
   get supplier() { return cy.xpath("//a[normalize-space()='How do I complete a net rate booking?']", { timeout: 5000 }); }
   get supplierTells() { return cy.xpath("//h1[normalize-space()='How do I complete a net rate booking?']", { timeout: 5000 }); }
   get commission() { return cy.xpath("//a[normalize-space()='The supplier is asking for an invoice, what do I do?']", { timeout: 5000 }); }
   get directBookings() { return cy.xpath("//h1[contains(text(),'The supplier is asking for an invoice, what do I d')]", { timeout: 5000 }); }
   get byte8k() { return cy.xpath("//a[normalize-space()='When will I get paid my commission?']", { timeout: 5000 }); }
   get byte8k_title() { return cy.xpath("//h1[normalize-space()='When will I get paid my commission?']", { timeout: 5000 }); }
   get FinanceseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[5]", { timeout: 5000 }); }
   get training() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[6]', { timeout: 5000 }); }
   get simultaneously() { return cy.xpath("//a[normalize-space()='Can I do the Certified and Advanced trainings simultaneously?']", { timeout: 5000 }); }
   get weRecommend() { return cy.xpath("//p[contains(text(),'We recommend going through Certified training firs')]", { timeout: 5000 }); }
   get schedule() { return cy.xpath("//a[normalize-space()='When will I receive the schedule for cohort training?']", { timeout: 5000 }); }
   get AdvisorsWho() { return cy.xpath("//p[contains(text(),'Advisors who join Fora in the current month are au')]", { timeout: 5000 }); }
   get sessions() { return cy.xpath("//a[normalize-space()='What if I fail the certification quiz?']", { timeout: 5000 }); }
   get Absolutely() { return cy.xpath("//h1[normalize-space()='What if I fail the certification quiz?']", { timeout: 5000 }); }
   get cohort() { return cy.xpath("//a[normalize-space()='Which cohort am I in?']", { timeout: 5000 }); }
   get Registration() { return cy.xpath("//p[contains(text(),'Registration for Advanced cohort trainings open ev')]", { timeout: 5000 }); }
   get TrainingseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[6]", { timeout: 5000 }); }
   get helpFinance() { return cy.xpath("//*[contains(text(), 'Help with Training')]", { timeout: 5000 }); }
   get fail() { return cy.xpath("//a[normalize-space()='What if I fail the certification quiz?']", { timeout: 5000 }); }
   get Marketing() { return cy.xpath('//*[@id="main-container"]/main/div/div[1]/div[3]/div/a[7]', { timeout: 5000 }); }
   get MarketingseeAll() { return cy.xpath("(//p[contains(text(),'See all')])[7]", { timeout: 5000 }); }
   get helpmarketing() { return cy.xpath("//*[contains(text(), 'Help with Marketing')]", { timeout: 5000 }); }
}

module.exports = new Help();