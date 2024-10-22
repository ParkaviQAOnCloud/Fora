/*Description of TC010 : "The goal of the test is to verify the following functionalities:
1.  Contents of the user can access Destination Training Modules for Africa"				*/

/*Description of TC011 : "The goal of the test is to verify the following functionalities:
1.  Contents of the user can access Destination Training Modules for Asia"*/

/*Description of TC012 : "The goal of the test is to verify the following functionalities:
1.  Contents of the user can access Destination Training Modules for Central and South America"				*/

/*Description of TC013 :"The goal of the test is to verify the following functionalities:
1.  Contents of the user can access Destination Training Modules for North America"								*/

/*Description of TC014 : "The goal of the test is to verify the following functionalities:
1.  Contents of the user can access Supplier Training Modules"								*/




import Home from "../../support/Page Object/Advisor/Home"
import Training from "../../support/Page Object/Advisor/Training"

describe('Advisor_Training_TS002',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Training_TC010_To verify  if user can access Destination Training Modules for Africa', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        cy.Login()
        //cy.viewport(390,844)
        Home.navbar.click()
        cy.wait(2000)
        Training.Training.click()
        Training.Africaheader.should('be.visible')
Training.Africatext.should('be.visible')
Training.AfricaModules.should('be.visible')
Training.AfricaHours.should('be.visible')
Training.Africaimage.eq(0).should('be.visible')
Training.Africagetstarted.should('be.visible')
Training.AfricaSuccessline.should('be.visible')
Training.Africaheader.click()

Training.Africalesson1.should('be.visible')
Training.Africalesson1text.should('be.visible')
Training.Africalink.click()
Training.Watchvideo.click()
Training.Africalesson2.should('be.visible')
Training.Kenya.should('be.visible')
Training.Kenyatext.should('be.visible')
Training.Tobeannouncedtext.should('be.visible')
Training.Commingsoonbutton1.eq(2).should('not.have.attr', 'disabled')

Training.Africalesson3.should('be.visible')
Training.Morocco.should('be.visible')
Training.Moroccotext.should('be.visible')
Training.Watchvideo1.eq(1).click()
Training.Reviewmaterial.should('be.visible')
Training.Reviewmateriallink.eq(0).click({force: true})


Training.Africalesson4.should('be.visible')
Training.Rwanda.should('be.visible')
Training.Rwandatext.should('be.visible')
Training.Watchvideo1.eq(2).click()
Training.Reviewmaterial.should('be.visible')
Training.Reviewmateriallink.eq(1).click({force: true})

Training.Africalesson5.should('be.visible')
Training.Southafrica.should('be.visible')
Training.Southafricatext.should('be.visible')
Training.Watchvideo1.eq(2).click()
Training.Reviewmaterial.should('be.visible')
Training.Reviewmateriallink.eq(2).click({force: true})

/*Training.Markcompletebutton1.eq(2).click() // change the modules to other if it is already completed
        Training.Reviewtext.should('be.visible')
        Training.Positive.should('be.visible')
        Training.Negative.should('be.visible')
        Training.Neutral.should('be.visible')
        Training.Positive.click()
        Training.Skipbutton.click()*/


    })

    it('Advisor_Training_TC011_To verify  if user can access Destination Training Modules for Asia', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
       
        //cy.viewport(390,844)
       // Home.navbar.click()
        cy.wait(2000)
        //Training.Training.click()
        
        Training.Asiaheader.click()
        Training.completeline.should('be.visible')
        Training.Asialesson1.should('be.visible')
        Training.Japan.should('be.visible')
        Training.Watchvideo1.eq(0).click()
Training.Reviewmaterial.should('be.visible')
Training.Reviewmateriallink.eq(0).click({force: true})
/*Training.Markcompletebutton1.eq(2).click() // change the modules to other if it is already completed
        Training.Reviewtext.should('be.visible')
        Training.Positive.should('be.visible')
        Training.Negative.should('be.visible')
        Training.Neutral.should('be.visible')
        Training.Positive.click()
        Training.Skipbutton.click()*/
    })

    it('Advisor_Training_TC012_To verify  if user can access Destination Training Modules for Central and South America', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
     
        //cy.viewport(390,844)
       // Home.navbar.click()
        cy.wait(2000)
       // Training.Training.click()
        Training.CentralandSouthAmericaaheader.click()
        Training.completeline.should('be.visible')
        Training.Argentina.should('be.visible')
        Training.Argentinatext.should('be.visible')
        Training.Watchvideo1.eq(0).click()
        Training.Reviewmaterial.should('be.visible')
        Training.Reviewmateriallink.eq(0).click({force: true})

       /* Training.Markcompletebutton1.eq(1).click() // change the modules to other if it is already completed
        Training.Reviewtext.should('be.visible')
        Training.Positive.should('be.visible')
        Training.Negative.should('be.visible')
        Training.Neutral.should('be.visible')
        Training.Positive.click()
        Training.Skipbutton.click()*/

    })

    it('Advisor_Training_TC013_To verify  if user can access Destination Training Modules for Central and South America', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
      
        //cy.viewport(390,844)
       // Home.navbar.click()
        cy.wait(2000)
       // Training.Training.click()
        Training.NorthAmericaaheader.click()
        Training.completeline.should('be.visible')
        Training.Watchvideo1.eq(0).click()
        Training.Tobeannouncedtext.should('be.visible')
        Training.Commingsoonbutton1.should('be.visible')


    })

    it('Advisor_Training_TC014_To verify  if user can access Destination Training Modules for Central and South America', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        //cy.Login()
        //cy.viewport(390,844)
       // Home.navbar.click()
        cy.wait(2000)
        //Training.Training.click()
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
})
