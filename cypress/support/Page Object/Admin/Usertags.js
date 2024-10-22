class Usertags{

    get Usertags()
    {
        return cy.get('[href="/features-tag/"]')
    }
    get Usertagheader()
    {
        return cy.xpath("//h2[normalize-space()='User Tags']")
    }
    get Searchbar()
    {
       return cy.get('#searchbar')
    }
    get filter()
    {
        return cy.get('.-ml-px')
    }
    get column()
    {
        return cy.get('.min-w-14')
    }
    get addbutton()
    {
        return cy.get('.mt-4 > .flex > .btn-primary')
    }
    get Name()
    {
        return cy.get('#column_name > .flex')
    }
    get Action()
    {
        return  cy.get('#column_actions')
    }
    get applybutton()
    {
        return  cy.get('.px-3 > form > .mt-3 > .btn-primary')
    }
    get deletebutton()
    {
        return  cy.get('#feature_tag_index_table_row_1 > [width="15%"] > .flex > .btn-danger')
    }
    get restorebutton()
    {
        return  cy.get('#feature_tag_index_table_row_1 > [width="15%"] > .flex > .btn-danger')
    }
    get created()
    {
        return cy.get('#setup_feature_tag_index_table_column_created_at')
    }
    get changed()
    {
        return  cy.get('#setup_feature_tag_index_table_column_updated_at')
    }
    get savecolumn()
    {
        return cy.get('.px-4 > form > .mt-3 > .btn-primary')
    }
    get createdatcolumn()
    {
        return   cy.get('#column_created_at')
    }
    get changedcolumn()
    {
        return   cy.get('#column_updated_at')
    }
    get Namefield()
    {
        return cy.get('#id_name')
    }
    get Savebutton()
    {
        return cy.get('.btn-primary')
    }
    get Errormessage()
    {
        return  cy.contains('User tag with this name already exists.')
    }
    get alert()
    {
        return cy.get('.alert')
    }
    get Cancel()
    {
        return  cy.get('.btn-white')
    }
    get Sorting()
    {
        return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
    }
    get Sortingresult()
    {
        return  cy.get('[id="feature_tag_index_table_row_1"]')
    }
    get actionedit()
    {
        return cy.xpath("//a[@title='Edit']//*[name()='svg']")
    }
    get Edit()
    {
        return cy.xpath("//a[normalize-space()='Edit']")
    }
    get View()
    {
        return  cy.xpath("//a[@title='View']//*[name()='svg']")
    }
get Delete()
{
    return  cy.xpath("//a[@title='Archive']")
}
get yesbutton()
{
    return  cy.xpath("//button[normalize-space()='Yes']")
}
get Nobutton(){
    return  cy.xpath("//button[normalize-space()='No']")
}
get archievemsg()
{
    return  cy.contains("Do you really want to archive this user tag?")
}
get Backtouser()
{
    return cy.get(':nth-child(2) > .flex > .ml-4')
}
get restoremsg()
{

return cy.contains('Do you really want to restore this user tag?')
}
get Confirmbutton()
{
    return  cy.xpath("//button[normalize-space()='Confirm']")
}
get Cancelbutton()
{
    return  cy.xpath("//button[@data-bb-handler='cancel']")
}
get closebutton()
{
    return  cy.get('[data-dismiss="alert"]')
}

}
export  default new Usertags