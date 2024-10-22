class Leads
{
  get Leads()
  {
    return cy.get('[href="/leads"]')
  }
  get Leadsheader()
  {
    return cy.xpath("//h1[normalize-space()='Leads']")
  }
  get checkbox()
  {
    return     cy.get('[type="checkbox"]')
  }
  get Opt()
  {
    return cy.get('.gap-y-6 > .inline-flex')
  }
  get Leadstext()
  {
    return cy.contains("Request and manage new client leads below. Leads are posted Monday-Friday at different times depending on the volume received. Please remember to adhere to the")
  }
  get LeadsProgramguidelines()
  {
    return cy.xpath("//a[normalize-space()='Leads Program guidelines']")
  }
  get Leadsreceived()
  {
    return cy.xpath("//span[normalize-space()='Leads Received']")
  }
  get Leadsbooked()
  {
    return cy.xpath("//span[normalize-space()='Leads Booked']")
  }
  get Closerate()
  {
    return cy.xpath("//span[normalize-space()='Close Rate']")
  }
  get Open()
  {
    return cy.contains("Open")
  }
  get Inprogress()
  {
    return cy.contains("In Progress")
  }
  get Booked()
  {
    return cy.get(':nth-child(4) > .inline-flex')
  }
  get Didnotbook()
  {
    return cy.contains("Did Not Book")
  }
  get Searchbar()
  {
    return cy.xpath("//input[@placeholder='Search by destination']")
  }
  get Phoneicon()
  {
    return cy.get('[class="mb-2 text-secondaryDark"]')
  }
  get Noresults()
  {
    return cy.xpath("//h3[normalize-space()='No Results']")
  }
  get Noresultstext ()
  {
    return cy.contains("Your filters did not result in any leads.")
  }
  get Clearfilter()
  {
    return cy.xpath("//button[normalize-space()='Clear Filters']")
  }
  get Italy()
  {
    return cy.xpath("(//span[contains(text(),'Italy')])[1]")
  }
  get Leadrequest()
  {
    return cy.xpath("//h3[normalize-space()='Lead Request']")
  }
  get Cancelicon()
{
    return cy.get('[class=" fill-main cursor-pointer"]')
}
get Leadrequesttext()
{
    return cy.get('[class="text-header font-semibold"]')
}
get logo()
{
    return cy.get('[class="flex flex-col gap-y-1"]')
}
get Leadrequesttext1()
{
    return cy.contains("Comment why you are qualified for this lead request.")
}
get Submitrequest()
{
    return cy.xpath("//button[normalize-space()='Submit Request']")
}
get Error()
{
    return cy.xpath("//div[normalize-space()='Required field']")
}
get Commentbox()
{
    return cy.xpath("//textarea[@id='request-lead-comment']")
}
get Sortby()
{
    return cy.get('[class="truncate"]')
   
}
get Oldest()
{
  return cy.xpath("//button[normalize-space()='Oldest']")
}
get Newest()
{
  return cy.xpath("//button[normalize-space()='Newest']")
}
get Highesttotalbudget()
{
  return cy.xpath("//button[normalize-space()='Highest total budget']")
}
get Highestnightlyudget()
{
  return cy.xpath("//button[normalize-space()='Highest nightly budget']")
}
get Lowesttotalbudget()
{
  return cy.xpath("//button[normalize-space()='Lowest total budget']")
}
get Lowestnightlyudget()
{
  return cy.xpath("//button[normalize-space()='Lowest nightly budget']")
}
get Filter()
{
  return cy.xpath("//button[normalize-space()='Filters']")
}
get Filterheader()
{
  return cy.xpath("//h3[normalize-space()='Filters']")
}
get Nightlyroombudget()
{
  return cy.xpath("//span[normalize-space()='Nightly room budget']")
}
get Lengthoftripdate ()
{
  return cy.contains("Length of trip (days)")
}
get Travellingwithchildren()
{
  return cy.xpath("//span[normalize-space()='Are you traveling with children?']")
}
get yes()
{
  return cy.xpath("//li[@aria-label='Yes']//div[@aria-disabled='false']")
}
get Type()
{
  return cy.xpath("//span[normalize-space()='Type']")
}

get type1()
{
  return cy.xpath("//body//div[@id='__next']//div[@data-testid='modal-onClose']//div//div//div//div//button[1]")
}
get type2()
{
  return cy.xpath("//body//div[@id='__next']//div[@data-testid='modal-onClose']//div//div//div//div//button[2]")
}
get type3()
{
  return cy.xpath("//body//div[@id='__next']//div[@data-testid='modal-onClose']//div//div//div//div//button[3]")
}
get option()
{
  return cy.get('[class="text-center font-semibold px-4 py-1 rounded-full border border-solid select-none cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:!outline-link bg-white border-lightGreyBorder hover:border-black focus:border-black"]')
}
get Clearall()
{
  return cy.xpath("//button[normalize-space()='Clear All']")
}
get Showleads()
{
  return cy.xpath("//button[normalize-space()='Show leads']")
}
get Filterresult()
{
  return cy.xpath("//h3[normalize-space()='No Results']")
}
get Filterresult1()
{
  return cy.contains("Your filters did not result in any leads.")
}
get Filtercount()
{
  return cy.get('[class="absolute -top-2 -right-2 rounded-full grid place-content-center bg-primary border-2 border-white text-inverse text-caption font-bold select-none size-6"]')
}

get filterbutton()
{
  return cy.get('[class="inline-flex cursor-pointer items-center justify-center rounded-md whitespace-nowrap font-semibold focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-link h-12 leading-[48px] px-[15px] relative grow md:grow-0 border-2 border-black text-main bg-[#1414140f] enabled:hover:bg-[#14141414] disabled:text-disabled disabled:bg-[#1414140a]"]')
}
get Filtercancelicon()
{
  return cy.get('[class=" fill-main cursor-pointer"]')
}
get Submitatriprequest()
{
  return cy.xpath("//span[normalize-space()='Submit a trip request']")
}
get Readytobook()
{
  return cy.xpath("//strong[normalize-space()='Ready to book?']")
}
get Connectwithanadvisor()
{
  return cy.xpath("//span[normalize-space()='Click below to connect with an Advisor!']")
}
get Connectwithanadvisor1()
{
  return cy.xpath("//span[contains(text(),'Our Advisors book hotels, cruises, safaris and mor')]")
}
get Browsingaround()
{
  return cy.xpath("//strong[normalize-space()='Browsing around?']")
}
get Checkoutour()
{
  return cy.xpath("//span[normalize-space()='Check out our']")
}
get Partner()
{
  return cy.xpath("//a[normalize-space()='Partners']")
}
get FAQS()
{
  return cy.xpath("//a[normalize-space()='FAQs on working with an advisor']")
}
get Getstarted()
{
  return cy.xpath("//button[@data-qa='start-button']")
}
get Wheredoyouwanttogo()
{
  return cy.xpath("//span[normalize-space()='Where do you want to go?']")
}
get Wheredoyouwanttogo()
{
  return cy.xpath("//span[normalize-space()='Where do you want to go?']")
}
get Wheredoyouwanttogotextbox()
{
  return cy.xpath("//div[@data-qa-blockref='destination']//div[@data-qa='block-scroller']//div//div//div//div//div//div[@data-qa='question-wrapper']//div//div//div//textarea[@placeholder='Type your answer here...']")
}
get OKbutton ()
{
  return cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]')
}                    
get Whenwouldyouliketotravel()
{
  return cy.xpath("//span[normalize-space()='When would you like to travel?']")
}
get Whenwouldyouliketotraveltext()
{
  return cy.xpath("//em[contains(text(),'Feel free to enter specific dates, a specific mont')]")
}
get Whenwouldyouliketotraveltextbox()
{
  return cy.xpath("//div[@data-qa-blockref='timeline']//div[@data-qa='block-scroller']//div//div//div//div//div//div[@data-qa='question-wrapper']//div//div//div//textarea[@placeholder='Type your answer here...']")
}
get Howmanydaysyouwanttotravel()
{
  return cy.xpath("//span[normalize-space()='How many days do you want to travel for?']")
}
get Howmanydaysyouwanttotravel1()
{
  return cy.xpath("//em[normalize-space()='2 night booking minimum']")
}
get twotothree()
{
  return cy.xpath("//div[contains(text(),'2-3 days')]")
}
get threetoseven()
{
  return cy.xpath("//div[contains(text(),'2-3 days')]")
}
get seventofourteen()
{
  return cy.xpath("//div[contains(text(),'2-3 days')]")
}
get fourteenplus()
{
  return cy.xpath("//div[contains(text(),'2-3 days')]")
}
get Howmanywillbetravelling()
{
  return cy.xpath("//span[normalize-space()='How many people will be traveling?']")
}
get Oneperson()
{
  return cy.xpath("//div[contains(text(),'1 person')]")
}
get Twoperson()
{
  return cy.xpath("//div[contains(text(),'2 people')]")
}
get Threetofiveperson()
{
  return cy.xpath("//div[contains(text(),'3-5 people')]")
}
get Fiveplusperson()
{
  return cy.xpath("//div[contains(text(),'5+ people')]")
}
get Whatsyourbudget()
{
  return cy.get('[class="TextWrapper-sc-__sc-1f8vz90-0 bFCrTC"]')
}
get twofiftytofivehundread()
{
  return cy.xpath("//div[contains(text(),'$250-$500')]")
}
get Fivehundreadtosevenfifty()
{
  return cy.xpath("//div[contains(text(),'$500-$750')]")
}
get Sevenfiftyplus()
{
  return cy.xpath("//div[contains(text(),'$750+')]")
}
get totaltripbudget()
{
  return cy.contains("What's your total trip budget ")
}
get totaltripbudgettextbox()
{
  return cy.xpath("//input[@placeholder='Type your answer here...']")
}
get totaltripbudgetokbutton()
{
  return cy.xpath("//div[@data-qa='blocktype-number deep-purple-blocktype-number']//div[@data-qa='block-scroller']//div//div//div//div//div//div[@data-qa='question-wrapper']//div//div//div//div[@data-qa-button-visible='true']//div[@data-qa='animate']//div//div//button[@data-qa='ok-button-visible deep-purple-ok-button-visible']")
}
get Whatlevelofservice()
{
  return cy.xpath("//span[normalize-space()='What level of service are you interested in?']")
}
get Hotelbookingonly()
{
  return cy.xpath("//div[contains(text(),'Hotel booking only')]")
}
get Cruisebookingonly()
{
  return cy.xpath("//div[contains(text(),'Cruise booking only')]")
}
get BookingplusCustomItinerary()
{
  return cy.xpath("//div[contains(text(),'Booking + Custom Itinerary (subject to Advisor pla')]")
}
get Howshouldwecontactyou()
{
  return cy.xpath("//label[@for='contact_info-contact_form-HS5APDceaD8hpkkt']//span[contains(text(),'How should we contact you?')]")
}
get Phonenumberisoptional()
{
  return cy.xpath("//em[normalize-space()='Phone number is optional']")
}
get Firstname()
{
  return cy.xpath("//label[@for='c390306e-4800-46f6-b5f0-bf3619281a05']")
}
get Firstnamefield()
{
  return cy.xpath("//input[@placeholder='Jane']")
}
get Lastname()
{
  return cy.xpath("//label[@for='0cd2d4dc-654b-404f-baaa-271c7351f32e']")
}
get Lastnamefield()
{
  return cy.xpath("//input[@placeholder='Smith']")
}
get Phonenumber()
{
  return cy.xpath("//label[normalize-space()='Phone number']")
}
get Phoneneumberfield()
{
  return cy.xpath("//input[@placeholder='(201) 555-0123']")
}
get Emailform()
{
  return cy.contains("Email")
}
get Emailfield()
{
  return cy.xpath("//input[@placeholder='name@example.com']")
}
get ContactOkbutton()
{
  return cy.xpath("//div[@data-qa='blocktype-contact_info deep-purple-blocktype-contact_info']//div[@data-qa='block-scroller']//div//div//div//div//div//div[@data-qa='question-wrapper']//div//div//div//div[@data-qa-button-visible='true']//div[@data-qa='animate']//div//div//button[@data-qa='ok-button-visible deep-purple-ok-button-visible']")
}
get Preferredmethodofcommunication()
{
  return cy.xpath("//span[contains(text(),'What is your preferred method of communication?')]")
}
get ContactEmail()
{
  return cy.xpath("//div[contains(text(),'Email')]")
}
get Text()
{
  return cy.xpath("//div[contains(text(),'Text')]")
}
get Phonecall()
{
  return cy.xpath("//div[contains(text(),'Phone call')]")
}
get Anyotherdetails()
{
  return cy.contains("Any other details you'd like to share?")
}
get Anyotherdetails1()
{
  return cy.xpath("//em[contains(text(),'Please let us know if you have any special needs. ')]")
}
get Anyotherdetailstextfeild()
{
  return cy.xpath("//textarea[@placeholder='Type your answer here...']")
}
get Anyotherdetailsokay()
{
  return cy.xpath("//div[@data-qa='blocktype-long_text deep-purple-blocktype-long_text']//div[@data-qa='block-scroller']//div//div//div//div//div//div[@data-qa='question-wrapper']//div//div//div//div[@data-qa-button-visible='true']//div[@data-qa='animate']//div//div//button[@data-qa='ok-button-visible deep-purple-ok-button-visible']")
}
get Lastquestion()
{
  return cy.xpath("//span[contains(text(),'Last question – where did you hear about Fora?')]")
}
get google()
{
  return cy.xpath("//div[contains(text(),'Google/search engine')]")
}
get article()
{
  return cy.xpath("//div[contains(text(),'Article/press mention')]")
}
get Instagram()
{
  return cy.xpath("//div[contains(text(),'Instagram')]")
}
get Tiktok()
{
  return cy.xpath("//div[contains(text(),'TikTok')]")
}
get Othersocialmedia()
{
  return cy.xpath("//div[contains(text(),'Other social media')]")
}
get Wordofmouth()
{
  return cy.xpath("//div[contains(text(),'Word of mouth')]")
}
get Foraadvisor()
{
  return cy.contains("I've worked with a Fora Advisor before")
}
get other()
{
  return cy.contains("Other")
}
get Submit()
{
  return cy.xpath("//button[@data-qa='submit-button deep-purple-submit-button']")
}
get Thankyou()
{
  return cy.xpath("//span[normalize-space()='Thank you for your trip inquiry!']")
}
get Youwillreceiveareply()
{
  return cy.xpath("//span[normalize-space()='You will receive a reply within 1 business day.']")
}
get Viewopenleads()
{
  return cy.xpath("//button[normalize-space()='View Open Leads']")
}
get Travellingwithchildren()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
get ()
{
  return cy.xpath("")
}
}
export default new Leads