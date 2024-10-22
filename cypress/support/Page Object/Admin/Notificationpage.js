class Notification
{
    get Notification()
    {
        return cy.xpath("//h2[normalize-space()='Notifications']")
    }
    get searchbar()
    {
            return cy.xpath("//input[@id='searchbar']")
    }

    get addbutton()
    {
        return cy.xpath("//a[normalize-space()='Add']")
    }
    get exportnotification()
    {
        return cy.xpath("//a[normalize-space()='Export notifications']")
    }
    get importnotification()
    {
        return cy.xpath("//a[normalize-space()='Import notifications']")
    }
    get filter()
{
    return cy.xpath("//button[@title='Filter']")
}
get Isactive()
{
    return cy.xpath("//select[@id='id_is_active']")
}
get selectcolumn()
{
    return cy.xpath("//button[@title='Columns']")
}
get filtersavebutton()
{
    return cy.xpath("//input[@name='form_filter']")
}
get enabled()
{
    return cy.xpath("//input[@id='setup_notifications_index_table_column_enabled']")
}
get save()
{
    return cy.xpath("//input[@name='_save_column_setup']")
}
get cancel()
{
    return cy.xpath("//body/div[@class='h-full lg:pl-64 flex flex-col flex-1 overflow-hidden overflow-y-auto']/main[@class='flex-1']/div[@class='px-6 py-6']/div/div[@id='ModalColumn']/div[1]//*[name()='svg']")
}
get Subjectheader()
    {
        return cy.contains('Subject*')
    }
get Subject()
    {
        return cy.get('#id_notification-0-subject')
    }
get Message()
{
    return  cy.get('#id_notification-0-message')
}
get Messageheader()
{
    return  cy.contains('Message*')
}
get Messagehtml()
{
    return  cy.get('#id_notification-0-message_html')
}
get Messagehtmlheader()
{
    return  cy.contains('Message HTML')
}
get Slug()
{
    return cy.get('#id_slug')
}
get Slugheader()
{
    return cy.contains('Slug*')
}
get Type()
{
    return cy.get('#select2-id_type-container')
}
get Typeheader()
{
    return cy.contains('Type*')
}
get Description()
{
    return cy.get('#id_description')
}
get Descriptionheader()
{
    return cy.contains('Description*')
}
get Transportheader()
{
    return cy.contains('Transport*')
}
get Transport()
{
   return cy.get('.select2-search__field')
}
get SMS()
{
    return cy.contains('SMS')
}
get Push()
{
    return cy.contains('Push')
}
get Desktop()
{
    return cy.contains('Desktop')
}

get Email()
{
    return cy.contains('Email')
}

get Test2()
{
    return cy.contains('test2')
}
get CustomerIOEvent()
{
    return cy.contains('Customer IO Event')
}
get CustomerIO()
{
    return cy.contains('Customer IO')
}

get Externalidfortransport()
{
   return cy.get('#id_external_id')
}
get Externalidfortransportheader()
{
    return cy.contains('External id for transport')
}
get cancelbutton()
{
    return cy.get('[data-js-id="cancel-button"]')
}
get savebutton()
{
    return cy.get('.btn-primary')
}
get Error()
{
    return cy.contains('Unknown email')
}
get Error1()
{
    return cy.contains('This field is required.')
}
get Error2()
{
    return cy.contains('Add at least one translation')
}
get Search()
{
    return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
}
get Search1()
{
    return cy.get('.select2-search__field')
}
get clear()
{
    return cy.get('.select2-selection__clear')
}
get checkbox()
{
        return cy.get('[type="checkbox"]')
}


get SucessMessage()
{
        return cy.get('[class="text-sm font-medium message break-all"]')
}   
get Exportnotification()
{
    return cy.xpath("//a[normalize-space()='Export notifications']")
} 
get Importnotification()
{
    return cy.get('[href="/notification/import/"]')
} 

get Uploadfile()
{
    return  cy.get('#id_imported_file')
}
get alert()
{
    return cy.get('.alert')
}
get Edit()
{
    return cy.get('#notifications_index_table_row_1 > [style="min-width: 200px"] > .text-indigo-500')
}
get Editbutton()
{
    return cy.get('[href="/notification/16/edit/"]')
}
get atbutton()
{
    return  cy.get('[href="/notification/16/send/"]')
}
get Email()
{
    return cy.get('#id_email')
}
get Context()
{
    return cy.get('#id_context')
}
}
export default new Notification


