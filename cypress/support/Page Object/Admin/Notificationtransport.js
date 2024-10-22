class Notificationtranfort{

get Notificationtranport()
{
    return cy.get('[href="/notification-transport/"]')
}
get Header()
{
    return cy.xpath("//h2[normalize-space()='Notification transport']")
}
get Serachbar()
{
   return cy.get('#searchbar')
}
get Filterbutton()
{
   return cy.get('.py-4 > .justify-center')
}
get Addbutton()
{
    return cy.get('.mt-4 > .flex > .btn-primary')
}
get Columnname()
{
    return cy.get('#column_name')
}
get Columnaction()
{
    return cy.get('#column_actions')
}
get Name()
{
    return cy.get('#id_name')
}
get Module()
{
    return cy.get('#id_module')
}
get Slug()
{
    return cy.get('#id_slug')
}
get Save()
{
    return cy.get('.btn-primary')
}
get Cancel()
{
    return cy.get('.btn-white')
}
get Error()
{
    return cy.contains('This field is required.')
}
get Alert()
{
    return  cy.get('.alert')
}
get Closebutton()
{
    return cy.get('[class="h-5 w-5"]')
}
get Desktop()
{
    return cy.contains('Desktop')
}
get Slugcheckbox()
{
    return cy.get('#setup_notification_transport_index_table_column_slug')
}
get Modulecheckbox()
{
    return cy.get('#setup_notification_transport_index_table_column_module')
}
get Columnsave()
{
    return cy.get('.px-4 > form > .mt-3 > .btn-primary')
}
get slugheader()
{
   return cy.get('#column_slug')
}
get test()
{
   return cy.xpath("//td[normalize-space()='test']")
}
get Edit()
{
    return cy.get('#notification_transport_index_table_row_1 > :nth-child(4) > .flex > .btn-primary')
}
}
export default new Notificationtranfort