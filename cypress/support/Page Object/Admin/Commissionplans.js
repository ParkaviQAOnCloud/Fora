class Commissionplans{

    get Commissionplans()
    {
        return cy.xpath("//a[normalize-space()='Commission plan']")

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
    get Searchresult()
{
    return cy.xpath("//a[normalize-space()='2022 Standard Tier Plan']")
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
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_name']")
}
get Createdcolumn()
{
    return cy.xpath("//label[normalize-space()='Created']")
}
get Createdcheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_created_at']")
}
get Ordercolumn()
{
    return cy.xpath("//label[normalize-space()='Order']")
}
get Ordercheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_moving']")
}
get Changedcolumn()
{
    return cy.xpath("//label[normalize-space()='Changed']")
}
get Changedcheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_updated_at']")
}
get Linktodoccolumn()
{
    return cy.xpath("//label[normalize-space()='Link to document']")
}
get Linktodoccheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_document_link']")
}
get Actionscolumn()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Actioncheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_actions']")
}
get Ishiddencolumn()
{
    return cy.xpath("//label[normalize-space()='Is hidden']")
}
get Ishiddencheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_index_table_column_is_hidden']")
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
get namesortresult()
{
    return cy.xpath("//a[normalize-space()='2022 Standard Tier Plan']")
}
get namesortresult1()
{
    return cy.xpath("//a[normalize-space()='Test Paid']")
}
get Ordersort()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_1']//button[1]//*[name()='svg']")
}
get Ordersort1()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_1']//button[2]//*[name()='svg']")
}
get createdsort()
{
    return cy.xpath("//a[normalize-space()='Created']//*[name()='svg']")
}
get changedsort()
{
    return cy.xpath("//a[normalize-space()='Changed']//*[name()='svg']")
}
get Savebutton()
{
    return cy.get('.btn-primary')
}
get Error()
{
    return cy.contains("This field is required.")
}
get Error1()
{
    return cy.contains("Commission plan with such name already exists")
}
get Namefield()
{
    return cy.get('#id_name')
}
get Documentlink()
{
    return  cy.get('#id_document_link')
}
get isdismissable()
{
    return cy.get('#id_is_hidden')
}
get alert()
{
   return cy.get('.alert')
}
get cancelbutton()
{
    return  cy.get('.btn-white')
}
get Edit()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_1']//a[@title='Edit']")
}
get View()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_1']//a[@title='View']")
}
get View1()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_17']//a[@title='View']")
}
get viewdescription()
{
    return cy.xpath("//dt[normalize-space()='Description:']")
}
get viewname()
{
    return cy.xpath("//dt[normalize-space()='Name:']")
}
get Viewedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Viewadd()
{
    return cy.xpath("//a[normalize-space()='Add']")
}


get Viewnamecolumn()
{
    return cy.xpath("//label[normalize-space()='Name']")
}
get Viewnamecheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_name']")
}
get Viewisactivecolumn()
{
    return cy.xpath("//label[normalize-space()='Is Active']")
}
get Viewisactivecheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_is_active']")
}

get Viewstripepriceidcolumn()
{
    return cy.xpath("//label[normalize-space()='Stripe price ID']")
}
get Viewstripepriceidcheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_price']")
}

get Viewstripepricevaluecolumn()
{
    return cy.xpath("//label[normalize-space()='Stripe price value']")
}
get Viewstripepricevaluecheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_price_value']")
}


get Viewstrikkethroughpricecolumn()
{
    return cy.xpath("//label[normalize-space()='Strikethrough Price']")
}
get Viewstrikkethroughpricecheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_strikethrough_price']")
}

get Viewisdefaultcolumn()
{
    return cy.xpath("//label[normalize-space()='Is default']")
}
get Viewsisdefaultcheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_is_default']")
}

get Viewcreatedatcolumn()
{
    return cy.xpath("//label[normalize-space()='Created at']")
}
get Viewscreatedatcheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_created_at']")
}

get Viewcreatedbycolumn()
{
    return cy.xpath("//label[normalize-space()='Created by']")
}
get Viewscreatedbycheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_created_by']")
}

get Viewactionscolumn()
{
    return cy.xpath("//label[normalize-space()='Actions']")
}
get Viewactionscheckbox()
{
    return cy.xpath("//input[@id='setup_commission_plan_products_table_column_actions']")
}
get backtouser()
{
    return cy.get(':nth-child(2) > .flex > .ml-4')
}

get ProductlistNamesort()
{
    return cy.xpath("//a[normalize-space()='Name']//*[name()='svg']")
}

get ProductlistStripepricevaluesort()
{
    return cy.xpath("//a[normalize-space()='Stripe price value']//*[name()='svg']")
}

get ProductlistStrikethroughPricesort()
{
    return cy.xpath("//a[normalize-space()='Strikethrough Price']//*[name()='svg']")
}

get ProductlistIsdefaultsort()
{
    return cy.xpath("//a[normalize-space()='Is default']//*[name()='svg']")
}

get ProductlistCratedatsort()
{
    return cy.xpath("//a[normalize-space()='Created at']//*[name()='svg']")
}
get Addproductionplanheader()
    {
        return cy.xpath("//h3[normalize-space()='Add commission plan product']")
    }
get ProductlistCratedatsort()
{
    return cy.xpath("//a[normalize-space()='Created at']//*[name()='svg']")
}
get PriceProductlist()
{
    return cy.xpath("//label[normalize-space()='Price*']")
}
get PriceProductlistfield()
{
    return cy.xpath("//label[normalize-space()='Price*']")
}

get NameProductlist()
{
    return cy.xpath("//label[normalize-space()='Name*']")
}
get NameProductlistfield()
{
    return cy.xpath("//input[@id='id_name']")
}
get StrikethroughProductlist()
{
    return cy.xpath("//label[normalize-space()='Strikethrough price*']")
}
get StrikethroughProductlistfield()
{
    return cy.xpath("//input[@id='id_strikethrough_price']")
}
get add()
{
    return cy.xpath("//a[normalize-space()='Add']")
}

get Productlistview()
{
    return cy.xpath("//tr[@id='commission_plan_products_table_row_1']//a[@title='View']//*[name()='svg']")
}
get Productlistedit()
{
    return cy.xpath("//tr[@id='commission_plan_products_table_row_1']//a[@title='Edit']")
}
get Productlistdelete()
{
    return cy.xpath("//tr[@id='commission_plan_products_table_row_2']//a[@title='Archive']//*[name()='svg']")
}
get actionbuttons()
{
    return  cy.get('.flex.gap-2')
}
get setdefaultbutton()
{
    return cy.xpath('//a[@title="Mark as default"]//*[name()="svg"]')
}

get Vieweditname()
{
    return cy.xpath("//dt[normalize-space()='Name:']")
}

get Vieweditprice()
{
    return cy.xpath("//dt[normalize-space()='Price:']")
}

get Vieweditstrikethrough()
{
    return cy.xpath("//dt[normalize-space()='Strikethrough price:']")
}
get Deletemsg()
{
    return cy.contains("Do you really want to archive this commission plan product?")
}
get yes()
{
    return cy.xpath("//button[normalize-space()='Yes']")
}
get Archieve()
{
    return cy.xpath("//tr[@id='commission_plan_index_table_row_1']//a[@title='Archive']")
}
get Archievemsg()
{
    return cy.contains("Do you really want to archive this commission plan?")
}

get no()
{
    return cy.xpath("//button[normalize-space()='No']")
}

get Restore()
{
    return cy.xpath("//tr[@id='commission_plan_products_table_row_2']//a[@title='Restore']//*[name()='svg']")
}
get restoremsg()
{
    return cy.contains("Do you really want to restore this commission plan product?")
}

}
export default new Commissionplans