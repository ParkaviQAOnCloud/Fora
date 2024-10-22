/* Description TC007: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Bookings section"					*/

/* Description TC008: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page Find Suppliers section"					*/

/* Description TC009: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Manage your Bookings section"						*/

/* Description TC010: "The goal of the test is to verify the following functionalities:
1. contents of the advisor portal home page - Company information section"									*/




import Home from "../../support/Page Object/Advisor/Home"
import Bookings from "../../support/Page Object/Advisor/Booking"

describe('Advisor_Home Onboarding_TS003',{ testIsolation: false },function() {
  before(() => {
    
    cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false 
    })
  })
    it('Advisor_Home Onboarding_TC007_To verify the Bookings section of the home page ', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          cy.HomeLogin()
        /*  Home.navbar.click()
        Home.home.click()

        Home.cancel.click()*/
        cy.wait(2000)
       // Home.bookingheader.should('be.visible')
        Home.excludingcanceled.should('be.visible')
        Home.Yourbookings.click({force: true})
        Home.alltimetext.should('be.visible')
        Home.lastweek.should('be.visible')
        Home.lastmonth.should('be.visible')
        Home.lastyear.should('be.visible')
        Home.currantweek.should('be.visible')
        Home.currantmonth.should('be.visible')
        Home.currantyear.should('be.visible')
        Home.alltimetext.click()
Home.sortresult.invoke('text')
        .then((alltime) => {        
          cy.log('Alltime bookings  :', alltime);
  
        })
        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.lastweek.click()
        Home.sortresult.invoke('text')
        .then((lastweek) => {        
          cy.log('Lastweek bookings  :', lastweek);
  
        })
        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.lastmonth.click()
        Home.sortresult.invoke('text')
        .then((lastmonth) => {        
          cy.log('Lastmonth bookings  :', lastmonth);
  
        })
        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.lastyear.click()
        Home.sortresult.invoke('text')
        .then((lastyear) => {        
          cy.log('Lastyear bookings  :', lastyear);
  
        })
        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.currantweek.click()
        Home.sortresult.invoke('text')
        .then((currantweek) => {        
          cy.log('currant week bookings  :', currantweek);
  
        })
        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.currantmonth.click()
        Home.sortresult.invoke('text')
        .then((currantmonth) => {        
          cy.log('Currant month bookings  :', currantmonth);
  
        })

        cy.wait(2000)
        Home.Yourbookings.click({force: true})
        Home.currantyear.click()
        Home.sortresult.invoke('text')
        .then((currantyear) => {        
          cy.log('Currant year bookings  :', currantyear);
  
        })

        Home.viewbookinglink.click()
        cy.wait(2000)
        Bookings.Dates.eq(0).click({force: true})
        
        Bookings.clear.click()
        cy.wait(2000)
        Bookings.Bookingstatus.eq(0).click()
        cy.wait(1000)
        Bookings.clear.click()
        cy.url().should('include', 'https://advisor.forastaging.net/bookings');


  
})

  it('Advisor_Home Onboarding_TC008_To verify the Find Suppliers section of the home page ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
        
      })
      Home.navbar.click()
      cy.wait(2000)
        Home.home.click()

        Home.cancel.click()
      Home.Findpartnerheader.should('be.visible') 
    Home.Findpartnertext.should('be.visible') 
    Home.BrowsePartner.should('be.visible').click()
   // cy.url().should('include', 'https://advisor.forastaging.net/supplier-database/programs');

    })
    it('Advisor_Home Onboarding_TC009_To verify Manage your Bookings section of the home page ', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
          
        })
        cy.wait(2000)
        Home.navbar.click()
        Home.home.click()
        Home.cancel.click()
        Home.Manageyourbookingheader.should('be.visible') 
    Home.Findsuppliertext.should('be.visible') 
    Home.Viewbookingbutton.should('be.visible').click() 
      })
      it('Advisor_Home Onboarding_TC010_To verify the Company information section of the home page ', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
          })
          cy.wait(2000)
          Home.navbar.click({force: true})
          Home.home.click({force: true})
          cy.wait(2000)
         Home.Companyinfo.should('be.visible')
         Home.IATA.should('be.visible')
         Home.copyIATA.invoke('show').click()
         Home.Mailingaddress.should('be.visible')
         Home.Mailingaddresscopy.invoke('show').click()
        Home.Phonenumber.should('be.visible')
        Home.Phonenumbercopy.click()
        Home.Togetpaid.should('be.visible')
     //   Home.togetpaidcopy.click()

        })

      it('Advisor_Home Onboarding_TC00_To verify the how to book section of the home page ', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          Home.navbar.click()
          Home.home.click({force: true})
          Home.cancel.click()
          Home.howtobookbutton.click()
        })

      it('Advisor_Home Onboarding_TC00_To verify the  manage client section of the home page ', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
          cy.wait(2000)
          Home.navbar.click()
          cy.wait(2000)
          Home.home.click()
          Home.cancel.click()
          cy.wait(8000)
          Home.Manageclient.click()
          cy.wait(20000)
          cy.url().should('include', 'https://advisor.forastaging.net/clients');
          cy.wait(20000)

        })
})