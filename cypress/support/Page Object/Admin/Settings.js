class Settings{
    get settings()
    {
        return cy.xpath('//div[6]//button[1]')
    }
    get Notification()
    {
        return cy.xpath("//a[normalize-space()='Notifications']")
    }
    get Notificationtransport()
    {
        return cy.xpath("//a[normalize-space()='Notification transports']")
    }
    get Accesslist()
    {
        return  cy.xpath("//a[normalize-space()='Access list']")
    }
    get Userrole()
    {
        return cy.xpath("//a[normalize-space()='User roles']")
    }
    get Userlogs()
    {
        return cy.xpath("//a[normalize-space()='User logs']")
    }
    get Features()
    {
        return cy.xpath("//a[normalize-space()='Features']")
    }
    get Usertags()
    {
        return cy.xpath("//a[normalize-space()='User tags']")
    }
    get Revokereason()
    {
        return cy.xpath("//a[normalize-space()='Revoke reasons']")
    }
    get Cancelreason()
    {
        return cy.xpath("//a[normalize-space()='Cancellation reasons']")
    }
    get sabre()
    {
        return  cy.xpath("//a[normalize-space()='Sabre']")
    }
    get commissionplan()
    {
        return  cy.xpath("//a[normalize-space()='Commission plan']")
    }
    get staticpage()
    {
        return cy.xpath("//a[normalize-space()='Static pages']")
    }
    get maintenance()
    {
        return  cy.xpath("//a[normalize-space()='Maintenance']")
    }
    get cache()
    {
       return cy.xpath("//a[normalize-space()='Cache']")
    }
    get advisorcohort()
    {
       return cy.xpath("//a[normalize-space()='Advisor cohort']")
    }
    get onboardingchecklist()
    {
       return cy.xpath("//a[normalize-space()='Onboarding checklist']")
    }
    get Infobanner()
    {
       return cy.xpath("//a[normalize-space()='Info banners']")
    }
}
export default new Settings