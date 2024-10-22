/* Description for TC001: "The goal of the test is to verify the following functionalities:
1. Contents of  Commission Plans Page"		 */	

/* Description for TC002: "The goal of the test is to verify the following functionalities:
1.  Contents of Commission Plan field."					 */	

/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan filter"					 */	

/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan filter column"						 */	

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan columns"						 */	

/* Description for TC006: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan columns field."					 */	

/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of Add commission Plan field."					 */	

/* Description for TC008: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan Add Action field."					 */	

/* Description for TC009: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan view action field."					 */	

/* Description for TC010: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan view action search product list."					 */	

/* Description for TC011: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_Plan view product list columns"									 */	

/* Description for TC012: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan view product list column field"									 */	

/* Description for TC013: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_Plan view product list Add ."						 */	

/* Description for TC014: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan view add field "									 */	

/* Description for TC015: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan  product list Make default action."							 */	

/* Description for TC016: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan  product list Restore action."											 */	

/* Description for TC017: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan  product list Edit action."											 */	

/* Description for TC018: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan  product list view action."									 */	

/* Description for TC019: "The goal of the test is to verify the following functionalities:
1.  Contents of commission_plan  product list Archive action."									 */	

/* Description for TC020: "The goal of the test is to verify the following functionalities:
1.  Contents of commission Plan Archive action  field.   "									 */	


 /* Precondition : Name, Price and Strikethrough price feild should be unique*/

 import Admin from "../../support/Page Object/Admin/Admin"
 import Settings from "../../support/Page Object/Admin/Settings"
 import Commissionplans from "../../support/Page Object/Admin/Commissionplans"
 import Training from "../../support/Page Object/Admin/Training"
 describe('Admin_Commission Plans_TS001',{ testIsolation: false }, function() {
     before(() => {
       // ensure clean test slate for these tests
       cy.then(Cypress.session.clearCurrentSessionData)
       cy.on('uncaught:exception', (err,runnable) => { 
         return false
       })
     })
     it('Admin_Commission Plans_TC001_To verify the Commission Plans Page.', function() {
         cy.on('uncaught:exception', (err,runnable) => { 
           return false
         })
    // cy.AdminLogin()
    cy.NotanadvisorAdminLogin()
    Admin.navbar.click()
     Settings.settings.click()
     Commissionplans.Commissionplans.click()
     cy.url().should('include', 'https://admin.forastaging.net/commission/plans/')
     Commissionplans.Searchbar.should('be.visible')
     Commissionplans.filter.should('be.visible')
     Commissionplans.column.should('be.visible')
     Commissionplans.addbutton.should('be.visible')

        })

   it('Admin_Commission Plans_TC002_To verify the search_textbox.', function() {
          cy.on('uncaught:exception', (err,runnable) => { 
            return false
          })
          cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {

Commissionplans.Searchbar.type(dataJson.Search1+'{enter}')
Commissionplans.Searchbar.clear().type(dataJson.Search2+'{enter}')
Commissionplans.Searchresult.should('be.visible')

        })
      })

      it('Admin_Commission Plans_TC004_to Admin_Commission Plans_TC005 To verify if user can access filter', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })

        Commissionplans.filter.click()
  cy.get("select").select(1)
  cy.get("select").should("have.value", "True");
  Commissionplans.Applybutton.click()
  Commissionplans.Deletebutton.should('be.visible')
  Commissionplans.filter.click()
  cy.get("select").select(2)
  cy.get("select").should("have.value", "False");
  Commissionplans.Applybutton.click()
 Commissionplans.Deletebutton.should('not.exist', { title: 'Archive' });
  Commissionplans.filter.click()
  cy.get("select").select(0)
  Commissionplans.Applybutton.click()
  Commissionplans.filter.click()
  cy.wait(2000)
  Commissionplans.cancel.click({force:true})
  cy.wait(2000)
      })


      
      it('Admin_Commission Plans_TC005_To verify if user can access the column', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
Commissionplans.column.click()
Commissionplans.Namecolumn.should('be.visible')
Commissionplans.Namecheckbox.should('be.checked');
Commissionplans.Ordercolumn.should('be.visible')
Commissionplans.Ordercheckbox.check()
Commissionplans.Createdcolumn.should('be.visible')
Commissionplans.Createdcheckbox.check()
Commissionplans.Changedcolumn.should('be.visible')
Commissionplans.Changedcheckbox.check()
Commissionplans.Linktodoccolumn.should('be.visible')
Commissionplans.Linktodoccheckbox.check()
Commissionplans.Ishiddencolumn.should('be.visible')
Commissionplans.Ishiddencheckbox.check()
Commissionplans.Actionscolumn.should('be.visible')
Commissionplans.Actioncheckbox.should('be.checked');
Commissionplans.Savecolumnsetup.click()
Commissionplans.tableheader.should('contain', 'Order');
Commissionplans.tableheader.should('contain', 'Created');
Commissionplans.tableheader.should('contain', 'Changed');
Commissionplans.tableheader.should('contain', 'Link to document');
Commissionplans.tableheader.should('contain', 'Is hidden');
Commissionplans.column.click()
Commissionplans.Linktodoccheckbox.uncheck()
Commissionplans.Savecolumnsetup.click()
Commissionplans.tableheader.should('not.contain', 'Link to document');
Commissionplans.column.click()
cy.wait(2000)
Commissionplans.cancelicon.click()

      })

      it('Admin_Commission Plans_TC006_To verify if user can apply Sort in columns', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
Commissionplans.Namesort.click()
Commissionplans.namesortresult.should('be.visible')
Commissionplans.Namesort.click()
Commissionplans.namesortresult1.should('be.visible')
Commissionplans.Ordersort.click()
Commissionplans.Ordersort1.click()
Commissionplans.createdsort.click()
cy.wait(2000)
Commissionplans.createdsort.click()
Commissionplans.changedsort.click()
cy.wait(2000)
Commissionplans.changedsort.click()

      })

      it('Admin_Commission Plans_TC007_To verify Add button page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        Commissionplans.addbutton.click()
        cy.url().should('include', 'https://admin.forastaging.net/commission/plans/add/')
        Commissionplans.Savebutton.click()
        Commissionplans.Error.should('be.visible')
        cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {

        Commissionplans.Namefield.type(dataJson.Name)
        Commissionplans.Savebutton.click()
        Commissionplans.Error1.should('be.visible')
        const Commissionplan = 'Commission plan';

const uniqueName = `${Commissionplan}_${Date.now()}`;
        Commissionplans.Namefield.type(uniqueName)
        Commissionplans.Documentlink.type(dataJson.Documentlink)
        Commissionplans.isdismissable.click()

        })
        cy.frameLoaded('iframe[title="Rich Text Editor, id_description"]');
        // Access the iframe
        cy.get('iframe[title="Rich Text Editor, id_description"]').then($iframe => {
          console.log($iframe);
          // Access the body element inside the iframe
          const iframeBody = $iframe.contents().find('body');
          cy.wrap(iframeBody).type('QA Testing').dblclick().then(() => {

          
            cy.get('#cke_22') 
              .click();
              cy.get('#cke_23')
              .click();
           })
        }) 
        Commissionplans.Savebutton.click()
        Commissionplans.alert.should('be.visible')
        Commissionplans.addbutton.click()
        Commissionplans.cancelbutton.click()
        

      })

      it('Admin_Commission Plans_TC008_To verify if user can access Edit actions field.', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
        Commissionplans.Searchbar.type(dataJson.Name+'{enter}')
        Commissionplans.Edit.click()
        Commissionplans.isdismissable.click()
        Commissionplans.Savebutton.click()
        Commissionplans.alert.should('be.visible')

        })
      })
      it('Admin_Commission Plans_TC009_To verify if user can access View Actions field.', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
        Commissionplans.Searchbar.clear()
       // cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
          //Commissionplans.Searchbar.type(dataJson.Name+'{enter}')
          Commissionplans.View.click()
          Commissionplans.viewname.should('be.visible')
          Commissionplans.viewdescription.should('be.visible')
          Commissionplans.Viewedit.should('be.visible')
          Commissionplans.Searchbar.should('be.visible')
          Commissionplans.column.should('be.visible')
          Commissionplans.Viewadd.should('be.visible')

        
      })

     


  it('Admin_Commission Plans_TC011_To verify if user can access product list columns', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Commissionplans.backtouser.click()
    cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
    Commissionplans.Searchbar.type(dataJson.Search4+'{enter}')
    Commissionplans.View.click()
    Commissionplans.column.click()
    Commissionplans.Viewnamecolumn.should('be.visible')
    Commissionplans.Viewnamecheckbox.should('be.checked')
    Commissionplans.Viewisactivecolumn.should('be.visible')
    Commissionplans.Viewisactivecheckbox.should('be.checked')
    Commissionplans.Viewstripepriceidcolumn.should('be.visible')
    Commissionplans.Viewstripepriceidcheckbox.should('be.checked')
    Commissionplans.Viewstripepricevaluecolumn.should('be.visible')
    Commissionplans.Viewstripepricevaluecheckbox.should('be.checked')
    Commissionplans.Viewstrikkethroughpricecolumn.should('be.visible')
    Commissionplans.Viewisdefaultcolumn.should('be.visible')
    Commissionplans.Viewsisdefaultcheckbox.should('be.checked')
    Commissionplans.Viewcreatedatcolumn.should('be.visible')
    Commissionplans.Viewscreatedatcheckbox.check()
    Commissionplans.Viewcreatedbycolumn.should('be.visible')
    Commissionplans.Viewscreatedbycheckbox.check()
    Commissionplans.Viewactionscolumn.should('be.visible')
    Commissionplans.Viewactionscheckbox.should('be.checked')
    Commissionplans.Savecolumnsetup.click()
    Commissionplans.tableheader.should('contain', 'Created at');
    Commissionplans.tableheader.should('contain', 'Created by');
    Commissionplans.column.click()
    Commissionplans.Viewscreatedbycheckbox.uncheck()
    Commissionplans.Savecolumnsetup.click()
    Commissionplans.tableheader.should('not.contain', 'Created by');
    

    })
  })
  it('Admin_Commission Plans_TC010_To verify if user can search product list action.', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
      Commissionplans.Searchbar.type(dataJson.Name+'{enter}')
      Commissionplans.Searchbar.clear().type(dataJson.Search3+'{enter}')
})
})
 

 it('Admin_Commission Plans_TC013_To verify if user can access product list Add page', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Commissionplans.add.click()
    Commissionplans.Addproductionplanheader.should('be.visible')
    Commissionplans.PriceProductlist.should('be.visible')
    Commissionplans.PriceProductlistfield.should('be.visible')
    Commissionplans.NameProductlist.should('be.visible')
    Commissionplans.NameProductlistfield.should('be.visible')
    Commissionplans.StrikethroughProductlist.should('be.visible')
    Commissionplans.StrikethroughProductlistfield.should('be.visible')
    Commissionplans.Savebutton.should('be.visible')
    Commissionplans.cancelbutton.should('be.visible')
  })

  it('Admin_Commission Plans_TC014_To verify if  user can access product list Add ', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Commissionplans.Savebutton.click()
    Commissionplans.Error.should('be.visible')
    Commissionplans.PriceProductlistfield.should('be.visible')
    cy.get("select").select(4)
    Commissionplans.NameProductlist.should('be.visible')
    cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
      const Productlist = 'Product';

      const uniqueproduct = `${Productlist}_${Date.now()}`;
    Commissionplans.NameProductlistfield.type(uniqueproduct)
    Commissionplans.StrikethroughProductlist.should('be.visible')
    Commissionplans.StrikethroughProductlistfield.type(dataJson.StrikethroughProductlist)
    Commissionplans.Savebutton.click()
    Commissionplans.add.click()
    Commissionplans.NameProductlistfield.type(dataJson.Productname)
    Commissionplans.StrikethroughProductlist.should('be.visible')
    Commissionplans.StrikethroughProductlistfield.type(dataJson.StrikethroughProductlist)
    cy.get("select").select(6)  ///This value need to  be changed each time
    Commissionplans.Savebutton.click()
    Commissionplans.add.click()
   Commissionplans.cancelbutton.click()
  })
})
it('Admin_Commission Plans_TC012_To verify if user can access product list column field', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Commissionplans.column.click()
  Commissionplans.Viewscreatedbycheckbox.check()
  Commissionplans.Savecolumnsetup.click()
Commissionplans.ProductlistNamesort.click()

Commissionplans.ProductlistNamesort.click()
cy.wait(2000)
Commissionplans.ProductlistNamesort.click()
Commissionplans.ProductlistStripepricevaluesort.click()
cy.wait(2000)
Commissionplans.ProductlistStripepricevaluesort.click()
cy.wait(2000)
Commissionplans.ProductlistStrikethroughPricesort.click()
cy.wait(2000)
Commissionplans.ProductlistStrikethroughPricesort.click()
cy.wait(2000)
Commissionplans.ProductlistIsdefaultsort.click()
cy.wait(2000)
Commissionplans.ProductlistIsdefaultsort.click()
cy.wait(2000)
Commissionplans.ProductlistCratedatsort.click()
cy.wait(2000)
Commissionplans.ProductlistCratedatsort.click()

})
it('Admin_Commission Plans_TC015_To verify if  user can access Make default action', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Commissionplans.Searchbar.clear().type('{enter}')
Commissionplans.actionbuttons.then(($element) => {
    if ($element.length > 0) {
      

       Commissionplans.setdefaultbutton.eq(0).should('exist')
        .click();
    }
  });
  Commissionplans.alert.should('be.visible')
  })
 
/* it('Admin_Commission Plans_TC017_To verify if  user can access Edit action', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
Commissionplans.Productlistedit.click()
cy.get("select").select(9)
Commissionplans.Savebutton.click()
Commissionplans.Productlistedit.click()
Commissionplans.cancelbutton.click()


    })
  })

   
  it('Admin_Commission Plans_TC018_To verify if  user can access view action', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
    Commissionplans.Productlistview.click()
    Commissionplans.Vieweditname.should('be.visible')
    Commissionplans.Vieweditprice.should('be.visible')
    Commissionplans.Vieweditstrikethrough.should('be.visible')
    Commissionplans.Viewedit.click()
    Commissionplans.cancelbutton.click()

  })
  it('Admin_Commission Plans_TC019_To verify if  user can access Archive action', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })

    Commissionplans.Productlistdelete.click()
    Commissionplans.eno.click()
    Commissionplans.Productlistdelete.click()
    Commissionplans.yes.click()
  })

  it('Admin_Commission Plans_TC016_To verify if  user can access restore action', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
Commissionplans.Restore.click()
Commissionplans.no.click()
Commissionplans.Restore.click()
Commissionplans.yes.click()

  })*/
  it('Admin_Commission Plans_TC020_To verify if  user can perform  archieve action', function() {
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
    })
Commissionplans.backtouser.click()
cy.fixture('Admin_Commission Plans_TS001.json').then(function (dataJson) {
  Commissionplans.Searchbar.type(dataJson.Search5+'{enter}')
  Commissionplans.Archieve.click()
  Commissionplans.Archievemsg.should('be.visible')
  cy.wait(5000)
  Commissionplans.no.click()
  cy.wait(2000)
  Commissionplans.Archieve.click()
  cy.wait(2000)
Commissionplans.yes.click()
Training.logout.click()

})
  })
})