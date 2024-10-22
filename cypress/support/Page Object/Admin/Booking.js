class Booking{


    get bookingdropdown()
    {
        return cy.get(':nth-child(4) > #dropdownMenuButton')
    }
    
    get booking()
    {
        return cy.get('[href="/booking/"]')
    }
    get view()
    {
        return cy.xpath("//tr[@id='bookings_index_table_row_1']//a[@title='View']")
    }
    get emailcapturedsort()
    {
        return cy.xpath("//a[normalize-space()='Email captured']//*[name()='svg']")
    }
    get emailresult()
    {
       return cy.contains("June 16, 2021")
    }
    get emailresult1()
    {
        return cy.contains("Oct. 10, 2023")
    }
    get advisorsort()
    {
        return cy.xpath("//th[@id='column_advisor']")
    }
    get advisorresult()
    {
        return cy.contains("User 1 (zoli@opslogic.co)")
    }
    get advisorresult1()
    {
        return cy.contains("User 521 (test.newnew@forastaging.net)")
    }
    get arrivalsort()
    {
        return cy.xpath("//a[normalize-space()='Supplier']//*[name()='svg']")
    }
    get arrivalresult()
    {
        return cy.contains("June 7, 2020")
    }
    get arrivalresult1()
    {
        return cy.contains("July 15, 2025")
    }
    get departuresort()
    {
        return cy.xpath("//a[normalize-space()='Departure']//*[name()='svg']")
    }
    get arrivalresult()
    {
        return cy.contains("March 1, 2021")
    }
    get arrivalresult1()
    {
        return cy.contains("July 29, 2025")
    }
    get suppliersort()
    {
        return cy.xpath("//a[normalize-space()='Supplier']//*[name()='svg']")
    }
    get supplierresult()
    {
        return cy.contains("Valverde Hotel")
    }
    get supplierresult1()
    {
        return cy.contains("Status")
    }
    get statussort()
    {
        return cy.xpath("//a[normalize-space()='Status']//*[name()='svg']")
    }
    get commissionpayablesort()
    {
        return cy.xpath("//a[normalize-space()='Commission payable']//*[name()='svg']")
    }
    get commissionpayableresult1()
    {
        return cy.contains("45696.00")
    }
    get  commissionpayableresult()
    {
        return cy.contains("March 1, 2022")
    }
    get search()
    {
        return cy.get('#searchbar')
    }
    get searchresult()
    {
        return cy.contains("User 328 (reenaz.fathima@forastaging.net)")
    }
    get backtobooking()
    {
        return cy.xpath("//a[@class='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700']")
    }
    get nextpage()
    {
        return cy.xpath("//a[normalize-space()='2']")
    }
    get backarrow()
    {
        return cy.get('.z-0 > .rounded-l-md')
    }
    get frontarrow()
    {
        return cy.xpath("//a[@class='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50']")
    }
    
}
export default new  Booking