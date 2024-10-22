class Feedback{
get Feedback()
{
    return cy.xpath("//a[@href='/commission/feedback/']")
}
}
export default new Feedback