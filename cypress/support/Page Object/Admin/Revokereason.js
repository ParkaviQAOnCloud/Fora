class Revokereason
{
get Revokereason()
{
   return cy.get('[href="/revoke-reason/"]')
}
get Revokereasonheader()
{
   return cy.xpath("//h2[normalize-space()='Revoke Reasons']")
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
        return cy.get('#column_name')
}
get Order()
{
        return cy.get('#column_order')
}
get Actions()
{
        return cy.get('#column_actions')
}
get Result()
{
    return cy.contains('Fora revoked')
}
get Applybutton()
{
    return cy.get('.px-3 > form > .mt-3 > .btn-primary')
}
get deletebutton()
{
        return  cy.get('#revoke_reason_index_table_row_1 > [width="15%"] > .flex > .btn-danger')
}
get restorebutton()
{
    return  cy.get('#revoke_reason_index_table_row_1 > [width="15%"] > .flex > .btn-danger')
}
get Cancelbutton()
{
    return cy.get('.btn-white')
}
get Namecheckbox()
{
 return cy.get('#setup_revoke_reason_index_table_column_name')
}
get Ordercheckbox()
{
 return cy.get('#setup_revoke_reason_index_table_column_order')
}
get Actioncheckbox()
{
    return cy.get('#setup_revoke_reason_index_table_column_order')
}
get createdatcheckbox()

{
    return cy.get('#setup_revoke_reason_index_table_column_created_at')
}
get Updatedatcheckbox()
{
    return cy.get('#setup_revoke_reason_index_table_column_updated_at')
}
get Savecolumnsetup()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get coulmncreated()
{
    return cy.xpath("//th[@id='column_created_at']")
}
get Coulmnupdated()
{
    return cy.xpath("//th[@id='column_updated_at']")
}
get Cancelicon()
{

    return cy.get('#ModalColumn > .modal-dialog > .block > .absolute')
}
get Addbutton()
{
    return  cy.get('.mt-4 > .flex > .btn-primary')
}
get Revokereasonheader()
{
    return cy.xpath("//h2[normalize-space()='Revoke Reasons']")
}
get revokereasonname()
{
    return cy.get('#id_name')
}
get nameheader()
{
    return   cy.xpath("//label[normalize-space()='Name*']")
}
get requirenote()
{
    return   cy.xpath("//label[normalize-space()='Require notes']")
}
get Savebutton()
{
    return cy.get('.btn-primary')
}
get errormsg()
{
    return   cy.xpath("//p[normalize-space()='This field is required.']")
}
get errormsg1()
{
    return   cy.xpath("//p[normalize-space()='Revoke reason with this name already exists.']")
}
get checkbox()
{
    return cy.get('#id_notes_required')
}
get alert()
{
    return cy.get('.alert')
}
get Editbutton()
{
    return   cy.xpath("//tr[@id='revoke_reason_index_table_row_6']//a[@title='Edit']//*[name()='svg']")
}
get Viewbutton()
{
    return   cy.xpath("//tr[@id='revoke_reason_index_table_row_6']//a[@title='View']")
}
get Archivebutton()
{
    return   cy.xpath("//tr[@id='revoke_reason_index_table_row_9']//a[@title='Archive']")

}
get Revokereasonmsg()
{
    return   cy.contains('Revoke reason "Reason1" was successfully edited')
}
get editedreason()
{
    return   cy.xpath("//a[normalize-space()='Reason1']")
}
get header()
{
    return   cy.xpath("//h3[normalize-space()='Revoke reason: Reason1']")
}
get editname()
{
    return   cy.xpath("//dt[normalize-space()='Name:']")
}
get Noterequireedit()
{
    return   cy.xpath("//dt[normalize-space()='Notes requires:']")
}
get Creatededit()
{
    return   cy.xpath("//dt[normalize-space()='Created:']")
}
get Updatededit()
{
    return   cy.xpath("//dt[normalize-space()='Updated:']")
}
get viewedit()
{
    return   cy.xpath("//a[normalize-space()='Edit']")

}
get archivemsg()
{
    return cy.contains("Do you really want to archive this user tag?")
}
get yes()
{
    return   cy.xpath("//button[normalize-space()='Yes']")
}
get No()
{
    return cy.xpath("//button[normalize-space()='No']")
}
get restoremsg()
{
    return cy.contains("Do you really want to restore this user tag?")
}
get Revokecancel()
{
    return cy.get('.modal-footer > .btn-danger')
}
get confirmbutton()
{
    return cy.get('.modal-footer > .btn-primary')
}
get Orderarrowup()
{
    return cy.get('#revoke_reason_index_table_row_1 > [width="150px"] > .up > .h-4')//cy.get('.h-4 w-4 ml-1 flex-shrink-0')
}
get Orderarrowdown()
{
    return cy.get('#revoke_reason_index_table_row_1 > [width="150px"] > .down > .h-4')
}
get drownarrowresult()
{
    return cy.contains("Incorrect data 3")
}
}
export default new Revokereason