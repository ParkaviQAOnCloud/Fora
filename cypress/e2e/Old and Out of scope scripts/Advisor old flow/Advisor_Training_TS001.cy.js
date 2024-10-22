

/*Description of TC001 : "The goal of the test is to verify the following functionalities:
1. contents of Training page"*/

/*Description of TC002 : "The goal of the test is to verify the following functionalities:
1. contents of Certified Training Modules"*/

/*Description of TC008 : ""The goal of the test is to verify the following functionalities:
1. contents of Advanced Training Modules "*/

/*Description of TC009 : "The goal of the test is to verify the following functionalities:
1.  Contents of the Advanced Training Modules that the user can access"	*/



import Home from "../../support/Page Object/Advisor/Home"
import Training from "../../support/Page Object/Advisor/Training"

describe('Advisor_Training_TS001',{ testIsolation: false }, function() {
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Training_TC001_To verify the Training page', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    

       
        cy.Login()
        //cy.viewport(390,844)
        cy.wait(3000)
        Home.navbar.click({force: true})
        cy.wait(2000)
        Training.Training.click()
        Training.Trainingheader.should('be.visible')
        Training.Trainingimage.should('be.visible')
        Training.Advancedheader.should('be.visible')
        Training.Advancedtext.should('be.visible')
        Training.Successtext.should('be.visible')
Training.Getstarted.should('be.visible')
Training.Hours.should('be.visible')
Training.Modules.should('be.visible')
//cy.get('[class="jsx-c8ce0ad902ae85f4 min-h-screen"]').scrollTo('center').wait(500);
Training.Certifiedheader.should('be.visible')
Training.Certifiedimage.should('be.visible')
Training.Certifiedtext.should('be.visible')
Training.CertifiedModules.should('be.visible')
Training.CertifiedHours.should('be.visible')
Training.Africaheader.should('be.visible')
Training.Africatext.should('be.visible')
Training.AfricaModules.should('be.visible')
Training.AfricaHours.should('be.visible')
Training.Africaimage.eq(0).should('be.visible')
Training.Africagetstarted.should('be.visible')
Training.AfricaSuccessline.should('be.visible')

Training.Asiaheader.should('be.visible')
Training.Asiatext.should('be.visible')
Training.AsiaModules.should('be.visible')
Training.AsiaHours.should('be.visible')
Training.Asiaimage.eq(1).should('be.visible')
Training.Asiagetstarted.should('be.visible')
Training.AsiaSuccessline.should('be.visible')

Training.CentralandSouthAmericaaheader.should('be.visible')
Training.CentralandSouthAmericatext.should('be.visible')
Training.CentralandSouthAmericaModules.should('be.visible')
Training.CentralandSouthAmericaHours.should('be.visible')
Training.CentralandSouthAmericaimage.eq(2).should('be.visible')
Training.CentralandSouthAmericagetstarted.should('be.visible')
Training.CentralandSouthAmericaSuccessline.should('be.visible')

Training.NorthAmericaaheader.should('be.visible')
Training.NorthAmericatext.should('be.visible')
Training.NorthAmericaModules.should('be.visible')
Training.NorthAmericaHours.should('be.visible')
Training.NorthAmericaimage.eq(3).should('be.visible')
Training.NorthAmericagetstarted.should('be.visible')
Training.NorthAmericaSuccessline.should('be.visible')

Training.Suppliertrainingheader.should('be.visible')
Training.Testsupplierheader.should('be.visible')
Training.Testsuppliertext.should('be.visible')
Training.Tobeannouncedtext.eq(0).should('be.visible')
Training.Commingsoonbutton.eq(0).should('not.have.attr', 'disabled')

Training.Newtestsupplierheader.should('be.visible')
Training.Newtestsuppliertext.should('be.visible')
Training.Tobeannouncedtext.should('be.visible')
Training.Commingsoonbutton.should('not.have.attr', 'disabled')



    })
     it('Advisor_Training_TC002_To verify if the user can access Certified Training Modules', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
   
        //cy.viewport(390,844)
       // Home.navbar.click({force: true})
        cy.wait(2000)
       // Training.Training.click()
        Training.Certifiedheader.should('be.visible')
        Training.certifiedcoursestart.click()
        Training.Certifiedimage.should('be.visible')
Training.Certifiedtext.should('be.visible')
Training.CertifiedModules.should('be.visible')
Training.CertifiedHours.should('be.visible')
Training.Module1certifiedheader.should('be.visible')
Training.Module1certified.should('be.visible')
Training.Module1certifiedtext.should('be.visible')

Training.Module2certifiedheader.should('be.visible')
Training.Module2certified.should('be.visible')
Training.Module2certifiedtext.should('be.visible')

Training.Module3certifiedheader.should('be.visible')
Training.Module3certified.should('be.visible')
Training.Module3certifiedtext.should('be.visible')

Training.Module4certifiedheader.should('be.visible')
Training.Module4certified.should('be.visible')
Training.Module4certifiedtext.should('be.visible')


    })

 it('Advisor_Training_TC003_To verify MODULE 1 in Certified Training', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
  
        //cy.viewport(390,844)
        //Home.navbar.click({force: true})
        cy.wait(2000)
        //Training.Training.click()
        cy.wait(2000)
        Training.Certifiedheader.click({force: true})
        cy.wait(2000)
        Training.Getstartedcertified.click()
        //Training.Reviewbutton.click()
        Training.modulegetstarted.eq(0).click()
       Training.CertifiedLesson1.should('be.visible')
        Training.Recordedwebinar.should('be.visible')
        Training.CertifiedLesson1text.should('be.visible')
        Training.Watchvideo.should('be.visible')
        Training.Reviewmaterial.should('be.visible')
        Training.Reviewmateriallink.click({force: true})
        Training.Watchvideo.click({force: true})
        Training.Moduleextratext.should('be.visible')
        Training.Bestpractice.should('be.visible')
        Training.Bestpracticeinnewtab.click({force: true})
Training.backtocertified.click()
Training.modulegetstarted.eq(1).click()

        /*Training.Markcompletebutton.eq(0).click() // change the modules to other if it is already completed
        Training.Reviewtext.should('be.visible')
        Training.Positive.should('be.visible')
        Training.Negative.should('be.visible')
        Training.Neutral.should('be.visible')
        Training.Positive.click()
        Training.Skipbutton.click()*/



    })

    



    it('Advisor_Training_TC008_To verify if user can access Advanced Training Modules ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      
        //cy.viewport(390,844)
        //Home.navbar.click({force: true})
        cy.wait(2000)
       // Training.Training.click()
        Training.Getstarted.click({force: true})
        Training.Advancedheader.should('be.visible')
        Training.Advancedtext.should('be.visible')
        Training.Module1header.should('be.visible')
        Training.Module2.should('be.visible')
        Training.Module2header.should('be.visible')
        Training.Module2text.should('be.visible')
        Training.Module3.should('be.visible')
        Training.Module3header.should('be.visible')
        Training.Module3text.should('be.visible')

        Training.Module4.should('be.visible')
        Training.Module4header.should('be.visible')
        Training.Module4text.should('be.visible')

        Training.Module5.should('be.visible')
        Training.Module5header.should('be.visible')
        Training.Module5text.should('be.visible')

        Training.Module6.should('be.visible')
        Training.Module6header.should('be.visible')
        Training.Module6text.should('be.visible')
    })
    it('Advisor_Training_TC009_To verify if user can modules in Advanced Training page ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        //cy.HomeLogin()
        //cy.viewport(390,844)
        //Home.navbar.click({force: true})
        cy.wait(2000)
       // Training.Training.click()
        Training.Getstarted.click({force: true})
        

        Training.Lessonstatus.should('be.visible')
        Training.Module1text.should('be.visible')
       Training.Reviewbutton.eq(0).click()
       // Training.module1advancedbutton.click()
        //Training.module1button.eq(0).click()
        cy.wait(2000)
       // cy.get('[class="jsx-c8ce0ad902ae85f4 flex-1"]').scrollTo('center', { duration: 200 });
      

        Training.lesson1.should('be.visible')
        Training.lesson1header.should('be.visible')
        Training.lesson1text.should('be.visible')
        Training.Reviewbutton.click()

      /*  Training.Markcompletebutton.eq(0).click()
        Training.Reviewtext.should('be.visible')
        Training.Positive.should('be.visible')
        Training.Negative.should('be.visible')
        Training.Neutral.should('be.visible')
        Training.Positive.click()
        Training.Skipbutton.click()
        */
        Training.completebutton.should('be.visible')
        Training.completeline.should('be.visible')
        Training.Moduleextratext.should('be.visible')
        Training.W9form.should('be.visible')
        Training.W9formlink.click()

    })

   
})

