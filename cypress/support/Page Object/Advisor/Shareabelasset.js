class Shareableasset {
    get Shareableasset() {
        return cy.xpath("//span[normalize-space()='Shareable Assets']", { timeout: 5000 });
    }

    get Header() {
        return cy.contains("Shareable Assets", { timeout: 5000 });
    }

    get Emailcampaignstext() {
        return cy.contains("Email campaigns", { timeout: 5000 });
    }

    get Template() {
        return cy.contains("Templates", { timeout: 5000 });
    }

    get Emailicon() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }

    get Emailtext() {
        return cy.contains("Leverage email campaigns as a powerful tool to drive bookings, articulate your value as an advisor and highlight your expertise. Our suggested email marketing platform is Mailchimp.", { timeout: 5000 });
    }

    get setuptext() {
        return cy.contains("Follow these steps to set up your Mailchimp account", { timeout: 5000 });
    }

    get Magiccontent() {
        return cy.contains("Magic Content", { timeout: 5000 });
    }

    get Magiccontenticon() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }

    get Magiccontenttext() {
        return cy.contains("With our magic feature, you can swap “Fora Travel” with your name in the byline, showcasing your expertise. Magic articles include a contact form that goes straight to your inbox. Please note that you will need to create a Fora profile to use the magic feature.", { timeout: 5000 });
    }

    get Socialmedia() {
        return cy.xpath("//p[normalize-space()='Social Media']", { timeout: 5000 });
    }

    get Socialmediatext() {
        return cy.contains("Build your brand and engage your network with social media templates. We’ve created templates to make it easy for you to customize and share content on your social media platforms.", { timeout: 5000 });
    }

    get Socialmediaicon() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }

    get Photographyasset() {
        return cy.contains("Photo Collections and Hotel Images", { timeout: 5000 });
    }

    get Photographyassettext() {
        return cy.contains("Share swoon-worthy photos of hotels with your clientele to inspire bookings. We’ve curated image collections that can be used across your marketing.", { timeout: 5000 });
    }

    get Photographyasseticon() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }

    get Evergreencontent() {
        return cy.contains("Evergreen content", { timeout: 5000 });
    }

    get Evergreencontenttext() {
        return cy.contains("You can share evergreen content at any time; it remains relevant and valuable over an extended period, no matter the date. We encourage you to share the following articles with your clientele whenever it feels relevant:", { timeout: 5000 });
    }

    get Evergreencontenticon() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-primary text-main"]', { timeout: 5000 });
    }

    get Travelagentlink() {
        return cy.xpath("//a[contains(text(),'What Can I Expect When Working With a Travel Agent')]", { timeout: 5000 });
    }

    get Travelagenttext() {
        return cy.contains("3 Reasons to Book with a Fora Advisor (", { timeout: 5000 });
    }

    get Instagramlink() {
        return cy.xpath("//a[normalize-space()='Instagram']", { timeout: 5000 });
    }

    get Youtubelink() {
        return cy.xpath("//a[normalize-space()='YouTube']", { timeout: 5000 });
    }

    get Foravsamexlink() {
        return cy.xpath("//a[@href='https://www.foratravel.com/the-journal/booking-through-a-fora-advisor-versus-amex-platinum-why-were-better']", { timeout: 5000 });
    }

    get Whybookwithforalink() {
        return cy.xpath("//a[normalize-space()='Why Book With Fora']", { timeout: 5000 });
    }

    get marketingyourselflink() {
        return cy.xpath("//a[contains(text(),'Follow these steps to set up your Mailchimp accoun')]", { timeout: 5000 });
    }

    get shareablepdficon() {
        return cy.xpath("//div[4]//dt[1]//div[1]", { timeout: 5000 });
    }

    get shareablepdf() {
        return cy.contains("Shareable PDFs", { timeout: 5000 });
    }

    get shareablepdftext() {
        return cy.contains("Send clients beautifully designed, educational overviews with our shareable PDFs. Whether showcasing your services or partner offers, these templates help you quickly deliver professional resources. Shareable PDFs are best sent via email.", { timeout: 5000 });
    }

    get shareablepdflink() {
        return cy.xpath("//span[contains(text(),'Access all Fora Shareable PDFs in the')]//a[contains(@class,'text-link underline')][normalize-space()='Shareable Assets']", { timeout: 5000 });
    }

    get Emailtemplatelink() {
        return cy.xpath("//span[contains(text(),'Mailchimp email templates can be found in the')]//a[@class='text-link underline'][normalize-space()='Shareable Assets']", { timeout: 5000 });
    }

    get Viewallink() {
        return cy.contains("Shareable Assets", { timeout: 5000 });
    }

    get Magicfeaturelink() {
        return cy.contains("Learn how to use the magic feature", { timeout: 5000 });
    }

    get SocialmediaShareableAssets() {
        return cy.contains("Shareable Assets", { timeout: 5000 });
    }

    get instafeed() {
        return cy.contains("Resources for getting started on social media", { timeout: 5000 });
    }

    get Acessforallsocialmedia() {
        return cy.contains("Access all Fora social media Canva templates", { timeout: 5000 });
    }

    get Requestimageaccess() {
        return cy.contains("How to request image assets", { timeout: 5000 });
    }

    get Acessourhomeimage() {
        return cy.contains("Access our hotel image library", { timeout: 5000 });
    }

    get imageassetsfromhotels() {
        return cy.xpath("//a[normalize-space()='Learn how to request image assets from hotels']", { timeout: 5000 });
    }

    get Acesshotel() {
        return cy.xpath("//a[normalize-space()='Access hotel images by destination']", { timeout: 5000 });
    }

    get Unsplashlibrary() {
        return cy.contains("Unsplash", { timeout: 5000 });
    }

    get Pexellibrary() {
        return cy.contains("Pexels", { timeout: 5000 });
    }

    get Travelagent() {
        return cy.contains("What Can I Expect When Working With a Travel Agent?", { timeout: 5000 });
    }

    get Foraversusamex() {
        return cy.contains("Fora Versus Amex: Why We're Better", { timeout: 5000 });
    }

    get Whybookwithfora() {
        return cy.contains("Why Book With Fora", { timeout: 5000 });
    }
}

export default new Shareableasset;
