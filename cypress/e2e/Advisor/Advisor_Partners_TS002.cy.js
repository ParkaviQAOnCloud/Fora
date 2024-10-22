/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. contents of the Preferred Partner page"										            */ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1. contents of the Packages page"										            */ 

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1. contents of the Cruises page"										            */ 

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1. contents of the Flight page"										            */ 

/* Description for TC007: "The goal of the test is to verify the following functionalities:
 1. contents of the DmC's page"										            */ 

/* Description for TC008: "The goal of the test is to verify the following functionalities:
1. To Check the Homes and villas page"										            */ 

/* Description for TC009: "The goal of the test is to verify the following functionalities:
1. contents of the Tours and activities page"										            */ 

/* Description for TC010: "The goal of the test is to verify the following functionalities:
1. contents of the Transportation page"										            */ 

/* Description for TC011: "The goal of the test is to verify the following functionalities:
1. contents of the Insurance page"		*/

import Home from "../../support/Page Object/Advisor/Home"
import Partner from "../../support/Page Object/Advisor/Partner"


describe('Advisor_Partners_TS002',{ testIsolation: false }, function() {
    before(() => {
      
     cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })
  cy.clearAllLocalStorage()
    })
    it('Advisor_Partners_TC001_To verify the Preferred Partners page-verifying filter, searchbar and  clicking on the preferred partner supplier and validating the supplier details', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      }) 
      cy.viewport(1500,785)
      cy.NotanadvisorLogin()
      
      Partner.Partner.click() 
    //Partner.Backtoresult.click()
    cy.log('Validating Preferred partner section')
    cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
      cy.wait(5000)
      Partner.Preferredpartnertab.click()  // clicking on the preferred partner tab
          
     // Partner.Preferedpartner.should('be.visible')
    cy.wait(5000)
    cy.url().should('include', 'https://advisor.forastaging.net/partners/programs')
      Partner.PreferredpartnerSearchbar.should('be.visible')
      Partner.Searchbutton.should('be.visible')
      Partner.PreferredpartnerSearchbar.should('be.visible')
      Partner.Searchbutton.should('be.visible')
      Partner.Needtoknow.should('be.visible')
      Partner.Needtoknowtext.should('be.visible')
      Partner.Resource.scrollIntoView().should('be.visible')
    const Link = 'a[href="https://drive.google.com/drive/u/1/folders/1esI0tPRrwn14NTogHGjIaHSftV-DWa9t"]';

    /// veryfing the sort option of Preferred partner
    Partner.Recommended.click({force:true})
    cy.wait(3000)
    Partner.Alphabetical.scrollIntoView().should('be.visible')
   cy.wait(3000)
    Partner.Alphabetical.scrollIntoView().should('be.visible').click()
    cy.wait(2000)
    Partner.Alphabeticalresult.should('be.visible')
    
       
    cy.wait(1000)
    Partner.Alphabetical.eq(0).scrollIntoView().should('be.visible').click()
    cy.wait(1000)
    Partner.Recommended.click()
    Partner.close.click()
    cy.wait(1000)
        ///clicking on the link present in the need to know section
      
        Partner.Researchbestpractice.should('be.visible').click()
      
        Partner.Brandmatchmaking.should('be.visible').click()
       cy.wait(2000)
        //valiadting the search actions

    Partner.PreferredpartnerSearchbar.type('{enter}')
    Partner.PreferredpartnerSearchbar.type('Diamond Club By B Signature')
    Partner.Searchbutton.click()
    cy.wait(1000)
    Partner.Searchresult.click()
    cy.wait(2000)

    Partner.Diamondclubby.should('be.visible')
    Partner.image1.should('be.visible')
    ///    //valiadting the Preferred partner supplier
    Partner.Partnerdetailtext.scrollIntoView().should('be.visible')
    Partner.Partnerdetailtext1.should('be.visible')
    Partner.Partnerdetailtext2.eq(0).scrollIntoView().should('be.visible')
    Partner.Partnerdetailtext3.eq(1).scrollIntoView().should('be.visible')
    Partner.Partnerdetailtext4.scrollIntoView().should('be.visible')
    Partner.Partnerdetailtext5.scrollIntoView().should('be.visible')
    Partner.Partnerdetailtext6.eq(1).scrollIntoView().should('be.visible')
    Partner.Copybutton.scrollIntoView().click()
    Partner.perksdetails.should('be.visible')
    Partner.Howtobook.should('be.visible')
    Partner.Howtobookdirectly.scrollIntoView().should('be.disabled')
    Partner.Backtoresult.click()
    ///Partner.Cancelicon.click()
    Partner.Searchbutton.click()
    })
    })
    it('Advisor_Partners_TC003_To Check the Packages page- Verifying the search, sort  and  clicking on the package supplier and validating the supplier details', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
          return false
      })    

  // cy.Login1()
  cy.viewport(1500,785)

  // Home.navbar.click()
   cy.wait(2000)
cy.log("Validating the Package page")

  cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
Partner.Packages.click()
//Partner.Packages.click()
cy.url().should('include', 'https://advisor.forastaging.net/partners/packages')
Partner.TotalPackage.should('be.visible')
//.TotalPackage1.should('be.visible')
Partner.Needtoknow.should('be.visible')

Partner.allexlusivetext.should('be.visible')


Partner.Howtobookbeyond.scrollIntoView().should('be.visible').click()

  const specificLinkSelector = 'a[href="https://www.bluediamondresorts.com/"]';

Partner.ClubMedSupplier.scrollIntoView().should('be.visible').click()


Partner.Packages.click()
cy.wait(2000)
cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
/// veryfing the sort option of Package supplier
Partner.Recommended.click()
Partner.Alphabetical.click()
cy.wait(3000)
Partner.Pckagealphabeticalresult.scrollIntoView().should('be.visible')
Partner.Alphabetical.eq(0).click()
Partner.Recommended.click()
Partner.Packagerecommendedresult.scrollIntoView().should('be.visible')
cy.wait(2000)
//valiadting the search option
Partner.PackageSearchbar.type(dataJson.Destination3+'{enter}')
cy.wait(2000)

Partner.Noexclusiveicon.scrollIntoView().should('be.visible')
Partner.Noexclusivemsg.scrollIntoView().should('be.visible')
Partner.Noexclusivemsg1.scrollIntoView().should('be.visible')
///Partner.Cancelicon.click()
Partner.PackageSearchbar.clear().type(dataJson.Destination4+'{enter}')
cy.wait(5000)
Partner.Allexclusivename.scrollIntoView().should('be.visible').click()
cy.wait(3000)
Partner.PackagesPlace.scrollIntoView().should('be.visible')


Partner.Allexlucivelink.click()
//Partner.notes.should('be.visible')
//Partner.notestext.should('be.visible')
Partner.Returntopartner.scrollIntoView().should('be.visible').click()
//Partner.Destinationsymbol.should('be.visible')
//Partner.AllexluciveDestination.should('be.visible')
cy.wait(3000)


   })
  })
})
it('Advisor_Partners_TC005_To verify the crusies page- Verifying the search, sort and clicking on the cruises supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.viewport(1500,785)

  cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
 //   Home.navbar.click()
 cy.wait(3000)
  cy.log('verifying cruises page')
  //click on the cruises tab
Partner.Crusise.click()

cy.url().should('include','https://advisor.forastaging.net/partners/cruises')
Partner.Needtoknow.should('be.visible')
Partner.Needtoknowtext1.should('be.visible')
Partner.Resource.scrollIntoView().should('be.visible')


//validating the search action

cy.wait(2000)
Partner.CrusiesSearchbar.type(dataJson.Cruises+'{enter}')
cy.wait(2000)

Partner.Newcrusisefound.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Newcrusisefound1.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Searchbutton.click()
cy.wait(2000)
Partner.CrusiesSearchbar.clear()
cy.wait(2000)
Partner.Searchbutton.click()
cy.wait(2000)
// validating the sort function
Partner.Recommended.click()
Partner.Alphabetical.click()
cy.wait(2000)
Partner.cruisesalphabeticalresult.scrollIntoView().should('be.visible')
Partner.Alphabetical.eq(0).click()


Partner.Recommended.click()
cy.wait(1000)
Partner.cruisesrecommendedresult.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.CrusiesSearchbar.type(dataJson.Cruises1)
Partner.Searchbutton.click()
cy.wait(3000)
//////valiadting the Cruises supplier
Partner.Crusisename.should('be.visible')
Partner.Crusiseplace.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.bookedbytag.should('be.visible')
//Partner.Afflication.should('be.visible')
//Partner.Afflicationimage.should('be.visible')
//Partner.Afflicationimage1.should('be.visible')
Partner.Crusisename.eq(1).should('be.visible').click()


Partner.Crusisebrandflag.should('be.visible')
//Partner.Crusisebrandname.should('be.visible')
Partner.About.should('be.visible')
Partner.notes.scrollIntoView().should('be.visible')
Partner.notestext.eq(0).should('be.visible')
//Partner.notestext.eq(1).should('be.visible')

//Partner.regularratedetailspage.should('be.visible')

//Partner.Afflicationimage1.should('be.visible')
Partner.cruiseslink.click()
cy.wait(2000)
/*const specificLinkSelector1 = 'a[href="https://www.princess.com/ships-and-experience/ships/"]';

cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
cy.request({ url: href, failOnStatusCode: false }).then((response) => {
  if (response.status !== 200) {
    cy.log(`Broken link found: ${href}`);
  }
});
});*/
Partner.cruisesreviewlink.click()
Partner.reviewsbyfora.scrollIntoView().should("be.visible")
Partner.Returntopartner.scrollIntoView().should('be.visible').click()
cy.wait(2000)
Partner.Searchbutton.click()
cy.wait(5000)
Partner.CrusiesSearchbar.clear().type(dataJson.Cruises2+'{enter}')
//Partner.Afflication.should('be.visible')
//Partner.Afflicationimage.should('be.visible')
//cy.get('img').eq(3).should('be.visible');
//cy.get('img[src="https://fora-production-images.s3.us-west-2.amazonaws.com/assets/suppliers_logos/Virtuoso.png"]').should('be.visible');


})
 })
it('Advisor_Partners_TC006_To Check the Flight page- verifying the Search, sort and clicking on the flight supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })   
  cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {

  cy.viewport(1500,785)
cy.log('Verifying the Flight page')
cy.wait(2000)
Partner.Flight.click()
cy.wait(3000)
cy.url().should('include','https://advisor.forastaging.net/partners/flights')

Partner.flightname.scrollIntoView().should('be.visible')
//Partner.Viewonmap.should('be.visible')
Partner.flightname.scrollIntoView().click()
cy.wait(3000)
Partner.Flightcountry.should('be.visible')
Partner.flightabout.should('be.visible')
Partner.Flightlink.should('be.visible').click()
Partner.flightnote.should('be.visible')
Partner.notetext.should('be.visible')
Partner.Backtoresult.click()
//valiadting the search actions
Partner.FlightsSearchbar.type(dataJson.Flightname)
cy.wait(1000)
Partner.Searchbutton.click()

Partner.Recommended.click()
Partner.Alphabetical.click()

  })
})


it('Advisor_Partners_TC007_To verify the dmcs page- verifying the Search, sort and clicking on the dmcs supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  cy.viewport(1500,785)

  //Home.navbar.click()
  cy.wait(3000)
 
  cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
cy.log('validating the DMC')
  Partner.Dmcs.click()
  cy.wait(5000)
  cy.wait(5000)
Partner.Dmcscount.should('be.visible')
  cy.url().should('include','https://advisor.forastaging.net/partners/dmcs')
Partner.Needtoknow.should('be.visible')
Partner.Needtoknowtext1.scrollIntoView().should('be.visible')
Partner.IntroductiontoDmcs.click()
Partner.Experiencetomorocco.click()

Partner.Recommended.click()
cy.wait(3000)
Partner.Alphabetical.click()
cy.wait(3000)
Partner.dmcsalphabeticalresult.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Alphabetical.click()
cy.wait(2000)
Partner.Recommended.click()
cy.wait(2000)
Partner.dmcsrecommendedresult.should('be.visible')

cy.wait(2000)
//valiadting the search actions
Partner.DmcsSearchbar.type(dataJson.DMCS)
Partner.Searchbutton.click()

////valiadting the DMC's supplier
Partner.Dmcsname.click()
cy.wait(5000)
//cy.get('a').eq(20).invoke('removeAttr', 'target').click()

Partner.Dmcsnameheader.should('be.visible')
Partner.About.scrollIntoView().should('be.visible')
Partner.Dmcsnamecountry.scrollIntoView().should('be.visible')
Partner.Dmcslocationicon.scrollIntoView().should('be.visible')
Partner.Dmcsregularratesicon.scrollIntoView().should('be.visible')
Partner.Dmcslink.should('be.visible').click()
Partner.Dmcsimage.should('be.visible').click()
Partner.Dmcsnextimage.should('be.visible').click()
Partner.Dmcimageclose.should('be.visible').click()
Partner.Backtoresult.click()
cy.wait(2000)

Partner.Searchbutton.click()









})
})

it('Advisor_Partners_TC008_To verify the Homes and Villas page - Validating search sort and  clicking on the homes and villas supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  cy.viewport(1500,785)

  cy.wait(2000)

cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
cy.log('Verify the Homes and Villas page')
cy.wait(3000)
Partner.Homesandvillasheader.scrollIntoView().should('be.visible')
Partner.Homesandvillas.should('be.visible').click()
cy.wait(5000)
cy.url().should('include','https://advisor.forastaging.net/partners/home-and-villas')
Partner.Needtoknow.should('be.visible')
Partner.Needtoknowtext1.should('be.visible')
Partner.Resource.scrollIntoView().should('be.visible')
Partner.Howtobookbeyond.scrollIntoView().click()

Partner.HVNsuppliertraining.scrollIntoView().click()

Partner.Homesandvillaproperties.scrollIntoView().should('be.visible')

//valiadting the search actions
Partner.HomesandvillasSearchbar.type(dataJson.Homesandvillas)
Partner.Searchbutton.click()
cy.wait(5000)
Partner.Homesandvillapropertiesresult.should('be.visible')
//Partner.Afflication.should('be.visible')
//Partner.Homesnvillaaffliation.scrollIntoView().should('be.visible')

Partner.Homesnvillasearchresult.scrollIntoView().should('be.visible').click()
cy.wait(2000)
////valiadting the Homes and Villas supplier
Partner.ETRA.should('be.visible')
Partner.ETRADestination.should('be.visible')
Partner.About.scrollIntoView().should('be.visible')

Partner.ETRAlink.scrollIntoView().should('be.visible').click()
const specificLinkSelector1 = 'a[href="https://www.dominiquedebayprivateretreats.com/etra"]';

cy.get(specificLinkSelector1).should('have.attr', 'href').then((href) => {
  cy.request({ url: href, failOnStatusCode: false }).then((response) => {
    if (response.status !== 200) {
      cy.log(`Broken link found: ${href}`);
    }
  });
});

Partner.Backtoresult.click()
cy.wait(4000)
Partner.HomesandvillasSearchbar.clear()

Partner.Searchbutton.click()
cy.wait(4000)

/// veryfing the sort option of Homes and Villas
Partner.Recommended.click()
Partner.Alphabetical.click()
Partner.Homesnvillaalphabeticalresult.scrollIntoView().should('be.visible')
Partner.Alphabetical.eq(0).click()
cy.wait(2000)
Partner.Recommended.click()
Partner.Homesnvillarecommandedresult.scrollIntoView().should('be.visible')
cy.wait(2000)

})
})


it('Advisor_Partners_TC009_To verify the Tours and Activities page - verifying the Search, sort and clicking on the Tours and Activities supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  cy.viewport(1500,785)
cy.wait(1000)
//Partner.Backtoresult.click()
cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
  cy.log('Tours and Activities page')
  Partner.Toursandactivities.click()
  cy.url().should('include','https://advisor.forastaging.net/partners/tours-and-activities')
  cy.wait(2000)
Partner.Toursandactivitiesheader.should('be.visible')
Partner.Needtoknow.should('be.visible')
Partner.Needtoknowtext1.should('be.visible')
Partner.Resource.scrollIntoView().should('be.visible')

cy.get('[id="main-container"]').scrollTo("top")
Partner.Toursandactivitiescount.should('be.visible')
//valiadting the search actions
Partner.ToursandactivitySearchbar.type(dataJson.Toursandactivity)
Partner.Searchbutton.click()
cy.wait(2000)
Partner.Toursandactivitiesresultcount.scrollIntoView().should('be.visible')
cy.wait(2000)
Partner.Toursandactivitiessearchresult.scrollIntoView().should('be.visible')
cy.get('[id="main-container"]').scrollTo("bottom")
Partner.Toursandactivitiessearchplace.scrollIntoView().should('be.visible')
//Partner.Afflication.should('be.visible')
cy.get('img').should('exist');
Partner.Toursandactivitiessearchresult.should('be.visible').click()
cy.wait(2000)
Partner.Toursandactivitiesdetailspage.should('be.visible')
Partner.Toursandactivitiesbrand.scrollIntoView().should('be.visible')
cy.get('img')
      .should('exist');

    // Assert specific attributes of the image
   /* cy.get('img')
      .should('have.attr', 'src', '/img/logo_fora_min.svg')
      .should('have.attr', 'alt', 'Fora Travel')
      .should('have.attr', 'loading', 'lazy')
      .should('have.attr', 'decoding', 'async')
      .should('have.attr', 'class', 'w-full relative object-contain inset-0 absolute')
      .should('have.attr', 'style', 'position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;');
      cy.get('img').eq(0).click()*/
  
Partner.Backtoresult.click()
cy.wait(2000)
Partner.ToursandactivitySearchbar.clear()
cy.wait(4000)
/// veryfing the sort option of Tours and Activities page
Partner.Searchbutton.click()
cy.wait(4000)
Partner.Recommended.click()
cy.wait(2000)
Partner.Alphabetical.click()
cy.wait(2000)
Partner.Toursandactivityalphabeticalresult.should("be.visible")
})
})
it('Advisor_Partners_TC010_To verify the Transportaion page - verifying the Search, sort and clicking on the Transportation supplier and validating the supplier details', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })    
 cy.viewport(1500,785)
  cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
    cy.log('Verify the Transportation page')
    cy.wait(3000)
Partner.Transportation.click()
cy.wait(2000)
Partner.Transportationcount.should('be.visible')
//Partner.Transportationhowtobook.scrollIntoView().click()
//Partner.Rolzosuppliertraining.scrollIntoView().should('be.visible').click()
cy.url().should('include','https://advisor.forastaging.net/partners/transportation')
//valiadting the search actions
Partner.TransportationSearchbar.type(dataJson.Transportation)
Partner.Searchbutton.click()
cy.wait(2000)
Partner.Rolzo.scrollIntoView().should('be.visible')
cy.wait(3000)
Partner.Rolzoname.click()
Partner.Transportationcountryname.should('be.visible')
Partner.Rolzolink.click()
cy.wait(1000)
Partner.Backtoresult.click()
cy.wait(2000)
Partner.TransportationSearchbar.clear()

cy.wait(4000)
Partner.Searchbutton.click()
cy.wait(2000)
////valiadting the Transportation supplier
Partner.Recommended.click()
Partner.Alphabetical.click()
cy.wait(2000)
Partner.Transportationalphabeticalresult.should('be.visible')
cy.wait(2000)

  })
})
it('Advisor_Partners_TC011_To verify the Insurance page', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  }) 
  cy.viewport(1500,785)
cy.wait(2000)
cy.fixture('Advisor_Partners_TS001.json').then(function (dataJson) {
cy.log('Verify the Insurance')
Partner.Insurance.scrollIntoView().click({force: true})
cy.wait(2000)

cy.url().should('include','https://advisor.forastaging.net/partners/insurance')
Partner.insuranceneedtoknow.should("be.visible")
cy.wait(2000)

Partner.insuranceneedtoknowlink1.scrollIntoView().should("be.visible").click()
Partner.insuranceneedtoknowlink2.scrollIntoView().should("be.visible").click()
Partner.insuranceneedtoknowlink3.scrollIntoView().should("be.visible").click()
//valiadting the search actions
Partner.InsuranceSearchbar.type(dataJson.insurance)
Partner.Searchbutton.click()
cy.wait(2000)

Partner.Insuranceresult.should("be.visible")
Partner.Insuranceresult.should("be.visible").click()
cy.wait(2000)
Partner.Insurancecountry.should("be.visible")
Partner.Insuraceimage.should("be.visible")
Partner.Insuraceabout.scrollIntoView().should("be.visible")
Partner.Insurancecountryy.scrollIntoView().should("be.visible")
cy.wait(2000)
Partner.notessection.eq(1).scrollIntoView().should("be.visible")
Partner.Backtoresult.click()
Partner.InsuranceSearchbar.clear()

cy.wait(4000)
Partner.Searchbutton.click()
cy.wait(2000)
/// veryfing the sort option of Insurance

Partner.Recommended.click()
Partner.Alphabetical.click()
Partner.InsuranceAlphabeticalresult.should("be.visible")
})

})
  

 

})
/*Partner.Reportanissue.scrollIntoView().click()
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').click()
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
Partner.Report.should('be.visible').eq(1).click()
//Partner.Error1.should('be.visible')
Partner.Error2.should('be.visible')
Partner.Issueseverityheader.should('be.visible')
Partner.Issueseveritydropdown.click()
Partner.Issueseveritydropdownvalue1.should('be.visible')
Partner.Issueseveritydropdownvalue2.should('be.visible')
Partner.Issueseveritydropdownvalue3.should('be.visible')
Partner.Issueseveritydropdownvalue2.should('be.visible').click()
Partner.Describetheissuefield.should('be.visible').type("error")
cy.wait(5000)
Partner.Report.eq(1).click()
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)

Partner.close1.click()
cy.wait(5000)
Partner.Reportanissue.scrollIntoView().click()
Partner.Reportanissueheader.should('be.visible')
Partner.Reportanissuetext.should('be.visible')
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').eq(0).click()
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
cy.wait(5000)
Partner.Report.eq(1).click()
cy.wait(5000)
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)

Partner.close1.click()
//Marketing
Partner.Reportanissue.scrollIntoView().click()
cy.wait(2000)
Partner.Reportanissueheader.should('be.visible')
Partner.Reportanissuetext.should('be.visible')
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').eq(0).click()
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
cy.wait(5000)
Partner.Report.eq(1).click()
cy.wait(5000)
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)

Partner.close1.click()
cy.wait(5000)
////Partners
Partner.Reportanissue.scrollIntoView().click()
cy.wait(2000)
Partner.Reportanissueheader.should('be.visible')
Partner.Reportanissuetext.should('be.visible')
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').eq(0).click()
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
cy.wait(5000)
Partner.Report.eq(1).click()
cy.wait(5000)
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)
Partner.close1.click()
cy.wait(5000)
//General feedback
Partner.Reportanissue.scrollIntoView().click()
cy.wait(2000)
Partner.Reportanissueheader.should('be.visible')
Partner.Reportanissuetext.should('be.visible')
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').eq(0).click()
Partner.dropdownvalue6.click()
cy.wait(2000)
Partner.Issueseveritydropdown.click()
Partner.Issueseveritydropdownvalue3.should('be.visible').click()
cy.wait(2000)
Partner.Describetheissuefield.should('be.visible').type("Testttttttttttttt")
Partner.Report.eq(1).click()
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)
Partner.close1.click()
cy.wait(2000)
/// Training
Partner.Reportanissue.scrollIntoView().click()
cy.wait(2000)
Partner.Reportanissueheader.should('be.visible')
Partner.Reportanissuetext.should('be.visible')
Partner.Issuetopicheader.should('be.visible')
Partner.Issuetopicdropdown.should('be.visible').eq(0).click()
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
cy.wait(5000)
Partner.Report.eq(1).click()
cy.wait(5000)
Partner.rightmarks.should('be.visible')
Partner.successtext.should('be.visible')
Partner.successsubtext.should('be.visible')
cy.wait(5000)
Partner.close1.click()
cy.wait(2000)*/