class Maintenance{
    get Maintenance()
    {
        return cy.xpath("//a[normalize-space()='Maintenance']")

    }
    get Maintenanceheader()
    {
        return cy.xpath("//h2[normalize-space()='Maintenance']")
    }
    get Maintenancemode()
    {
        return cy.contains("Maintenance mode")
    }
    get Maintenancemodesubheader()
    {
        return cy.contains("This mode allow to turn on/off the login on the advisor portal")
    }
    get Switch()
    {
        return cy.xpath("//button[@role='switch']")
    }
    get Message()
    {
        return cy.contains("Message (display if maintenance mode is turned on)")
    }
    get Messagesubheader()
    {
        return cy.contains("Sign in is temporarily disabled. The site is in maintenance mode. Try to log in later......")
    }
    get Edit()
    {
        return cy.xpath("//a[@title='Edit']")
    }
    get logout()
{
     return cy.get('.px-6 > .ml-4')
}
get Errormsg()
{
    return cy.contains("Sign in is temporarily disabled. The site is in maintenance mode. Try to log in later......")

}
get Textmessage()
{
    return cy.get('#id_message')
}
get save()
{
    return  cy.get('.btn-primary')
}
get Cancel()
{
    return  cy.get('.btn-white')
}
get errormsg()
{
    return   cy.xpath("//p[normalize-space()='This field is required.']")
}
}
export default new Maintenance