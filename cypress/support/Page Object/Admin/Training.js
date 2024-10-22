class Training{

    get training()
    {
        return cy.get(':nth-child(13) > #dropdownMenuButton')
    }
    get tracks()
    {
        return cy.xpath("//a[normalize-space()='Tracks']")
    }
    get add()
    {
        return cy.xpath("//a[normalize-space()='Add']")
    }
    get searchbar()
    {
        return cy.xpath("//input[@role='searchbox']")
    }
get Name()
{
    return cy.get('#id_name')
}
get Slug()
{
    return cy.get('#id_slug')
}
get Description()
{
    return cy.get('#id_description')
}
get Status()
{
    return cy.get('#select2-id_status-container')
}

get Comingsoon()
{
    return cy.get('#select2-id_status-result-dvao-pending')
}
get Internalname()
{
    return cy.get('#id_internal_name')
}
get Quiztitle()
{
    return cy.get('#id_quiz_title')
}
get Image()
{
    return cy.get('#id_image')
}
get save()
{
    return cy.get('.btn-primary')
}
get logout()
{
     return cy.get('.px-6 > .ml-4')
}
get Searchbar1()
{
    return cy.get('#searchbar')
}
get view()
{
    return cy.xpath("//a[@title='View']")
}
get Add()
{
    return cy.xpath("//a[normalize-space()='Add']")
}
get Note()
{
    return cy.get('#id_notes')
}
get Edit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get Mainedit()
{
    return cy.xpath("//a[normalize-space()='Edit']")
}
get trainingmodule()
{
    return cy.xpath("//a[normalize-space()='Training modules']")
}
}
export default new Training