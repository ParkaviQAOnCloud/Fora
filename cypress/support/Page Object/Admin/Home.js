class Home{
    get user(){
        return cy.get('.nav-active')
    }
get cancel()
{
    return cy.get('#navbar-minimalize')
}
get mainpage()
{
    return cy.contains("Main page")
}
get hometitle()
{
    return cy.xpath("//h2[normalize-space()='Home']")
}
get totalusericon()
{
    return cy.xpath("//div[@class='absolute bg-indigo-500 rounded-md p-3']")
}
get totalusertext()
{
    return cy.contains("Total users")
}
get totaluser()
{
    return cy.xpath("//dd[contains(@class,'ml-16 pb-6 flex items-baseline sm:pb-7')]")
}

}
export default new Home