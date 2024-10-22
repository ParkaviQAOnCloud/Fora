class Sabre{

    get Sabre()
    {
        return cy.xpath("//a[normalize-space()='Sabre']")
    }
    get Searchbar()
    {
       return cy.get('#searchbar')
    }
    get column()
{
    return cy.get('.min-w-14')
}
get Namecolumn()
{
    return cy.xpath("//a[normalize-space()='Name']")
}
get Action()
{
    return cy.xpath("//th[@id='column_actions']")
}
get Result()
{
    return cy.contains("Anna of Zanzibar")
}
get Created()
{
    return cy.xpath("//label[normalize-space()='Created']")
}
get Createdcheckbox()
{
    return cy.xpath("//input[@id='setup_sabre_hotel_index_table_column_created']")
}
get Changed()
{
    return cy.xpath("//label[normalize-space()='Changed']")
}
get Changedcheckbox()
{
    return cy.xpath("//input[@id='setup_sabre_hotel_index_table_column_changed']")
}

get globalcode()
{
    return cy.xpath("//label[normalize-space()='Global code']")
}
get Globalcheckbox()
{
    return cy.xpath("//input[@id='setup_sabre_hotel_index_table_column_code']")
}
get Name()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get Namecheckbox()
{
    return cy.xpath("//input[@id='setup_sabre_hotel_index_table_column_name']")
}
get Actions()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Acctionscheckbox()
{
    return cy.xpath("//input[@id='setup_sabre_hotel_index_table_column_actions']")
}
get Savecolumnsetup()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}

get tableheader()
{
    return cy.get('.bg-gray-50')
}
get Createdsort()
{
    return cy.xpath("//a[normalize-space()='Created']//*[name()='svg']")
}
get Createdresult()
{
    return cy.contains("July 22, 2022, 6:06 a.m.")
}
get Createdresult1()
{
    return cy.contains("Aug. 14, 2022, 6:51 a.m.")
}
get Globalcodesort()
{
    return cy.xpath("//a[normalize-space()='Global code']//*[name()='svg']")
}
get Namesort()
{
    return cy.xpath("//a[normalize-space()='Global code']//*[name()='svg']")
}
get View()
{
    return cy.xpath("//tr[@id='sabre_hotel_index_table_row_1']//a[@title='View']//*[name()='svg']")
}
get Viewname()
{
    return cy.xpath("//dt[normalize-space()='Name:']")
}
get Viewcode()
{
    return cy.xpath("//dt[normalize-space()='Code:']")
}
get backtosabre()
{
    return cy.xpath("//a[normalize-space()='Sabre hotels']")
}
}
export default new Sabre