class Infobanners{

    get Infobanners()
    {
        return cy.xpath("//a[normalize-space()='Info banners']")
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
get Active()
{
    return   cy.xpath("//a[normalize-space()='Active']")
}
get Type()
{
    return   cy.xpath("//th[@id='column_banner_type']")
}
get Isdismissable()
{
    return   cy.xpath("//th[@id='column_is_dismissable']")
}
get Createdby()
{
    return   cy.xpath("//th[@id='column_created_by_email']")
}
get Infobannerheader()
{
    return   cy.xpath("//h2[normalize-space()='Info Banners']")
}
get Searchresult()
{
    return   cy.contains("supplier_maiunt")
}
get Applybutton()
{
    return cy.get('.px-3 > form > .mt-3 > .btn-primary')
}
get deletebutton()
{
        return  cy.xpath("//tr[@id='banner_index_table_row_1']//a[@title='Archive']")
}

get restorebutton()
{
    return  cy.xpath("//tr[@id='banner_index_table_row_1']//a[@title='Restore']")
}
get cancelbutton()
{
    return  cy.get('.btn-white')
}
get Alerttype()
{
    return  cy.contains("Alert")
}
get Infotype()
{
    return  cy.xpath("//tr[@id='banner_index_table_row_1']//td[contains(text(),'Info')]")
}
get dismissible()
{
return cy.get(".text-red-500")
}
get notdismissible()
{
    return cy.get(".text-indigo-500")

}
get Namecolumn()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get Namecheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_name']")
}
get Activecolumn()
{
    return cy.xpath("//label[normalize-space()='Active']")
}
get Activecheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_is_active_banner']")
}
get Typecolumn()
{
    return cy.xpath("//label[@for='setup_banner_index_table_column_banner_type']")
}
get Typecheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_banner_type']")
}
get Isdismissablecolumn()
{
    return cy.xpath("//label[normalize-space()='Is dismissible']")
}
get Isdismissablecheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_is_dismissable']")
}
get Tagcolumn()
{
    return cy.xpath("//label[normalize-space()='Tags']")
}
get Tagcheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_tags']")
}
get Createdcolumn()
{
    return cy.xpath("//label[normalize-space()='Created']")
}
get Createdcheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_created_at']")
}
get Upadtedcolumn()
{
    return cy.xpath("//label[normalize-space()='Updated']")
}
get Upadtedcheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_updated_at']")
}
get Createdbycolumn()
{
    return cy.xpath("//label[normalize-space()='Created by']")
}
get Createdbycheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_created_by']")
}
get Createdbyemailcolumn()
{
    return cy.xpath("//label[normalize-space()='Created by email']")
}
get Createdbyemailcheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_created_by_email']")
}
get Actionscolumn()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Actioncheckbox()
{
    return cy.xpath("//input[@id='setup_banner_index_table_column_actions']")
}
get Savecolumnsetup()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get tableheader()
{
    return cy.get('.bg-gray-50')
}
get Namesort()
{
    return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
}
get Activesort()
{
    return cy.xpath("//a[normalize-space()='Active']//*[name()='svg']")
}
get Createinfo()
{
    return cy.xpath("//h3[normalize-space()='Create info banner']")
   
}
get Savebutton()
{
    return cy.get('.btn-primary')
}
get infobannertype()
{
    return cy.xpath("//label[normalize-space()='Type*']")
}
get typefeild()
{
    return cy.xpath("//select[@id='id_banner_type']")
}
get Audience()
{
    return cy.xpath("//label[normalize-space()='Audience']")
}
get Audiencefeild()
{
    return cy.xpath("//input[@placeholder='Select from the list']")
}
get Note()
{
    return cy.contains("Note: If no tag is selected, banner will be applied to all users.")   
}
get Dismissiblity()
{
    return cy.xpath("//label[normalize-space()='Audience']")
}
get Dismissiblitycheckbox()
{
    return cy.xpath("//label[normalize-space()='Dismissibility']")
}
get infobannerName()
{
    return cy.xpath("//label[normalize-space()='Name*']")
}
get infobannerNamefeild()
{
    return cy.xpath("//input[@id='id_name']")
}
get infobannertext()
{
    return cy.xpath("//input[@id='id_name']")
}
get infobannertextfield()
{
    return cy.xpath("//input[@id='id_name']")
}
get Error()
{
    return cy.contains("This field is required.")
}
get alert()
{
   return cy.get('.alert')
}
get Edit()
{
    return cy.xpath("//tr[@id='banner_index_table_row_1']//a[@title='Edit']")
}
get View()
{
    return cy.xpath("//tr[@id='banner_index_table_row_1']//a[@title='View']")
}
get viewname()
{
   return cy.xpath("//dt[normalize-space()='Name:']")
}
get viewtext()
{
   return cy.xpath("//dt[normalize-space()='Text:']")
}
get viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Archieve()
{
    return cy.xpath("//tr[@id='banner_index_table_row_1']//a[@title='Archive']")
}
get Archievemsg()
{
    return cy.xpath("//div[contains(text(),'Do you really want to archive this banner?')]")
}
get Yes()
{
    return cy.xpath("//button[normalize-space()='Yes']")
}
get No()
{
    return cy.xpath("//button[normalize-space()='No']")
}

}
export default new Infobanners