/* Description for TC001: The goal of the test is to verify the following functionalities:
1. contents invitation page	*/ 

/* Description for TC002: The goal of the test is to verify the following functionalities:
1. contents of  'ALL' page invitation */ 

/* Description for TC003: "The goal of the test is to verify the following functionalities:
Contents of the pending invitation"				 */ 

/* Description for TC004: "The goal of the test is to verify the following functionalities:
Contents of the Revoked invitation"				 */ 

/* Description for TC005: "The goal of the test is to verify the following functionalities:
1.  Contents of the Accepted invitation"	 */ 

/*Precondition: User should verify that fora email and personal email should be unique*/

import Admin from "../../support/Page Object/Admin/Admin"
import Invite from "../../support/Page Object/Admin/Invite"

describe('Admin_Invitation_TS001',{ testIsolation: false }, function() {
  before(() => {
    // ensure clean test slate for these tests
    cy.then(Cypress.session.clearCurrentSessionData)
  })
 it('Admin_Invitation_TC001_To Check the invitations page', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
   //  cy.viewport(390,844)
      cy.NotanadvisorAdminLogin()
      Admin.navbar.click()
      Admin.invitation.click()
      Invite.invite.should('be.visible')
      Invite.searchbar.should('be.visible')
      Invite.filter.should('be.visible')
      Admin.newinvite.should('be.visible')
     
      Invite.releasenote.scrollIntoView().should('be.visible')
    })
  it('Admin_Invitation_TC002_To Check if the user can view all the invitations', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
     
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {        
        cy.log('Sorted Name:', Namesort);

      })
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {
            cy.log('Sorted Name:', Namesort);

      })      
      Invite.statussort.click()
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {     
        cy.log('Created date Sort:', Createddatesort);

      })
      
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {
       cy.log('Created date Sort:', Createddatesort);

      })
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        cy.log('Last invite date:', LastinviteDate);

      })
      
      
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        cy.log('Last invite date:', LastinviteDate);

      })
      cy.fixture('Admin_Invite_TS001').then(function (dataJson) {
    Admin.newinvite.click()
    cy.wait(2000)
    const getRandomNumber = () => Math.floor(Math.random() * 10000); // Generates a number between 0 and 9999

    const baseUsername = 'reenaz';
    const uniqueUsername = `${baseUsername}+${getRandomNumber()}@qaoncloud.com`;
    Admin.personalmail.type(uniqueUsername);
    
    const baseUsername1 = 'QA';
    const uniqueUsername1 = `${baseUsername1}_${getRandomNumber()}`;
    Admin.firstname.type(uniqueUsername1);
    
    const baseUsername2 = 'Testing';
    const uniqueUsername2 = `${baseUsername2}_${getRandomNumber()}`;
    Admin.lastname.type(uniqueUsername2);
    
    const baseUsername3 = 'RQAautomation';
    const uniqueUsername3 = `${baseUsername3}+${getRandomNumber()}`;
    
    cy.wait(2000)
      Admin.foraemail.clear().type(uniqueUsername3)
      Admin.idbaseurl.should('have.value', '@forastaging.net')
      Admin.tags.should('be.visible')  
      Admin.privatenote.type(dataJson.Usertag)
      Admin.selectforateam.click()
      Admin.save.click()
      Invite.alert.scrollIntoView().should('be.visible')
      
      Invite.pendingtaginvite.should('be.visible')
      Invite.personalmailtext.should('be.visible')
     Invite.customerio.should('be.visible')
      Invite.back.click()
      Invite.backinvitation.click()


     Invite.invitationreminder.click()
     Invite.invitationreminder.click()
     Invite.searchbar.type(dataJson.Search1+ '{enter}')
    // Invite.result.should('contain', 'reenaz')
     Invite.searchbar.clear().type(dataJson.Search2+ '{enter}')
     Invite.result.should('contain', 'fathima')
     Invite.selectcolumn.click()
     Invite.personalmailtextbox.check()
     Invite.save.click()
     Invite.searchbar.clear().type(dataJson.Search3+ '{enter}')
   Invite.result.should('contain', 'reenaz@qaoncloud.com')
     Invite.searchbar.clear()
     Invite.searchbar.type('{enter}')
   /* Invite.filter.click()
Invite.selectfromdropdown.type(dataJson.Search4+ '{enter}')
  Invite.apply.click( {force: true})*/
  //Invite.noreminder.should('be.visible')
  Invite.selectcolumn.click()
  Invite.notes.check()
  Invite.commissionplan.check()
  Invite.revoke.check()
  Invite.save.click()
 
  })
 })
//})
 it('Admin_Invitation_TC003_To Check if the user can view pending invitation page', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
 
      Invite.pending.click()
      Invite.pendingtag.should('be.visible')
      cy.log('pending')
      Invite.invitationreminder.click()
     Invite.invitationreminder.click()
     cy.fixture('Admin_Invite_TS001').then(function (dataJson) {

     Invite.searchbar.type(dataJson.Search8+ '{enter}')
    // Invite.result.should('contain', 'Rqa')
     cy.wait(2000)
     Invite.searchbar.clear().type(dataJson.Search9+ '{enter}')
     cy.wait(2000)
   //  Invite.result.should('contain', 'test')
     Invite.selectcolumn.click()
     cy.wait(2000)
     Invite.personalmailtextbox.check()
     Invite.save.click()
     Invite.searchbar.clear().type(dataJson.Search7+ '{enter}')
     cy.wait(2000)
   // Invite.result.should('contain', 'reenaz+717@qaoncloud.com')
     Invite.searchbar.clear()
     Invite.searchbar.type('{enter}')
    Invite.filter.click()
Invite.selectfromdropdown.type(dataJson.Search4+ '{enter}')
  Invite.apply.click( {force: true})
 // Invite.noreminder.should('be.visible')
  Invite.selectcolumn.click()
  cy.wait(2000)
  Invite.notes.check()
  Invite.commissionplan.check()
  Invite.revoke.check()
  cy.wait(2000)
  Invite.save.click()

    })
   })
    it('Admin_Invitation_TC004_To Check if the user can view revoked  invitations', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
      
  
    Invite.invitationreminder.click()
      Invite.revoked.click()
      Invite.revokedtag.should('be.visible')
      cy.log('revoked')
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {        
        cy.log('Sorted Name:', Namesort);

      })
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {
            cy.log('Sorted Name:', Namesort);

      })      
      Invite.statussort.click()
      Invite.revokedtag.should('be.visible')
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {     
        cy.log('Created date Sort:', Createddatesort);

      })
      //Invite.result.should('contain', 'June 7, 2022, 7:37 p.m.')
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {
       cy.log('Created date Sort:', Createddatesort);

      })
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        cy.log('Last invite date:', LastinviteDate);

      })
      
      
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        cy.log('Last invite date:', LastinviteDate);

      })
      
    })     

    it('Admin_Invitation_TC005_To Check if the user can view  Accepted invitations', function() {
      cy.on('uncaught:exception', (err,runnable) => { 
        return false
      })
      
   
    Invite.invitationreminder.click()
      Invite.accepted.click()
      Invite.acceptedtag.should('be.visible')
      cy.log('accepted')
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {

        cy.log('Sorted Name:', Namesort);

      })
      Invite.namesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(1)")
      .invoke('text')
      .then((Namesort) => {
        cy.log('Sorted Name:', Namesort);

      })
      
      Invite.statussort.click()
      Invite.acceptedtag.should('be.visible')
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {
        

        cy.log('Created date Sort:', Createddatesort);

      })
      //Invite.result.should('contain', 'June 7, 2022, 7:37 p.m.')
      Invite.createddatesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((Createddatesort) => {
        

        cy.log('Created date Sort:', Createddatesort);

      })
    
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        

        cy.log('last invite  date:', LastinviteDate);

      })
      
      
      Invite.lastinvitesort.click()
      cy.get("tr[id='invitation_index_table_row_1'] td:nth-child(4)")
      .invoke('text')
      .then((LastinviteDate) => {
        

        cy.log('First row created date:', LastinviteDate);

      })
     
        

  
      
      
    }) 

  
  
    
    
 })
