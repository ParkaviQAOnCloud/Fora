class User
{
get user()
{
    return cy.get('[href="/user/"]')
}
get searchbar()
{
    return cy.get('#searchbar')
}
get result()
{
    return cy.get('#result_list')
}
get selectcolumn()
{
    return cy.xpath("//button[@title='Columns']")
}
get personalemail()
{
    return cy.get("#setup_user_index_table_column_personal_email")
}
get savebutton()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get filter()
{
    return cy.xpath("//button[@title='Filter']")
}
get Isactive()
{
    return cy.get('select[name="is_active"]')
}
get filtersavebutton()
{
    return cy.xpath("//input[@name='form_filter']")
}
get slider()
{
    return cy.xpath("//span[@class='slider round']")
}
get Roles()
{
    return cy.get(':nth-child(3) > .mb-3 > div > .select2-container > .selection > .select2-selection')
}
get advisor()
{
    return cy.get('#select2-id_role-result-bicf-3')
}
get usertag()
{
    return cy.get('[placeholder="Select from the list"]')//cy.xpath("//span[@aria-expanded='true']//ul[@class='select2-selection__rendered']")
}

get cancelicon()
{
    return cy.get('.select2-selection__clear')
}
get cohart()
{
    return cy.contains("Select from the list")
}
get result()
{
    return cy.get('#changelist-form')
}
get profilepic()
{
    return cy.xpath("//input[@id='setup_user_index_table_column_photo']")
}
get edit()
{
    return cy.xpath("//tr[@id='user_index_table_row_1']//a[@title='Edit']")
}
get entity()
{
    return cy.get('#id_entity_name')
}
get edittag()
{
    return cy.get(":nth-child(6) > .sm\:grid > .mt-1 > .select2-container > .selection > .select2-selection")
}
get view()
{
    return cy.xpath("//tr[@id='user_index_table_row_1']//a[@title='View']")
}
get addnote()
{
    return cy.xpath("//a[normalize-space()='Add']")
}
get typenote()
{
    return cy.xpath("//textarea[@id='id_note']")
}
get savenote()
{
    return cy.get('.btn-primary')
}
get cancelnote()
{
    return cy.xpath("//input[@name='_cancel']")
}
get editnote()
{
    return cy.xpath("//a[@title='Edit']")
}
get archivenote()
{
    return cy.xpath("//a[@title='Archive']")
}
get Nobutton()
{
    return cy.xpath("//button[normalize-space()='No']")
}
get Yesbutton()
{
    return cy.xpath("//button[normalize-space()='Yes']")
}

get alertmessage()
{
    return cy.xpath("//div[@class='alert rounded-md p-4 alert-success']")
}

get backtouser()
{
    return cy.get(':nth-child(2) > .flex > .ml-4')//cy.xpath("//a[@class='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700']")
}
get alertmessage()
{
    return cy.get('.alert')
}
get namesort()
{
    return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
}
get sortresult()
{
    return cy.xpath("//table[@id='result_list']")
}
get foraemailsort()
{
    return cy.xpath("//a[normalize-space()='Fora email']//*[name()='svg']")
}
get lastloginsort()
{
    return cy.xpath("//a[normalize-space()='Last login']//*[name()='svg']")
}
get datausersort()
{
    return cy.xpath("//a[normalize-space()='Date user joined']//*[name()='svg']")
}
get activecheckbox()
{
    return cy.xpath("//input[@id='setup_user_index_table_column_is_active']")
}
get activesubscriptioncheckbox()
{
    return cy.xpath("//input[@id='setup_user_index_table_column_subscription_is_active']")
}
get Rolesinfilter()
{
    return cy.xpath("//input[@id='setup_user_index_table_column_role']")
}
get Enable2fcheckbox()
{
    return cy.xpath("//input[@id='setup_user_index_table_column_enable_2fa']")
}
get activesort()
{
    return cy.xpath("//a[normalize-space()='Active']//*[name()='svg']")
}
get activestatus()
{
    return cy.xpath("//tr[@id='user_index_table_row_1']//span[@title='Is active']//*[name()='svg']")
}
get Inactivestatus()
{
    return cy.xpath("//tbody/tr[@id='user_index_table_row_1']/td//*[name()='svg']")
}
get enable2fsort()
{
    return cy.xpath("//a[normalize-space()='Enable 2FA']//*[name()='svg']")
}
get nextpage()
{
    return cy.get('.z-0 > :nth-child(2)')
}
get nextarrow()
{
    return cy.xpath("//a[@class='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50']//*[name()='svg']")
}
get previousarrow()
{
    return cy.xpath("//a[@class='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50']")
}
get adduser()
{
    return cy.xpath("//a[normalize-space()='Add']")
}
get personalemailfield()
{
    return cy.xpath("//input[@id='id_personal_email']")
    
}
get firstname()
{
    return cy.xpath("//input[@id='id_first_name']")
}
get lastname()
{
    return cy.xpath("//input[@id='id_last_name']")
}
get selectrole()
{
    return cy.xpath("//input[@placeholder='Select from the list']")
}
get commission()
{
    return cy.xpath("//span[@id='select2-id_commission_plan-container']")
}
get cohortselect()
{
   return cy.get('#select2-id_cohort-result-s5wr-2022_10_Certified')
}
get cohort()
{
    return cy.xpath("//span[@id='select2-id_cohort-container']")
}
get choosefile()
{
    return cy.get('#id_photo')
}
get successmsg()
{
    return cy.xpath("//div[@class='alert rounded-md p-4 alert-success']")
}
get successalert()
{
    return cy.xpath("//div[@class='alert rounded-md p-4 alert-success']")
}
get cancelbutton()
{
    return cy.xpath("//input[@name='_cancel']")
}
get notactivetag()
{
    return cy.get('.text-gray-900 > .px-2')
}
get resendinvite()
{
    return cy.xpath("//a[normalize-space()='Resend invitation']")
}
get cancelbutton()
{
    return cy.get('.btn-white')
}
get resendinvitesucessmessage()
{
    return cy.xpath("//div[@class='alert rounded-md p-4 alert-success']")
}
get enable2ftext()
{
    return cy.xpath("//dt[normalize-space()='Enable 2FA:']")
}
get enable2fsymbol()
{
    return cy.xpath("//span[@title='Not enabled']//*[name()='svg']")
}
get profile()
{
    return cy.xpath("//dd[@class=' text-sm text-gray-900 sm:col-span-2']//a//img]")
}
get viewicon()
{
    return cy.xpath("//tr[@id='user_index_table_row_6']//a[@title='View']")
}
get subscription()
{
    return cy.xpath("//a[normalize-space()='Subscription']")
}
get activetag()
{
    return cy.xpath("//dd[contains(@class,'text-sm text-gray-900 sm:col-span-2 md:col-span-1 xl:col-span-4 break-all')]//span[@class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'][normalize-space()='Active']")
}
get link()
{
    return cy.get('[class="text-sm text-gray-900 sm:col-span-2 md:col-span-1 xl:col-span-4 break-all"]')
}
get currancyfield()
{
    return cy.xpath("//dt[normalize-space()='Currency:']")
}
get startsofcurrantfield()
{
    return cy.xpath("//dt[normalize-space()='Start of the current period:']")
}
get endofcurrantfield()
{
    return cy.xpath("//dt[normalize-space()='End of the current period:']")
}
get createdfield()
{
    return cy.xpath("//dt[normalize-space()='Created:']")
}
get description()
{
    return cy.xpath("//dt[normalize-space()='Description:']")
}
get Viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Loginasadvisor()
{
    return  cy.xpath("//a[normalize-space()='Login as advisor']")
}

get Subscription()
{
    return  cy.xpath("//a[normalize-space()='Subscription']")
}

get Subscriptionlink()
{
    return  cy.get('.py-3 > .bg-white > .border-t > .gap-y-4 > :nth-child(1) > :nth-child(3) > .text-gray-900')
}
}
export default new User