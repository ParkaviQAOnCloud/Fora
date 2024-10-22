class Userrole {

get Userrole()
{
    return cy.get('[href="/userrole/"]')
}
get Searchbar()
{
    return cy.get('#searchbar')
}
get Column()
{
    return cy.xpath("//button[@title='Columns']")
}
get ID()
{
    return cy.xpath("//a[normalize-space()='ID']")
}
get Name()
{
    return cy.xpath("//a[normalize-space()='Name']")
}
get Default()
{
    return cy.xpath("//a[normalize-space()='Name']")
}
get Action()
{
    return cy.xpath("//th[@id='column_actions']")
}
get Add()
{
    return cy.xpath("//a[normalize-space()='Add']")
}
get Namefield()
{
    return cy.get('#id_name')
}
get Descriptionfield()
{
    return cy.get('#id_description')
}
get Deafultcheckbox()
{
    return cy.get('#id_is_default')
}
get Savebutton()
{
    return cy.get('.btn-primary')
}
get Cancelbutton()
{
    return cy.get('.btn-white')
}
get errorrmsg()
{
    return cy.contains('This field is required.')
}
get Manager()
{
    return cy.xpath("//a[normalize-space()='Manager']")
}
get coulmnname()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get namecheckbox()
{
    return cy.xpath("//input[@id='setup_userrole_index_table_column_name']")
}
get ColumnID()
{
    return cy.xpath("//label[normalize-space()='ID']")
}
get IDcheckbox()
{
    return cy.xpath("//input[@id='setup_userrole_index_table_column_id']")
}
get ColumnDefault()
{
    return cy.xpath("//label[normalize-space()='Default']")
}
get defaultcheckbox()
{
    return cy.xpath("//input[@id='setup_userrole_index_table_column_is_default']")
}
get ColumnActions()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Actioncheckbox()
{
    return cy.xpath("//input[@id='setup_userrole_index_table_column_actions']")
}
get Savecoulmn()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get tableheader()
{
    return cy.get('.bg-gray-50')
}
get Edit()
{
    return cy.xpath("//tr[@id='userrole_index_table_row_1']//a[@title='Edit']")
}
get alert()
{
    return  cy.get('.alert')
}
get View()
{
    return cy.xpath("//tr[@id='userrole_index_table_row_1']//a[@title='View']//*[name()='svg']")
}
get Userrolename()
{
    return cy.xpath("//h3[normalize-space()='User role: QA']")
}
get viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Userrolename1()
{
    return cy.xpath("//h3[normalize-space()='User role: Manager']")
}
get Backtouserrole()
{
    return cy.xpath("//ol[@role='list']//a[normalize-space()='User roles']")
}
get Idsort()
{
    return cy.xpath("//a[normalize-space()='ID']//*[name()='svg']")
}
get Namesort()
{
    return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
}
get result()
{
    return cy.get('[class="p-2 text-sm text-gray-500 border-t border-b border-gray-200 "]')
}
get nameresult()
{
    return cy.get('[class="text-indigo-500 hover:text-indigo-700"]')
}
}
export default new Userrole