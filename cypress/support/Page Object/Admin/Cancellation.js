class Cancellation {

    get Cancellation()
    {
        return cy.xpath("//a[normalize-space()='Cancellation reasons']")
    }
    get Cancellationheader()
    {
        return cy.xpath("//h2[normalize-space()='Cancellation reasons']")
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
    return cy.xpath("//th[@id='column_title']")
}
get Sequence()
{
    return cy.xpath("//th[@id='column_sequence']")
}
get Order()
{
    return cy.xpath("//h2[normalize-space()='Cancellation reasons']")
}
get Action()
{
    return cy.xpath("//h2[normalize-space()='Cancellation reasons']")
}
get Result()
{
    return cy.xpath("//a[normalize-space()='Advisor decision to cancel']")
}
get Applybutton()
{
    return  cy.get('.px-3 > form > .mt-3 > .btn-primary')
}
get Deletebutton()
{
    return  cy.get('.btn-danger')
}
get cancel()
{
    return  cy.xpath("//button[@aria-label='Close'][normalize-space()='Cancel']")
}
get Namecolumn()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get Namecheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_title']")
}

get Nameinnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_title']")
}
get Slugcolumn()
{
    return cy.xpath("//label[normalize-space()='Slug']")
}
get Slugcheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_slug']")
}
get Sluginnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_slug']")
}
get Sequencecolumn()
{
    return cy.xpath("//label[normalize-space()='Sequence']")
}
get Sequencecheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_sequence']")
}
get Sequenceinnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_sequence']")
}
get Createdcolumn()
{
    return cy.xpath("//label[normalize-space()='Created']")
}
get Createdcheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_created_at']")
}
get Createdinnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_created_at']")
}
get Changedcolumn()
{
    return cy.xpath("//label[normalize-space()='Changed']")
}
get Changedcheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_updated_at']")
}
get Changedinnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_updated_at']")
}
get Odercolumn()
{
    return cy.xpath("//label[normalize-space()='Order']")
}
get Ordercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_moving']")
}
get Orderinnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_moving']")
}
get Actionscolumn()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Actioncheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_index_table_column_actions']")
}
get Actioninnercheckbox()
{
    return cy.xpath("//input[@id='setup_cancellation_reason_inner_table_column_actions']")
}
get Savecolumnsetup()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get Slug()
{
    return  cy.get('#column_slug')
}
get Created()
{
    return cy.get('#column_created_at')
}
get Changed()
{
    return cy.get('#column_updated_at')
}
get cancelicon()
{
    return  cy.get('#ModalColumn > .modal-dialog > .block > .absolute')
}
get tableheader()
{
    return cy.get('.bg-gray-50')
}
get title()
{
    return cy.get('#id_title')
}
get Slugfield()
{
    return cy.get('#id_slug')
}
get Addsave()
{
 return cy.xpath("//button[normalize-space()='Save']")
}
get Error()
{
    return cy.contains("This field is required.")
}
get Error1()
{
    return cy.contains("Cancellation reason with this slug already exists.")
}
get Alert()
{
    return cy.get('.alert')
}
get Cancelbutton()
{
    return cy.get('.btn-white')
}
get Edit()
{
    return cy.xpath("//tr[@id='cancellation_reason_index_table_row_1']//a[@title='Edit']//*[name()='svg']")
}
get titleheader()
{
    return cy.xpath("//label[normalize-space()='Title*']")
}
get viewtitle()
{
    return cy.xpath("//dt[normalize-space()='Title:']")
}
get viewslugheader()
{
    return cy.xpath("//dt[normalize-space()='Slug:']")
}
get slugheader()
{
    return cy.xpath("//label[normalize-space()='Slug*']")
}
get view()
{
    return cy.xpath("//tr[@id='cancellation_reason_index_table_row_1']//a[@title='View']")
   
}
get viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get archieve()
{
    return cy.xpath("//tr[@id='cancellation_reason_index_table_row_1']//a[@title='Archive']//*[name()='svg']")
}
get archievemsg()
{
    return cy.contains("Do you really want to archive this cancellation reason?")
}
get No()
{
    return cy.get('.modal-footer > .btn-danger')
}
get Yes()
{
    return cy.get('.modal-footer > .btn-primary')//cy.xpath("//button[normalize-space()='Yes']")
}
get cancelationreasonpage()
{
    return cy.xpath("//ol[@role='list']//a[normalize-space()='Cancellation reasons']")
}
get detailview()
{
    return cy.get('#cancellation_reason_index_table_row_1 > :nth-child(1) > .text-indigo-500')
}
get Addsubreason()
{
    return cy.xpath("//a[normalize-space()='Add subreason']")
}
get result()
{
    return cy.contains('Other Reason')
}
get Addsubreasonedit()
{
    return cy.xpath("//tr[@id='cancellation_reason_inner_table_row_1']//a[@title='Edit']")

}
get Addsubreasoneview()
{
    return cy.xpath("//tr[@id='cancellation_reason_inner_table_row_1']//a[@title='View']//*[name()='svg']")
}
get Addsubreasonarchive()
{
    return cy.get('[class="btn-danger px-2 py-1.5 confirm-action"]')
}
}
export default new Cancellation