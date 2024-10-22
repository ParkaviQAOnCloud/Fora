import Trainingpage from "../../support/Page Object/Advisor/Training";
import Partner from "../../support/Page Object/Advisor/Partner";
import Home from "../../support/Page Object/Advisor/Home"
import Gesttingstarted from '../../support/Page Object/Advisor/Gettingstarted'

describe('Advisor_Training_TS001', { testIsolation: false }, function() {
  before(() => {
    // Ensure a clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData);
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.clearAllLocalStorage();
  });

it("Advisor_Training_TC0001", () => {
    
    cy.NotanadvisorLogin()
    cy.viewport(1500,785) 

//Trainingpage.hamburgerMenuButton.click();
    Trainingpage.trainingMenuOption.click();
    cy.url().should('include', '/training');

    Trainingpage.trainingMenuOption.should('be.visible');
    Trainingpage.searchInput.should('be.visible');
  Trainingpage.expandAllButton.should('be.visible');
    Trainingpage.searchInput.click().type("Welcome to Fora");
    Trainingpage.result1.should('be.visible');
    Trainingpage.close.click();
    Trainingpage.searchInput.clear().type("Video");
    Trainingpage.noresult.should('be.visible');
   Trainingpage.close.click();
    Trainingpage.expandAllButton.click();
   cy.wait(3000)
  Trainingpage.lessons1.should('be.visible');
    Trainingpage.mins.should('be.visible');
  // Trainingpage.lessonNumber.should('be.visible');
    Trainingpage.name.should('be.visible');
    Trainingpage.count.should('be.visible');
    Trainingpage.Clickbooking.eq(0).click();
    Trainingpage.back.should('be.visible');

   Trainingpage.welcome.scrollIntoView().should('be.visible');
    Trainingpage.playButton.click();
    Trainingpage.stop.click()   
    cy.wait(2000)
    Trainingpage.materials.scrollIntoView().click();

    const completeLessons = () => {
      cy.wait(2000);
    
      cy.get('button') // Or replace with the actual button selector
        .then(($btn) => {
          if ($btn.hasClass('bg-white') && $btn.hasClass('rounded-3xl')) {
            // If the button has the class for "Mark as complete", click it
            Gesttingstarted.Markeascomplete.click();
          } else if ($btn.hasClass('bg-success')) {
            // If the button is already marked as "Complete", log it and move on
            cy.log('Lesson already marked as complete, skipping the click');
          } else {
            cy.log('No matching button found');
          }
        });
    
    cy.get('body').then(($body) => {
      const hasNextButton = $body.find('a:contains("Next")').length > 0;
  
      if (hasNextButton) {
        cy.get('a').contains('Next').scrollIntoView().click();
        cy.wait(1000);
        completeLessons(); // Recursively go to the next lesson
      } else {
        cy.wait(5000);
        cy.get('a').contains('Back to Training').click();
        cy.wait(5000);
      }
    });
  }
  
  completeLessons();


    Trainingpage.collapseAllButton.scrollIntoView().should('have.text', 'Collapse All');
    Trainingpage.collapseAllButton.click();
    cy.wait(1000)
});



it("Advisor_Training_TC0002- Report an issue", () => {

Home.navbar.click({force:true})

Partner.Reportanissue.click({force:true})


//Partner.Reportanissue.scrollIntoView().click()
Partner.Issuetopicheader.should('be.visible')
Partner.trainingdropdown.should('be.visible').click()
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

})
})
