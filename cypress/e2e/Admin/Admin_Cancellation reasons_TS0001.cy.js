
/* Description for TC001: "The goal of the test is to verify the following functionalities:
1.  Contents of Cancellation reasons page"					*/	


/* Description for TC002:"The goal of the test is to verify the following functionalities:
1.  Contents of search textbox"					*/	


/* Description for TC003: "The goal of the test is to verify the following functionalities:
1.  Contents of Filter"					*/	


/* Description for TC004: "The goal of the test is to verify the following functionalities:
1.  Contents of Columns"					*/	


/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of adding new Cancellation reasons"					*/	


/* Description for TC006:"The goal of the test is to verify the following functionalities:
1.  Contents of actions"					*/	


/* Description for TC007: "The goal of the test is to verify the following functionalities:
1.  Contents of add subreason section"					*/	


/* Description for TC008: "The goal of the test is to verify the following functionalities:
1.  Contents of search of subreason section"					*/	


/* Description for TC009: "The goal of the test is to verify the following functionalities:
1.  Contents of  filter subreason section"					*/	

/* Description for TC010: "The goal of the test is to verify the following functionalities:
1.  Contents of columns in 'Add subreason' section"								*/	

/* Description for TC011: "The goal of the test is to verify the following functionalities:
1.  Contents of adding new subreason"									*/	

/* Description for TC012: "The goal of the test is to verify the following functionalities:
1.  Contents of actions in subreasons section"											*/	


/*"Precondition : Slug name in Add and subreason field should be unique"*/ 

import Admin from "../../support/Page Object/Admin/Admin"
import Settings from "../../support/Page Object/Admin/Settings"
import Cancellation from "../../support/Page Object/Admin/Cancellation"

import Training from "../../support/Page Object/Admin/Training"


describe('Admin_Cancellation reason_TS001',{ testIsolation: false }, function() {
    before(() => {
      // ensure clean test slate for these tests
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
    })
    it('Admin_Cancellation reason_TC001_To verify the Cancellation reasons page', function() {
        cy.on('uncaught:exception', (err,runnable) => { 
          return false
        })
       // cy.viewport(390,844)
     // cy.AdminLogin()
     cy.NotanadvisorAdminLogin()
      Admin.navbar.click()
      Settings.settings.click()
      Cancellation.Cancellation.click()
      Cancellation.Cancellationheader.should('be.visible')
      cy.url().should('include', 'https://admin.forastaging.net/cancellation-reason/')
      Cancellation.Searchbar.should('be.visible')
      Cancellation.filter.should('be.visible')
      Cancellation.column.should('be.visible')
      Cancellation.addbutton.should('be.visible')
Cancellation.Name.should('be.visible')
Cancellation.Sequence.should('be.visible')
Cancellation.Order.should('be.visible')
Cancellation.Action.should('be.visible')

    })
   it('Admin_Cancellation reason_TC002_To verify if user can search using search textbox', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
      cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
Cancellation.Searchbar.type(dataJson.Search1+'{enter}')
Cancellation.Searchbar.clear().type(dataJson.Search2+'{enter}')   
Cancellation.Result.should('be.visible')
      })
 })

 it('Admin_Cancellation reason_TC003_To verify if user can apply filters', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Cancellation.filter.click()
  cy.get("select").select(1)
  cy.get("select").should("have.value", "True");
  Cancellation.Applybutton.click()
  Cancellation.Deletebutton.should('be.visible')
  Cancellation.filter.click()
  cy.get("select").select(2)
  cy.get("select").should("have.value", "False");
  Cancellation.Applybutton.click()
  Cancellation.Deletebutton.should('not.exist', { title: 'Archive' });
  Cancellation.filter.click()
  cy.get("select").select(0)
  Cancellation.Applybutton.click()
  Cancellation.filter.click()
  cy.wait(2000)
  Cancellation.cancel.click({force:true})
  cy.wait(2000)
  



})

it('Admin_Cancellation reason_TC004_To verify if user can apply filters', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Cancellation.column.click()
  Cancellation.Namecolumn.should('be.visible')
  Cancellation.Namecheckbox.should('be.checked');
  Cancellation.Slugcolumn.should('be.visible')
  Cancellation.Slugcheckbox.check()
  Cancellation.Sequencecolumn.should('be.visible')
  Cancellation.Sequencecheckbox.should('be.checked');
  Cancellation.Createdcolumn.should('be.visible')
  Cancellation.Createdcheckbox.check()
  Cancellation.Changedcolumn.should('be.visible')
  Cancellation.Changedcheckbox.check()
  Cancellation.Odercolumn.should('be.visible')
  Cancellation.Ordercheckbox.should('be.checked');
  Cancellation.Actionscolumn.should('be.visible')
  Cancellation.Actioncheckbox.should('be.checked');
  Cancellation.Savecolumnsetup.click()
  Cancellation.Slug.should('be.visible')
  Cancellation.Created.should('be.visible')
  Cancellation.Changed.should('be.visible')
  Cancellation.column.click()
  Cancellation.Slugcheckbox.should('be.checked');
  Cancellation.Createdcheckbox.should('be.checked');
  Cancellation.Changedcheckbox.should('be.checked');
  cy.wait(2000)
  Cancellation.cancelicon.click()
  cy.wait(2000)
  Cancellation.column.click()
  Cancellation.Slugcheckbox.uncheck()
  Cancellation.Createdcheckbox.uncheck()
  Cancellation.Savecolumnsetup.click()
  Cancellation.tableheader.should('not.contain', 'Slug');
Cancellation.tableheader.should('not.contain', 'Created');
})
it('Admin_Cancellation reason_TC005_To verify if user can apply filters', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
Cancellation.addbutton.click()
Cancellation.Addsave.click()
cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
Cancellation.Error.should('be.visible')
Cancellation.title.type(dataJson.Title)
Cancellation.Slugfield.type(dataJson.Existslug)
Cancellation.Addsave.click()
Cancellation.Error1.should('be.visible')
Cancellation.title.type(dataJson.Title)
const SlugName = 'Slug';

const uniqueName = `${SlugName}_${Date.now()}`;

Cancellation.Slugfield.clear().type(uniqueName)
Cancellation.Addsave.click()
Cancellation.Alert.should('be.visible')
Cancellation.addbutton.click()
cy.wait(2000)
Cancellation.Cancelbutton.click()


})
})
it('Admin_Cancellation reason_TC006_To verify if user can perform actions', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
  Cancellation.Searchbar.type(dataJson.Search3+'{enter}')
Cancellation.Edit.click()
Cancellation.titleheader.should('be.visible')
Cancellation.slugheader.should('be.visible')
Cancellation.Addsave.should('be.visible')
Cancellation.Cancelbutton.should('be.visible')
Cancellation.title.clear().type(dataJson.Title1)
Cancellation.Addsave.click()
Cancellation.Alert.should('be.visible')
Cancellation.view.click()
Cancellation.viewtitle.should('be.visible')
Cancellation.viewslugheader.should('be.visible')
Cancellation.viewedit.click()
Cancellation.titleheader.should('be.visible')
Cancellation.slugheader.should('be.visible')
Cancellation.Addsave.should('be.visible')
Cancellation.Cancelbutton.should('be.visible')
Cancellation.Cancelbutton.click()
Cancellation.Searchbar.type(dataJson.Search3+'{enter}')
Cancellation.archieve.click()
Cancellation.archievemsg.should('be.visible')
Cancellation.No.should('be.visible')
Cancellation.Yes.should('be.visible')
Cancellation.Yes.click()
Cancellation.Alert.should('be.visible')
Cancellation.archieve.click()
cy.wait(2000)
Cancellation.No.click()
cy.wait(2000)
Cancellation.detailview.click()
Cancellation.cancelationreasonpage.click()
cy.get('#cancellation_reason_index_table_row_1 > :nth-child(4) > .up > .h-4').click()
cy.get('#cancellation_reason_index_table_row_1 > :nth-child(4) > .up > .h-4').click()
  })
})

it('Admin_Cancellation reason_TC007_To verify  the Add subreason section', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
    Cancellation.Searchbar.type(dataJson.Search3+'{enter}')
  Cancellation.view.click()
  Cancellation.Searchbar.should('be.visible')
  Cancellation.filter.should('be.visible')
  Cancellation.column.should('be.visible')
  Cancellation.Addsubreason.click()
  Cancellation.title.type(dataJson.Title)
  const SlugName = 'Subreasonslug';

  const uniqueName = `${SlugName}_${Date.now()}`;
Cancellation.Slugfield.type(uniqueName)
Cancellation.Addsave.click()

  })
})

it('Admin_Cancellation reason_TC008_To verify  user can search using search textbox in Add subreason section', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Cancellation.Searchbar.should('be.visible')
  cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
    Cancellation.Searchbar.type(dataJson.Search4+'{enter}')
    Cancellation.Searchbar.clear().type(dataJson.Search3+'{enter}')
    Cancellation.result.should('be.visible')
  })
})
it('Admin_Cancellation reason_TC009_To verify  user can apply filter in Add subreason section', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Cancellation.filter.click()
  cy.get("select").select(1)
  cy.get("select").should("have.value", "True");
  Cancellation.Applybutton.click()
  Cancellation.Deletebutton.should('be.visible')
  Cancellation.filter.click()
  cy.get("select").select(2)
  cy.get("select").should("have.value", "False");
  Cancellation.Applybutton.click()
  Cancellation.Deletebutton.should('not.exist', { title: 'Archive' });
  Cancellation.filter.click()
  cy.get("select").select(0)
  Cancellation.Applybutton.click()
  Cancellation.filter.click()
  cy.wait(2000)
  Cancellation.cancel.click({force:true})
  cy.wait(2000)
  
})
it('Admin_Cancellation reason_TC010_To verify  user can  access the columns in Add subreason section', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  //cy.get('#cancellation_reason_index_table_row_3 > :nth-child(1) > .text-indigo-500').click()
  cy.wait(2000)
  Cancellation.column.click()
  Cancellation.Namecolumn.should('be.visible')
 Cancellation.Nameinnercheckbox.should('be.checked');
  Cancellation.Slugcolumn.should('be.visible')
  Cancellation.Sluginnercheckbox.check()
  Cancellation.Sequencecolumn.should('be.visible')
  Cancellation.Sequenceinnercheckbox.should('be.checked');
  Cancellation.Createdcolumn.should('be.visible')
  Cancellation.Createdinnercheckbox.check()
  Cancellation.Changedcolumn.should('be.visible')
  Cancellation.Changedinnercheckbox.check()
  Cancellation.Odercolumn.should('be.visible')
  Cancellation.Orderinnercheckbox.should('be.checked');
  Cancellation.Actionscolumn.should('be.visible')
  Cancellation.Actioninnercheckbox.should('be.checked');
  Cancellation.Savecolumnsetup.click()
  Cancellation.Slug.should('be.visible')
  Cancellation.Created.should('be.visible')
  Cancellation.Changed.should('be.visible')
  Cancellation.column.click()
  Cancellation.Sluginnercheckbox.should('be.checked');
  Cancellation.Createdinnercheckbox.should('be.checked');
  Cancellation.Changedinnercheckbox.should('be.checked');
  cy.wait(2000)
  Cancellation.cancelicon.click()
  cy.wait(2000)
  Cancellation.column.click()
  Cancellation.Sluginnercheckbox.uncheck()
  Cancellation.Createdinnercheckbox.uncheck()
  Cancellation.Savecolumnsetup.click()
  Cancellation.tableheader.should('not.contain', 'Slug');
Cancellation.tableheader.should('not.contain', 'Created');
})

it('Admin_Cancellation reason_TC010 to TC011_To verify if user can add new subreason and user can perform actions ', function() {
  cy.on('uncaught:exception', (err,runnable) => { 
    return false
  })
  Cancellation.Addsubreason.click()
  cy.fixture('Admin_Cancellation reason_TS001.json').then(function (dataJson) {
  Cancellation.Addsave.click()
  Cancellation.Error.should('be.visible')
  Cancellation.title.type(dataJson.Title)
Cancellation.Slugfield.type(dataJson.Slug2)
Cancellation.Addsave.click()
Cancellation.Error1.should('be.visible')
Cancellation.title.clear().type(dataJson.Title)
const AddSlugName = 'Subreasonslug';

const AdduniqueName = `${AddSlugName}_${Date.now()}`;
Cancellation.Slugfield.clear().type(AdduniqueName)
Cancellation.Addsave.click()
Cancellation.Alert.should('be.visible')
Cancellation.Addsubreasonarchive.eq(0).click()
Cancellation.archievemsg.should('be.visible')
Cancellation.No.should('be.visible')
Cancellation.Yes.should('be.visible')
cy.wait(2000)
Cancellation.No.click()
cy.wait(2000)
Cancellation.Addsubreasonarchive.eq(0).click()
Cancellation.Yes.click()
Cancellation.Addsubreason.click()


Cancellation.title.type(dataJson.Title)
const SlugName = 'Subreasonslug';

  const uniqueName = `${SlugName}_${Date.now()}`;
Cancellation.Slugfield.type(uniqueName)
Cancellation.Addsave.click()
Cancellation.Addsubreasonedit.click()
Cancellation.Cancelbutton.click()
Cancellation.Addsubreasoneview.click()
Cancellation.viewedit.click()
cy.wait(2000)
Cancellation.Cancelbutton.click()
Training.logout.click()
cy.wait(8000)

})
  })

})



