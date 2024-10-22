class onboarding{
    get fora()
    {
        return cy.get('.inset-0')
        
    }
get everything()
{
    return cy.contains('Everything you need to succeed as a travel advisor')
}
get Annual()
{
    return cy.contains('Annual')
}
get Quarterly()
{
    return    cy.xpath("//button[normalize-space()='Monthly']")
    // cy.get('[class="shrink-0 w-1/2 p-1 rounded-[27px] text-medium text-white font-bold bg-success shadow-[0_2px_10px_rgba(33,185,138,0.25)]')
}
get subscribe()
{
    return cy.get('[class="btn btn-primary justify-center py-3 w-full"]')
}
get createaccount()
{
    return cy.get('[class="mb-1 text-2xl font-bold md:text-jumbo md:text-center md:mb-4"]')
}
get emailconfirmation()
{
    return cy.get('[class="text-header md:text-2xl font-bold"]')
}
get emailheader()
{
    return cy.xpath("//h3[normalize-space()='Email']")
}
get emaildropdown()
{
    return cy.xpath("//div[@class='flex items-center p-6 md:p-8 cursor-pointer']//*[name()='svg']")
}
get emailcopy(){
    return cy.xpath("//button[normalize-space()='Copy']")
}
get supportmail()
{
    return cy.xpath("//a[normalize-space()='support@fora.travel']")
}
get foramail()
{
    return cy.xpath("//p[normalize-space()='Fora email']")
}
get personalemail()
{
    return cy.xpath("//p[normalize-space()='Personal recovery email']")
}
get continue()
{
    return cy.get('[class="justify-center w-full px-6 py-3 btn-primary md:w-auto"]')
}
//Personal information field
get personalinfo()
{
    return cy.xpath("//h2[normalize-space()='Personal information']")
}
get country()
{
    return  cy.get('.css-1wy0on6')
}
get countryname()
{
    return cy.get('#react-select-country_id-option-0')
}
get countrytext()
{
    return cy.get(".css-19bb58m")
}
get nooption()
{
    return cy.get('.css-9x5mqu')
}
get typecountryname()
{
    return cy.get('#react-select-country_id-option-0')
}
get address()
{
    return cy.get('#address')
}
get acountryname()
{
    return cy.get('#react-select-country_id-option-1')
}
get errormessage()
{
    return cy.xpath("//div[@class='my-1 text-medium text-error items-start whitespace-pre-wrap flex']")
}
get appartment()
{
    return cy.xpath("//input[@id='address_additional']")
}
get city()
{
    return cy.get('#city')
}
get state()
{
    return cy.get('#state')
}
get zipcode()
{
    return cy.get('#postal_code')
}
get zipcodeerror()
{
    return cy.get('.my-1')
}
get ziperrorcode1()
{
    return cy.contains("Please, enter a valid postal code.") 
  
}
get ziperrorcode2()
{
    return cy.contains("Ensure this field has at least 2 characters.") 
  
}

get countryflag()
{
    return cy.get('.PhoneInputCountrySelect')
}
get phonenumber()
{
    return cy.get('[data-testid="phone-input"]')
}
get phoneerror()
{
    return cy.get('[data-testid="error-message"]')
}
get checkbox()
{
    return cy.xpath("//input[@id='is_entity_account']")
}
get entityname()
{
    return cy.xpath("//input[@id='entity_name']")
}
get entitytitle()
{
    return cy.xpath("//input[@id='entity_advisor_title']")
}
get entityerror()
{
    return cy.get("div[class='rounded-md bg-red-100 p-4'] div[class='flex items-center']")
}
get newpassword()
{
    return cy.get('#new_password')
}
get eyeicon()
{
    return cy.get('.grid > :nth-child(1) > :nth-child(2) > .absolute')
}
get newpassworderror()
{
    return cy.xpath("//div[normalize-space()='The password must contain at least 10 characters.']")
}
get requirederror()
{
    return cy.get("div[class='grid grid-cols-2 gap-y-6'] div[class='col-span-2'] div div[class='flex items-center']")
}
get confirmpassword()
{
    return cy.get('#confirm_password')
}
get confirmpassworderror()
{
    return cy.contains("The two password fields didn't match.")
}
get submit()
{
    return cy.get('#agree')
}
///Terms and condition page
get terms()
{
    return cy.get("label[for='compensation_terms_agree']")
}
get advisoragreement()
{
    return cy.xpath("//h4[normalize-space()='Fora Travel Advisor Standard Agreement']")
}
get advisoragreementtext()
{
    return cy.xpath("//p[contains(text(),'The Fora Travel Advisor Independent Contractor Agr')]")
}
get independedntagreement()
{
    return cy.xpath("//h4[contains(text(),'Fora Travel Advisor Independent Contractor Agreeme')]")
}
get termscheckbox()
{
return cy.get("#compensation_terms_agree")
}
get policy()
{
    return cy.get("label[for='terms_conditions_agree']")
}
get policycheckbox()
{
return cy.get("#terms_conditions_agree")
}

get agreementcontinue()
{
    return cy.xpath("//div[@class='p-6 md:p-8 border-t border-stroke']//button[@id='agree']")
}
get paymentreview()
{
    return cy.xpath("//h4[normalize-space()='Review your subscription details']")
}
get annualplantext()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get quaterplan()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get quaterlyplanmsg()
{
    return cy.xpath("//p[@class='text-medium md:text-header md:font-bold text-secondaryDark']")
}
get carderrormessage()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get cardnumberincomplete()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get cardexpirationerror()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get csvcarderror()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get countrydropdwon()
{
    return cy.xpath("//p[@class='text-medium font-bold md:text-header']")
}
get createaccountbutton()
{
    return cy.xpath("//button[normalize-space()='Create your account']")
}

get text()
{
    return cy.get('.text-staticMobileTitle')
}
get schedulesessionbutton()
{
    return cy.xpath("//button[normalize-space()='Schedule Session']")
}
get schedulesessiontitle()
{
    return cy.xpath("//h2[normalize-space()='Schedule your Group Onboarding Session']")
}
get schedulelater()
{
    return cy.xpath("//button[normalize-space()='Schedule Later']")
}
get startyouronboarding()
{
    return cy.get('.mt-6 > .justify-center')
}
get Plantext1()
{
    return cy.contains('Start at 70% commission split')
}
get Plantext2()
{
    return cy.contains('Live training and mentorship')
}
get Plantext3()
{
    return cy.contains('Access to 4,500+ preferred suppliers')
}

get Plantext4()
{
    return cy.contains('Global community of travel pros')
}
get Plantext5()
{
    return cy.contains('Custom marketing tools')
}
get Annualplantext()
{
    return cy.contains('BEST VALUE: Save 35% with annual plan')
}
get Quaterlyplan()
{
    return cy.get('[class="text-smallLH20 font-bold line-through"]')
}
}
export default new onboarding