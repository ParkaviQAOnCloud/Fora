class Event{

    get Event(){
       return cy.get('[href="/events"]')
    }
   get Eventheader()
   {
    return cy.xpath("//h1[normalize-space()='Events']")
   }
   get Today()
   {
    return cy.xpath("//span[normalize-space()='Today']")
   }
   get Filter()
   {
    return cy.get('.flex-row-reverse > :nth-child(2) > .cursor-pointer')
   }
   get Arrow()
   {
    return cy.get('[data-testid="icon-button"]')
   }
   get Calander()
   {
    return cy.xpath("//span[normalize-space()='Calendar']")
   }
   get List()
   {
    return cy.xpath("//span[normalize-space()='List']")
   }
   get Timeslot()
   {
    return cy.get('[class="rbc-time-gutter rbc-time-column"]')
   }
   get GMT()
   {
    return cy.xpath('//div[@class="overflow-visible whitespace-nowrap hidden md:block text-secondary text-caption relative text-right"]')
   }
   get Dateheader()
   {
    return cy.get('[class="rbc-time-header"]')
   }
   get Generaltraining()
   {
    return cy.xpath("//label[normalize-space()='General Training']")
   }
   get Livesupport()
   {
    return cy.xpath("//label[normalize-space()='Live Support']")
   }
   get certifiedtraining()
   {
    return cy.xpath("//label[normalize-space()='Certified Training']")
   }
   get Checkbox()
   {
    return cy.get('[type="checkbox"]')
   }
   get Applybutton()
   {
    return cy.xpath("//button[normalize-space()='Apply']")
   }
   get Reset()
   {
    return cy.xpath("//button[normalize-space()='Reset']")
   }
   get NewEvent()
   {
      return cy.get('div.pl-1')
   }
   get Filtercancelbutton()
   {
    return cy.get('.cursor-pointer > [data-testid="icon-button"]')
   }
   get Livesupportfield()
   {
    return cy.get('div.absolute') 
   }
   get Livesupportlistresult()
   {
      return cy.xpath("//span[normalize-space()='Live Support']")
   }
   get Eventcalender()
   {
       return cy.get('[class="pl-1"]')
   }
   get Certifiedpopupheader()
   {
    return cy.get('[class="text-header font-semibold "]')
   }
   get icons()
   {
    return cy.get('[class="flex justify-center pt-0.5"]')
   }
   get todaydate_BackgroundColor()
   {
    return cy.xpath('//div[@class="rounded-xl w-[34px] h-[34px] text-[15px] leading-[34px] bg-main text-white"]')
   }
  
   get Copytogooglecalendar()
   {
    return cy.xpath("//a[normalize-space()='Copy to Google Calendar']")
   }
   get Closeicon()
   {
    return cy.xpath("//button[@data-testid='close-modal']//*[name()='svg']")
   }
   get Pastevent()
   {
    return cy.xpath("//h2[normalize-space()='Past Events']")
   }
   get certifiedtrainingresult()
   {
    return cy.xpath("//span[normalize-space()='Certified Training']")
   }
   get Generaltraininglistresult ()
   {
    return cy.xpath("(//span[contains(text(),'General Training')])[1]")
   }
   get test ()
   {
    return cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]')
   }
   get List_Events()
   {
    return cy.xpath('//h2[@class="mt-6 tablet:mt-0"]')
   }
   
}
export default new Event;
