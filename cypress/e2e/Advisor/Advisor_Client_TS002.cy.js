
import Home from "../../support/Page Object/Advisor/Home"
import Client from "../../support/Page Object/Advisor/Client"


import { v4 as uuidv4 } from 'uuid';

describe('Advisor_Client_TS001',{ testIsolation: false }, function() {
  before(() => {
    
  cy.then(Cypress.session.clearCurrentSessionData)
    cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })
 cy.clearAllLocalStorage()
  })
  /*****************************Loyalty Program****************************** */

  it('Advisor_client_TC004_To verify the Loyalty Program', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })  
    cy.NotanadvisorclientLogin() 
    Home.navbar.click()
    Client.Client.click()
    Client.clientheader.should('be.visible')
  Client.searchbar.should('be.visible')
  Client.Addclient.should('be.visible').click()
 // Client.Cancelbutton.click()
  const generateShortUniqueName = (length = 10) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  //cy.get('[class="flex md:justify-between w-full md:items-center flex-col md:flex-row p-6"]').eq(1).click()
 Client.Addclient.should('be.visible').click()
 cy.url().should('include', 'https://advisor.forastaging.net/clients?modal=add-client')
  Client.AddFirstnameheader.should('be.visible')
  const Firstname = generateShortUniqueName()
  Client.Addfirstnamefield.should('be.visible').click().type(Firstname)
  Client.AddLastnameheader.should('be.visible')
  const Lastname = generateShortUniqueName();
  Client.AddLastnamefield.should('be.visible').type(Lastname)
Client.Addnewclient_Button.should('be.visible').click()

cy.wait(3000)
cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {

  Client.Loyaltyprograms.should('be.visible').click()
  Client.Loyaltyprogramsheader.should('be.visible')
  Client.Loyaltyprogramssubheader.should('be.visible')
  Client.Addloyalityprogram.click()
  Client.Loyalityprogrlabel.should('be.visible')
  Client.Loyalityprogrameditingdropdown.should('be.visible').click()
  Client.Loyalityprogrameditingdropdown1.should('be.visible').click()
  cy.get('[role="listbox"]').should('be.visible');
  Client.AirAsia.click()
  Client.Save.click()
  Client.Errorloyalty.should('be.visible')
  Client.Enternumber.type('abndg123')
  Client.Save.click()
  Client.Loyalityprogramupdateddata.should('be.visible');
  Client.Loyalityprogramedit.click()
  Client.Loyalityprogramaddanotherprogram.click()
  Client.Option1.should('be.visible').click()
  cy.get('[role="listbox"]').should('be.visible');
  Client.Jetairways.click()
  Client.Enternumber.eq(1).type(dataJson.Loyalityprogram)
  Client.Save.click()
  cy.get('div.flex.flex-col.gap-y-4')
  .children(':visible')
  .should('have.length', 2);
  Client.Loyalityprogramedit.click()
  Client.LoyalityDeletebutton.eq(0).click()
  Client.Save.click()
  cy.get('div.flex.flex-col.gap-y-4')
  .children(':visible')
  .should('have.length', 1);
  Client.Loyalityprogramedit.click()
  Client.CancelButton.click()
})
  })
  /*********************Notes ****************************/
  it('Advisor_client_TC005_To verify the Notes Section', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })  
    cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {

  Client.Notes.should('be.visible').click()
  Client.Noteicon.should('be.visible')
  Client.Notetext.should('be.visible')
  Client.Notetext1.scrollIntoView().should('be.visible')
  cy.wait(2000)
  Client.AddNotebutton.click()
  Client.NoteTextbox.type(dataJson.Note)
  Client.NoteTextbox.type('{selectall}');
  cy.get('div.ql-toolbar button').each(($button) => {
    cy.wrap($button).click();
  });
  Client.NoteTextbox.type("Testlink")
  Client.NoteTextbox.type('{selectall}');
  Client.NoteLink.click()
  Client.Linktextbox.clear().type(dataJson.Link)
  Client.Linksave.click()
  cy.get('input[type="file"]').attachFile('Profilepict.jpg');
  Client.Save.click()
  cy.wait(20000)
  cy.get('[data-testid="edit-button"]').click()
  Client.CancelButton.click()
    })
  })
  it('Advisor_client_TC006_To verify the Action button ', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    }) 
    cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {

    Client.Actionbutton.scrollIntoView().click()
    Client.Deleteclient.should('be.visible')
    Client.Deleteclient.should('be.visible').click()
    Client.Deleteclientheader.should('be.visible')
    Client.Deleteclientsubheader.should('be.visible')
Client.Yesdeleteclient.should('be.visible')
Client.Nokeepclient.should('be.visible').click()
Client.Actionbutton.click()
Client.Deleteclient.should('be.visible').click()
Client.Yesdeleteclient.should('be.visible').click()
Client.searchbar.should('be.visible').type(dataJson.Search)
Client.Noclientfound.should('be.visible')
Client.Noclientfound1.scrollIntoView().should('be.visible')
Client.Noclientfound2.scrollIntoView().should('be.visible')
Client.Noclientfound3.scrollIntoView().should('be.visible')
Client.Searchcancelicon.click()
cy.wait(1000)
Client.searchbar.should('be.visible').type(dataJson.Search1)
Client.searchresult.should('be.visible')
  })
})
})