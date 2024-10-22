import Home from "../../support/Page Object/Advisor/Home"
import Partner from "../../support/Page Object/Advisor/Partner"


describe('Advisor_Partners_TS003',{ testIsolation: false }, function() {
    before(() => {
      
     cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
  cy.clearAllLocalStorage()
    })
    it('Advisor_Partners_TC00_To verify the Map feature', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      }) 
      cy.viewport(1500,785)
      cy.NotanadvisorLogin()
      Partner.Partner.click()
      cy.wait(2000)
     Partner.Searchbar.type('London')
cy.wait(2000)

Partner.Searchbutton.click()
cy.wait(5000)
      Partner.Map.click()
      cy.wait(3000)
      Partner.Adddatestoseeprices.should('be.visible')

      Partner.Mapzoomout.click()
      Partner.Mapzoomin.click()
      Partner.Mapzoomin.click()
      cy.wait(8000)
      Partner.Hotelmapcard.eq(2).click()
      cy.wait(5000)
Partner.Adddatestoseerates.should('be.visible')
Partner.Mapcardopen.click()
Partner.Viewrates.should('be.visible')
Partner.Backtoresult.click()
cy.wait(5000)
Partner.Likebutton.eq(0).click()
cy.wait(2000)
Partner.card.click()

Partner.card1.click()


            Partner.Mylistsave.click()
            Partner.Selecttraveldate.click()
            Partner.Nextmonth.click()
            Partner.Previousmonth.click()
            Partner.Nextmonth.click()
            Partner.Nextmonth.click()
            Partner.FormDate.click()
            Partner.todate.click()
            Partner.Checkin.should('be.visible')
            Partner.Checkindate.should('be.visible')
            Partner.Checkout.should('be.visible')
            Partner.Checkoutdate.should('be.visible')
            Partner.Nights.should('be.visible')
            Partner.Donebutton.click()
            cy.wait(5000)
            Partner.Totalamount.scrollIntoView().should('be.visible')
            Partner.amount.scrollIntoView().should('be.visible')
            Partner.Estimatedcommissionpercent.scrollIntoView().should('be.visible')
            Partner.Mapcardopen.click()
            Partner.Viewpropertydetailsbutton.should('be.visible')
            Partner.Backtoresult.click()
            Partner.Searchbar.clear()
            Partner.Searchbutton.click()
            cy.wait(8000)
              Partner.Whitecard.click()
              cy.wait(8000)
            Partner.Purplecard.click()
            cy.wait(5000)
          Partner.MapForareservedtag.should('be.visible')
          Partner.Browncard.click()
          Partner.Preferedpartnertag.should('be.visible')
    })

    it('Advisor_Partners_TC00_To verify ', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      }) 
      cy.viewport(1500,785)
 Partner.ViewList.click()
 cy.wait(1000)
 cy.get('[data-testid="date-input-value"]').click()
 cy.wait(2000)
 cy.get('.text-normal').scrollIntoView().click()
 cy.wait(5000)
Partner.Searchbutton.scrollIntoView().click()
cy.wait(3000)

 Partner.Searchbutton.click()
 cy.wait(3000)
Partner.image.should('be.visible')
Partner.Hotelcountry.should('be.visible')
Partner.Hotelname.should('be.visible')
Partner.hotelstar.should('be.visible')
Partner.Bookedbyadvisor.should('be.visible')
Partner.Review.should('be.visible')
Partner.Preferedpartnertag.should('be.visible')
Partner.HotelForareservedtag.should('be.visible')
Partner.Hotelname.should('be.visible').click()
cy.wait(2000)

////Partner.Visithotelwebsite.click()
Partner.Hotelnameindetailspage.should('be.visible')
Partner.Hotelplace1.should('be.visible')
Partner.Hotelclassindetailspage.should('be.visible')
Partner.Hotelbookedbyindetailspage.should('be.visible')
Partner.Reviewlink.should('be.visible').click()
cy.wait(2000)
Partner.Reviewsction.scrollIntoView().should('be.visible')
Partner.Viewperkstext.scrollIntoView().should('be.visible')
//Partner.Viewperks.should('be.visible').click()
Partner.Image.eq(0).click()
Partner.Imagecount.should('be.visible')
cy.xpath("//body[1]/div[3]/div[2]").should('be.visible')
Partner.Imageclose.should('be.visible')
Partner.Nextimage.should('be.visible').click()
cy.wait(2000)
Partner.imagecount1.should('be.visible')
Partner.previousimage.should('be.visible').click()
Partner.imagecount1.should('be.visible')
Partner.Imageclose.should('be.visible').click()
Partner.Viewperks.scrollIntoView().should('be.visible').click()
Partner.Viewpropertydetailsbutton.click()
Partner.PropertyDetails.scrollIntoView().should('be.visible')
Partner.supplierdescription.should('be.visible')
Partner.Address.should('be.visible')
Partner.Phonenumber.should('be.visible')
Partner.Phonenumberlink.should('be.visible')
Partner.Reviewtext.scrollIntoView().should('be.visible')
Partner.Reviewtext1.should('be.visible')
Partner.Reviewstar.should('be.visible')
Partner.Reviewtextnew.should('be.visible')
Partner.RatesLike.click()
Partner.Cancelbutton.click()
Partner.RatesLike.click()
Partner.card.click()
Partner.card1.click()    
Partner.Mylistsave.click()
Partner.Viewrates.click()
Partner.Enterdatestag.should('be.visible')
Partner.Selectdates.should('be.visible')
Partner.Selecttraveldateinrates.should('be.visible')
Partner.Travellersrates.should('be.visible')
Partner.Searchbutton.should("be.visible")
Partner.Foradeserve.should('be.visible')
Partner.SupplierabDesign.should('be.visible')
Partner.Tabletpro.should('be.visible')
Partner.Expedia.should('be.visible')
cy.wait(2000)
Partner.SeeForaReserveperks.should('be.visible').click()
Partner.SeeForaReserveperkstext.should('be.visible')
Partner.SeeForaReserveperkstext1.should('be.visible')
Partner.ForareservePerkstext.each(($li) => {

  cy.wrap($li).should('contain.text', 'Complimentary Room Upgrade Upon Availability Check In Time');
  cy.wrap($li).should('contain.text', 'Flute Of Prosecco Upon Arrival In Room');
  cy.wrap($li).should('contain.text', 'Dedicated Gm Welcome Letter');
})
Partner.Copyallperks.click()
  .trigger('mouseover');  
 Partner. Copiedtooltip .should('be.visible')
  .and('contain', 'Copied!'); 
  Partner.Donebuttondescription.click()

  cy.get('[data-tooltip-id="payout-tooltip"]').eq(1)  // Adjust selector to target the SVG or other trigger element
  .trigger('mouseover',{ timeout: 5000 })  
  ///.and('contain', 'Commissions are paid out on the 10th and 25th');

Partner.Booksoutsideportal.should('be.visible')
Partner.WhenshouldIbookoutside.click()
Partner.Bookinportal.should('be.visible')
Partner.Bookinportalinfobanner.should('be.visible')
Partner.Searchlogo.should('be.visible')
Partner.Datenotselected.should('be.visible')
Partner.Selecthoteldata.should('be.visible')
Partner.Selectdatesbutton.click()
Partner.Nextmonth.click()
Partner.Previousmonth.click()
Partner.Nextmonth.click()
Partner.Nextmonth.click()
Partner.FormDate.click()
Partner.todate.click()
Partner.Checkin.should('be.visible')
Partner.Checkindate.should('be.visible')
Partner.Checkout.should('be.visible')
Partner.Checkoutdate.should('be.visible')
Partner.Nights.should('be.visible')
Partner.Donebutton.click()
cy.wait(2000)
Partner.Eightresultfound.should('be.visible')
Partner.Currencydropdown1.scrollIntoView().click();
Partner.USD.click();
cy.wait(2000); 
Partner.Currencyselector1.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', '$');
})
cy.get('.hidden.lg\\:block').each(($el, index) => {
  cy.log(`Text Content: ${$el.text()}`);
  
  

});


    })
})