class Supplier{
    get supplier()
    {
        return cy.xpath("//span[normalize-space()='Supplier Database']")
    }
    get Nextbutton()
    {
        return cy.get('[data-testid="next-cta-button"]')
    }
    get Gotosupplierdb()
    {
        return cy.get('[data-testid="next-cta-button"]')
    }
    get Hoteslandperks()
    {
        return cy.xpath("//span[normalize-space()='Hotels with perks']")
    }
    get Allexclusive()
    {
        return cy.xpath("//a[contains(@href,'/supplier-database/all-inclusives')]")
    }
    get Cruises()
    {
        return cy.xpath("//span[normalize-space()='Cruises']")
    }
    get Dmcs()
    {
        return cy.xpath("//span[normalize-space()='DMCs']")
    }
    get Homesandvillas()
    {
        return cy.xpath("//span[normalize-space()='Homes and villas']")
    }
    get Toursandactivity()
    {
        return cy.xpath("//span[normalize-space()='Tours and activities']")
    }
    get Transportation()
    {
        return cy.xpath("//span[normalize-space()='Transportation']")
    }
    get Preferredpartner()
    {
        return cy.xpath("//div[@class='text-header md:text-headerFS24 font-bold text-main pb-4']")
    }
    get introduction()
    {
        return cy.xpath("//div[normalize-space()='Introduction']")
    }
    get arrow()
    {
        return cy.get('[class="md:text-headerFS24 text-header text-main"]')
    }
    get Needtoknow()
    {
        return cy.xpath("//div[contains(text(),'Need to Know')]")
    }
    get Searchbar()
    {
        return cy.xpath("//input[@placeholder='Search']")
    }
    get Resources()
    {
        return cy.xpath("//div[contains(text(),'Resources')]")
    }
    get Closedetailsbutton()
    {
        return cy.xpath("//button[normalize-space()='Close details']")
    }
    get Opendetailsbutton()
    {
        return cy.xpath("//button[normalize-space()='Open details']")
    }
    get Searchbutton()
    {
        return cy.get('.shrink-0')
    }
    get Cancelbutton()
    {
        return cy.get('.form-control-icon--error-icon')
    }
    get searchmsg()
    {
        return cy.contains("Sorry, we couldn't find any results matching with your request")
    }
    get introductiontext()
    {
       return cy.contains("This list includes Fora’s Preferred Partner programs. These are exclusive, often invitation-only memberships with leading hotel collections around the world. These special partnerships unlock perks, benefits and VIP treatment for your client’s stay at hundreds of hotels and resorts worldwide.")
    }
    get introductiontext1()
    {
       return cy.contains("Read on for some of our favorite cruise lines. From intimate yachts to adventure expeditions to grand ocean liners, cruises offer a variety of options and styles for all travelers.")
    }
    get Needtoknowtext()
    {
       return cy.contains("As a Fora Advisor, you’ll score VIP perks and deals for your clients (or yourself!) when booking at participating hotels and resorts.")
    }
    get Needtoknowtext1()
    {
       return cy.contains("As a Fora Advisor, being directly connected with some of the world’s best cruises ensures your clients won’t get lost in the shuffle. Instead, they can get treated like a VIP. ")
    }
    get Supplierdatbasedeepdive()
    {
        return cy.xpath(" //a[normalize-space()='Supplier Database Deep Dive']")
    }
    get Researchbestpractice()
    {
        return cy.xpath("//a[normalize-space()='Research Best Practices']")
    }
    get Brandmatchmaking()
    {
        return cy.xpath("//a[normalize-space()='Brand Matchmaking']")
    }
    get Searchresult()
    {
        return cy.get('[class="text-title font-bold text-main"]')
    }
    get Copylink()
    {
        return cy.xpath("//button[normalize-space()='Copy link']")
    }
    get Copy()
    {
        return cy.xpath("//a[@data-tooltip-id='programs-copy-name']//*[name()='svg']")
    }
    get cancel()
    {
        return cy.get('.bg-mainHoliday > .pl-4')
    }
    get Gotoprogramsite()
    {
        return cy.xpath("//a[normalize-space()='Go to program site']")
    }
    get Mailtext()
    {
        return cy.contains("Email Stephanie Londono, Director of Leisure Sales, directly (slondono@grandlifehotels.com)")
    }
   
    get Bookdirectly()
    {
        return cy.get('.btn-primary-outline')
      }
      get Hotelswithperks()
      {
          return cy.xpath("//span[normalize-space()='Hotels with perks']")
        }
        get searchfield()
      {
          return cy.get('.form-control')
     }
     get Hotelnperksintroductiontext()
     {
         return cy.contains("This is a useful resource to find hotels that offer partner perks. If a hotel is not in this list, it may still be commissionable — just be sure to check directly with the property to confirm.")
    }
    get Hotelnperksneedtoknowtext()
    {
        return cy.contains("As part of our partner programs, Fora Advisors automatically unlock perks and special deals for their clients (or themselves!) at participating hotels. These perks can include anything from complimentary upgrades to hotel credits to welcome amenities. ")
   }
   get howtobooklink()
   {
       return cy.xpath("//a[normalize-space()='How To Book']")
   }
   get howtobookbeyondlink()
   {
       return  cy.get('[href="https://docs.google.com/presentation/d/1UDz19lInGO-xu2wE_hXKgge198QMfBk2vk-NS90zr_M/edit?usp=share_link"]')
  
   }
   get thehotelecosystem()
   {
       return cy.xpath("//a[normalize-space()='The Hotel Ecosystem']")
  }
  get Sortbutton()
  {
      return cy.get('[data-testid="dropdownButton"]')
 }

get Partnerprogramdropdown()
{
    return cy.xpath("//div[@data-testid='Partner Programs']")
}
get Forax()
{
    return cy.xpath("//label[normalize-space()='Fora X']")
}
get Designhotelpro()
{
    return cy.xpath("//label[normalize-space()='Design Hotels Pro']")
}

get Apply()
{
    return cy.xpath("//button[normalize-space()='Apply']")
}

get homesearchresult()
  
{
        return cy.get('[class="text-medium font-bold text-secondary break-words"]')
}
 get Allexclusiveintroductiontext()
 {
         return cy.contains("These resorts automatically include accommodation, food, activities, entertainment and drinks (although alcoholic drinks are not always guaranteed) in one lump sum.")
}
    get Allexclusiveneedtoknowtext()
{
    return cy.contains("All-inclusives generally will not have the usual perks offered by hotels. Fora Advisors still have a direct line of contact to many of these resorts, which helps ensure your client’s trip is extra special.")
}

get howtobookbeyond()
{
    return cy.xpath("//a[normalize-space()='How To Book Beyond Hotels']")
}

get clubmudsupplier()
{
    return cy.xpath("//a[normalize-space()='Club Med Supplier Training']")
}
get explorasuppliertraining()
{
    return cy.xpath("//a[normalize-space()='Explora Supplier Training']")
}

get Voyageslink()
{
    return cy.xpath("//a[normalize-space()='Virgin Voyages Supplier Training']")
}
get Cruisesheader()
{
    return cy.contains("Cruises")
}



}
export default new Supplier