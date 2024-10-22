


import Home from "../../support/Page Object/Advisor/Home"
import Partner from "../../support/Page Object/Advisor/Partner"
//import Booking from "../../support/Page Object/Advisor/Booking"


describe('Advisor_Partners_TS001',{ testIsolation: false }, function() {
    before(() => {
      
     cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
  cy.clearAllLocalStorage()
    })
  
it('Advisor_Partners_TC001_To verify the  sort hotel based on hotel class', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })    

      cy.viewport(1500,785)

      cy.NotanadvisorLogin()
    cy.wait(5000)
    Partner.Partner.click()
    cy.wait(5000)
   /// Partner.Banner.should('be.visible')
    cy.url().should('include', 'https://advisor.forastaging.net/partners/hotels')
    cy.wait(5000)
    

Partner.Hotel.should('be.visible')
Partner.Searchbar.should('be.visible')
Partner.Selecttraveldate.should('be.visible')
//Partner.Travellers.should('be.visible')
Partner.Searchbutton.should('be.visible')
/////////////////////////////Partner.list.should('be.visible')
Partner.Map.should('be.visible')
Partner.Preferedpartners.should('be.visible')
Partner.Preferedpartnersearch.eq(0).scrollIntoView().should('be.visible')
Partner.Brands.should('be.visible')
Partner.Brandssearch.should('be.visible')

Partner.Hoteltype.eq(0).scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Unrated.should('be.visible').click()
Partner.Unrated.should('be.visible').click()

Partner.Onestar.scrollIntoView().click({force: true})
cy.wait(5000)
Partner.onestarresult.eq(0).scrollIntoView().should('be.visible')
Partner.One.scrollIntoView().should('be.visible')

Partner.Onestar.scrollIntoView().click()
cy.wait(6000)

Partner.Twostar.click()
cy.wait(5000)
Partner.Twostarresult.eq(0).scrollIntoView().should('be.visible')
Partner.Twostar.click()
cy.wait(5000)
Partner.Threestar.click()
cy.wait(3000)
Partner.Threestarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Threestar.click()
cy.wait(5000)
Partner.Fourstar.click()
cy.wait(5000)

Partner.Fourstarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Fourstar.click()
cy.wait(5000)
Partner.Fivestar.click()
cy.wait(5000)
Partner.Fivestarresult.eq(0).scrollIntoView().should('be.visible')
cy.wait(5000)
Partner.Fivestar.click()
cy.wait(2000)

    })

it('Advisor_Partners_TC002_To verify the hotels based on  partner/brands/show only checkbox/', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.viewport(1500,785)

Partner.Preferedpartnersearch.click()
cy.wait(2000)
Partner.scroll.scrollTo('bottom');
Partner.virtuosocheckbox.click()
Partner.Clear.scrollIntoView().click()
Partner.virtuosocheckbox.should('not.be.checked');
Partner.virtuosocheckbox.click()

cy.wait(2000)
Partner.scroll.scrollTo('top');

cy.wait(5000)


//Partner.Preferedpartnersearch.eq(0).click()
cy.wait(2000)
Partner.Clear.scrollIntoView().click()
Partner.scroll.scrollTo('center');
cy.wait(2000)
Partner.Jumeirahcheckbox.click()
cy.wait(5000)
cy.get('img[alt="Partner logo"]')
      .should('be.visible')
      .and('have.attr', 'src', 'https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Jumeirah.png')
      .and('have.attr', 'width', '40')
      .and('have.attr', 'height', '40');
  Partner.Clear.scrollIntoView().click()
  cy.wait(2000)
  Partner.Preferedpartnersearch.scrollIntoView().click({force: true})

  cy.wait(2000)

Partner.Brandssearch.scrollIntoView().click()
//Partner.Brandscroll.scrollTo('bottom')
cy.wait(2000)
Partner.Zazacheckbox.click()
cy.wait(2000)
Partner.brandsymbol.eq(0).scrollIntoView().should('be.visible')
Partner.Clear.scrollIntoView().click()
cy.wait(2000)
//cy.scrollTo('center')
Partner.Oneone.click()
cy.wait(5000)
//Partner.Brandssearch.scrollIntoView().click()

Partner.Nohotelfound.scrollIntoView().should('be.visible')
Partner.Nohotelfound1.scrollIntoView().should('be.visible')
Partner.Nohotelfound2.should('be.visible')
Partner.Nohotelfound3.scrollIntoView().should('be.visible')
Partner.Nohotelfound4.scrollIntoView().should('be.visible')

cy.get('[class="text-smallLH22 list-disc inline-flex flex-wrap justify-items-start"]').each(($li) => {

  cy.wrap($li).should('contain.text', 'Bookings with children');
  cy.wrap($li).should('contain.text', 'Multiple rooms');
  cy.wrap($li).should('contain.text', 'Group bookings');
  cy.wrap($li).should('contain.text', "Property isn't in portal");




})

///Partner.Searchbar.click()
Partner.Preferedcancel.eq(0).click({force:true})
cy.wait(5000)

Partner.clearresult.should('be.visible')
Partner.Brandssearch.scrollIntoView().click({force:true})
cy.wait(2000)
 Partner.Hoteltype.should('be.visible')
 Partner.Allexclusivecheckbox.scrollIntoView().click()
 cy.wait(2000)
 Partner.Allexclusivetag.eq(0).scrollIntoView().should('be.visible')
 Partner.Allexclusivecheckbox.click()
 Partner.Allexclusivecheckbox.should('not.be.checked');

 Partner.Preferedpartners.scrollIntoView().should('be.visible')
 Partner.Preferedpartnershotelcheckbox.scrollIntoView().check()
 Partner.Preferedpartnertag.scrollIntoView().should('be.visible')
 Partner.Preferedpartnershotelcheckbox.scrollIntoView().uncheck()
 Partner.Preferedpartnershotelcheckbox.should('not.be.checked');

Partner.Recommended.click()
cy.wait(5000)
Partner.Alphabetical.click()
cy.wait(5000)
Partner.Hotelalphabeticalresult.should('be.visible')
Partner.Alphabetical.eq(0).click()
Partner.Recommended.click()
Partner.Hotelrecomenddedresult.should('be.visible')
})

it('Advisor_Partners_TC003_To verify the  List page', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.viewport(1500,785)

 Partner.List.scrollIntoView().should('be.visible').click()
cy.wait(2000)
Partner.myfavorites.should('be.visible')
Partner.Zeroproperties.should('be.visible')
Partner.NewCard.should('be.visible')
Partner.Newlist.click()
Partner.Listname.should('be.visible')
Partner.Listfield.should('be.visible')
Partner.Cancelbutton.should('be.visible')
Partner.Addlistbutton.should('be.visible').click()
cy.wait(1000)
Partner.Errormsg.should('be.visible')
Partner.Cancelbutton.should('be.visible').click()
cy.wait(2000)
Partner.Newlist.should('be.visible').click()
cy.wait(2000)
const generateShortUniqueName = (length = 10) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
const Listname = generateShortUniqueName()

Partner.Listfield.should('be.visible').type(Listname)
cy.wait(2000)
Partner.Addlistbutton.click()
cy.wait(2000)
Partner.Newfvrtcard.click()
cy.wait(2000)
Partner.Searchbar.clear()
cy.wait(2000)
Partner.Searchbutton.click()
cy.wait(8000)
Partner.Likebutton.eq(1).scrollIntoView().click()
Partner.Mylist.should('be.visible')
Partner.Listcount.should('be.visible')
Partner.Newlistinsidelist.should('be.visible')
Partner.Newlistinsidelistcard.should('be.visible')
Partner.Mylistcancel.should('be.visible')
Partner.Mylistsave.should('be.visible')
Partner.Newlistinsidelist.should('be.visible').click()
Partner.Listname.should('be.visible')
Partner.Listfield1.should('be.visible')
Partner.Cancelbutton.should('be.visible')
Partner.Addlistbutton.should('be.visible').click()
Partner.Errormsg1.should('be.visible')
Partner.Cancelbutton.should('be.visible').click()
cy.wait(2000)
Partner.Newlist.should('be.visible').click()
cy.wait(2000)
const Listname1 = generateShortUniqueName()

Partner.Listfield1.should('be.visible').type(Listname1)
cy.wait(2000)
Partner.Addlistbutton.should('be.visible').click()
//Partner.Selectednumber.should('be.visible')
cy.get('[class="flex flex-col p-2 gap-2 rounded-sm border border-lightGreyBorder shadow-[0_2px_10px_0_rgba(181,181,181,0.25)] cursor-pointer hover:border-main border-main !shadow-[0_2px_10px_0_rgba(181,181,181,0.25),0_0_0_1px_#000] bg-lightGreyBg"]') // Adjust this selector based on your CSS class or style for highlighted cards
            .then($highlightedCards => {
                const highlightedCount = $highlightedCards.length;

                // Step 2: Get the text from the "Lists" section
                cy.get('[class="text-medium"]') // Adjust this selector to target the "4 lists (1 selected)" text
                    .invoke('text')
                    .then(text => {
                        const match = text.match(/(\d+)\slists\s\((\d+)\sselected\)/);
                        const selectedCount = parseInt(match[2], 10);

                        // Step 3: Assert that the count matches
                        expect(highlightedCount).to.equal(selectedCount);
                    });
            });
   cy.wait(3000)
Partner.Mylistsave.click()
cy.wait(2000)
Partner.Likeicon.should('be.visible')
cy.wait(2000)
Partner.Likebutton.eq(5).click()
Partner.card.click()
Partner.card1.click()
Partner.card.click()

Partner.Highlightedcard            .then($highlightedCards => {
                const highlightedCount = $highlightedCards.length;

                // Step 2: Get the text from the "Lists" section
                cy.get('[class="text-medium"]')
                    .invoke('text')
                    .then(text => {
                        const match = text.match(/(\d+)\slists\s\((\d+)\sselected\)/);
                        const selectedCount = parseInt(match[2], 10);

                        // Step 3: Assert that the count matches
                        expect(highlightedCount).to.equal(selectedCount);
                    });
            });
            Partner.Mylistsave.click()
            Partner.List.scrollIntoView().should('be.visible').click()
            cy.wait(2000)
   Partner.Clickcard.click()
   ///Search term is present
Partner.Searchbar.invoke('val') 
            .should('match', /My List: "\w+"/);
cy.wait(1000)
///identify if total hotel number is matching with number of hotel visible in the page
cy.get('[class="flex flex-col rounded-sm border bg-white hover:border-tertiaryOld mb-6 overflow-hidden xl:flex-row xl:h-[280px]"]', { timeout: 10000 }) 
  .then(cards => {
    const cardCount = cards.length;
    cy.log('Card Count:', cardCount); 
    cy.get('span.text-small.whitespace-nowrap') 
      .invoke('text')
      .then(resultText => {
        const resultCount = parseInt(resultText.match(/\d+/)[0]); 
        cy.log('Result Count:', resultCount); 

        // Step 3: Assert that the counts match
        expect(resultCount).to.equal(cardCount)
      })
})
Partner.Endofresult.should('be.visible')
cy.get('[class="text-smallLH22 list-disc inline-flex flex-wrap justify-items-start"]').each(($li) => {

  cy.wrap($li).should('contain.text', 'Bookings with children');
  cy.wrap($li).should('contain.text', 'Multiple rooms');
  cy.wrap($li).should('contain.text', 'Group bookings');
  cy.wrap($li).should('contain.text', "Property isn't in portal");




})
cy.get('[class="text-mediumLH18 list-decimal justify-items-start flex flex-col gap-2 pl-4"]').each(($li) => {

    cy.wrap($li).should('contain.text', 'Confirm with the property that your desired rate is commissionable.');
    cy.wrap($li).should('contain.text', 'Input this number into the IATA field to earn commission (all other fields will not be accepted).');
    cy.wrap($li).should('contain.text', 'Foward confirmations to Fora HQ to ensure commissions.');


  
})
Partner.CopyIATAbutton.click()
Partner.ExpediaTaap.should('be.visible')
  Partner.ExpediaTaaplogo.should('be.visible')
  Partner.Searchbar.clear()
  cy.wait(2000)
  Partner.Searchbutton.click()
  cy.wait(5000)
Partner.Likebutton.eq(0).click()
cy.get('#favorites-list-scroll-container > .grid > :nth-child(2)').click()

Partner.Highlightedcard // Adjust this selector based on your CSS class or style for highlighted cards
            .then($highlightedCards => {
                const highlightedCount = $highlightedCards.length;

                // Step 2: Get the text from the "Lists" section
                cy.get('[class="text-medium"]') // Adjust this selector to target the "4 lists (1 selected)" text
                    .invoke('text')
                    .then(text => {
                        const match = text.match(/(\d+)\slists\s\((\d+)\sselected\)/);
                        const selectedCount = parseInt(match[2], 10);

                        // Step 3: Assert that the count matches
                        expect(highlightedCount).to.equal(selectedCount);
                    });
            });
            Partner.Mylistsave.click()


})
it('Advisor_Partners_TC001_To verify the  List page action buttton edit/delete', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.viewport(1500,785)

  Partner.List.scrollIntoView().should('be.visible').click()
  cy.wait(3000)
Partner.Actionbutton.eq(0).click()
Partner.Editbutton.should('be.visible')
Partner.Deletebutton.should('be.visible')
Partner.Editbutton.click()
Partner.Cancelbutton.click()

Partner.Actionbutton.eq(0).click()
Partner.Editedcard.eq(1).invoke('text').then((initialName) => {
  
  Partner.Editbutton.click()

  const generateShortUniqueName = (length = 10) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  const Listname = generateShortUniqueName()
  cy.wait(2000)
  cy.get('[class="form-control py-[11px] text-medium"]').eq(1).clear().type(Listname)
  Partner.Mylistsave.click()
 Partner.Editedcard.eq(1).invoke('text').should('not.eq', initialName).and('eq', Listname);
 Partner.Actionbutton.eq(1).click()
 cy.wait(2000)
 Partner.Deletebutton.click()
 Partner.Deletetext.should('be.visible')
 Partner.Deletetext1.should('be.visible')
 Partner.Deletelist.should('be.visible')
 Partner.Nokeeplist.should('be.visible').click()
 Partner.Actionbutton.eq(1).click()
 cy.wait(2000)
 Partner.Deletebutton.click()
 Partner.Deletelist.should('be.visible').click()

})


})
/*it('Advisor_Partners_TC001_To verify the  Currency dropdown page', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.viewport(1500,785)
Partner.Partner.click()
Partner.Selecttraveldate.click()
Partner.Nextmonth.click()
Partner.Previousmonth.click()
Partner.Nextmonth.click()
Partner.Nextmonth.click()
Partner.FormDate.click()
Partner.todate.click()
Partner.Checkin.should('be.visible')
Partner.Checkindate.scrollIntoView().should('be.visible')
Partner.Checkout.scrollIntoView().should('be.visible')
Partner.Checkoutdate.scrollIntoView().should('be.visible')
Partner.Nights.scrollIntoView().should('be.visible')
Partner.Donebutton.scrollIntoView().click()

cy.wait(8000)
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);

  const validCurrencies = ['$', '£', '€','¥','AUD','BRL', 'CAD','CHF','CNY','HKD','INR','MXN','NZD','SGD','KRW','AED'];
  const containsValidCurrency = validCurrencies.some(currency => text.includes(currency));
  expect(containsValidCurrency, `Text "${text}" should contain one of the valid currencies`).to.be.true;
});

///USD
Partner.Currencydropdown.click();
Partner.USD.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', '$');
})
////AUD
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.AUD.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'AUD');
})
////BRL
cy.wait(2000)
Partner.Currencydropdown.click();
Partner.BRL.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'BRL');
})
////CAD
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.CAD.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'CAD');
})
////CHF
cy.wait(2000)
Partner.Currencydropdown.click();
Partner.CHF.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'CHF');
})
////CNY
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.CNY.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'CNY');
})
////EUR
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.EUR.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', '€');
})
///CNY
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.CNY.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'CNY');
})
///GBP
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.GBP.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', '£');
})
///HKD
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.HKD.click();
cy.wait(2000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'HKD');
})
///INR
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.INR.click();
cy.wait(3000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'INR');
})
///JPY
cy.wait(2000)
Partner.Currencydropdown.click();
Partner.JPY.click();
cy.wait(3000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', '¥');
})
///MXN
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.MXN.click();
cy.wait(3000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'MXN');
})
///NZD
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.NZD.click();
cy.wait(3000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'NZD');
})
///SGD
cy.wait(2000)

Partner.Currencydropdown.click();
Partner.SGD.click();
cy.wait(3000); 
Partner.Currencyselector.each(($price, index) => {
  const text = $price.text().trim(); 
  cy.log(`Text ${index + 1}: "${text}"`);
  cy.wrap($price).should('contain', 'SGD');
})
})*/
})
 

 

///})
/*Partner.carderror.should('be.visible')
Partner.Editcard.click()
cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {
cy.get('.css-19bb58m').type(dataJson.Countryfield1)
cy.wait(2000)
cy.get('#react-select-country_id-option-0').click()
cy.get('[data-testid="address"]').type(dataJson.Address)
cy.get('[data-testid="address_additional"]').type(dataJson.Aptnumber)
cy.get('[data-testid="city"]').type(dataJson.City)
cy.get('[data-testid="state"]').type(dataJson.State)
cy.get('[data-testid="postal_code"]').type(dataJson.Zipcode)
cy.get('.btn-primary').click()
cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png"][class="w-[70px] h-[70px] md:w-[72px] md:h-[72px]"]')
  .should('have.attr', 'src', 'https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png')
  .should('have.attr', 'width', '72')
  .should('have.attr', 'height', '72')
  .should('have.attr', 'alt', 'Partner logo');
cy.wait(2000)
Partner.Cradsave.click()*/