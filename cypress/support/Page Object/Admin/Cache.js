class Cache{
    get Cache()
    {
        return cy.xpath("//a[normalize-space()='Cache']")
    }
    get Cacheheader()
    {
        return cy.xpath("//h2[normalize-space()='Cache']")
    }
    get Flushbookingcachebutton()
    {
        return cy.xpath("//a[normalize-space()='Flush bookings cache']")
    }
    get Alert()
    {
        return cy.contains("Cache cleaned")

    }
}
export default new Cache