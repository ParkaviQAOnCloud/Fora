/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. Contents of  Info Banners page ."	 */	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1. Contents of search textbox on the  Info Banners page."				 */	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1. Contents of  filter option on the Info Banners page."	 */	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1. Contents of  columns option on the Info Banners page."							 */	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1. Contents of  sorting the Info banners list in Info Banners page."							 */	

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1. Contents of  adding new Info banner "					 */	

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1. Contents of  Edit actions"		 */	



 import Admin from "../../support/Page Object/Admin/Admin"
 import Settings from "../../support/Page Object/Admin/Settings"
 import Infobanners from "../../support/Page Object/Admin/Infobanner"
 describe('Admin_Info Banners_TS001',{ testIsolation: false }, function() {
     before(() => {
       cy.then(Cypress.session.clearCurrentSessionData)
       cy.on('uncaught:exception', (err,runnable) => { 
         return false
       })
     })
     it('Admin_Info Banners_TC001_To verify the Info_Banner Page.', function() {
         cy.on('uncaught:exception', (err,runnable) => { 
           return false
         })
   //  cy.AdminLogin()
   cy.NotanadvisorAdminLogin()
   Admin.navbar.click()
     Settings.settings.click()
     cy.get('.mt-4.flex-grow.flex.flex-col.overflow-y-auto.py-3').scrollTo('bottom', { duration: 800 });
     Infobanners.Infobanners.click()
     cy.url().should('include', 'https://admin.forastaging.net/banner/')
     Infobanners.Infobannerheader.should('be.visible')
    Infobanners.Searchbar.should('be.visible')
    Infobanners.filter.should('be.visible')
    Infobanners.column.should('be.visible')
    Infobanners.addbutton.should('be.visible')
    Infobanners.Name.should('be.visible')
    Infobanners.Actions.should('be.visible')
    Infobanners.Active.should('be.visible')
    Infobanners.Createdby.should('be.visible')
    Infobanners.Isdismissable.should('be.visible')
    Infobanners.Type.should('be.visible')
    })
   it('Admin_Info Banners_TC002_To verify the if user can search using search textbox', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
    return false
        })
        cy.fixture('Admin_info Banners_TS001.json').then(function (dataJson) {

Infobanners.Searchbar.should('be.visible').type(dataJson.Search1+'{enter}')
Infobanners.Searchbar.should('be.visible').clear().type(dataJson.Search2+'{enter}')
Infobanners.Searchresult.should('be.visible')

        })
    })

   it('Admin_Info Banners_TC003_To verify if  user can apply filter', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
        return false
            })
            Infobanners.Searchbar.clear().type('{enter}')
            Infobanners.filter.click()
            cy.get("select").eq(1).select(1)
            Infobanners.Applybutton.click()
           
            Infobanners.filter.click()
            cy.get("select").eq(1).select(2)
            Infobanners.Applybutton.click()
            
            Infobanners.filter.click()
            cy.get("select").eq(1).select(0)
            Infobanners.Applybutton.click()
            
            

            Infobanners.filter.click()
            cy.get("select").eq(0).select(1)
         
            Infobanners.Applybutton.click()
            Infobanners.Alerttype.should('be.visible')
            Infobanners.filter.click()
            cy.get("select").eq(0).select(2)
            Infobanners.Applybutton.click()
            cy.wait(2000)
            Infobanners.Infotype.should('be.visible')
            Infobanners.filter.click()
            cy.get("select").eq(0).select(0)
            Infobanners.Applybutton.click()
           


            Infobanners.filter.click()
            cy.get("select").eq(2).select(1)
            Infobanners.Applybutton.click()
            cy.wait(2000)

            Infobanners.notdismissible.should('be.visible')
            Infobanners.filter.click()
            cy.get("select").eq(2).select(2)
          
            Infobanners.Applybutton.click()
            Infobanners.dismissible.should('be.visible')
            Infobanners.filter.click()
            cy.get("select").eq(2).select(0)
            Infobanners.Applybutton.click()
            

            Infobanners.filter.click()
            cy.get("select").eq(3).select(1)
            Infobanners.Applybutton.click()
            Infobanners.restorebutton.should('be.visible')
            Infobanners.filter.click()
            cy.get("select").eq(3).select(0)
        
            Infobanners.Applybutton.click()
            Infobanners.deletebutton.should('be.visible')
            Infobanners.filter.click()
                   cy.wait(2000)
           Infobanners.cancelbutton.click()
           // Infobanners.cancelbutton.click()

            cy.wait(2000)

        })
        
    it('Admin_Info Banners_TC004_To verify if user can access the columns', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
        return false
            })

            Infobanners.column.click()
            Infobanners.Namecolumn.should('be.visible')
          //  Infobanners.Namecheckbox
           // Infobanners.Activecheckbox
            Infobanners.Activecolumn.should('be.visible')
          //  Infobanners.Typecheckbox
            Infobanners.Typecolumn.should('be.visible')
            Infobanners.Isdismissablecolumn.should('be.visible')
          //  Infobanners.Isdismissablecheckbox
            Infobanners.Tagcolumn.should('be.visible')
            Infobanners.Tagcheckbox.check()
            Infobanners.Createdcolumn.should('be.visible')
            Infobanners.Createdcheckbox.check()
            Infobanners.Upadtedcolumn.should('be.visible')
            Infobanners.Upadtedcheckbox.check()
            Infobanners.Createdbycolumn.should('be.visible')
            Infobanners.Createdbycheckbox.check()
            Infobanners.Createdbyemailcolumn.should('be.visible')
            Infobanners.Createdbyemailcheckbox.check()
            Infobanners.Actionscolumn.should('be.visible')
            Infobanners.Actioncheckbox.should('be.checked');
            Infobanners.Savecolumnsetup.click()
            Infobanners.tableheader.should('contain', 'Tags');
            Infobanners.tableheader.should('contain', 'Created');
            Infobanners.tableheader.should('contain', 'Updated');
            Infobanners.tableheader.should('contain', 'Created by');
            Infobanners.tableheader.should('contain', 'Created by email');
            Infobanners.column.click()
            Infobanners.Tagcheckbox.uncheck()
            Infobanners.Createdcheckbox.uncheck()
            Infobanners.Savecolumnsetup.click()
            Infobanners.tableheader.should('not.contain', 'Tags');
           // Infobanners.tableheader.should('not.contain', 'Created');


        })
        it('Admin_Info Banners_TC005_To verify if user can sort the info banner', function() {
            cy.on('uncaught:exception', (err,runnable) => { 
            return false
                })
                Infobanners.Namesort.click()

                Infobanners.Namesort.click()

                Infobanners.Activesort.click()

                Infobanners.Activesort.click()
            })


            it('Admin_Info Banners_TC006_To verify if user can add Info Banners ', function() {
                cy.on('uncaught:exception', (err,runnable) => { 
                return false
                    })
                    Infobanners.addbutton.click()
                    cy.url().should('include', 'https://admin.forastaging.net/banner/add/')
                    Infobanners.Createinfo.should('be.visible')
                    Infobanners.Savebutton.click()
                    Infobanners.Error.should('be.visible')
                    Infobanners.infobannertype.should('be.visible')
                    cy.get("select").eq(0).select(1)
                    Infobanners.Savebutton.click()
                    Infobanners.Error.should('be.visible')
                            cy.fixture('Admin_info Banners_TS001.json').then(function (dataJson) {

                    Infobanners.Audiencefeild.type(dataJson.Audiencefield+'{enter}')
                    Infobanners.Note
                    Infobanners.infobannerNamefeild.type(dataJson.infobannerNamefeild)
               //     cy.get('.cke_wysiwyg_frame').click().type('hello')
                            })
               cy.frameLoaded('iframe[title="Rich Text Editor, id_text"]');
  // Access the iframe
  cy.get('iframe[title="Rich Text Editor, id_text"]').then($iframe => {
    console.log($iframe);
    // Access the body element inside the iframe
    const iframeBody = $iframe.contents().find('body');

    
    // Type content into the iframe
    cy.wrap(iframeBody).type('QA Testing');
  });
  
        Infobanners.Savebutton.click()
        Infobanners.alert.should('be.visible')
        Infobanners.addbutton.click()
        Infobanners.cancelbutton.click()



                })

                it('Admin_Info Banners_TC007_To verify if user can perform Actions. ', function() {
                    cy.on('uncaught:exception', (err,runnable) => { 
                    return false
                        })
                        cy.fixture('Admin_info Banners_TS001.json').then(function (dataJson) {

                        Infobanners.Searchbar.type(dataJson.infobannerNamefeild+'{enter}')
                        cy.wait(2000)
                        Infobanners.Edit.click()
                        cy.get("select").eq(0).select(2)
                        Infobanners.Savebutton.click()
                        Infobanners.alert.should('be.visible')
                        Infobanners.Searchbar.type(dataJson.infobannerNamefeild+'{enter}')
                        Infobanners.View.click()
                       Infobanners.viewname.should('be.visible')
                       Infobanners.viewtext.should('be.visible')
                       Infobanners.viewedit.click()
                       Infobanners.cancelbutton.click()
                       Infobanners.Searchbar.type(dataJson.infobannerNamefeild+'{enter}')
                       Infobanners.Archieve.click()
                       Infobanners.Archievemsg.should('be.visible')
                       cy.wait(2000)
                       Infobanners.No.click()
                       cy.wait(2000)
                       Infobanners.Archieve.click()
                       Infobanners.Yes.click()

                        })
                    })
    })