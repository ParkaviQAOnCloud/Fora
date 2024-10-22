class Newhome {
    get calldropdown() {
        return cy.get('[class="rotate-180  text-label cursor-pointer"]', { timeout: 5000 });
    }
    get subheading() {
        return cy.xpath("//h2[normalize-space()='Schedule an Advisor kickoff call']", { timeout: 5000 });
    }
    get Subheading1() {
        return cy.get('[class="text-secondary mt-2"]', { timeout: 5000 });
    }
    get puzzlesymbol() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }
    get Learnthefundamentals() {
        return cy.contains('Learn the fundamentals', { timeout: 5000 });
    }
    get Learnthefundamentalslist() {
        return cy.get('[class="ml-2 lg:ml-4 text-staticMobileTitle tracking-tight lg:tracking-normal lg:text-header font-extrabold text-main"]', { timeout: 5000 });
    }
    get Readytobook() {
        return cy.contains('Ready to book?', { timeout: 5000 });
    }
    get Seebelow() {
        return cy.contains(' See “Jump right in to book” below', { timeout: 5000 });
    }
    get feelinglost() {
        return cy.contains('Feeling lost?', { timeout: 5000 });
    }
    get Essentialmaterials() {
        return cy.contains(' Here are the essential materials to get started:', { timeout: 5000 });
    }
    get Watch() {
        return cy.contains('Watch', { timeout: 5000 });
    }
    get Welcometogettingstarted() {
        return cy.contains('"Welcome to Fora"', { timeout: 5000 });
    }
    get Welcometogettingstartedlink() {
        return cy.get('[class="text-link hover:text-blue-600"]', { timeout: 5000 });
    }
    get Welcometogettingstarted1() {
        return cy.contains('(38 mins.) to understand what to expect on your Fora Advisor journey', { timeout: 5000 });
    }
    get Review() {
        return cy.contains('Review', { timeout: 5000 });
    }
    get Certifiedtraining() {
        return cy.contains("Certified training", { timeout: 5000 });
    }
    get Needtoknowtext1() {
        return cy.contains("(15 mins.) to understand what to expect on your Fora Advisor journey", { timeout: 5000 });
    }
    get Needtoknowtext2() {
        return cy.contains("glossary", { timeout: 5000 });
    }
    get Needtoknowtext3() {
        return cy.contains("of common acronyms", { timeout: 5000 });
    }
    get Needtoknowtext4()
    {
        return cy.contains(", your AI-powered personal assistant, your most pressing questions")
    }
    get Followfourguided() {
        return cy.contains("Follow our guided", { timeout: 5000 });
    }
    get Certifiedtraining() {
        return cy.contains("Certified training", { timeout: 5000 });
    }
    get Certifiedtrainingtext() {
        return cy.contains("to build your travel advisor knowledge and entrepreneurial skills", { timeout: 5000 });
    }
    get EngagewithForacommunity() {
        return cy.contains("Engage with Fora’s community", { timeout: 5000 });
    }
    get EngagewithForacommunitylogo() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }
    get EngagewithForacommunitytext() {
        return cy.contains("Schedule your", { timeout: 5000 });
    }
    get EngagewithForacommunitytext1() {
        return cy.contains("Advisor Kickoff call!", { timeout: 5000 });
    }
    get EngagewithForacommunitytext2() {
        return cy.contains("After your Advisor Kickoff:", { timeout: 5000 });
    }
    get EngagewithForacommunitytext3() {
        return cy.contains("Only have time for one more live event? Sign up for", { timeout: 5000 });
    }
    get EngagewithForacommunitytext4() {
        return cy.contains("Certified Office Hours", { timeout: 5000 });
    }
    get EngagewithForacommunitytext5() {
        return cy.contains("Have a bit more time? Start joining", { timeout: 5000 });
    }
    get EngagewithForacommunitytext6() {
        return cy.contains("Certified Labs", { timeout: 5000 });
    }
    get EngagewithForacommunitytext7() {
        return cy.contains("(45 mins.) to develop your skills", { timeout: 5000 });
    }
    get EngagewithForacommunitytext8() {
        return cy.contains("Introduce yourself in", { timeout: 5000 });
    }
    get EngagewithForacommunitytext9() {
        return cy.contains(", your community platform and get help from other new Advisors in the", { timeout: 5000 });
    }
    get EngagewithForacommunitytext10() {
        return cy.get('[href="https://forum.fora.travel/c/introduce-yourself/"]', { timeout: 5000 });
    }
    get EngagewithForacommunitytext11() {
        return cy.contains("Chat", { timeout: 5000 });
    }
    get EngagewithForacommunitytext12() {
        return cy.contains("Access your", { timeout: 5000 });
    }
    get EngagewithForacommunitytext13() {
        return cy.get(':nth-child(4) > [href="/mail"]', { timeout: 5000 });
    }
    get EngagewithForacommunitytext14() {
        return cy.contains("on the left and watch this", { timeout: 5000 });
    }
    get EngagewithForacommunitytext15() {
        return cy.contains("tutorial", { timeout: 5000 });
    }
    get EngagewithForacommunitytext16() {
        return cy.contains("to set up your email signature", { timeout: 5000 });
    }
    get Jumprightintobook() {
        return cy.contains("Jump right in to book", { timeout: 5000 });
    }
    get Jumprightintobooklogo() {
        return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
    }
    get Jumprightintobooktext1() {
        return cy.contains("Add your first", { timeout: 5000 });
    }
    get Jumprightintobooktext2() {
        return cy.contains("client", { timeout: 5000 });
    }
    get Jumprightintobooktext3() {
        return cy.contains("(even add yourself!)", { timeout: 5000 });
    }
    get Jumprightintobooktext4() {
        return cy.contains("Explore preferred partners and experiences to find the right match", { timeout: 5000 });
    }
    get Jumprightintobooktext5() {
        return cy.contains("Learn how to make bookings with our video library", { timeout: 5000 });
    }
    get Jumprightintobooktext6() {
        return cy.contains("Book Your Client", { timeout: 5000 });
    }
    get Jumprightintobooktext7() {
        return cy.contains("(18 lessons to choose from), our step-by-step", { timeout: 5000 });
    }
    get Jumprightintobooktext8() {
        return cy.contains("guide", { timeout: 5000 });
    }
    get Jumprightintobooktext9() {
        return cy.contains("(25 mins.), or join us at", { timeout: 5000 });
    }
    get Jumprightintobooktext10() {
        return cy.contains("Booking Bootcamp", { timeout: 5000 });
    }
    get Jumprightintobooktext11() {
        return cy.contains("(30 mins.) to work with someone on your first booking", { timeout: 5000 });
    }
    get issuetypedropdown() {
        return cy.get('[data-testid="Select issue topic"]', { timeout: 5000 });
    }
}

export default new Newhome();
