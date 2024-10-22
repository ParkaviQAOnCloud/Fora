class Sidekick{

    get Sidekick()
    {
        return cy.get('.col-span-2 > .inline-flex')
    }
    get Questionmark()
    {
        return cy.xpath("//a[normalize-space()='?']")
    }
    get Reversebutton()
    {
        return cy.get('.flex-row-reverse > button.flex')
    }
    get Newbutton()
    {
        return cy.get('.flex-row-reverse > [href="/sidekick/new"]')
    }
    get Sidekickheader()
    {
        return cy.xpath("//h1[normalize-space()='Sidekick']")
    }
    get textbox()
    {
        return cy.get('.text-medium', {timeout:20000})
    }
    get smalltext()
    {
        return cy.get('.text-small')
    }
    get Predefinedquestion()
    {
        return cy.get('[class="p-4 bg-white border border-lightGreyBorder rounded-md flex text-left font-bold hover:bg-lightGreyBg"]')
    }
    get Predefinedquestiontext()
    {
        return cy.get('[class="flex flex-col flex-grow overflow-x-hidden"]', {timeout:20000})
    }
    get Buttonenabled()
    {
        return cy.xpath("//div[@id='__next']//div//div//div//div//div//div//div//div//div//div//button//*[name()='svg']", {timeout:20000})
    }
    get Buttondisableed()
    {
        return cy.xpath("//div[@id='__next']//div//div//div//div//div//div//div//div//div//div//button")
    }
    get Forumtext()
    {
        return cy.contains("Can you earn commission on a trip for yourself?")
    }
    get forumicon()
    {
        return cy.get('[class="mb-1 flex-shrink-0 flex-grow-0 inline-block"]')
    }
    get Sidekicktext()
    {
        return cy.get('[class="markdown prose w-full break-words prose-p:leading-relaxed "]')
    }
    get sidekickreversenewchat()
    {
        return cy.get('.absolute > .flex-grow-0 > .flex')
    }
    get closebutton()
    {
        return cy.xpath("//div[@data-testid='right-drawer-close-button']//*[name()='svg']")
    }
}
export default new Sidekick