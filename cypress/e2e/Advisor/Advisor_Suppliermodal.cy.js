import Supplierlogin from "../../support/Page Object/Advisor/Supplierlogin"
describe('Advisor_Suppliermodal_TS001 ',{ testIsolation: false }, function() {
      before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)
      })
  it('Advisor_Suppliermodal_To verify Supplierlogin_Avalonwaterway', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        })    
       
        //cy.Login1()
        cy.NotanadvisorLogin()
        cy.viewport(1500,785)
        cy.wait(3000)
cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
cy.wait(5000)
Supplierlogin.Cancel.click()
cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
Supplierlogin.Requestloginheader.should('be.visible')
Supplierlogin.Whatsupplierheader1.should('be.visible')
Supplierlogin.Whatsupplierheader2.should('be.visible')
Supplierlogin.Next.click()
Supplierlogin.Error.should('be.visible')
cy.wait(2000)
Supplierlogin.whichsupplierdropdown.click()
Supplierlogin.Avalonwaterway.should('be.visible')
Supplierlogin.whichsupplierdropdown.click()
cy.wait(2000)
Supplierlogin.Stageofbookingheader1.should('be.visible')
Supplierlogin.Stageofbookingheader2.should('be.visible')
Supplierlogin.Boookingprocessdropdown.click()
cy.wait(2000)
Supplierlogin.Option1.scrollIntoView().should('be.visible')
Supplierlogin.Option2.scrollIntoView().should('be.visible')
Supplierlogin.Option3.scrollIntoView().should('be.visible')
//Supplierlogin.Option4.scrollIntoView().should('be.visible')
Supplierlogin.Option2.click()
Supplierlogin.Next.click()
Supplierlogin.Error.should('be.visible')
Supplierlogin.whichsupplierdropdown.click()
cy.wait(2000)
Supplierlogin.Avalonwaterway.should('be.visible').click()
Supplierlogin.Next.click()
Supplierlogin.Avalontext.should('be.visible')
Supplierlogin.text1.should('be.visible')
Supplierlogin.text2.should('be.visible')
Supplierlogin.text3.should('be.visible')
Supplierlogin.cancelicon.should('be.visible')
Supplierlogin.Cancelbutton.should('be.visible')
Supplierlogin.Gotosupplierpage.should('be.visible')
Supplierlogin.cancelicon.should('be.visible').click()
cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
Supplierlogin.whichsupplierdropdown.click()

Supplierlogin.Avalonwaterway.should('be.visible').click()
Supplierlogin.Boookingprocessdropdown.click()

Supplierlogin.Option1.click()
Supplierlogin.Next.click()
Supplierlogin.Gotosupplierpage.click()
cy.wait(3000)
cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')

Supplierlogin.whichsupplierdropdown.click()

Supplierlogin.Avalonwaterway.should('be.visible').click()
Supplierlogin.Boookingprocessdropdown.click()

Supplierlogin.Option1.click()
Supplierlogin.Next.click()
Supplierlogin.Cancelbutton.click()
    })

 /*it('Advisor_Suppliermodal_To verify Supplierlogin_Azmara', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
cy.wait(2000)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Azmara.should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
Supplierlogin.Option1.should('be.visible')
Supplierlogin.Option2.should('be.visible')
Supplierlogin.Option3.scrollIntoView().should('be.visible')
Supplierlogin.Option4.scrollIntoView().should('be.visible')
Supplierlogin.Option1.click()
Supplierlogin.Next.click()
        Supplierlogin.Azmaratext.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        Supplierlogin.Submitbutton.should('be.visible').click()

        cy.wait(5000)
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()
    })

    /*it('Advisor_Suppliermodal_To verify Supplierlogin_Blacklane', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.wait(2000)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Blacklane.should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option3.click()
        Supplierlogin.Next.click()
        Supplierlogin.Blacklanesupplier.should('be.visible')
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.text3.should('be.visible')
        Supplierlogin.Gotosupplierpage.click()
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')


    })

    it('Advisor_Suppliermodal_To verify Supplierlogin_Carnivalcruises', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Carnivalcrusiesline.should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option3.click()
        Supplierlogin.Next.click()
        Supplierlogin.Carnivalcrusieslinesupplier.should('be.visible')
        cy.wait(1000)
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.Text4.should('be.visible')
        Supplierlogin.Gotosupplierpage.click()
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')

    })
    it('Advisor_Suppliermodal_To verify Supplierlogin_Classicvacation', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        cy.wait(2000)
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Classicvacation.should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Classicvacationsupplier.should('be.visible')
        
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.text3.should('be.visible')
        Supplierlogin.Gotosupplierpage.click()
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')

    })*/
        
    it('Advisor_Suppliermodal_To verify Supplierlogin_Deltavacation', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.wait(2000)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Deltavacation.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Deltavacationsupplier.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        cy.wait(5000)
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()


    })
  /*  it('Advisor_Suppliermodal_To verify Supplierlogin_Expediataap', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.wait(2000)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Expediataap.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Expediataapsupplier.should('be.visible')
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.text3.should('be.visible')
        Supplierlogin.Gotosupplierpage.click()
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')


    })
    it('Advisor_Suppliermodal_To verify Supplierlogin_Explorejourney', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)

        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Explorajourney.click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Explorajourneysupplier.should('be.visible')
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.text3.should('be.visible')
        Supplierlogin.Gotosupplierpagelink.click()
        Supplierlogin.cancelicon.should('be.visible').click()
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
     
    })
    it('Advisor_Suppliermodal_To verify Supplierlogin_Fourseason', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Fourseason.click()
     
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Fourseasonsupplier.should('be.visible')
        Supplierlogin.text5.should('be.visible')
        Supplierlogin.text6.should('be.visible')
        Supplierlogin.text7.should('be.visible')
        Supplierlogin.close.click()
  
    })
    it('Advisor_Suppliermodal_To verify Supplierlogin_Gate1', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Gate1.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Gate1supplier.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()
cy.wait(2000)
        

    })
    it('Advisor_Suppliermodal_To verify Supplierlogin_Glidedglobe page', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.wait(5000)
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Glided.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Glidedsupplier.should('be.visible')
        Supplierlogin.text1.should('be.visible')
        Supplierlogin.text2.should('be.visible')
        Supplierlogin.text3.should('be.visible')
        Supplierlogin.Gotosupplierpage.click()
       // Supplierlogin.cancelicon.should('be.visible').click()
     
       cy.wait(2000)

    })

    it('Advisor_Suppliermodal_To verify Supplierlogin_Globus ', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
       
        Supplierlogin.Globus.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Globussupplier.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()

    })

    it('Advisor_Suppliermodal_To verify Supplierlogin_h10', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.H10.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.H10supplier.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()

    })


   it('Advisor_Suppliermodal_To verify Supplierlogin_Hoshinoya', () => {
        cy.on('uncaught:exception', (err,runnable) => { 
            return false
        }) 
        cy.viewport(1500,785)
        cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
        Supplierlogin.whichsupplierdropdown.click()
        Supplierlogin.Hoshinoya.scrollIntoView().should('be.visible').click()
        Supplierlogin.Boookingprocessdropdown.click()
        Supplierlogin.Option4.click()
        Supplierlogin.Next.click()
        Supplierlogin.Hoshinoyasupplier.should('be.visible')
        Supplierlogin.Supplierlogintext.should('be.visible')
        Supplierlogin.Supplierlogintext1.should('be.visible')
        Supplierlogin.Submitbutton.should('be.visible').click()
        Supplierlogin.Rightmark.should('be.visible')
        Supplierlogin.Thankyoumsg.should('be.visible')
        Supplierlogin.Thankyoumsg1.should('be.visible')
        Supplierlogin.close.should('be.visible').click()
    })


 
    
  

it('Advisor_Suppliermodal_To verify Supplierlogin_MSC', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.viewport(1500,785)
    cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
    Supplierlogin.whichsupplierdropdown.click()
    Supplierlogin.MSC.scrollIntoView().should('be.visible').click()
    Supplierlogin.Boookingprocessdropdown.click()
    Supplierlogin.Option4.click()
    Supplierlogin.Next.click()
    Supplierlogin.MSCsupplier.should('be.visible')
    Supplierlogin.Supplierlogintext.should('be.visible')
    Supplierlogin.Supplierlogintext1.should('be.visible')
    Supplierlogin.Submitbutton.should('be.visible').click()
    Supplierlogin.Rightmark.should('be.visible')
    Supplierlogin.Thankyoumsg.should('be.visible')
    Supplierlogin.Thankyoumsg1.should('be.visible')
    Supplierlogin.close.should('be.visible').click()
})


it('Advisor_Suppliermodal_To verify Supplierlogin_Melia', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.viewport(1500,785)
    cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
    Supplierlogin.whichsupplierdropdown.click()
  
    Supplierlogin.Melia.scrollIntoView().should('be.visible').click()
    Supplierlogin.Boookingprocessdropdown.click()
    Supplierlogin.Option4.click()
    Supplierlogin.Next.click()
    Supplierlogin.Meliasupplier.should('be.visible')
    Supplierlogin.Supplierlogintext.should('be.visible')
    Supplierlogin.Supplierlogintext1.should('be.visible')
    Supplierlogin.Submitbutton.should('be.visible').click()
    Supplierlogin.Rightmark.should('be.visible')
    Supplierlogin.Thankyoumsg.should('be.visible')
    Supplierlogin.Thankyoumsg1.should('be.visible')
    Supplierlogin.close.should('be.visible').click()
})

it('Advisor_Suppliermodal_To verify Norwegiancruiseline ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.viewport(1500,785)
    cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
    Supplierlogin.whichsupplierdropdown.click()
Supplierlogin.Norwegiancruiseline.scrollIntoView().should('be.visible').click()
    Supplierlogin.Boookingprocessdropdown.click()
    Supplierlogin.Option4.click()
    Supplierlogin.Next.click()
    Supplierlogin.Norwegiancruiselinesupplier.should('be.visible')
    Supplierlogin.Supplierlogintext.should('be.visible')
    Supplierlogin.Supplierlogintext1.should('be.visible')
    Supplierlogin.Submitbutton.should('be.visible').click()
    Supplierlogin.Rightmark.should('be.visible')
    Supplierlogin.Thankyoumsg.should('be.visible')
    Supplierlogin.Thankyoumsg1.should('be.visible')
    Supplierlogin.close.should('be.visible').click()
    

})
it('Advisor_Suppliermodal_To verify Norwegiancruiseline ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.viewport(1500,785)
    cy.visit('https://advisor.forastaging.net/?modal=request-supplier-login')
    Supplierlogin.whichsupplierdropdown.click()
    Supplierlogin.Onesource.scrollIntoView().should('be.visible').click()
    Supplierlogin.Boookingprocessdropdown.click()
    Supplierlogin.Option1.click()
    Supplierlogin.Next.click()
    Supplierlogin.Onesourcesupplier.should('be.visible')
    Supplierlogin.Supplierlogintext.should('be.visible')
    Supplierlogin.Supplierlogintext1.should('be.visible')
    Supplierlogin.Submitbutton.should('be.visible').click()
    Supplierlogin.Rightmark.should('be.visible')
    Supplierlogin.Thankyoumsg.should('be.visible')
    Supplierlogin.Thankyoumsg1.should('be.visible')
    Supplierlogin.close.should('be.visible').click()



})*/

})