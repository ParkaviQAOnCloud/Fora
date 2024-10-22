class Profile{

    get Profile()
    {
        return  cy.get('.ml-3')
    }
    get User()
    {
        return  cy.xpath("//h2[normalize-space()='Users']")
    } 
    get Edituser()
    {
        return  cy.xpath("//h3[normalize-space()='Edit user']")
    } 
    get Personalemail()
    {
        return  cy.xpath("//label[normalize-space()='Personal email*']")
    }
    get Personalemailfield()
    {
        return  cy.xpath("//input[@id='id_personal_email']")
    }
    get Foraemail()
    {
        return  cy.xpath("//label[normalize-space()='Fora email']")
    }
    get Foraemailfield()
    {
        return  cy.xpath("//span[@name='email']")
    }
    get Firstname()
    {
        return  cy.xpath("//label[normalize-space()='First name*']")
    }
    get Firstnamefield()
    {
        return  cy.xpath("//span[@name='first_name']")
    }
    get Lastname()
    {
        return  cy.xpath("//label[normalize-space()='Last name*']")
    }
    get Lastnamefield()
    {
        return  cy.xpath("//span[@name='last_name']")
    }
    get Profilepicture()
    {
        return  cy.xpath("//label[normalize-space()='Profile picture']")
    }
    get Clear()
    {
        return  cy.xpath("//label[normalize-space()='Clear']")
    }
    get Clearcheckbox()
    {
        return  cy.xpath("//input[@id='photo-clear_id']")
    }
    get Commissionplan()
    {
        return  cy.xpath("//label[normalize-space()='Commission plan*']")
    }
    get Commissionplanfield()
    {
        return  cy.xpath("//span[@id='select2-id_commission_plan-container']")
    }
    get Advisorcohort()
    {
        return  cy.xpath("//label[normalize-space()='Advisor cohort']")
    }
    get Advisorcohortfield()
    {
        return  cy.xpath("//span[@id='select2-id_cohort-container']")
    }
    get Timezone()
    {
        return  cy.xpath("//label[normalize-space()='Time zone']")
    }
    get Savebutton()
{
    return cy.get('.btn-primary')
}
get error()
{
    return cy.contains("This field is required.")
}
get alert()
{
    return cy.get('.alert')
}
get Timefield()
{
    return  cy.get('#select2-id_timezone-container')
}
get searchfield()
{
    return cy.get('.select2-search__field')
}
get Searchresult()
{
    return   cy.get('.select2-results__option')
}
get Commissionplanfieldresult()
{
    return cy.contains('2023 Standard QUARTERLY FREE')
}
get Advisorcohortfieldresult()
{
    return cy.contains('2022_10_Certified')
}
get Timefieldresult()
{
    return cy.contains('Asia/Kolkata')
}
get Cancel()
{
    return cy.get('.btn-white')
}
}
export default new Profile