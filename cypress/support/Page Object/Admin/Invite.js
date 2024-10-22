class Invite {
    get invite()
    {
        return cy.xpath("//h2[normalize-space()='Invitations']")
    }
    get searchbar()
    {
        return cy.xpath("//input[@id='searchbar']")
    }
    get filter()
    {
        return cy.xpath("//button[@title='Filter']")
    } 
    get invitationreminder()
    {
        return cy.xpath("//button[@id='button-switcher']")
    }
    get pending()
    {
        return cy.xpath("//a[@href='/invitation/invited/']")
    }
    get pendingtag()
    {
        return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-amber-600 bg-amber-200 last:mr-0 mr-1'][contains(text(),'• Pending')]")
    }
    get revoked()
    {
        return cy.xpath("//a[@href='/invitation/revoked/']")
    }
    get revokedtag()
    {
        return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-red-600 bg-red-200 last:mr-0 mr-1'][contains(text(),'• Revoked')]")
    }
    get accepted()
    {
        return cy.xpath("//a[@href='/invitation/created/']")
    }
    get acceptedtag()
    {
        return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-green-600 bg-green-200 last:mr-0 mr-1'][contains(text(),'• Accepted')]")
    }
    get all()
    {
        return cy.xpath("//nav[@class='flex space-x-8 my-8']//a[1]")
    }

get back()
{
    return cy.xpath("//a[normalize-space()='Back']")
}
get view()
{
    return cy.xpath("//tr[@id='invitation_index_table_row_1']//a[@title='View']//*[name()='svg']")
}
get edit()
{
    return cy.get("tr[id='invitation_index_table_row_1'] a[title='Edit']")
}
get revokeinvite()
{
    return cy.get('#invitation_index_table_row_1 > :nth-child(6) > .flex > .confirm-revoke')
}
    get revokereason()
    {
        return cy.xpath("//select[@name='reason']")
    }
    get revokebutton()
    {
        return cy.get('.btn-danger')
    }
    get revokenote()
    {
        return cy.xpath("//textarea[@name='notes']")
    }
    get alert()
    {
        return cy.get('.alert')
    }
    get namesort()
    {
        return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
    }
    get result()
    {
        return cy.xpath("//table[@id='result_list']")
    }
    get statussort()
    {
        return cy.xpath("//a[normalize-space()='Status']//*[name()='svg']")
    }
    get sortresult()
    {
        return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-green-600 bg-green-200 last:mr-0 mr-1'][contains(text(),'• Accepted')]")
    
}
get sortresult1()
{
    return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-red-600 bg-red-200 last:mr-0 mr-1'][contains(text(),'• Revoked')]")

}
get createddatesort()
{
    return cy.xpath("//a[normalize-space()='Created at']//*[name()='svg']")
}
get lastinvitesort()
{
    return cy.xpath("//a[normalize-space()='Last invite']")
}
get selectcolumn()
{
    return cy.xpath("//button[@title='Columns']//*[name()='svg']")
}
get releasenote()
{
    return cy.xpath("//p[@class='text-center text-base text-gray-400']")
}
get personalmailtext()
{
    return cy.xpath("//dd[@class='text-sm text-gray-900 sm:col-span-2 md:col-span-3 xl:col-span-4 break-all']")
}
get pendingtaginvite()
{
   return cy.get('.text-gray-900 > .text-xs')
}
get customerio()
{
   return cy.xpath("//a[normalize-space()='CustomerIO requests']")
}
get personalmailtextbox()
{
    return cy.xpath("//input[@id='setup_invitation_index_table_column_personal_email']")
}
get save()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get selectfromdropdown()
{
    return cy.xpath("//input[@placeholder='Select from the list']")
}
get noreminder()
{
    return cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-green-600 bg-green-200 last:mr-0 mr-1 mt-1'][normalize-space()='no_reminder']")//cy.xpath("//tr[@id='invitation_index_table_row_1']//span[@class='text-xs font-semibold inline-block py-1 px-3 rounded-md text-green-600 bg-green-200 last:mr-0 mr-1 mt-1'][normalize-space()='no_reminder']")
}
get apply()
{
    return cy.get('.px-3 > form > .mt-3 > .btn-primary')
}
get notes()
{
    return cy.xpath("//input[@id='setup_invitation_index_table_column_advisor_notes']")
}
get commissionplan()
{
    return cy.xpath("//input[@id='setup_invitation_index_table_column_commission_plan']")
}
get revoke()
{
    return cy.xpath("//input[@id='setup_invitation_index_table_column_revoke_reason']")
}
get cancel()
{
    return cy.xpath("//input[@name='_cancel']")
}
get backinvitation()
{
    return cy.xpath("//a[@class='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700']")
}
}
export default new Invite