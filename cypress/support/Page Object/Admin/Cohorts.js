class Cohorts{

    get Cohort()
    {
        return   cy.get('[href="/advisor-cohort/"]')
    }
    get Cohortheader()
    {
        return   cy.xpath("//h2[normalize-space()='Advisor Cohorts']")
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
    return   cy.xpath("//a[normalize-space()='Name']")
}
get Actions()
{
    return   cy.xpath("//th[@id='column_actions']")
}
get Result()
{
    return  cy.xpath("//td[normalize-space()='2022_10_Certified']")
}
get Applybutton()
{
    return cy.get('.px-3 > form > .mt-3 > .btn-primary')
}
get deletebutton()
{
        return  cy.xpath("//tr[@id='advisor_cohort_index_table_row_1']//a[@title='Archive']")
}

get restorebutton()
{
    return  cy.xpath("//tr[@id='advisor_cohort_index_table_row_1']//a[@title='Restore']")
}
get Cancelbutton()
{
    return cy.get('.btn-white')
}
get Namecolumn()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get Namecheckbox()
{
    return cy.xpath("//input[@id='setup_advisor_cohort_index_table_column_name']")
}
get Changedcolumn()
{
    return cy.xpath("//label[normalize-space()='Changed']")
}
get Changedcheckbox()
{
    return cy.xpath("//input[@id='setup_advisor_cohort_index_table_column_updated_at']")
}
get Createdcolumn()
{
    return cy.xpath("//label[normalize-space()='Created']")
}
get Createdcheckbox()
{
    return cy.xpath("//input[@id='setup_advisor_cohort_index_table_column_created_at']")
}
get Actionscolumn()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Actioncheckbox()
{
    return cy.xpath("//input[@id='setup_advisor_cohort_index_table_column_actions']")
}
get Savecolumnsetup()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get tableheader()
{
    return cy.get('.bg-gray-50')
}
get cancelicon()
{
    return  cy.get('#ModalColumn > .modal-dialog > .block > .absolute')
}
get Namesort()
{
    return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
}
get sortresult1()
{
    return cy.contains("2022_10_Certified")
}
get Savebutton()
{
    return cy.get('.btn-primary')
}
get Namefield()
{
    return cy.get('#id_name')
}
get Error()
{
    return cy.contains("This field is required.")
}
get Error1()
{
    return cy.contains("Correct format: YYYY_MM_Level")
}
get Error2()
{
    return cy.contains("Advisor cohort with this name already exists.")
}
get Alert()
{
    return cy.get('.alert')
}

get startdate()
{
    return cy.get('#id_start_date')
}
get Edit()
{
    return cy.xpath("//tr[@id='advisor_cohort_index_table_row_2']//a[@title='Edit']//*[name()='svg']")

}
get View()
{
return cy.xpath("//tr[@id='advisor_cohort_index_table_row_1']//a[@title='View']//*[name()='svg']")
}
get viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Archieve()
{
    return cy.xpath("//tr[@id='advisor_cohort_index_table_row_2']//a[@title='Archive']//*[name()='svg']")
}
get Archievemsg()
{
    return cy.contains("Do you really want to archive this object?")
}
get No()
{
    return cy.xpath("//button[normalize-space()='No']")
}
get Yes()
{
    return cy.xpath("//button[normalize-space()='Yes']")
}
}
export default new Cohorts