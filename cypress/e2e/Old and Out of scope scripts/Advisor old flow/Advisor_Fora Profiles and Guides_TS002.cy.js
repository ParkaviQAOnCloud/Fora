

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of the user profile"*/ 





import Home from "../../../support/Page Object/Advisor/Home"
import Guideandprofile from "../../../support/Page Object/Advisor/ForaGuideandProfile"
///import ForaGuideandProfile from "../../support/Page Object/Advisor/ForaGuideandProfile";



describe('Advisor_Fora Profiles and Guides_TS001',  function() {
 /*before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })*/

it('Advisor_Fora Profiles and Guides_TC002_To verify if user can setup his profile', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
cy.wait(2000)
   cy.Login();
   
    cy.wait(2000)
    Home.navbar.click()
    Guideandprofile.guideandprofile.click()
   
    Guideandprofile.setupprofilelink.invoke('removeAttr', 'target').click()
  
   cy.origin('https://foratravel.typeform.com', () => { 
              cy.on('window:before:load', (win) => {
    ;
              })
      // First Page
    //cy.get('.StyledPicture-sc-__sc-d1bplh-0.bFuUHm').should('be.visible');
    cy.wait(2000)
    cy.contains('Hi there!').should('be.visible');
    cy.contains("Welcome to Fora. We're thrilled to have you as our newest travel advisor.").should('be.visible');
    cy.contains("We built Fora to make you look good – you'll have a beautiful profile page that showcases your personality and travel expertise.").should('be.visible');
    cy.contains("Let's start building your profile page.").scrollIntoView().should('be.visible');
   // cy.get('[class="TextWrapper-sc-__sc-1f8vz90-0 dQBUUz"]').should('be.visible');
   cy.wait(2000)
    cy.get('[data-qa="start-button"]').click();
    
    cy.fixture('Advisor_Fora Profiles and Guides_TS001.json').then(function (dataJson) {
      // Second Page

     cy.get("input[placeholder='name@example.com']").type(dataJson.Search1+ '{enter}');
      cy.get('[data-qa="error-message-visible"]').should('be.visible');
      cy.contains('Please fill this in').should('be.visible');
      cy.get("input[placeholder='name@example.com']").type(dataJson.Search2+ '{enter}');
      cy.get('[data-qa="error-message-visible"]').should('be.visible');
     // cy.get('[class="Boundary-sc-__sc-184gmm6-0 kbieMS"] ').should('be.visible');
      cy.contains("Hmm... that email doesn't look right").should('be.visible');
      cy.get('[data-qa="fixed-footer-navigation-next"]').should('be.enabled'); 
      //
     // cy.get('.hPjMXy')
      cy.get("input[placeholder='name@example.com']").clear().type(dataJson.Search3+ '{enter}');
      cy.get('[data-qa="error-message-visible"]').should('be.visible');
      //cy.get('[class="Boundary-sc-__sc-184gmm6-0 kbieMS"] ').should('be.visible');
      cy.contains("Hmm... that email doesn't look right").should('be.visible');
      cy.get("input[placeholder='name@example.com']").clear().type(dataJson.Search4+ '{enter}');
      cy.contains("Your name must match your fora.travel email address. If you wish to change your Fora email, please email ").should('be.visible');
      cy.get("input[placeholder='Type your answer here...']").type(dataJson.Search1+"{enter}")
      cy.get('[data-qa="error-message-visible"]').should('be.visible');
      cy.contains('Please fill this in').should('be.visible');
      cy.get("input[placeholder='Type your answer here...']").type(dataJson.Search5)
      cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click() //Ok button
     cy.get('[data-qa="choice-0-readable-element"]').should('be.visible');
      cy.contains('she/her').should('be.visible');
      cy.get('[data-qa="choice-1-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('he/him').should('be.visible');
      cy.get('[data-qa="choice-2-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('they/them').should('be.visible');
      cy.get('[data-qa="choice-3-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('she/they').should('be.visible');
      cy.get('[data-qa="choice-4-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('they/she').should('be.visible');
      cy.get('[data-qa="choice-5-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('he/they').should('be.visible');
      cy.get('[data-qa="choice-6-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('they/he').should('be.visible');
      cy.get('[data-qa="choice-7-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains('Prefer not to say').should('be.visible');
      cy.get('[data-qa="choice-8-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
      cy.contains("I don't see my pronouns").should('be.visible');
      cy.wait(4000)
    //cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('bottom', { duration: 1000 });
      cy.get('[data-qa="choice-0-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').scrollIntoView().click({force: true} )

      //third page


     cy.contains('What are your social links?').should('be.visible');
     cy.contains('Please paste the full URL (ex. ').should('be.visible');
     cy.contains('https://www.instagram.com/hellofora/?hl=en').should('be.visible');
     cy.contains('), not tags. They will be linked to your profile.').should('be.visible');
     cy.contains("You're welcome to add: Instagram, TikTok, Facebook, LinkedIn, Pinterest, Twitter, Youtube and/or a website.").should('be.visible');
     
     cy.get('[placeholder="Type your answer here..."]').type(dataJson.Search6+'{enter}')
     cy.wait(2000)
    // cy.get("fieldset[class='Fieldset-sc-__sc-1esu8nk-5 bfsbzb'] span[role='heading'] span").should('be.visible');
    cy.contains("These are optional, but include an answer if you'd like them included on your profile. Note: If you answer this question, terms will appear on you profile.").should('be.visible');
     cy.get('[data-qa="choice-0-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
     cy.get('[data-qa="choice-1-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
     cy.get('[data-qa="choice-2-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
     cy.get('[data-qa="choice-3-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
     cy.get('[data-qa="choice-4-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').should('be.visible');
     cy.get('[data-qa="choice-0-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').click()
    // cy.get('[class="checkbox-list__Wrapper-sc-s0tnfi-0 iFWnbG"]').eq(0).click()
     cy.get('[aria-checked="true"] > .checkbox-list__Wrapper-sc-s0tnfi-0 > [data-qa="choice"]').should('be.visible');
     cy.get('[data-qa="choice-1-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').click()
     cy.get('[aria-checked="true"] > .checkbox-list__Wrapper-sc-s0tnfi-0 > [data-qa="choice"]').should('be.visible');
    cy.get('[data-qa="fixed-footer-navigation-next"]').should('be.enabled').click()
    /// Fourth page
    cy.contains("Here's an example of what the top of your page will look like.").should('be.visible');
    cy.contains("Check out the expertise section – it gives travelers an easy-to-skim overview of an advisor.").should('be.visible');
    cy.get('.StyledPicture-sc-__sc-d1bplh-0').should('be.visible');
    cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click() 
    cy.wait(2000)
   // fifth page
 //  cy.get('[class="TextWrapper-sc-__sc-1f8vz90-0 jIFaiM"]').should('be.visible');
   cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click() 
//sixth page 

  cy.contains("Which languages do you speak?").should('be.visible');
  cy.wait(2000)
  cy.get("div[id='block-895377c4-7758-403b-a3df-f94653bb4d22'] input[placeholder='Type your answer here...']").type(dataJson.Language1)
  cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click() 

  cy.contains("Where are you based?").should('be.visible');
  cy.contains("(Or should we say – ").should('be.visible');
  cy.contains("home when you aren't traveling").should('be.visible');
  cy.get("div[id='block-68a9ada7-f3f5-4e74-b6c0-8c4df14792a5'] input[placeholder='Type your answer here...']").type(dataJson.Search1+'{enter}')
  cy.get('[data-qa="error-message-visible"]').should('be.visible');
  cy.contains('Please fill this in').should('be.visible');
  cy.get("div[id='block-68a9ada7-f3f5-4e74-b6c0-8c4df14792a5'] input[placeholder='Type your answer here...']").type(dataJson.Place+'{enter}')
  cy.wait(2000)
  cy.get('.fAEpnL > .LayoutWrapper-sc-__sc-vw1wyv-0 > [data-qa="blocktype-short_text deep-purple-blocktype-short_text"] > [data-qa="block-scroller"] > .block-scroller__Positioner-sc-1nqcj0x-1 > .Root-sc-__sc-1ks3v0d-2 > .ContentWrapper-sc-__sc-1ks3v0d-4 > .Root-sc-__sc-15qjen0-0 > .iHrftL > [data-qa="question-wrapper"] > .frfGIQ > .InputWrapper-sc-__sc-26uh88-1 > .InputField-sc-__sc-26uh88-0').type('{enter}')
  cy.contains('In what destinations do you have travel expertise? (aka: You are the go-to for travel tips for these destinations...').should('be.visible');
  cy.contains('Please choose two destinations.').should('be.visible');
  cy.get('[class="auto-size-text-area"]').type(dataJson.Place1+'{enter}')
  cy.wait(5000)
  //cy.get('[class="TextWrapper-sc-__sc-1f8vz90-0 gEAJIf"]').should('be.visible');
 // cy.contains("What's your travel expertise by type?").should('be.visible');
  cy.contains('Please choose two. ').should('be.visible');
  cy.contains("Do you love luxury? Live for off-the-beaten-path? Trotting with the family? Boutique hotels connoisseur?").should('be.visible');
  cy.contains("Please note these categories will be displayed on your Fora profile (under 'expertise'), and your advisor profile will be included on our landing pages for each category. ").should('be.visible');
 cy.contains("Make between 1 and 2 choices").should('be.visible');
  cy.contains("Luxury").should('be.visible');
  cy.contains("Adventure").should('be.visible');
  cy.contains("Family Travel").should('be.visible');
  cy.contains("Solo Travel").should('be.visible');
  cy.contains("Off-the-Beaten Path").should('be.visible');
  cy.contains("Boutique Travel").should('be.visible');
 // cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('center', { duration: 1000 });

 cy.contains("All-Inclusive Travel").scrollIntoView().should('be.visible');
  cy.contains("City Travel").scrollIntoView().should('be.visible');
  cy.contains("Food & Wine").scrollIntoView().should('be.visible');
  cy.contains("Arts & Culture").scrollIntoView().should('be.visible');
  cy.contains("Wellness & Spa").scrollIntoView().should('be.visible');
  cy.contains("Outdoors & Nature").scrollIntoView().should('be.visible');
  cy.contains("Safari").scrollIntoView().should('be.visible');
  cy.contains("LGBTQ+ Travel").scrollIntoView().should('be.visible');
  cy.contains("Black Travel").scrollIntoView().should('be.visible');
  cy.contains("Cruise").scrollIntoView().should('be.visible');
//  cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('bottom', { duration: 1000 });

  cy.contains("Road Trip").scrollIntoView().should('be.visible');
  cy.contains("Beaches").scrollIntoView().should('be.visible');
  cy.contains("Honeymoon").scrollIntoView().should('be.visible');
  cy.contains("Babymoon").scrollIntoView().should('be.visible');
  cy.contains("Bachelor/Bachelorette").scrollIntoView().should('be.visible');
  cy.contains("Birthdays").scrollIntoView().should('be.visible');
  cy.contains("Group Travel").scrollIntoView().should('be.visible');
  cy.contains("Couples Travel").scrollIntoView().should('be.visible');
  cy.contains("Digital Nomad Travel").scrollIntoView().should('be.visible');
  //cy.get('[class="HelperHeaderWrapper-sc-__sc-gf2ih3-0 hLfigi"]').scrollIntoView().should('be.visible');

  cy.wait(2000)
  cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click({force: true} ) 
cy.contains('Oops!').scrollIntoView().should('be.visible');
 // cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('center', { duration: 1000 });
cy.wait(2000)
// cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('top',{ duration: 1000 });
cy.wait(1000)
cy.get('[data-qa="choice-7-readable-element"] > .TextWrapper-sc-__sc-1f8vz90-0').scrollIntoView().click({force: true} )
//cy.contains('You can choose 1 more').should('be.visible');

// cy.get('[class="block-scroller__Root-sc-1nqcj0x-0 iKLfHC"]').eq(1).scrollTo('center', { duration: 1000 });

// cy.get('[class="TextWrapper-sc-__sc-1f8vz90-0 jIFaiM"]').should('be.visible');
// cy.get('[class="CheckboxContent-sc-__sc-1r651ck-1 dExOmy"]').scrollIntoView().should('be.visible');
cy.wait(1000)
cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click({force: true} ) 
      //7th page

cy.contains("How would you describe yourself in 1-2 lines?").should('be.visible');
cy.contains("Think of it as your 160 character count for your Twitter bio, but for Fora.").should('be.visible');
cy.contains("Don't stress too much; we have a team of writers who can help if you share notes!").should('be.visible');
//cy.get('[class="StyledPicture-sc-__sc-d1bplh-0 bFuUHm"]').should('be.visible');
//cy.get('[class="TextAreaWrapper-sc-__sc-eos9ho-0 hZVOfB"]').eq(0).type('{enter}')
//cy.contains('Please fill this in').scrollIntoView().should('be.visible');

//cy.get('[class="TextAreaWrapper-sc-__sc-eos9ho-0 hZVOfB"]').eq(0).type(dataJson.text2+'{ }')
//cy.get('[data-qa="animate"]').should('be.visible');
//cy.wait(2000)
cy.get('[placeholder="Type your answer here..."]').eq(0).scrollIntoView().type(dataJson.text+'{shift}{enter}')
cy.get('[placeholder="Type your answer here..."]').eq(0).type(dataJson.text1)
cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click({force: true} ) 

cy.contains('How would you describe your travel style?').should('be.visible');
cy.contains('Tell us and travelers about what makes your globetrotting unique! Why would they want to book with you?').should('be.visible');
cy.contains('Examples: ').should('be.visible');
cy.contains('"Former hostel backpacker, now luxe adventurer. I love a gorgeous pool and epic views, as long as I’m close to all the adventure excursions!"').should('be.visible');
cy.contains('"You can usually find me in search of something I have never seen or trying an activity I have never done. Ultimately, I enjoy a jam-packed day followed by a fine glass of wine."').should('be.visible');

cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click({force: true} ) 
cy.contains('Please fill this in').should('be.visible');
cy.wait(2000)
cy.get('[class="auto-size-text-area"]').eq(1).type(dataJson.text1+'{enter}')//cy.get('[class="TextAreaWrapper-sc-__sc-eos9ho-0 hZVOfB"]').eq(0).type(dataJson.text1+'{enter}')
cy.wait(2000)
//cy.contains("Let's talk about hotels,  Mythili. (We're a little hotel obsessed).").should('be.visible');
cy.get('[data-qa="ok-button-visible deep-purple-ok-button-visible"]').eq(1).click({force: true} ) 
cy.contains('What are your favorite hotels?').should('be.visible');
cy.contains('hotels. Please separate hotels with commas or periods for clarity.').should('be.visible');
cy.contains('If your favorite is a chain, please specify which property/location is your top pick. ').should('be.visible');
cy.get('[class="auto-size-text-area"]').eq(0).type(dataJson.text+'{enter}')
cy.contains('Share your profile picture for your advisor page.').should('be.visible');
cy.contains('Please submit a high resolution (300 pixels per inch), full-sized photo (1280 x 720 pixels) with a travel-related background. Preferably these photos will be un-cropped with your face centered.').should('be.visible');
//cy.get('[class="FileInput-sc-__sc-c3cbkl-1 jWNEoK"]').click()
//const Picture1='Profilepict.jpg' 
  //cy.get('[type="file"]').attachFile(Picture1)  
  /*const Picture1 = 'Profilepict.jpg';
  it('Testing csv uploading', () => {
    cy.fixture(Picture1, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then(fileContent => {
        cy.get("input[type='file']").attachFile({ fileContent, Picture1, mimeType: 'image/jpeg', encoding:'utf8' })
    })
  })*/
 /* cy.fixture('Profilepict.jpg').then(fileContent => {
    cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: 'Profilepict.jpg',
        mimeType: 'image/jpeg'
   
      })*/
    }) 
  })  
})

})
