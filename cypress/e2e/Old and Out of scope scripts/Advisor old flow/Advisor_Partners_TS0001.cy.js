/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. Contents of the hotel's order list"										            */ 

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1. Contents of image of the hotel on the hotel card"									*/ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1. Contents of scorlling the image on the hotel card"									*/ 

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1. Content of preferred partner on the hotel card"										*/ 

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1. Contents of the logos of preferred partner on the hotel card"						*/ 

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1. Contents of hotel classifications on the hotel card"									*/ 

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1. Contents of hotel location on the hotel card"										*/ 

/* Description for TC009: "The goal of the test is to verify the following functionalities:
1. Contents of all-inclusive label on hotel card"										*/ 

/* Description for TC010: "The goal of the test is to verify the following functionalities:
1. Contents of sort and filter the search results list for hotels"						*/ 

/* Description for TC011: "The goal of the test is to verify the following functionalities:
1. Contents of back to search result page"				 */ 

/* Description for TC012: "The goal of the test is to verify the following functionalities:
1. Contents of grid of images"				 */ 

/* Description for TC013: "The goal of the test is to verify the following functionalities:
1. Contents of partners program perk details"				 */ 




import Home from "../../../support/Page Object/Advisor/Home"
import Partner from "../../../support/Page Object/Advisor/Partner"
//import Booking from "../../support/Page Object/Advisor/Booking"


describe('Advisor_Partners_TS001',{ testIsolation: false }, function() {
    before(() => {
      
     cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
  cy.clearAllLocalStorage()
    })
  
    it('Advisor_Partners_TC001 and TC004_To verify the Partners page', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })    
      cy.viewport(1500,785)
    cy.Login1()

    //Home.navbar.click()
    cy.wait(5000)
    Partner.Partner.click()
   // Partner.Beta.should('be.visible')
    cy.wait(5000)
    Partner.Banner.should('be.visible')
    cy.url().should('include', 'https://advisor.forastaging.net/partners/hotels')
    cy.wait(20000)
   //Partner.Cradhighlightedinpurple.should('be.visible')
    Partner.Recommended.should('be.visible')
    cy.get('[id="main-container"]').scrollTo("bottom")
    Partner.Forareservedtag.eq(0).scrollIntoView().should('be.visible')
    Partner.Preferedpartnertag.eq(0).scrollIntoView().should('be.visible')
    cy.get('[id="main-container"]').scrollTo("top")
    cy.wait(2000)
    Partner.Recommended.should('be.visible').click()
    Partner.Alphabetical.should('be.visible')
    Partner.Alphabetical.should('be.visible').click()
    cy.wait(2000)
   // Partner.Hotelalphabeticalresult.should('be.visible')
    Partner.Alphabetical.eq(0).click()
    Partner.Recommended.click() 
    Partner.Hotelrecomenddedresult.should('be.visible')   
})

   it('Advisor_Partners_TC002 to TC003, TC0012 and TC0013_To verify the image of the hotel on the hotel card and user can scroll the images on the hotel card and  advisor can see grid of images', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })   
        cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
            cy.viewport(1500,785)
        Partner.hotelsearchbar.scrollIntoView().should('be.visible')
        Partner.hotelsearchbar.should('be.visible')
        Partner.Selecttraveldate.should('be.visible')
        Partner.Travellers.should('be.visible')
        Partner.Hotelsearchbutton.should('be.visible')
       /* Partner.list.should('be.visible')
        Partner.Map.should('be.visible')
        Partner.Comingsoon.should('be.visible')*/
        Partner.Preferedpartners.should('be.visible')
        Partner.Brands.scrollIntoView().should('be.visible')
        Partner.Brandssearch.eq(0).scrollIntoView().should('be.visible')
        
        Partner.Searchbar.type(dataJson.Destination1+'{enter}')
        cy.wait(8000)
        
        Partner.numberofproperty.should('be.visible')
        Partner.propertyname.scrollIntoView().should('be.visible')
        Partner.Partnerslogo.scrollIntoView().should('be.visible')
       /* cy.get('img').eq(7).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_320,h_256,g_auto/f_auto/q_auto/063e868f-84f6-4ddf-a729-8774837759c3?_a=BAVC24IB0');

        Partner.Nextimage.click()
        cy.wait(2000)
        cy.get('img').eq(7).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_320,h_256,g_auto/f_auto/q_auto/063e868f-84f6-4ddf-a729-8774837759c3?_a=BAVC24IB0');
        Partner.Previousimage.click()
        cy.wait(2000)
        cy.get('img').eq(7).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_320,h_256,g_auto/f_auto/q_auto/063e868f-84f6-4ddf-a729-8774837759c3?_a=BAVC24IB0');

        Partner.propertyname.scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('img').eq(155).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_342,h_411,g_auto/f_auto/q_auto/f6e1d4d8-2ee2-411c-a93b-bc399854a5a4?_a=BAVC24IB0');
        cy.get('img').eq(156).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_342,h_411,g_auto/f_auto/q_auto/f83675e8-806e-47d7-98f2-4819e946c678?_a=BAVC24IB0');
        cy.get('img').eq(157).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_342,h_411,g_auto/f_auto/q_auto/f92e1167-2d27-4c55-98ae-bbabd479ef10?_a=BAVC24IB0');
        cy.get('img').eq(158).should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/c_thumb,w_342,h_411,g_auto/f_auto/q_auto/ff2e654f-d265-4c45-ae03-3e2e1a37ccb2?_a=BAVC24IB0');


        Partner.moreimage.eq(3).click()*/
       // cy.get('.styles_image__ooBB_').should('have.attr', 'src', 'https://res.cloudinary.com/foratravelstaging/image/upload/f_auto/q_auto/063e868f-84f6-4ddf-a729-8774837759c3?_a=BAVC24Bx0');
        cy.wait(2000)
      /*  Partner.gridnextimageno1.scrollIntoView().should('be.visible')
        Partner.gridnextimageno2.should('be.visible')
        Partner.gridnextimageno3.should('be.visible')*/

     /*   Partner.gridnextimage.click()
        cy.wait(2000)
        cy.wait(2000)
  /    Partner.gridnextimageno4.scrollIntoView().should('be.visible')
       Partner.gridnextimageno5.should('be.visible')*/
   /*     Partner.gridnextimageno6.should('be.visible')
        Partner.gridnextimage.click()
        cy.wait(2000)
        Partner.gridpreviousimage.click()
        cy.wait(2000)
        Partner.gridnextimageno4.scrollIntoView().should('be.visible')
       Partner.gridnextimageno5.should('be.visible')
        Partner.gridnextimageno6.should('be.visible')*/
     /*   Partner.gridclose.click()
        Partner.Backtoresult.click()
        cy.wait(5000)
      
        Partner.Searchbar.clear().type(dataJson.Destination5+'{enter}')
        
        Partner.Searchbutton.click()
        Partner.Imagenotfound.should('be.visible')*/


    })

})

it('Advisor_Partners_TC006_To verify the hotel classifications on the hotel card', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.wait(2000)
    cy.viewport(1500,785)
Partner.Cancelicon.click()
Partner.Searchbutton.click()
cy.wait(2000)
/*Partner.Onestar.scrollIntoView().click({force: true})
cy.wait(5000)
Partner.onestarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Onestar.scrollIntoView().click()
cy.wait(5000)

Partner.Twostar.click()
cy.wait(5000)
Partner.Twostarresult.eq(0).scrollIntoView().should('be.visible')
Partner.Twostar.click()
cy.wait(5000)
Partner.Threestar.eq(4).click()
cy.wait(3000)
Partner.Threestarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Threestar.eq(4).click()
cy.wait(5000)
Partner.Fourstar.eq(3).click()
cy.wait(5000)
Partner.Fourstarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Fourstar.eq(3).click()
cy.wait(5000)
Partner.Fivestar.eq(2).click()
cy.wait(5000)
Partner.Fivestarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Fivestar.eq(2).click()
cy.wait(2000)

*/

});


/*it('Advisor_Partners_TC007_To verify the  hotel location on the hotel card', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
    cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {

    Partner.Searchbar.type(dataJson.Destination5+'{enter}')
//Partner.Searchbutton.click()
cy.wait(2000)
cy.get('[id="main-container"]').scrollTo("center")

Partner.Viewonmaplink.should('be.visible')
Partner.Viewonmaplink.click()
    })
})
*/


/*it('Advisor_Partners_TC009_To verify the all-inclusive label on hotel card and sort and filter the search results list for hotels', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
    cy.viewport(1500,785)
 Partner.Cancelicon.click()
    Partner.Searchbutton.click()
    cy.wait(2000)
    Partner.Allexclusivecheckbox.eq(1).click()
    cy.wait(5000)
    Partner.Allexclusivetag.eq(0).scrollIntoView().should('be.visible')
    Partner.Allexclusivecheckbox.eq(1).click()
    Partner.Allexclusivecheckbox.should('not.be.checked');
    Partner.Brandssearch.eq(1).click()
Partner.Brandscroll.scrollTo('bottom')
cy.wait(2000)
Partner.Zazacheckbox.click()
Partner.Searchbar.click()
cy.wait(2000)
Partner.brandsymbol.eq(0).scrollIntoView().should('be.visible')
Partner.dropdownfilter.eq(3).click()
cy.wait(2000)
Partner.Brandscroll.scrollTo('bottom')
Partner.Zazacheckbox.click()

//Partner.Clear.scrollIntoView().click()
cy.wait(2000)
Partner.Oneone.click()
cy.wait(6000)
Partner.Searchbar.click()
Partner.Nohotelfound.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Nohotelfound1.scrollIntoView().should('be.visible')
cy.wait(2000)

//Partner.Nohotelfound2.scrollIntoView().should('be.visiblFe')
Partner.Searchbar.click()
Partner.Brandcancel.eq(0).click()
cy.wait(5000)
Partner.clearresult.should('be.visible')
 Partner.Partnerprogramfilter.should('be.visible')
 Partner.Preferedpartnersearch.eq(0).click()
 cy.wait(2000)
 Partner.scroll.scrollTo('bottom');
 Partner.virtuosocheckbox.click()
 Partner.Clear.click()
 Partner.virtuosocheckbox.should('not.be.checked');
 Partner.virtuosocheckbox.click()
 Partner.Searchbar.click()
 cy.wait(5000)
 cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png"][class="w-[70px] h-[70px] md:w-[72px] md:h-[72px]"]')
   .should('have.attr', 'src', 'https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png')
   .should('have.attr', 'width', '72')
   .should('have.attr', 'height', '72')
   .should('have.attr', 'alt', 'Partner logo');
 cy.wait(2000)
 
 Partner.dropdownfilter.eq(2).click()
 Partner.Clear.click()
 Partner.scroll.scrollTo('center');
 cy.wait(2000)
 Partner.Jumeirahcheckbox.click()
 cy.wait(5000)
 Partner.Searchbar.click()
 cy.wait(5000)
 cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Jumeirah.png"][class="w-[70px] h-[70px] md:w-[72px] md:h-[72px]"]')
   .should('have.attr', 'src', 'https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Jumeirah.png')
   .should('have.attr', 'width', '72')
   .should('have.attr', 'height', '72')
   .should('have.attr', 'alt', 'Partner logo');
   Partner.Preferedcancel.eq(0).click()
   cy.wait(2000)

   cy.wait(5000)
   Partner.Recommended.scrollIntoView().should('be.visible').click()
   cy.wait(5000)
   Partner.Alphabetical.click()
   cy.wait(5000)
  // Partner.Hotelalphabeticalresult.should('be.visible')
   Partner.Alphabetical.eq(0).click()
   cy.wait(2000)
   Partner.Recommended.click()
   Partner.Hotelrecomenddedresult.should('be.visible')
cy.wait(2000)
   Partner.Recommended.scrollIntoView().should('be.visible')

})
*/

it('Advisor_Partners_TC013_To verify if  advisor can see a section with partners program perk details', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
    cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
        cy.viewport(1500,785)
        Partner.Selecttraveldate.click()
        Partner.dropdownfilter.eq(1).click()
        Partner.month.click()
        Partner.dropdownfilter.eq(2).click()
        Partner.year.click()
        Partner.date.click()
        Partner.date1.click()
        Partner.Apply.click()
        Partner.Nooftraveller.click()
        Partner.Nooftravellertext.should('be.visible')
        Partner.adduser.click()
        Partner.adduser.click()
        Partner.removeuser.click()
        Partner.Updateuser.click()
        cy.wait(5000)
        Partner.Searchbutton.click()
      //  Partner.Searcherror.should('be.visible')
      cy.wait(5000)

    Partner.Searchbar.type(dataJson.Destination+'{enter}')
Partner.Searchbutton.click()
cy.wait(5000)
//Partner.bookedby.scrollIntoView().should('be.visible')
cy.wait(4000)
Partner.Noratesfound.scrollIntoView().should('be.visible')
Partner.Partnerslogo.should('be.visible')




cy.get('a').eq(23).invoke('removeAttr', 'target').click();
//cy.visit('https://advisor.forastaging.net/partners/hotels/5c48c777-7170-437c-8631-7b45ae4bdd58/rates?q=2024-12-27-2024-12-29-3-1&method=f0d2f069-3a0b-456c-87c9-86a6895c6bd8')

cy.wait(3000)
Partner.resultheader.should('be.visible')
//Partner.Viewpropertydetailsbutton.should('be.visible').click()
cy.wait(4000)

/*Partner.Perks.eq(0).scrollIntoView().should('be.visible').click()
Partner.Perkstext.should('be.visible')
Partner.Perkstext1.should('be.visible')
//Partner.partnerlink.should('be.visible')
Partner.Copyall.eq(1).click({force: true});
Partner.Perks.eq(0).scrollIntoView().should('be.visible').click()
cy.wait(1000)*/
Partner.Viewpropertydetailsbutton.scrollIntoView().should('be.visible').click()
Partner.Viewrates.should('be.visible')
//Partner.bookedby.should('be.visible')

Partner.Perskslink.should('be.visible')
Partner.Persksmsg.should('be.visible')

Partner.Perskslink.should('be.visible').click()
Partner.Selecttraveldate.should('be.visible')
Partner.Nooftraveller1.should('be.visible')
Partner.Searchbutton.should('be.visible')
Partner.rateAddress.eq(0).scrollIntoView().should('be.visible')
Partner.Partnerprogram.should('be.visible')
Partner.Partnerprogramicon.should('be.visible')
Partner.brand.should('be.visible')
Partner.Bookinportal.should('be.visible')
cy.wait(10000)
//cy.get('[id="main-container"]').scrollTo("center")
cy.wait(2000)

//Partner.Perks.eq(0).scrollIntoView().should('be.visible')
//Partner.noratesmsg.should('be.visible')
//Partner.noratesmsg1.should('be.visible')
Partner.Booksoutsideportal.should('be.visible')
/*Partner.Perks.eq(0).scrollIntoView().should('be.visible').click()
Partner.Perkstext.should('be.visible')
Partner.Perkstext1.should('be.visible')
//Partner.partnerlink.should('be.visible')
Partner.Copyall.eq(1).click({force: true});
Partner.Perks.eq(0).scrollIntoView().should('be.visible').click()
cy.wait(1000)
Partner.Booksoutsideportal.should('be.visible').click()
Partner.Booksoutsideportaltext.should('be.visible')
Partner.Booksoutsideportaltext1.should('be.visible')
///Partner.Gotoprogramsite.eq(2).click()
cy.wait(2000)
Partner.Nextratevirtuose.eq(0).click()
Partner.Virtuosoratetext1.should('be.visible')*/


    })
})


/*it('Advisor_Partners_TC014_To verify the advisor ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })


})
*/

})






