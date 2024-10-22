class Gesttingstarted{


    get Gettingstartedtab()
    {
        return cy.xpath("(//span[contains(text(),'Get Started')])[1]")
    }
    get Welcometo()
    {
        return cy.xpath("//span[normalize-space()='Welcome to']")
    }
    get Fora()
    {
        return cy.xpath("//body//div//div//div//div//div//div//div//h1//*[name()='svg']")
    }
    get Gesttingstarted()
    {
        return cy.xpath("(//span[contains(text(),'Get Started')])[2]")
    }
    get Progressbar()
    {
        return cy.get('[class="h-2 bg-[#14141414] rounded-full overflow-hidden w-20 md:w-40 flex-grow"]')
    }
    get Taskcount()
    {
        return cy.xpath("//span[normalize-space()='0/13 tasks']")
    }
    get Attendinstructorledkickoffcallsection()
    {
        return cy.get ('[class="flex flex-col md:flex-row md:items-center gap-6 px-6 py-6 md:py-8 hover:bg-[#1414140f]"]')
    }
    get Gettingstartedtaskicon()
    {
        return cy.get('[class="rounded-lg bg-[#1414140f] p-3 w-fit"]')
    }
    get Attendinstructorledkickoffcallheader()
    {
        return cy.xpath("//span[normalize-space()='Attend instructor-led kickoff call']")
    }
    get Attendinstructorledkickoffcallsubheader()
    {
        return cy.xpath("//span[contains(text(),'Meet new advisors, get tips on getting started & l')]")
    }
    get Attendinstructorledkickoffcallctivitycount()
    {
        return cy.xpath("//span[normalize-space()='0/1']")
    }
    get Activityexpand()
    {
        return cy.get('[class="[&>:not(rect)]:stroke-tertiaryOld"]')
    }
    get Completecertifiedtraining()
    {
        return cy.xpath("//span[normalize-space()='Complete certified training']")
    }
    get Completecertifiedtrainingsubheader()
    {
        return cy.xpath("//span[contains(text(),'Fun fact: certified advisors book 3.5x more travel')]")
    }
    get Completecertifiedtrainingcount()
    {
        return cy.xpath("//span[normalize-space()='0/3']")
    }
    get Joinourcommunity()
    {
        return cy.xpath("//span[normalize-space()='Join our community of advisors']")
    }
    get Joinourcommunitysubheader()
    {
        return cy.xpath("//span[contains(text(),'Meet other travel loving entrepreneurs who are on ')]")
    }
    get Joinourcommunitycount()
    {
        return cy.xpath("//span[normalize-space()='0/2']")
    }
    get Getthewordout()
    {
        return cy.xpath("//span[normalize-space()='Get the word out']")
    }
    get Getthewordoutsubheader()
    {
        return cy.xpath("//span[contains(text(),'Reach out to your friends & family. Bookings for f')]")
    }
    get Getthewordoutcount()
    {
        return cy.xpath("//span[normalize-space()='0/3']")
    }
    get Makeyourfirstbooking()
    {
        return cy.xpath("//span[normalize-space()='Make your first booking & start earning commission']")
    }
    get Makeyourfirstbookingsubheader()
    {
        return cy.xpath("//span[contains(text(),'In this business, learning by doing is the most ef')]")
    }
    get Makeyourfirstbookingcount()
    {
        return cy.xpath("//span[normalize-space()='0/4']")
    }
    get Skipfornow()
    {
        return cy.xpath("//a[normalize-space()='Skip for now']")
    }
    get Dismissguide()
    {
        return cy.xpath("//button[normalize-space()='Dismiss guide']")
    }
    get Scheduleacall()
    {
        return cy.xpath("//span[normalize-space()='Schedule a call']")
    }
    get Scheduleacallradiobutton()
    {
        return cy.xpath("//div[3]//div[1]//div[1]//*[name()='svg']")
    }
    get Schedulecallmessage()
    {
        return cy.contains("Meet new advisors, get tips on getting started & learn how to make your first booking. Attendees are twice as likely to book within 30 days.")
    }
    get Sucessicon ()
    {
        return cy.get('[class="fill-success"]')
    }
    get Congrats()
    {
        return cy.xpath("//span[normalize-space()='Congrats!']")
    }
    get Completedmessage()
    {
        return cy.xpath("//span[contains(text(),'You’ve completed this section.')]")
    }
    get Continuebutton()
    {
        return cy.xpath("//a[normalize-space()='Continue']")
    }
    get completedtaskcount()
    {
        return   cy.contains('1/13 tasks')
    }
    get completedtaskcount1()
    {
        return cy.xpath("//span[normalize-space()='1/1']")
    }
    get Sucessiconoutside()
    {
        return cy.xpath("//body//div//div//div//div//div//div//a[2]//*[name()='svg']")
    }
    get Greenouterlineinschedulecall()
    {
        return cy.get('[class="flex flex-col p-6 gap-y-2 md:rounded-lg bg-successSecondary"]')
    }
    get Backbutton()
    {
        return cy.xpath("//a[normalize-space()='Back']")
    }
    get Watchtrainingsession()
    {
        return cy.xpath("//span[normalize-space()='Watch training sessions']")
    }
    get Watchtrainingsessionradiobutton()
    {
        return cy.xpath("//div[3]//div[1]//div[1]//*[name()='svg']")
    }
    get Passcertifiedquiz()
    {
        return cy.xpath("//span[normalize-space()='Pass certified quiz']")
    }
    get Passcertifiedquizradioibutton()
    {
        return cy.xpath("//body/div/div/div/div/div/div/div/div[2]/div[1]//*[name()='svg']")
    }
    get Subscribetotrainingcalendar ()
    {
        return cy.xpath("//span[normalize-space()='Subscribe to training calendar']")
    }
    get Subscribetotrainingcalendarradiobutton()
    {
        return cy.xpath("//body/div/div/div/div/div/div/div/div[3]/div[1]//*[name()='svg']")
    }

    get Watchcertifiedtrainigsubheader()
    {
        return cy.xpath("//span[contains(text(),'Watch certified training lessons and mark each les')]")
    }
    get Timespent()
    {
        return cy.xpath("//span[normalize-space()='2 hr 22 min']")
    }
    get Gototraining()
    {
        return cy.xpath("//a[normalize-space()='Go to training']")
    }
    get Trainingdropdown()
    {
        return cy.get('[class="md:absolute md:right-0 md:justify-start md:mr-6 md:py-6"]')
    }
    get Lessondropdown()
    {
        return cy.get('[class="flex px-6 md:px-4 py-1 md:py-4 text-smallLH20 md:border-b items-center"]')
    }
    get Markeascomplete()
    {
        return cy.get('.rounded-3xl')
    }
    get Nexttraining()
    {
        return cy.xpath("//div[normalize-space()='Next']")
    }
    get Backtotraining()
    {
        return cy.xpath("//div[normalize-space()='Back to Training']")
    }
    get Drivelink()
    {
        return  cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[2]/div[6]/div[1]/div[2]/div[1]/a[1]/div[4]")
    }
    get Passcertifiedquizcontent()
    {
        return cy.contains("Completing this quiz is a requirement to earn your certification.")
    }
    get Passcertifiedquizcontent()
    {
        return cy.contains("Completing this quiz is a requirement to earn your certification.")
    }
    get Takequiz()
    {
        return cy.xpath("//a[normalize-space()='Take quiz']")
    }
    get Subscribertotraining()
    {
        return cy.contains("Subscribe to training calendar")
    }
    get Subscribertotrainingtext()
    {
        return cy.contains("Access 20+ hours a week of sessions, learn how to build your business and explore new destinations.")
    }
    get Subscribe()
    {
        return cy.xpath("//a[normalize-space()='Subscribe']")
    }
    get Markasdone()
    {
        return cy.xpath("//button[normalize-space()='Mark as done']")
    }
    get Createaexpediataapaccount()
    {
        return cy.xpath("//span[normalize-space()='Create an Expedia TAAP account']")
    }
    get Createaexpediataapaccount1()
    {
        return cy.xpath("//span[contains(text(),'Expedia TAAP is the travel agent portal for Expedi')]")
    }
    get Register()
    {
        return cy.xpath("//a[normalize-space()='Register']")
    }
    get Learnallthings()
    {
        return cy.xpath("//span[normalize-space()='Learn all things Virtuoso']")
    }
    get Learnallthings1()
    {
        return cy.xpath("//span[contains(text(),'Pro-tip: you don’t need a Virtuoso account to acce')]")
    }
    get bookMarriotthotels()
    {
        return cy.xpath("//span[normalize-space()='Learn how to book Marriott hotels']")
    }
    get bookMarriotthotels1()
    {
        return cy.xpath("//span[contains(text(),'We’ve broken down the need-to-know information whe')]")
    }
    get Readandagree()
    {
        return cy.xpath("//span[normalize-space()='Read and agree to Policies & Community Guidelines']")
    }
    get Readandagreetext()
    {
        return cy.xpath("//span[contains(text(),'Learn our policies which protect partner relations')]")
    }
    get Gotopolices()
    {
        return cy.xpath("//a[normalize-space()='Go to policies']")
    }
    get Introduceyourself()
    {
        return cy.xpath("//span[normalize-space()='Introduce yourself in Forum']")
    }
    get Introduceyourselftext()
    {
        return cy.xpath("//span[contains(text(),'See the latest partner deals and ask our community')]")
    }
    get Gotoforum()
    {
        return cy.xpath("//a[normalize-space()='Go to Forum']")
    }
    get Reachout()
    {
        return cy.xpath("//span[normalize-space()='Reach out to your top 10']")
    }
    get Text()
    {
        return cy.get('[class="list-disc list-inside"]')
    }
    get Needinspiration()
    {
        return cy.contains("Need inspiration? Check out examples in our")
    }
    get Starterpack()
    {
        return cy.xpath("//a[normalize-space()='starter pack']")
    }
    get Draftanemail()
    {
        return cy.xpath("//a[normalize-space()='Draft an email']")
    }
    get Learnhowtotalk()
    {
        return cy.xpath("//span[normalize-space()='Learn how to talk the talk']")
    }
    get Notsurehow()
    {
        return cy.xpath("//span[contains(text(),'Not sure how to talk to clients and answer their b')]")
    }
    get Takeaquiz()
    {
        return cy.xpath("//a[normalize-space()='Take quiz']")
    }
    get FQA()
    {
        return cy.xpath("//a[normalize-space()='Go to FAQs']")
    }
    get Fellowforaadvisor()
    {
        return cy.xpath("//span[contains(text(),'Check out how other fellow Fora Advisors got start')]")
    }
    get Tipsongetting ()
    {
        return cy.xpath("//span[normalize-space()='Tips on getting the word out to your network.']")
    }

    get Bookinportal()
    {
        return cy.xpath("//a[normalize-space()='Book in Portal']")
    }
    get bookinportalradiobutton()
    {
        return cy.xpath("//div[4]//div[1]//*[name()='svg']")
    }
   
    get Resetresult()
    {
        return cy.contains("3")
    }
    get Resetresult1()
    {
        return cy.contains("Calendars")
    }


}
export  default new Gesttingstarted