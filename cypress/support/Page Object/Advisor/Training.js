class Newtraining {
    get hamburgerMenuButton() {
        return cy.xpath("//button[@class='px-4 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden']//*[name()='svg']", { timeout: 5000 });
    }

    get trainingMenuOption() {
        return cy.xpath("//a[normalize-space()='Training']", { timeout: 5000 });
    }

    get searchInput() {
        return cy.xpath("//input[@placeholder='Search']", { timeout: 5000 });
    }

    get expandAllButton() {
        return cy.xpath("//button[normalize-space()='Expand All']", { timeout: 5000 });
    }

    get collapseAllButton() {
        return cy.xpath("//button[normalize-space()='Collapse All']", { timeout: 5000 });
    }

    get viewTrainingLink() {
        return cy.xpath("//a[contains(text(),'View Training')]", { timeout: 5000 });
    }

    get backToTrainingButton() {
        return cy.xpath("//div[contains(text(),'Back to Training')]", { timeout: 5000 });
    }

    get playVideoButton() {
        return cy.xpath("//button[@title='Play Video']", { timeout: 5000 });
    }

    get completeStatus() {
        return cy.xpath("//span[contains(text(),'Complete')]", { timeout: 5000 });
    }

    get viewMaterialsLink() {
        return cy.xpath("//span[normalize-space()='View Materials']", { timeout: 5000 });
    }

    get close() {
        return cy.xpath("(//*[name()='svg'][@class='h-5 w-5 text-gray-500 cursor-pointer'])[1]", { timeout: 5000 });
    }

    get lessons1() {
        return cy.xpath("//div[contains(@class,'false')]//p[contains(@class,'md:text-smallLH24 md:font-bold md:uppercase')][normalize-space()='2 lessons']", { timeout: 5000 });
    }

    get result1() {
        return cy.xpath("//div[normalize-space()='Welcome to Fora']", { timeout: 5000 });
    }

    get mins() {
        return cy.xpath("//span[normalize-space()='18 mins']", { timeout: 5000 });
    }

    get noresult() {
        return cy.xpath("//h3[normalize-space()='No trainings found']", { timeout: 5000 });
    }

    get percentage() {
        return cy.xpath("//div[3]//div[2]//div[1]//div[1]//div[1]//div[2]//div[2]//div[1]//div[1]//div[2]//p[1]", { timeout: 5000 });
    }

    get downarrow() {
        return cy.xpath("//body/div[@id='__next']/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[1]", { timeout: 5000 });
    }

    get Clickbooking() {
        return cy.xpath("//a[contains(@class,'hidden md:flex')]//div[contains(@class,'flex px-6 md:px-4 py-1 md:py-4 text-smallLH20 items-center')]", { timeout: 5000 });
    }

    get lessonNumber() {
        return cy.xpath("//a[contains(@class,'hidden md:flex')]//span[contains(@class,'uppercase text-secondary')][normalize-space()='Lesson 1.1']", { timeout: 5000 });
    }

    get name() {
        return cy.xpath("//a[contains(@class,'hidden md:flex')]//h2[contains(@class,'break-words md:text-medium')][normalize-space()='Keynote: Welcome to Fora']", { timeout: 5000 });
    }

    get count() {
        return cy.xpath("//a[contains(@class,'hidden md:flex')]//span[contains(@class,'text-secondary')][normalize-space()='Recorded webinar + 1 resource']", { timeout: 5000 });
    }

    get viewTraining() {
        return cy.xpath("//a[normalize-space()='View Training']", { timeout: 5000 });
    }

    get back() {
        return cy.xpath("//div[contains(text(),'Back to Training')]", { timeout: 5000 });
    }

    get welcome() {
        return cy.get('.max-w-full > .font-bold', { timeout: 5000 });
    }

    get playButton() {
        return cy.xpath("//button[@title='Play Video']", { timeout: 5000 });
    }

    get completed() {
        return cy.xpath("//span[normalize-space()='Complete']", { timeout: 5000 });
    }

    get materials() {
        return cy.xpath("//span[normalize-space()='View Materials']", { timeout: 5000 });
    }

    get ask_community2() {
        return cy.xpath("//p[normalize-space()='Ask the Community']", { timeout: 5000 });
    }

    get stop() {
        return cy.get('#video > [data-testid="player"]', { timeout: 5000 });
    }
}

export default new Newtraining();
