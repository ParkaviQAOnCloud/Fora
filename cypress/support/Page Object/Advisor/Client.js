class Client {
    get Client() {
        return cy.xpath("//span[normalize-space()='Clients']", { timeout: 5000 });
    }
    get clientheader()
    {
        return cy.xpath("//h1[normalize-space()='Clients']", { timeout: 5000 })
    }
    get searchbar()
    {
        return cy.get('[data-testid="search"]', { timeout: 5000 })
    }
    get clients_hyperlink()
    {
        return cy.xpath("//a[@class='hover:underline text-nowrap']")
    }
    get searchbar_PlaceHolder()
    {
        return cy.xpath("(//label[@class='w-full md:w-8/12 flex items-baseline gap-x-2 rounded relative'])[1]", { timeout: 5000 })
    }
    
    get Addclient()
    {
        return cy.xpath("//div[@class='hidden md:block']//button[@type='button'][normalize-space()='Add Client']")
    }
    get Addclientheader()
    {
        return cy.xpath("//h3[normalize-space()='Add Client']")
    }
    get Add_a_new_clientPOP()
    {
        return cy.xpath("(//h3[normalize-space()='Add a new client'])[1]")
    }
    get AddFirstnameheader()
    {
        return cy.xpath("(//label[@for='first_name'])[1]")
    }
    get Addfirstnamefield()
    {
        return cy.xpath("//input[@id='first_name']")
    }
    get AddLastnameheader()
    {
        return cy.xpath("(//label[@for='first_name'])[1]")
    }
    get AddLastnamefield()
    {
        return cy.xpath("//input[@id='last_name']")
    }
    get Preferrednameheader()
    {
        return cy.get("label[for='preferred_name']")
    }
   
    get Preferrednamefield()
    {
        return cy.xpath("(//input[@id='preferred_name'])[1]")
    }

    get Suffixheader()
    {
        return cy.xpath("//label[normalize-space()='Suffix']")
    }
    get Suffixfield()
    {
        return cy.xpath("//div[6]//div[1]//input[1]")
    }

    get Pronounsheader()
    {
        return cy.xpath("//label[normalize-space()='Pronouns']")
    }
    get Pronounsfield()
    {
        return cy.xpath("//button[@id='name-pronouns']")
    }
    get sheorher()
    {
return cy.contains('She/her')
    }
    get heorhim()
    {
return cy.contains('He/him')
    }
    get Theyorthem()
    {
return cy.contains('They/them')
    }
    get threedot_Button()
    {
return cy.xpath("(//button[@class='inline-flex cursor-pointer items-center justify-center rounded-xl whitespace-nowrap font-semibold gap-2 focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-link h-12 leading-[48px] min-w-12 text-main enabled:hover:bg-[#1414140f] disabled:text-disabled'])[1]")
    }
    get Cancelbutton()
    {
        return cy.get('.action-button-bar > .text-main')
    }
    get Cancelicon()
    {
        return cy.xpath("//body/div[@id='__next']/div[3]/div[1]/div[1]/div[1]/*[1]")
    }
    get Addbutton()
    {
        return cy.xpath("//button[normalize-space()='Add']")
    }
    get Clienticon()
    {
        return cy.get('[class="bg-mainHoliday text-secondaryDark rounded-full flex items-center justify-center font-black w-12 h-12 min-w-12 min-h-12 text-lg mr-6"]')
    }
    get Newclientname()
    {
        return cy.xpath("//h1[normalize-space()='New Client']")
    }
    get Actionbutton()
    {
        return cy.xpath("//div[@id='__next']//div//div//div//div//div//article//div//header//div//div//div//button[contains(@type,'button')]")
    }
    get Deleteclient()
    {
        return cy.xpath("//button[normalize-space()='Delete Client']")
    }
    get Booking()
    {
        return cy.xpath("//span[contains(@class,'text-nowrap')][normalize-space()='Bookings']")
    }
    get CommissionableValue()
    {
        return cy.xpath("//span[contains(@class,'hidden md:inline-block')]")
    }
    get Commission()
    {
        return cy.xpath("//span[normalize-space()='Commissions']")
    }
    get About()
    {
        return cy.xpath("//button[normalize-space()='About']")
    }
    get Creditcard()
    {
        return cy.xpath("//button[normalize-space()='Credit Cards']")
    } 
     get Loyaltyprograms()
    {
        return cy.xpath("//button[normalize-space()='Loyalty Programs']")
    }  
    get Associatedtravelers()
    {
        return cy.xpath("//button[normalize-space()='Associated Travelers']")
    }
    get Notes()
    {
        return cy.xpath("//button[normalize-space()='Notes']")
    }
    get Contact()
    {
        return cy.xpath("//span[normalize-space()='Contact']")
    }
    get Contacticon()
    {
        return cy.xpath("//body/div/div/div/div/div/div/article/div/div/div/div/div[1]/div[1]//*[name()='svg']")
    }
    get Edit()
    {
        return cy.get('[data-testid="edit-button"]')
    }
    get Name()
    {
        return cy.xpath("//span[normalize-space()='Name']")
    }
    get Namefield()
    {
        return cy.get('[class="flex flex-col gap-y-1]')
    }
    get Editing()
    {
        return cy.xpath("//span[normalize-space()='Editing']")
    }

    get Prefix()
    {
        return cy.xpath("//label[normalize-space()='Prefix']")
    }

    get Prefixfield()
    {
        return cy.xpath("//button[@id='name-prefix']")
    }
    get Mrs()
    {
        return cy.get('[data-testid="option-Mrs"]')
    }
    get Miss()
    {
        return cy.get('[data-testid="option-Miss"]')
    }
    get Ms()
    {
        return cy.get('[data-testid="option-Ms"]')
    }
    get Dr()
    {
        return cy.get('[data-testid="option-Dr"]')
    }
    get Firstname()
    {
        return cy.xpath("(//label[@for='first_name'])[1]")

    }
    get Firstname_Edit()
    {
        return cy.xpath("//label[normalize-space()='First Name']")

    }
    get Middlename_edit()
    {
        return cy.xpath("//label[normalize-space()='Middle name']")

    }
    get Lastname_edit()
    {
        return cy.xpath("//label[normalize-space()='Last Name']")


    }
    get Firstnamefield()
    {
        return cy.get('[class="shadow-0 text-medium focus:ring-0 focus:border-main block w-full border-stroke rounded-xl py-[11px] px-4 placeholder:text-main/50 form-control wrapper-test-field"]')

    }
    get Middlename()
    {
        return cy.xpath("//label[normalize-space()='Middle name']")

    }
    get Middlenamefield()
    {
        return cy.xpath("(//input[@id='middle_name'])[1]")

    }
    get Middlenamefield_Contact()
    {
        return cy.xpath("//div//div//div//div//div//div//div//div[3]//div[1]//input[1]")

    }
    get Lastname()
    {
        return cy.xpath("//label[@for='last_name']")


    }
    get Preferrednameheader_edit()
    {
        return cy.xpath("//label[normalize-space()='Preferred Name']")
    }
    get Preferrednamefield_edit()
    {
        return cy.xpath("//body/div[@id='__next']/div/div/div/div/div/article/div/div/div/div/div/div/div/div/div/input[1]")
    }
    
    get Lastnamefield()
    {
        return cy.get('[class="shadow-0 text-medium focus:ring-0 focus:border-main block w-full border-stroke rounded-xl py-[11px] px-4 placeholder:text-main/50 form-control wrapper-test-field"]')


    }
    get CancelButton()
    {
        return cy.xpath("//button[normalize-space()='Cancel']")
    }
    get closesymbol_Search()
    {
        return cy.xpath("(//div[@class='form-control-icon--error-icon absolute inset-y-0 right-0 pr-3 flex items-center z-9'])[1]")
    }
    get closesymbol_AddClient()
    {
        return cy.xpath("(//button[@class='justify-center flex items-center disabled:cursor-default focus-visible:outline-selected focus-visible:outline focus-visible:outline-1 text-main bg-transparant hover:bg-main/[.06] disabled:text-disabled disabled:hover:bg-main/[0] disabled:bg-transparant h-8 min-w-8 rounded-xl'])[1]")
    }
    get Addnewclient_Button()
    {
        return cy.xpath("(//button[normalize-space()='Add new client'])[1]")
    }
    get Save()
    {
        return cy.xpath("//button[normalize-space()='Save']")
    }
    get Email()
    {
        return cy.xpath("(//span[normalize-space()='Email'])[1]")
    }
    get PersonalEmail()
    {
        return cy.xpath("//label[normalize-space()='Personal Email']")
    }
    get WorkEmail()
    {
        return cy.xpath("//label[normalize-space()='Work Email']")
    }
    get OtherEmail()
    {
        return cy.xpath("//label[normalize-space()='Other Email']")
    }
    get PersonalEmailtextfield()
    {
        return cy.get(':nth-child(1) > .shadow-0')
    }
    get WorkEmailtextfield()
    {
        return cy.get(':nth-child(2) > .shadow-0')
    }
    get OtherEmailtextfield()

    {
        return cy.get(':nth-child(3) > .shadow-0')
    }
    get Error()
    {
        return cy.contains("Please enter a valid email")
    }
  
    get Countrydropdown()
    {
        return cy.get('[class="PhoneInputCountrySelect"]')
    }
    get Phonenumber()
    {
        return cy.xpath("(//span[normalize-space()='Phone Number'])[1]")
    }
    get Addressname()
    {
        return cy.contains('Address')
    }
    get Addressnamefield()
    {
        return cy.get('[placeholder="Example: Summer house"]')
    }
    get Country()
    {
        return cy.get('[placeholder="Select country"]')
    }
    get Addressfield()
    {
        return cy.get('[placeholder="Enter address"]')
    }
    get City()
    {
        return cy.get('[placeholder="Enter city"]')
    }
    get State()
    {
        return cy.get('[placeholder="Enter state"]')
    }
    get Zipcode()
    {
        return cy.get('[placeholder="Enter code"]')
    }
    get Addanotheraddress()
    {
        return cy.xpath("//button[normalize-space()='+ add another address']")
    }
    get Address2()
    {
        return cy.contains('Address #2')
    }
    get Addressdelete()
    {
        return cy.get('[class="inline-flex cursor-pointer items-center justify-center rounded-xl whitespace-nowrap font-semibold gap-2 focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-link h-12 leading-[48px] min-w-12 text-main enabled:hover:bg-[#1414140f] disabled:text-disabled -my-3"]')
    }
    get Personaldetails()
    {
        return cy.xpath("//span[normalize-space()='Personal Details']")
    }
    get Personaldetailsicon()
    {
        return cy.xpath("//body/div/div/div/div/div/div/article/div/div/div/div/div[2]/div[1]//*[name()='svg']")
    }
    get Importantdates()
    {
        return cy.xpath("//span[normalize-space()='Important Dates']")
    }
    get Allergies()
    {
        return cy.xpath("//span[normalize-space()='Allergies & Dietary Restrictions']")
    }
    get Editing()
    {
        return cy.contains("Editing")
    }
    get Nameofdate()
    {
        return cy.contains('Name of date')
    }
    get Birthday()
    {
        return cy.contains('Birthday')
    }
    get date()
    {
        return cy.contains('Date')
    }
    get dropdown()
    {
        return cy.get('[class="dropdown-button text-tertiaryOld"]')
    }
    get May()
    {
        return cy.get('[data-testid="option-5"]')
    }
    get April()
    {
        return cy.get('[data-testid="option-4"]')
    }
    get dateofbirthdate()
    {return cy.get('[data-testid="option-4"]')}
    get dateofbirthdate1()
    {return cy.get('[data-testid="option-13"]')}
    get Year()
    {
        return cy.get('[data-testid="option-1999"]')
    }
    get Year1()
    {
        return cy.get('[data-testid="option-2021"]')
    }
    get Datedropdown()
    {
        return cy.xpath("(//button[@type='button'][normalize-space()='Day'])[1]")
    }
    get Saveddate()
    {
        return cy.xpath('/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/article[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[1]/span[2]')
    }
    get anotherdate()
    {
        return cy.get('.link-button')
    }
    get Datecancel()
    {
        return cy.get('.flex-col > :nth-child(1) > .flex > .inline-flex')
    }
    get deletebutton()
    {
        return cy.get('.gap-y-6 > :nth-child(3) > .inline-flex')   
     }
     get deletebutton1(){
        return cy.get('.pb-6 > .grid > :nth-child(4)')
     }
     get Nameofdatefield()
     {
        return cy.xpath("//body//div//div//div//div//div//div//article//div//div//div//div//div//div//div//div//div//div//input")
     }
     get Selectcommonoption()
     {
        return cy.xpath("//span[normalize-space()='Select common options']")
     }
     get Allergiesdropdwon()
     {
        return cy.contains("Select")
     }
     get TreeNuts()
     {
       return cy.get('[data-testid="option-Tree Nuts"]')
     }
     get Vegan()
     {
        return cy.get('[data-testid="option-Vegan"]')
     }
     get Addcustomoption()
     {
        return cy.xpath("//span[contains(text(),'Add custom options')]")
     }
     get Flightinfoicon()
     {
        return cy.xpath("//body/div/div/div/div/div/div/article/div/div/div/div/div[3]/div[1]//*[name()='svg']")
     }
     get Flightinfo()
     {
        return cy.xpath("//span[normalize-space()='Flight Info']")
     }
     get navbar_New()
     {
        return cy.xpath("//button[@data-testid='icon-button']")
     }
     get Flightready()
     {
        return cy.xpath("//span[normalize-space()='Flight Ready?']")
     }
     get Readytag()

     {
        return cy.xpath("//span[@class='rounded-full px-3 py-1 text-md font-semibold bg-lightGreyBorder text-secondaryDark']")
     }
     get Wraningmsg()
     {
        return cy.contains("By saving, I confirm that the below information matches the client's passport or government issued ID.")
     }
     get Legalname ()
     {
        return cy.contains("Legal Name")
     }
     get Legalnameedit()
     {
        return cy.xpath("//button[normalize-space()='Edit']")
     }
     get Legalnameeditfield()
     {
        return cy.get('[class="shadow-0 text-medium focus:ring-0 focus:border-main block w-full border-stroke rounded-xl py-[11px] px-4 placeholder:text-main/50 form-control wrapper-test-field"]')
     }
     get Confirmmsg()
     {
        return cy.contains('Confirm legal name matches passport or government-issued ID')
     }
     get Confirmcheckbox()
     {
        return cy.xpath("//label[contains(text(),'Confirm legal name matches passport or government-')]")
     }
     get Legalbirthday ()
     {
        return cy.xpath("//span[normalize-space()='Legal Birthday']")
     }
     get Legaldateofbirthdate()
     {
        return cy.get('[class="dropdown-button"]')
     }
     get Confirmcheckbox1()
     {
        return cy.xpath("//label[contains(text(),'Confirm birthday matches passport or government is')]")
     }
     get Sex()
     {
        return cy.contains("Sex")
     }
     get Sexlabel()
     {
        return cy.xpath("//label[normalize-space()='As appears on passport or government-issued ID']")
     }
     get Female()

    {
        return cy.get('[data-testid="option-F"]')
    }
    get Phone()
    {
        return cy.xpath("//span[normalize-space()='Phone']")
    }
    get Readytaggreen()

{
    return cy.xpath("//span[@class='rounded-full px-3 py-1 text-md font-semibold bg-lightGreenBg text-success']")
}
get Lockedmsg()
{
    return cy.contains("Field locked. Edit in Flight Ready section.")
}
get KTN()
{
    return cy.xpath("//span[normalize-space()='Known Traveler Number']")
}
get Yeardropdown()
{
    return cy.xpath('//div//div//div//div//div//div//div//div[3]//div[2]//div[1]//div[1]//div[3]//button[1]')
}
get KTNEditing()
{
    return cy.contains("Editing")
}
get KTNlabel()
{
    return cy.xpath("//label[normalize-space()='KTN (Global Entry, TSA Pre or NEXUS)']")
}
get KTNtextbox()
{
    return cy.get('.shadow-0')
}
get enteredKTNdata()
{
    return cy.xpath("//span[normalize-space()='abcd123654']")
}
get Cardicon()
{
    return cy.get('[class="mb-2 text-secondaryDark"]')
}
get CreditCardtext()
{
    return cy.contains('Credit Cards')
}
get CreditCardtext1()
{
    return cy.contains("Add your client's credit card for easy booking.")
}
get CreditCardtext2()
{
    return cy.contains("Secure and simple to manage.")
}
get Addcardbutton()
{
    return cy.xpath("//button[normalize-space()='Add Card']")
}

get Addcardtext()
{
    return cy.contains("Securely add client’s credit card")
}
get Addcardtext1()
{
  
  return cy.contains("Copy this link and send to clients")
}
get Addcardtext2()
{
    return cy.contains("Card entry link")
}
get Addcardtext3()
{
    return cy.contains("Link will expire in 48 hours")
}
get Link()
{
    return cy.get('[class="pr-4 border-r border-lightGreyBorder text-medium font-bold overflow-hidden break-all mr-4"]')
}
get Copylink()
{
    return cy.get('[data-testid="button-clipboard"]')
}
get Copied()
{
    return cy.contains('Copied!')
}
get Entermanually()
{
    return cy.get('[class="cursor-pointer text-medium font-bold text-link hover:underline"]')
}
get Closecard()
{
    return cy.xpath("//button[normalize-space()='Close']")
}
get Visaimg()
{
    return cy.get('[class="max-w-[82px]"]')
}
get cardcount()
{
    return cy.contains("1")
}
get Createdcard()
{
    return cy.get('[class="border p-6 rounded-lg drop-shadow-md bg-white cursor-pointer hover:bg-lightGreyBg"]')
}
get addcardnew ()
{
    return cy.xpath("//button[normalize-space()='Add Card']")
}
get Addcardcancelicon()
{
    return cy.get('[class=" fill-main cursor-pointer"]')
}
get Creditcarddetails()
{
    return cy.xpath("//h3[normalize-space()='Credit Card Details']")
}
get Creditcarddetailstext()
{
    return cy.xpath("//p[contains(text(),'All items are safely and securely stored within Va')]")
}
get Expdate()
{
    return cy.xpath("//div[normalize-space()='Exp. Date']")
}
get CCV()
{
    return cy.xpath("//div[contains(text(),'CCV')]")
}
get Billingaddress()
{
    return cy.xpath("//div[normalize-space()='Billing Address']")
}
get Cardaddedon()
{
    return cy.contains("Card added on ")
}
get Cardnumber()
{
    return cy.xpath("//div[contains(text(),'Card Number')]")
}
get Cradholdername()
{
    return cy.xpath("//div[normalize-space()='Cardholder Name']")
}
get Deletecard()
{
    return cy.xpath("//button[normalize-space()='Delete Card']")
}
get Editcard()
{
    return cy.xpath("//button[normalize-space()='Edit']")
}
get Cancelcard()
{
    return cy.xpath("//button[normalize-space()='Close']")
}
get Deletecardtext()
{
    return cy.xpath("//h3[normalize-space()='Delete Credit Card?']")
}
get Banner()
{
    return cy.xpath("//div[contains(@data-testid,'banner-info-warning')]//div")
}
get delete_traveler()
{
    return cy.xpath("//button[normalize-space()='Delete Traveler']")
}
get Deletecardtext1()
{
    return cy.contains('Are you sure you want to delete')
}
get Deletecardtext2()
{
    return cy.contains('Visa')
}
get Deletecardtext3()
{
    return cy.contains(' card ending in ')
}
get Deletecardtext4()
{
    return cy.contains('? This action is permanent.')
}
get Deletecancel()
{
    return cy.xpath("//button[normalize-space()='Cancel']")
}
get CardDeletebutton()
{
    return cy.xpath("//button[normalize-space()='Delete']")
}
get CardHolder()
{
    return cy.xpath("//input[@id='cardHolder']")
}
get Nickname_card()
{
    return cy.xpath("//input[@id='nickname']")
}
get card_Label()
{
    return cy.xpath("//label[normalize-space()='Card label (optional)']")
}
get card_Country_region()
{
    return cy.xpath("//label[normalize-space()='Country or region']")
}
get card_Apt_number_suite_floor()
{
    return cy.xpath("//label[normalize-space()='Apt number, suite, floor, etc.']")
}
get card_HolderNameLabel()
{
    return cy.xpath("//label[normalize-space()='Cardholder name']")
}
get card_information()
{
    return cy.xpath("//span[normalize-space()='Card information']")
}
get Expdate1()
{
    return cy.get('#expiringDate')
}
get card_city()
{
    return cy.xpath("//label[normalize-space()='City']")
}
get card_state()
{
    cy.xpath("//label[normalize-space()='State']")
}
get card_zip()
{
    cy.xpath("//label[normalize-space()='Zip code (postcode)']")
}
get card_Input()
{
    cy.xpath("//input[@id='cardHolder']")
}
get card_country()
{
    cy.get('[class=" css-19bb58m"]')
}
get card_address()
{
    cy.xpath("//input[@id='address']")
}
get card_address_additional()
{
    cy.xpath("//input[@id='address_additional']")
}
get card_cityInput()
{
    cy.xpath("//input[@id='city']")
}
get card_stateInput()
{
    cy.xpath("//input[@id='state']")
}
get card_postalcode()
{
    cy.xpath("//input[@id='postal_code']")
}
get submit_creditcard()
{
    cy.get('#btnSubmit')
}
get successfullyAdded_creditcard()
{
    cy.xpath("//div[normalize-space()='Successfully added credit card']")
}
get successfullyAdded_Editcard()
{
    cy.xpath("//div[normalize-space()='Successfully updated credit card']")
}
get gotit_Editcard()
{
    cy.xpath("//button[normalize-space()='Got it']")
}
get securelyAdded_creditcard()
{
    cy.xpath("//div[contains(text(),'Your card is securely added to the credit card sec')]")
}
get Gotit_creditcard()
{
    cy.xpath("//button[normalize-space()='Got it']")
}
get Loyaltyprogramslogo()
{
 return cy.xpath("//body/div[@id='__next']/div/div/div/div/div/article/div/div/div//*[name()='svg']")
}
get Loyaltyprogramsheader()
{
    return cy.xpath("//h3[normalize-space()='Loyalty Programs']")
}
get Loyaltyprogramssubheader()
{
    return cy.contains("Keep track of your client's memberships and loyalty numbers.")
}
get Addloyalityprogram()
{
    return cy.xpath("//button[normalize-space()='Add Loyalty Program']")
}
get Loyalityprograediting()
{
    return cy.xpath("//span[normalize-space()='Editing']")
}
get Loyalityprogrlabel()
{
    return cy.xpath("//label[normalize-space()='Loyalty program and number*']")
}
get Loyalityprogrameditingdropdown()
{
    return cy.get('[data-testid="typedown-0"]')
}
get AirAsia()
{
    return cy.get('#prefix-option-87')
}
get Loyalityprogrameditingdropdown1()
{
    return cy.get('[data-testid="typedown-0-caret"]')
}
get Enternumber()
{
    return cy.get('[placeholder="Enter number"]')
}
get Loyalityprogramupdateddata()
{
    return cy.get('[class="flex flex-col gap-y-4"]')
}
get Loyalityprogramedit()
{
    return cy.get('[data-testid="edit-button"]')
}
get Loyalityprogramaddanotherprogram()
{
    return cy.xpath("//button[normalize-space()='+ add another program']")
}
get Option1()
{
    return cy.get('[data-testid="typedown-1-caret"]')
}
get Jetairways()
{
    return cy.get('#prefix-option-57')
}
get Errorloyalty()
{
    return cy.xpath("//div[contains(text(),'Loyalty number is required')]")
}
get required_FirstName()
{
    return cy.get("body > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)")
}
get required_LastName()
{
    return cy.get("body > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)")
}
get LoyalityDeletebutton()
{
    return cy.get('[data-testid="delete"]')
}
get Associatedtravelersicon()
{
    return cy.get('[class="mb-2 text-secondary"]')
}
get Associatedtravelerstext()
{
    return cy.xpath("//h3[normalize-space()='No associated travelers found']")
}
get Associatedtravelerstext1()
{
    return cy.xpath("//p[contains(text(),'Store information about all people who might be tr')]")
}
get Addtraveler()
{
    return cy.xpath("//button[normalize-space()='Add Traveler']")
}
get Noteicon()
{
    return cy.get('[class="mb-2 text-secondaryDark"]')
}
get Notetext()
{
    return cy.xpath("//h3[normalize-space()='Notes']")
}
get Notetext1()
{
    return cy.xpath("//p[contains(text(),'Use the notes section for keeping track of custom ')]")

}
get AddNotebutton()
{
    return cy.xpath("//button[normalize-space()='Add Note']")
}
get Image()
{
    return cy.get('[class="ql-image"]')
}
get NoteLink()
{
    return cy.get('[class="ql-link"]')
}
get NoteTextbox()
{
    return cy.get('.ql-editor > p')
}
get Linktextbox()
{
    return cy.get('.ql-tooltip > input')
}
get Linksave()
{
    return cy.get('.ql-action')
}
get Addtravelerheader()
{
    return cy.xpath("//h3[normalize-space()='Add Traveler']")
}
get Addtravelerheadersubheading()
{
    return cy.contains("Enter the details of the traveler below or")
}
get Addtravelerfirstname ()
{
    return cy.xpath("//label[@for='first_name']//span[contains(text(),'Required')]")
}
get Addtravelerlastname ()
{
    return cy.xpath("//label[@for='last_name']")
}
get Addtravelerfirstnamefield ()
{
    return cy.xpath("//input[@id='first_name']")
}
get Addtravelerlastnamefield ()
{
    return cy.xpath("//input[@id='last_name']")
}
get Realtionshiptoclient ()
{
    return cy.xpath("//label[@for='relationship']//span[contains(text(),'Required')]")
}
get Realtionshiptoclientdropdown ()
{
    return cy.get('[class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-4 focus:outline-none"]')
}
get Friend()
{
    return cy.get('#prefix-option-friend')
}
get AddtravelerCancel()
{
    return cy.xpath("//button[normalize-space()='Cancel']")
}
get AddtravelerAdd()
{
    return cy.xpath("//button[normalize-space()='Add']")
}
get Traveller()
{
    return cy.get('.gap-4 > .flex > .rounded-full')
}
get Converttoaddcreditcards()
{
    return cy.xpath("//h3[normalize-space()='Convert to add credit cards']")
}
get Converttoaddcreditcardstext()
{
    return cy.xpath("//p[contains(text(),'In order to store credit cards, you must convert t')]")
}
get Converttoclient()
{
    return cy.xpath("//div[@data-testid='banner-info-warning']//div//div//div//button[contains(text(),'Convert to Client')]")
}
get Cradicon()
{
    return cy.get('[class="mb-2 text-secondary"]')
}
get AddtravelerCreditCards()
{
    return cy.xpath("//h3[normalize-space()='Credit Cards']")
     
}
get AddtravelerCreditCardstext()
{
    return cy.contains("Add your client's credit card for easy booking.]")
     
}
get AddtravelerCreditCardstext1()
{
    return cy.xpath("//p[normalize-space()='Secure and simple to manage.']")
     
}
get Converttoclient1()
{
    return cy.xpath("//button[normalize-space()='Convert to Client']")
}
get Converttoclientdialoguebox()
{
    return cy.xpath("//h3[normalize-space()='Convert Traveler to Client?']")
}
get Converttoclientdialogueboxtext()
{
    return cy.contains("Converting this traveler to a client will allow you to add credit cards and travelers to that client.")
}
get Converttoclientdialogueboxtext1()
{
    return cy.contains("The new client will remain linked to the profile of")
}
get Converttoclientdialogueboxcancel()
{
    return cy.xpath("//button[normalize-space()='Cancel']")
}
get Converttoclientdialogueboxconvert()
{
    return cy.xpath("//button[normalize-space()='Convert']")
}
get Greentag()
{
    return cy.get('[class="rounded-full px-3 py-1 text-md font-semibold bg-lightGreenBg text-success"]')
}
get clienttraveler()
{
    return cy.get('[class="flex md:justify-between w-full md:items-center md:flex-row p-6 flex-row justify-between"]')
}
get Traveleractionbutton ()
{
    return cy.get('[class="inline-flex cursor-pointer items-center justify-center rounded-xl whitespace-nowrap font-semibold gap-2 focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-link h-12 leading-[48px] min-w-12 text-main enabled:hover:bg-[#1414140f] disabled:text-disabled"]')
}                  
get Editrealtionship()
{
    return cy.xpath("//button[normalize-space()='Edit Relationship']")
}
get UnlinkfromClient1 ()
{
    return cy.xpath("//button[normalize-space()='Unlink from Client Client']")
}
get UnlinkfromClient ()
{
    return cy.xpath("//button[normalize-space()='Unlink from Traveler Client']")
}
get Editrealtionshipwindow()
{
    return cy.xpath("//h3[normalize-space()='Edit Relationship']")
}
get Editrealtionshipsubheader()
{
    return cy.xpath("//div[contains(text(),'Select a new relationship below.')]")
}
get Realtionshiptoclientheader()
{
    return cy.xpath("//label[@for='relationship']")
}
get Realtionshiptoclientheader1()
{
    return cy.xpath("//span[normalize-space()='Required']")
}
get Realtionshiptoclientheaderdropdown()
{
    return cy.get('[class="-mt-[2px] ml-1 transition-all fill-secondaryDark"]')
}
get Siblings()
{
    return cy.get('#prefix-option-sibling')
}
get Siblingstext()
{
    return cy.contains('sibling')
}
get Visitclientpage()
{
    return cy.xpath("//a[normalize-space()='Visit Client Page']")
}
get formatOptions()
{
    return cy.get('div.ql-toolbar button')
}
get aftersave_notename()
{
    return cy.get('.markdown')
}

get Unlinkclient()
{
    return cy.xpath("//h3[normalize-space()='Unlink client']")
}
get Unlinkclientsubheader()
{
    return cy.xpath("//div[contains(text(),'This client will no longer show up on the profile ')]")
}
get Unlinkbutton()
{
    return cy.xpath("//button[normalize-space()='Unlink']")
}
get Deleteclientheader()
{
    return cy.xpath("//h3[normalize-space()='Delete Client']")
}
get Deleteclientsubheader()
{
    return cy.xpath("//body//div[@id='__next']//div[@data-testid='modal-onClose']//div//div//div//div[1]")
}
get Nokeepclient()
{
    return cy.xpath("//button[normalize-space()='No, keep client']")
}
get Yesdeleteclient()
{
    return cy.xpath("//button[normalize-space()='Yes, delete client']")
}
get Noclientfound()
{
    return cy.xpath("//h3[normalize-space()='No clients found']")
}
get Noclientfound1()
{
    return cy.contains("We couldn't find any ")
}
get Noclientfound2()
{
    return cy.contains("clients")
}
get Noclientfound3()
{
    return cy.contains("that match your search criteria")
}
get Searchcancelicon()
{
    return cy.xpath("//div[@data-testid='clear']//*[name()='svg']")
}
get searchresult()
{
    return cy.xpath("//h4[normalize-space()='Client Client']")
}
}

export default new Client;
