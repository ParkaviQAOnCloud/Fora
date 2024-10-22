class Userlog{

    get Userlog()
    {
        return cy.get('[href="/activity-log/"]')
    }
    get Searchbar()
    {
        return cy.get('#searchbar')
    }
    get Filterbutton()
{
   return cy.get('.py-4 > .justify-center')
}
get Activitylogsheader()
{
    return cy.xpath("//h2[normalize-space()='Activity logs']")
}
get Placeholder()
{
    return cy.xpath("//input[@placeholder='Search']")
}
get timecheckbox()
{
   return cy.get('#setup_activity_log_table_column_stamp')
}
get useridncheckbox()
{
  return cy.get('#setup_activity_log_table_column_user_id')
}
get filtersave()
{
    return cy.get('.px-4 > form > .mt-3 > .btn-primary')
}
get timetext()
{
    return cy.contains('Time')
}
get useridtext()
{
 return cy.contains('User ID')
}
get searchresult()
{
    return cy.contains('update_profile_from_google')
}
get closebutton()
{
   return cy.xpath("//div[@id='ModalColumn']//div//div//div//button[@aria-label='Close']//*[name()='svg']")
}
get timesort()
{
    return cy.xpath("//a[normalize-space()='Time']//*[name()='svg']")
}
get timesortresult()
{
    return cy.xpath("//tbody/tr[1]/td[1]")
}
get levelsort()
{
    return cy.xpath("//a[normalize-space()='Level']//*[name()='svg']")
}
get levelsortresult()
{
    return   cy.get('[class="p-2 text-sm text-gray-500 border-t border-b border-gray-200 "]')
}
get gotopage2()
{
    return cy.xpath("//a[normalize-space()='2']")
}
get leftarrow()
{
    return cy.xpath("//nav[@aria-label='Pagination']//a[1]//*[name()='svg']")
}
get rightarrow()
{
    return cy.get('.z-0 > .px-2')
}
}
export default new Userlog