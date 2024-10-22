
import Home from "../../support/Page Object/Advisor/Home"
import Newhome from "../../support/Page Object/Advisor/Newhome"
import Partner from "../../support/Page Object/Advisor/Partner"
import Bookings from "../../support/Page Object/Advisor/Booking"
describe('Advisor_Home Onboarding_TS001',{ testIsolation: false },function() {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
it('Advisor_Home_TC001,TC002 and TC003_To Check the home page/Advisor kickoff call/ Learn the fundamentals section of home page - ', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
            
          })
     //  cy.HomeLogin()
     cy.NotanadvisorHomeLogin() 
     cy.viewport(1500,785) /// Login to the portal
   // Home.navbar.click()

    Home.home.click()
 
    /// verifying the home page
    cy.log('verifying home page')    
    //Newhome.calldropdown.click()
   Home.welcometext.scrollIntoView().should('be.visible') 
    
   // Newhome.subheading.should('be.visible') 
//Newhome.Subheading1.should('be.visible') 
//Newhome.Learnthefundamentals.eq(0).scrollIntoView().should('be.visible') 
//Newhome.puzzlesymbol.eq(0).scrollIntoView().should('be.visible') 
//Newhome.Readytobook.scrollIntoView().should('be.visible') 
//Newhome.Seebelow.scrollIntoView().should('be.visible') 
//Newhome.feelinglost.scrollIntoView().should('be.visible') 
//Newhome.Essentialmaterials.scrollIntoView().should('be.visible') 


//Newhome.Welcometogettingstarted.click()
cy.wait(3000)
//cy.contains("Keynote: Welcome to Fora").scrollIntoView().should('be.visible')
//Home.home.click()
//Newhome.Certifiedtraining.scrollIntoView().should('be.visible').click()
cy.wait(2000)

//Home.navbar.click({force:true})

/*Home.home.click({force:true})
cy.wait(2000)

Newhome.Certifiedtraining.scrollIntoView().should('be.visible') 
Newhome.Needtoknowtext1.scrollIntoView().should('be.visible') 

Newhome.Followfourguided.scrollIntoView().should('be.visible') 
Newhome.Certifiedtraining.scrollIntoView().should('be.visible') 
Newhome.Certifiedtrainingtext.scrollIntoView().should('be.visible') 
Newhome.Needtoknowtext4.scrollIntoView().should('be.visible') 
cy.wait(5000)*/
        
      })

     /* it('Advisor_Home_TC004_To Check the home page - Engage with Fora’s community section', function() {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });
        cy.viewport(1500,785)
        // Validate Engage with Fora's community section
        Newhome.EngagewithForacommunity.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitylogo.should('be.visible');
        //Newhome.EngagewithForacommunitytext.should('be.visible');
        //Newhome.EngagewithForacommunitytext1.should('be.visible').click(); // clicking advisorkickoffcall link
        Newhome.EngagewithForacommunitytext2.scrollIntoView().should('be.visible'); // verifying the text present in the Engage with Fora's community section
        Newhome.EngagewithForacommunitytext3.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext4.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext5.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext6.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext7.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext8.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext9.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext10.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext11.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext12.scrollIntoView().should('be.visible');
      //  Newhome.EngagewithForacommunitytext13.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext14.scrollIntoView().should('be.visible');
        Newhome.EngagewithForacommunitytext15.scrollIntoView().should('be.visible');
    });
    
    it('Advisor_Home_TC005_To Check the home page - Jump right in to book section', function() {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });
        cy.viewport(1500,785)
     //   Home.navbar.click();
        Home.home.click();
    //    Home.cancel.click();
        cy.log('Jump right in to book section');
        
        Newhome.Jumprightintobooklogo.eq(2).scrollIntoView().should('be.visible'); // verifying the logo of Jumprightintobooking
        Newhome.Jumprightintobook.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext1.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext2.scrollIntoView().should('be.visible').click(); // clicking the client button present in the Jumprightintobooking section

        Home.home.click({ force: true });

        cy.wait(1000)
       // Newhome.calldropdown.click();
        Newhome.Jumprightintobooktext3.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext4.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext5.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext6.scrollIntoView().should('be.visible').click(); // clicking book your client 
        cy.wait(3000)

        Home.home.click({ force: true });
        
        Newhome.Jumprightintobooktext7.scrollIntoView().should('be.visible');
        Newhome.Jumprightintobooktext8.scrollIntoView().should('be.visible').click(); // clicking the guide link
        cy.go(-2);
        cy.wait(2000)
      //  Newhome.Jumprightintobooktext9.scrollIntoView().should('be.visible');
       // Newhome.Jumprightintobooktext11.scrollIntoView().should('be.visible');
    });
    */
    it('Advisor_Home_TC006_Home - To Check the Company information section of the home page', function() {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });
        cy.viewport(1500,785)
        cy.log('Company information section of the home page');
        cy.wait(3000)
        Home.home.click();
        //Home.cancel.click({ force: true });
        cy.wait(2000)

        Home.Bookinginfo.scrollIntoView().should('be.visible');
        Home.IATA.scrollIntoView().should('be.visible');
        cy.wait(2000)

        Home.copyIATA.click();
        cy.wait(1000)

        Home.Mailingaddress.should('be.visible');
        cy.wait(1000)
        Home.Mailingaddresscopy.click(); // clicking on the copy icon in mailing address
        Home.Mailingaddresstext.should('be.visible');
        Home.Mailingaddresstext1.should('be.visible');
        Home.Mailingaddresstext2.should('be.visible');
        
        Home.Phonenumber.should('be.visible');
        cy.wait(1000)

        Home.Phonenumbercopy.click(); // clicking on the copy icon in phonenumber 
        cy.wait(1000)

        Home.Bookoutsideportalinfo.should('be.visible');
        Home.Bookinsideportalinfotext.scrollIntoView().should('be.visible');
        cy.wait(2000)

        Home.Bookinsideportalinfotext1.scrollIntoView().click(); 
        // clicking on the Partners link in the bookinsideportal section
        cy.wait(2000)

       Home.home.click();

        //Home.cancel.click({ force: true });
        cy.wait(2000)

        Home.Bookoutsideportalinfotext.scrollIntoView().should('be.visible');
        Home.Bookoutsideportalinfotext1.scrollIntoView().should('be.visible');
        Home.Bookoutsideportalinfotext2.scrollIntoView().should('be.visible');
        cy.wait(1000)
        Home.Bookoutsideportalinfotext3.scrollIntoView().should('be.visible').click(); 
        // clicking on the Partners link in the bookoutsidetheportal section of booking information section
        cy.wait(2000)
     
        Home.home.click();
        cy.wait(3000)
    
        
        Home.More.scrollIntoView().should('be.visible');
        Home.Sidekick.should('be.visible').click(); // clicking on sidekick link present in the more section of booking information section
       cy.wait(2000)
        Home.home.click();
       
        cy.wait(3000)
        Home.Helpcenter.scrollIntoView().should('be.visible').click(); 
        cy.wait(2000)
        // clicking on Helpcenter link present in the more section of in booking information section

        Home.home.click();
        cy.wait(3000)

 

        Home.Communityguideline.scrollIntoView().should('be.visible').click();
        cy.wait(2000)

    //    Home.navbar.click();
        Home.home.click();
      //  Home.cancel.click();
        Home.text.scrollIntoView().should('be.visible');
        Home.text1.scrollIntoView().should('be.visible');
        Home.text2.scrollIntoView().should('be.visible');
        cy.wait(1000)
        Home.commissionemail1.scrollIntoView().should('be.visible').click(); // clicking on the commission mail in booking information section
    });
    
    it('Advisor_Home_TC007_Home - To Check the Bookings section of the home page', function() {
        cy.on('uncaught:exception', (err, runnable) => { 
            return false;
        });
        cy.viewport(1500,785)
      //  Home.navbar.click();
        Home.home.click();
        cy.wait(5000); // Adjust as necessary
      //  Home.cancel.click({ force: true });
    
        Home.excludingcanceled.scrollIntoView().should('be.visible');
        Home.Yourbookings.eq(0).scrollIntoView().click({ force: true });
    cy.wait(2000)
        Home.alltimetext.should('be.visible');
        Home.lastweek.should('be.visible');
        Home.lastmonth.should('be.visible');
        Home.lastyear.should('be.visible');
        Home.currantweek.should('be.visible');
        Home.currantmonth.should('be.visible');
        Home.currantyear.should('be.visible');
    
        cy.log('validating the sort option present in the booking section of Home page');
        Home.alltimetext.click();
        Home.sortresult.invoke('text').then((alltime) => {        
            cy.log('Alltime bookings:', alltime);
        });
    
        Home.Yourbookings.click({ force: true });
        Home.lastweek.click();
        Home.sortresult.invoke('text').then((lastweek) => {        
            cy.log('Lastweek bookings:', lastweek);
        });
    
     
  
    
      /*  Home.viewbookinglink.click();
        cy.wait(2000); // Adjust as necessary
        Bookings.Dates.eq(0).click({ force: true });
        cy.wait(2000); // Adjust as necessary
        Bookings.clear.click();
        Bookings.Dates.eq(0).click({ force: true });
        Bookings.Bookingstatus.eq(0).click();
        cy.wait(2000)
        Bookings.clear.click();
        cy.url().should('include', 'https://advisor.forastaging.net/bookings');*/
    });

 /* it('Advisor_Home_TC008_Learn the fundamental section', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
        
      })
      Home.navbar.click()
      cy.wait(2000)
      Home.home.click({force:true})
      Newhome.calldropdown.scrollIntoView().click()
      cy.scrollTo("bottom")
      cy.wait(5000)
      Partner.Reportanissue.scrollIntoView().click()
      cy.wait(5000)
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      cy.wait(2000)
      Partner.dropdownvalue1.should('be.visible')
      Partner.dropdownvalue2.should('be.visible')
      Partner.dropdownvalue3.should('be.visible')
      Partner.dropdownvalue4.should('be.visible')
      Partner.dropdownvalue5.should('be.visible')
      Partner.dropdownvalue6.should('be.visible')
      
      Partner.dropdownvalue1.click()
      Partner.Describetheissue.should('be.visible')
      Partner.Describetheissuefield.should('be.visible')
      Partner.Cancel.should('be.visible')
      Partner.Report.should('be.visible').click()
      //Partner.Error1.should('be.visible')
      Partner.Error2.should('be.visible')
      Partner.Issueseverityheader.should('be.visible')
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue1.should('be.visible')
      Partner.Issueseveritydropdownvalue2.should('be.visible')
      Partner.Issueseveritydropdownvalue3.should('be.visible')
      Partner.Issueseveritydropdownvalue2.should('be.visible').click()
      Partner.Describetheissuefield.should('be.visible').type("error")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      Partner.Reportanissue.scrollIntoView().click()
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      Partner.dropdownvalue1.should('be.visible')
      Partner.dropdownvalue2.should('be.visible')
      Partner.dropdownvalue3.should('be.visible')
      Partner.dropdownvalue4.should('be.visible')
      Partner.dropdownvalue5.should('be.visible')
      Partner.dropdownvalue6.should('be.visible')
      cy.wait(2000)
      Partner.dropdownvalue2.click()
      cy.wait(2000)
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue2.click()
      Partner.Issuetypeheader.should('be.visible')
      Partner.Issuetypedropdown.click()
      Partner.Issuetypedropdown1.should('be.visible')
      Partner.Issuetypedropdown2.should('be.visible')
      Partner.Issuetypedropdown3.should('be.visible')
      Partner.Issuetypedropdown4.should('be.visible')
      Partner.Issuetypedropdown5.should('be.visible')
      Partner.Issuetypedropdown2.click()
      Partner.Describetheissuefield.should('be.visible').type("error")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      //Marketing
      Partner.Reportanissue.scrollIntoView().click()
      cy.wait(2000)
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      Partner.dropdownvalue3.click()
      cy.wait(2000)
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue3.should('be.visible').click()
      cy.wait(2000)
      Partner.Issuetypedropdown.click()
      Partner.Marketingissuetypedropdown1.should('be.visible')
      Partner.Marketingissuetypedropdown2.should('be.visible')
      Partner.Marketingissuetypedropdown3.should('be.visible')
      Partner.Marketingissuetypedropdown4.should('be.visible')
      Partner.Marketingissuetypedropdown5.should('be.visible')
      Partner.Marketingissuetypedropdown6.should('be.visible')
      Partner.Marketingissuetypedropdown7.should('be.visible')
      Partner.Marketingissuetypedropdown3.click()
      Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      ////Partners
      Partner.Reportanissue.scrollIntoView().click()
      cy.wait(2000)
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      Partner.dropdownvalue4.click()
      cy.wait(2000)
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue2.should('be.visible').click()
      cy.wait(2000)
      Partner.Issuetypedropdown.click()
      Partner.Partnerissuetypedropdown1.should('be.visible')
      Partner.Partnerissuetypedropdown2.should('be.visible')
      Partner.Partnerissuetypedropdown3.should('be.visible')
      Partner.Partnerissuetypedropdown4.should('be.visible')
      Partner.Partnerissuetypedropdown5.should('be.visible')
      Partner.Partnerissuetypedropdown6.should('be.visible')
      Partner.Partnerissuetypedropdown5.should('be.visible').click()
      Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      //General feedback
      Partner.Reportanissue.scrollIntoView().click()
      cy.wait(2000)
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      Partner.dropdownvalue6.click()
      cy.wait(2000)
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue3.should('be.visible').click()
      cy.wait(2000)
      Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      cy.wait(2000)
      /// Training
      Partner.Reportanissue.scrollIntoView().click()
      cy.wait(2000)
      Partner.Reportanissueheader.should('be.visible')
      Partner.Reportanissuetext.should('be.visible')
      Partner.Issuetopicheader.should('be.visible')
      Newhome.issuetypedropdown.should('be.visible').eq(0).click()
      Partner.dropdownvalue5.click()
      Partner.Issueseveritydropdown.click()
      Partner.Issueseveritydropdownvalue3.should('be.visible').click()
      cy.wait(2000)
      Partner.Issuetypedropdown.click()
      Partner.Trainerissuetypedropdown1.should('be.visible')
      Partner.Trainerissuetypedropdown2.should('be.visible')
      Partner.Trainerissuetypedropdown3.should('be.visible')
      Partner.Trainerissuetypedropdown4.should('be.visible')
      Partner.Trainerissuetypedropdown5.should('be.visible')
      Partner.Trainerissuetypedropdown6.should('be.visible')
      Partner.Trainerissuetypedropdown7.should('be.visible')
      Partner.Trainerissuetypedropdown8.should('be.visible')
      Partner.Trainerissuetypedropdown3.should('be.visible').click()
      cy.wait(2000)
      Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
      Partner.Report.click()
      Partner.rightmarks.should('be.visible')
      Partner.successtext.should('be.visible')
      Partner.successsubtext.should('be.visible')
      Partner.close.click()
      cy.wait(2000)
    })*/
    })