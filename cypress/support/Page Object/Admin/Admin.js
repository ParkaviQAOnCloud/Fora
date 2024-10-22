class Admin {
    get adminlogin()
    {
        return cy.xpath("//a[normalize-space()='Sign in with Fora Google']")
    }
    get navbar()
    {
        return cy.get('#navbar-open')
    }
get invitation()
{
    return cy.get('[href="/invitation/"]')
}
get newinvite()
{
    return cy.xpath("//span[normalize-space()='New Advisor Invitation']")
}
get personalmail()
{
    return cy.get('#id_personal_email')
}
get firstname()
{
    return cy.get('#id_first_name')
}

get lastname()
{
    return cy.get('#id_last_name')
}

get foraemail()
{
    return cy.get('#id_email')
}
get idbaseurl()
{
    return cy.get('#id_base_fora_email')
}


get commissionplan()
{
    
        return cy.get('#select2-id_commission_plan-container')  
}
get dropdown()
{
    return cy.xpath("//span[@role='presentation']")
}
get dropdownoption()
{
    return cy.get('[aria-selected="false"] > .text-sm > p')
}
get tags()
{
    return cy.get('.select2-search__field')
}
get tagdropdown()
{
    return cy.get('.select2-search__field')
}
get privatenote()
{
    return cy.get('.select2-selection.select2-selection--multiple')
}
get forateam()
{
    return cy.get('#select2-id_feature_tags-result-v8hh-fora_team')
}
get selectforateam()
{
    return cy.get('.select2-results__option')
}
get save()
{
    return cy.get('.btn-primary')
}
get alert()
{
    return cy.get('.alert > .flex > .ml-3 > .text-sm')
}
get alertmessage()
{
    return cy.contains('Invitation for "Reenaz fathima" was successfully added'
      )
}
get view()
{
    return cy.get('[width="140px"] > .flex > .btn-primary')
}
}
export default new Admin