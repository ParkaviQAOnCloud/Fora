class Forum{

    get Forum()
    {
        return cy.contains('Forum', { timeout: 5000 })
    }

}
export default new Forum