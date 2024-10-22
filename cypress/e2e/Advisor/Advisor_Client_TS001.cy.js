


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

  it('Advisor_client_TC001_To verify the client page', () => {
    cy.on('uncaught:exception', (err,runnable) => { 
        return false
    })    
   
    cy.NotanadvisorclientLogin() 

    Home.navbar.click()
    Client.Client.click()

    cy.url().should('include', 'https://advisor.forastaging.net/clients')
    Client.clientheader.should('be.visible')
  Client.searchbar.should('be.visible')
  Client.Addclient.should('be.visible').click()
  Client.Cancelbutton.click()
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
Client.Addbutton.should('be.visible').click()

cy.wait(5000)

/////Client.Clienticon.scrollIntoView().should('be.visible')
//Client.Newclientname.should('be.visible')
Client.Actionbutton.should('be.visible').click()
Client.Deleteclient.should('be.visible')
Client.Actionbutton.should('be.visible').eq(0).click()
Client.Booking.should('be.visible')
Client.CommissionableValue.should('be.visible')
Client.Commission.should('be.visible')
Client.About.should('be.visible')
Client.Creditcard.should('be.visible')
Client.Loyaltyprograms.should('be.visible')
Client.Associatedtravelers.should('be.visible')
Client.Notes.should('be.visible')
Client.About.should('be.visible')
Client.Contact.should('be.visible')
Client.Contacticon.should('be.visible')
Client.Name.should('be.visible')


///Contact field
Client.Edit.eq(0).click()
Client.CancelButton.should('be.visible').click()
Client.Edit.eq(0).click()

Client.Editing.should('be.visible')
Client.Prefix.should('be.visible')
Client.Prefixfield.click()
Client.Mrs.should('be.visible')
Client.Miss.should('be.visible')
Client.Ms.should('be.visible')
Client.Dr.should('be.visible')
Client.Ms.click()
Client.Firstname.scrollIntoView().should('be.visible')
cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {

Client.Firstnamefield.eq(0).should('be.visible').clear().type(dataJson.Firstname)
Client.Middlename.scrollIntoView().should('be.visible')
Client.Middlenamefield.scrollIntoView().should('be.visible').type(dataJson.Middlename)
Client.Lastname.scrollIntoView().should('be.visible')
Client.Lastnamefield.eq(2).should('be.visible').clear().type(dataJson.Lastname)
Client.Preferrednameheader.scrollIntoView().should('be.visible')
Client.Preferrednamefield.scrollIntoView().should('be.visible').type(dataJson.Preferedpartner)
Client.Suffixheader.scrollIntoView().should('be.visible')
Client.Suffixfield.scrollIntoView().should('be.visible').type(dataJson.Suffix)
Client.Pronounsheader.scrollIntoView().should('be.visible')
Client.Pronounsfield.scrollIntoView().should('be.visible').click()
Client.sheorher.should('be.visible')
Client.heorhim.should('be.visible')
Client.Theyorthem.should('be.visible')
Client.sheorher.should('be.visible').click()
Client.Save.click()

///Email Field
cy.get(':nth-child(1) > :nth-child(3) > [data-testid="edit-button"]').click()
Client.PersonalEmail.should('be.visible')
Client.WorkEmail.should('be.visible')
Client.OtherEmail.should('be.visible')
cy.wait(2000)
Client.PersonalEmailtextfield.eq(0).click().type(dataJson.Personalemail)
cy.wait(2000)

Client.Save.click()
Client.Error.should('be.visible')
Client.PersonalEmailtextfield.eq(0).click().clear().type(dataJson.Personalemail2)

Client.WorkEmailtextfield.click().type(dataJson.Workemail2)
Client.OtherEmailtextfield.click().type(dataJson.Otheremail2)
Client.Save.click()

//Phone number field
Client.Edit.eq(1).click()
Client.Countrydropdown.eq(0).select('IN').should('have.value', 'IN');
Client.Phonenumber.eq(0).type(dataJson.Mobilephone)
Client.Save.click()
cy.wait(3000)
Client.Edit.eq(3).click()
Client.Addressname.should('be.visible')
Client.Addressnamefield.type(dataJson.Addressname)
Client.Country.type('India{enter}')
Client.Addressfield.type(dataJson.Address)
Client.City.type(dataJson.City)
Client.State.type(dataJson.State)
Client.Zipcode.type(dataJson.Zipcode)
Client.Save.click()
cy.wait(2000)

///Address field
Client.Edit.eq(3).click()
cy.wait(3000)
Client.Addanotheraddress.click({force:true})
Client.Addanotheraddress.click({force:true})

cy.wait(5000)
Client.Address2.scrollIntoView().should('be.visible')
Client.Addressdelete.eq(1).scrollIntoView().click()
Client.CancelButton.click()
Client.Personaldetails.scrollIntoView().should('be.visible')
Client.Personaldetailsicon.should('be.visible')

//Importatnt date filed
Client.Edit.eq(4).click()
Client.Personaldetails.should('be.visible')
Client.Personaldetailsicon.should('be.visible')
Client.Importantdates.should('be.visible')
Client.Allergies.should('be.visible')
Client.Editing.should('be.visible')
Client.Nameofdate.should('be.visible')
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.April.click()
cy.wait(2000)
Client.dropdown.eq(1).click()
cy.wait(2000)
cy.get('[role="listbox"]').should('be.visible');

Client.Year.click()

cy.wait(2000)
Client.Datedropdown.scrollIntoView().click()
cy.wait(2000)
Client.dateofbirthdate.click()
Client.Save.click()
cy.wait(2000)

//Client.Saveddate.should('be.visible')
cy.wait(2000)
Client.Edit.eq(4).click()


Client.anotherdate.click()
Client.deletebutton.click()
cy.wait(1000)
Client.anotherdate.click()
Client.Nameofdatefield.type(dataJson.Nameofdatefield)
Client.dropdown.eq(4).click()
Client.May.click()
cy.wait(2000)
Client.dropdown.eq(3).click()
cy.wait(2000)
Client.May.click()

cy.wait(2000)
Client.Yeardropdown.click()
cy.wait(2000)
Client.Year1.click()
cy.wait(1000)
//Client.Save.click()
Client.CancelButton.click()
///Allergies filed
Client.Edit.eq(5).click()
Client.Allergies.should('be.visible')
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');

Client.TreeNuts.click()
cy.wait(1000)

Client.dropdown.eq(0).click()
cy.wait(1000)
Client.Vegan.click()
Client.deletebutton1.click()

Client.Addcustomoption.should('be.visible')
cy.get('.shadow-0').type('chocholate')
Client.Save.click()

////Flight Info field
Client.Flightinfo.scrollIntoView().should('be.visible')
Client.Flightinfoicon.scrollIntoView().should('be.visible')
Client.Flightinfo.should('be.visible')
Client.Readytag.should('be.visible')
Client.Edit.eq(5).click()
Client.Wraningmsg.should('be.visible')
Client.Legalname.should('be.visible')
Client.Legalnameedit.eq(0).click()
cy.wait(2000)
Client.Legalnameeditfield.eq(0).clear().type(dataJson.Legalnameeditfield)
Client.Legalnameeditfield.eq(1).clear().type(dataJson.Legalnameeditfield1)
Client.Legalnameeditfield.eq(2).clear().type(dataJson.Legalnameeditfield2)
Client.Legalnameeditfield.eq(3).clear().type(dataJson.Legalnameeditfield3)
Client.Confirmmsg.should('be.visible')
Client.Confirmcheckbox.click()
Client.Legalbirthday.should('be.visible')
cy.get('.flex-col > .gap-x-4 > .link-button').click()
Client.Legaldateofbirthdate.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.May.click()
cy.wait(2000)
Client.Legaldateofbirthdate.eq(1).click()
cy.wait(2000)
cy.get('[role="listbox"]').should('be.visible');
Client.dateofbirthdate1.click()
cy.wait(2000)
Client.Legaldateofbirthdate.eq(2).click()
cy.wait(2000)
Client.Year1.click()
Client.Confirmcheckbox1.click()
Client.Sex.should('be.visible');
Client.Sexlabel.should('be.visible');
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.Female.click()
Client.Phone.should('be.visible');
cy.get('.link-button').click()
Client.Phonenumber.eq(0).clear().type(dataJson.Phonenumber)
Client.Save.click()
Client.Readytaggreen.should('be.visible');
Client.Edit.eq(4).click()
Client.Lockedmsg.should('be.visible');
Client.CancelButton.click()
Client.Edit.eq(2).click()
Client.Lockedmsg.should('be.visible');
Client.CancelButton.click()
Client.KTN.scrollIntoView().should('be.visible');
Client.Edit.eq(7).click()
Client.KTNEditing.should('be.visible');
Client.KTNlabel.should('be.visible');
Client.CancelButton.click()
Client.Edit.eq(7).click()
Client.KTNtextbox.type(dataJson.KTN)
Client.Save.click()
  })
})*/
/*******************************************************credit card Section************************************** */

it('Advisor_client_TC002_To verify the Credit card section', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.NotanadvisorclientLogin() 

    Home.navbar.click()
    Client.Client.click()

    cy.url().should('include', 'https://advisor.forastaging.net/clients')
Client.Creditcard.scrollIntoView().should('be.visible')
Client.Creditcard.scrollIntoView().should('be.visible').click()
Client.Cardicon.should('be.visible')
Client.CreditCardtext.should('be.visible')
Client.CreditCardtext1.should('be.visible')
Client.CreditCardtext2.should('be.visible')
Client.Addcardbutton.should('be.visible').click()
Client.Addcardtext.should('be.visible')
Client.Addcardtext1.should('be.visible')
Client.Addcardtext2.should('be.visible')
Client.Addcardtext3.should('be.visible')
Client.Link.should('be.visible')
Client.Copylink.should('be.visible').click()
Client.Copied.should('be.visible')
Client.Entermanually.should('be.visible')
Client.Closecard.should('be.visible').click()
Client.Addcardbutton.scrollIntoView().should('be.visible').click()
Client.Entermanually.should('be.visible').click()
cy.frameLoaded('[id="tx_iframe_card-tokenex-element"]');
cy.get('iframe').then(($iframe) => {
  cy.wait(8000);
  const $body = $iframe.contents().find('body');
  
  cy.xpath("//span[normalize-space()='Card information']").should('be.visible');
  cy.xpath("//label[normalize-space()='Cardholder name']").should('be.visible');
  
  cy.wait(5000);
  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').scrollIntoView().click({force:true});
  cy.wait(2000);

  cy.get('#expiringDate').scrollIntoView().click();
  cy.wait(3000);
  //cy.contains('Card number is required.').should('be.visible');
  cy.wait(2000);

  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').type('4242424242424242');
  cy.get('#expiringDate').click();
  cy.wait(1000);

  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click();
  cy.wait(1000);
 // cy.contains('Expiring date is required.').should('be.visible');

  cy.get('#expiringDate').click().type('04/25');
  cy.wait(2000);

  cy.wrap($body).find('[placeholder="CVC"]').click();
  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click();
//  cy.contains('CVC is required.').should('be.visible');

  cy.wrap($body).find('[placeholder="CVC"]').click().type('123');

  cy.xpath("//input[@id='cardHolder']").should('be.visible').click();
  cy.xpath("//input[@id='nickname']").click();
  cy.contains('This field is required.').scrollIntoView().should('be.visible');

  cy.xpath("//label[normalize-space()='Card label (optional)']").should('be.visible');
  cy.xpath("//label[normalize-space()='Country or region']").should('be.visible');
  cy.xpath("//label[normalize-space()='Apt number, suite, floor, etc.']").should('be.visible');
  cy.xpath("//label[normalize-space()='City']").should('be.visible');
  cy.xpath("//label[normalize-space()='State']").should('be.visible');
  cy.xpath("//label[normalize-space()='Zip code (postcode)']").should('be.visible');

  cy.xpath("//input[@id='cardHolder']").type('New card');
  cy.get('[class=" css-19bb58m"]').type('United states of America{enter}', { timeout: 2000 });
  cy.xpath("//input[@id='address']").should('be.visible').type('New york');
  cy.xpath("//input[@id='address_additional']").type('Street 22');
  cy.xpath("//input[@id='city']").type('New york city');
  cy.xpath("//input[@id='state']").type('Houston');
  cy.xpath("//input[@id='postal_code']").type('569874');
  cy.get('#btnSubmit').click();

  cy.xpath("//div[normalize-space()='Successfully added credit card']").should('be.visible');
  cy.xpath("//div[contains(text(),'Your card is securely added to the credit card sec')]").should('be.visible');
  cy.xpath("//button[normalize-space()='Got it']").should('be.visible').click();


})
           //  Client.Creditcard.scrollIntoView().should('be.visible').click()

Client.Visaimg.should('be.visible')
Client.cardcount.should('be.visible')
Client.Createdcard.should('be.visible')
Client.addcardnew.should('be.visible').click()
Client.Addcardtext.should('be.visible')
Client.Addcardcancelicon.click()
Client.addcardnew.should('be.visible').click()
Client.Entermanually.should('be.visible').click()
cy.wait(2000)
cy.frameLoaded('[id="tx_iframe_card-tokenex-element"]');     
cy.get('iframe')
.then(($iframe) => {
  cy.wait(5000)
  const $body = $iframe.contents().find('body')
  
  cy.xpath("//span[normalize-space()='Card information']").should('be.visible')
  cy.xpath("//label[normalize-space()='Cardholder name']").should('be.visible')
  
  cy.wait(2000)
  cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').scrollIntoView().click()
  cy.wait(2000)

  cy.get('#expiringDate').scrollIntoView().click()
  cy.wait(2000)
cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').type('4242424242424242')
  cy.get('#expiringDate').click()
  cy.wait(1000)
cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click()
  cy.wait(1000)
//cy.contains('Expiring date is required.').should('be.visible')
cy.get('#expiringDate').click().type('04/25')
cy.wait(2000)
cy.wrap($body).find('[placeholder="CVC"]').scrollIntoView().click()
cy.wait(2000)
cy.wrap($body).find('[placeholder="0000 0000 0000 0000"]').click()
//cy.contains('CVC is required.').should('be.visible')
cy.wrap($body).find('[placeholder="CVC"]').click()
cy.wrap($body).find('[placeholder="CVC"]').type('123')
cy.xpath("//input[@id='cardHolder']").should('be.visible').click()
cy.xpath("//input[@id='nickname']").click()
cy.contains('This field is required.').scrollIntoView().should('be.visible')
cy.xpath("//label[normalize-space()='Card label (optional)']").should('be.visible')
  cy.xpath("//label[normalize-space()='Country or region']").should('be.visible')
  cy.xpath("//label[normalize-space()='Apt number, suite, floor, etc.']").should('be.visible')
  cy.xpath("//label[normalize-space()='City']").should('be.visible')
  cy.xpath("//label[normalize-space()='State']").should('be.visible')
  cy.xpath("//label[normalize-space()='Zip code (postcode)']").should('be.visible')

cy.xpath("//input[@id='cardHolder']").type('New card')
cy.get('[class=" css-19bb58m"]').type('United states of America{enter}',{timeout:2000})
cy.xpath("//input[@id='address']").should('be.visible').type('New york')
cy.xpath("//input[@id='address_additional']").type('Street 22')
cy.xpath("//input[@id='city']").type('New york city')
cy.xpath("//input[@id='state']").type('Houston')
cy.xpath("//input[@id='postal_code']").type('569874')
cy.get('#btnSubmit').click()
cy.xpath("//div[normalize-space()='Successfully added credit card']").should('be.visible')
cy.xpath("//div[contains(text(),'Your card is securely added to the credit card sec')]").should('be.visible')
cy.xpath("//button[normalize-space()='Got it']").should('be.visible').click()
})
   
//Client.Creditcard.scrollIntoView().should('be.visible').click()
cy.wait(2000)
Client.Createdcard.should('be.visible').eq(0).click()
cy.wait(5000)
Client.Creditcarddetails.should('be.visible')
Client.Creditcarddetailstext.should('be.visible')
Client.Visaimg.should('be.visible')
Client.Cardnumber.should('be.visible')
Client.Cradholdername.should('be.visible')
Client.Expdate.should('be.visible')
Client.CCV.should('be.visible')
Client.Billingaddress.should('be.visible')
Client.Cardaddedon.should('be.visible')
Client.Deletecard.should('be.visible')
Client.Editcard.should('be.visible')
Client.Cancelcard.should('be.visible')
Client.Editcard.click()
cy.wait(5000)
cy.frameLoaded('[id="tx_iframe_card-tokenex-element"]');     
cy.get('iframe')
.then(($iframe) => {
  cy.wait(5000)
  const $body = $iframe.contents().find('body')
  cy.xpath("//input[@id='cardHolder']").clear().type('New edited card')
  cy.get('#btnSubmit').click()
  cy.xpath("//div[normalize-space()='Successfully updated credit card']").should('be.visible')
  cy.xpath("//button[normalize-space()='Got it']").should('be.visible').click()
  cy.wait(2000)
  cy.contains('New edited card').should('be.visible')
  Client.Createdcard.should('be.visible').eq(0).click()
  Client.Deletecard.should('be.visible').click()
Client.Deletecardtext.should('be.visible')
Client.Banner.should('be.visible')
Client.Deletecardtext1.should('be.visible')
Client.Deletecardtext2.should('be.visible')
Client.Deletecardtext3.should('be.visible')
Client.Deletecardtext4.should('be.visible')
Client.CardDeletebutton.should('be.visible')
Client.Deletecancel.should('be.visible').click()
Client.Createdcard.should('be.visible').eq(0).click()
Client.Deletecard.should('be.visible').click()
Client.CardDeletebutton.should('be.visible').click()
cy.wait(2000)
Client.Createdcard.should('be.visible').eq(0).click()
Client.Cancelcard.should('be.visible').click()

})
})

/*********************Associated Travellers****************************/
it('Advisor_client_TC003_To verify the Associated Travellers', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  
  cy.wait(2000)
Client.Associatedtravelers.scrollIntoView().should('be.visible').click()
Client.Associatedtravelerstext.scrollIntoView().should('be.visible')
Client.Associatedtravelerstext1.scrollIntoView().should('be.visible')
cy.wait(2000)
Client.Addtraveler.should('be.visible').click()
cy.wait(2000)
Client.AddtravelerCancel.click()

Client.Addtraveler.should('be.visible').click()
const generateShortUniqueName = (length = 10) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
Client.Addtravelerheader.should('be.visible')
Client.Addtravelerheadersubheading.should('be.visible')
Client.Addtravelerfirstname.should('be.visible')
const Firstname1 = generateShortUniqueName()
Client.AddLastnameheader.should('be.visible')
const Lastname1 = generateShortUniqueName();
Client.Addtravelerfirstnamefield.type(Firstname1)
Client.AddLastnamefield.should('be.visible')
Client.Addtravelerlastnamefield.type(Lastname1)
Client.Realtionshiptoclient.should('be.visible')
Client.Realtionshiptoclientdropdown.click()
cy.get('[role="listbox"]').should('be.visible');
Client.Friend.click()
cy.wait(2000)

Client.AddtravelerAdd.click()
cy.wait(5000)

Client.Booking.should('be.visible')
Client.CommissionableValue.should('be.visible')
Client.Commission.should('be.visible')
Client.About.should('be.visible')
Client.Creditcard.should('be.visible')
Client.Loyaltyprograms.should('be.visible')
Client.Associatedtravelers.should('be.visible')
Client.Notes.should('be.visible')
Client.Edit.eq(0).click()

Client.Editing.should('be.visible')
Client.Prefix.should('be.visible')
Client.Prefixfield.click()
Client.Mrs.should('be.visible')
Client.Miss.should('be.visible')
Client.Ms.should('be.visible')
Client.Dr.should('be.visible')
cy.wait(2000)
Client.Ms.click()

cy.fixture('Advisor_Client_TS001.json').then(function (dataJson) {

Client.Firstname.scrollIntoView().should('be.visible')
Client.Firstnamefield.eq(0).should('be.visible').clear().type(dataJson.Firstname)
Client.Middlename.scrollIntoView().should('be.visible')
Client.Lastname.scrollIntoView().should('be.visible')
Client.Lastnamefield.eq(2).should('be.visible').clear().type(dataJson.Lastname)
Client.Preferrednameheader.scrollIntoView().should('be.visible')
cy.get(':nth-child(5) > .shadow-0').scrollIntoView().should('be.visible').type(dataJson.Lastname2)
Client.Suffixheader.scrollIntoView().should('be.visible')
Client.Suffixfield.scrollIntoView().should('be.visible').type('abc')
Client.Pronounsheader.scrollIntoView().should('be.visible')
Client.Pronounsfield.scrollIntoView().should('be.visible').click()
Client.sheorher.should('be.visible')
Client.heorhim.should('be.visible')
Client.Theyorthem.should('be.visible')
Client.sheorher.should('be.visible').click()
Client.Save.click()
cy.get(':nth-child(1) > :nth-child(3) > [data-testid="edit-button"]').click()
Client.PersonalEmail.should('be.visible')
Client.WorkEmail.should('be.visible')
Client.OtherEmail.should('be.visible')
cy.wait(2000)
cy.get('.py-6 > .flex > :nth-child(1) > .shadow-0').click().type(dataJson.Personalemail)
cy.wait(2000)

Client.Save.click()
cy.wait(2000)

Client.Error.should('be.visible')
Client.PersonalEmailtextfield.eq(0).click().clear().type(dataJson.Personalemail2)

Client.WorkEmailtextfield.click().type(dataJson.Personalemail2)
Client.OtherEmailtextfield.click().type(dataJson.Personalemail2)
cy.wait(2000)

Client.Save.click()
cy.wait(2000)

//Phone number field
Client.Edit.eq(2).click()
Client.Countrydropdown.eq(0).select('IN').should('have.value', 'IN');
Client.Phonenumber.eq(0).type(dataJson.Mobilephone)
Client.Save.click()
cy.wait(2000)
Client.Edit.eq(3).click()
Client.Addressname.should('be.visible')
Client.Addressnamefield.type(dataJson.Addressname)
Client.Country.type('India{enter}')
Client.Addressfield.type(dataJson.Addressname)
Client.City.type(dataJson.City)
Client.State.type(dataJson.State)
Client.Zipcode.type(dataJson.Zipcode)
Client.Save.click()
cy.wait(2000)

///Address field
Client.Edit.eq(3).click()
cy.wait(2000)
Client.Addanotheraddress.click()
Client.Address2.scrollIntoView().should('be.visible')
Client.Addressdelete.eq(1).scrollIntoView().click()
Client.CancelButton.click()
Client.Personaldetails.scrollIntoView().should('be.visible')
Client.Personaldetailsicon.should('be.visible')

//Importatnt date filed
Client.Edit.eq(4).click()
Client.Personaldetails.should('be.visible')
Client.Personaldetailsicon.should('be.visible')
Client.Importantdates.should('be.visible')
Client.Allergies.should('be.visible')
Client.Editing.should('be.visible')
Client.Nameofdate.should('be.visible')
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.April.click()
cy.wait(2000)
Client.dropdown.eq(1).click()
cy.wait(2000)
cy.get('[role="listbox"]').should('be.visible');

Client.Year.click()

cy.wait(2000)
cy.xpath("(//button[@type='button'][normalize-space()='Day'])[1]").scrollIntoView().click()
cy.wait(2000)
Client.dateofbirthdate.click()
Client.Save.click()
cy.wait(5000)
Client.Edit.eq(4).click()


Client.anotherdate.click()
cy.wait(3000)

Client.deletebutton.click()
cy.wait(1000)
Client.anotherdate.click()
cy.wait(3000)

cy.get(':nth-child(3) > :nth-child(2) > .shadow-0').type('New date')
Client.dropdown.eq(4).click()
Client.May.click()
cy.wait(2000)
Client.dropdown.eq(3).click()
cy.wait(2000)
Client.May.click()

cy.wait(2000)
cy.xpath("(//button[normalize-space()='Year'])[1]").click()
cy.wait(2000)
Client.Year1.click()
cy.wait(1000)
//Client.Save.click()
Client.CancelButton.click()
///Allergies filed
Client.Edit.eq(5).click()
Client.Allergies.should('be.visible')
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');

Client.TreeNuts.click()
cy.wait(1000)

Client.dropdown.eq(0).click()
cy.wait(1000)
Client.Vegan.click()
Client.deletebutton1.click()

//Client.Addcustomoption.should('be.visible')
//cy.get('.shadow-0').type('chocholate')
//cy.wait(1000)

Client.Save.click()
cy.wait(2000)

////Flight Info field
Client.Flightinfo.scrollIntoView().should('be.visible')
//Client.Flightinfoicon.scrollIntoView().should('be.visible')
Client.Flightinfo.should('be.visible')
Client.Readytag.should('be.visible')
cy.get(':nth-child(3) > :nth-child(2) > [data-testid="edit-button"]').click()
Client.Wraningmsg.should('be.visible')
Client.Legalname.should('be.visible')
Client.Legalnameedit.eq(0).click()
cy.wait(2000)
Client.Legalnameeditfield.eq(0).clear().type(dataJson.Legalnameeditfield)
Client.Legalnameeditfield.eq(1).clear().type(dataJson.Legalnameeditfield1)
Client.Legalnameeditfield.eq(2).clear().type(dataJson.Legalnameeditfield2)
Client.Legalnameeditfield.eq(3).clear().type(dataJson.Legalnameeditfield3)
Client.Confirmmsg.should('be.visible')
Client.Confirmcheckbox.click()
Client.Legalbirthday.should('be.visible')
cy.get('.flex-col > .gap-x-4 > .link-button').click()
Client.Legaldateofbirthdate.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.May.click()
cy.wait(2000)
Client.Legaldateofbirthdate.eq(1).click()
cy.wait(2000)
cy.get('[role="listbox"]').should('be.visible');
Client.dateofbirthdate1.click()
cy.wait(2000)
Client.Legaldateofbirthdate.eq(2).click()
cy.wait(2000)
Client.Year1.click()
Client.Confirmcheckbox1.click()
Client.Sex.should('be.visible');
Client.Sexlabel.should('be.visible');
Client.dropdown.eq(0).click()
cy.get('[role="listbox"]').should('be.visible');
Client.Female.click()
Client.Phone.should('be.visible');
cy.get('.link-button').click()
Client.Phonenumber.eq(0).clear().type(dataJson.Phonenumber)
Client.Save.click()
cy.wait(2000)

Client.Readytaggreen.should('be.visible');
Client.Edit.eq(4).click()
Client.Lockedmsg.should('be.visible');
Client.CancelButton.click()
Client.Edit.eq(2).click()
Client.Lockedmsg.should('be.visible');
Client.CancelButton.click()
Client.KTN.scrollIntoView().should('be.visible');
Client.Edit.eq(7).click()
Client.KTNEditing.should('be.visible');
Client.KTNlabel.should('be.visible');
Client.CancelButton.click()
Client.Edit.eq(7).click()
Client.KTNtextbox.type(dataJson.KTN)
Client.Save.click()

cy.wait(2000)
Client.Loyaltyprograms.should('be.visible').eq(1).click()
Client.Loyaltyprogramsheader.should('be.visible')
Client.Loyaltyprogramssubheader.should('be.visible')
Client.Addloyalityprogram.click()
Client.Loyalityprogrlabel.should('be.visible')
Client.Loyalityprogrameditingdropdown.should('be.visible').click()
Client.Loyalityprogrameditingdropdown1.should('be.visible').click()
cy.get('[role="listbox"]').should('be.visible');
Client.AirAsia.click()
Client.Save.click()
cy.wait(2000)

Client.Errorloyalty.should('be.visible')
Client.Enternumber.type(dataJson.Loyalityprogram)
Client.Save.click()
cy.wait(2000)
Client.Loyalityprogramupdateddata.should('be.visible');
Client.Loyalityprogramedit.click()
Client.Loyalityprogramaddanotherprogram.click()
Client.Option1.should('be.visible').click()
cy.get('[role="listbox"]').should('be.visible');
Client.Jetairways.click()
Client.Enternumber.eq(1).type(dataJson.Loyalityprogram1)
Client.Save.click()
cy.wait(2000)

cy.get('div.flex.flex-col.gap-y-4')
.children(':visible')
.should('have.length', 2);
Client.Loyalityprogramedit.click()
Client.LoyalityDeletebutton.eq(0).click()
Client.Save.click()
cy.wait(2000)
cy.get('div.flex.flex-col.gap-y-4')
.children(':visible')
.should('have.length', 1);
Client.Loyalityprogramedit.click()
Client.CancelButton.click()
Client.Notes.should('be.visible').eq(1).click()
Client.Noteicon.should('be.visible')
Client.Notetext.should('be.visible')
Client.Notetext1.should('be.visible')
cy.wait(2000)
Client.AddNotebutton.click()
Client.NoteTextbox.type("Hello world")
Client.NoteTextbox.type('{selectall}');
cy.get('div.ql-toolbar button').each(($button) => {
  cy.wrap($button).click();
});
Client.NoteTextbox.type(dataJson.Note)
Client.NoteTextbox.type('{selectall}');
Client.NoteLink.click()
Client.Linktextbox.clear().type(dataJson.Link)
Client.Linksave.click()
cy.get('input[type="file"]').attachFile('Training.jpeg');
Client.Save.click()
cy.wait(10000)
cy.get('[data-testid="edit-button"]').click()
Client.CancelButton.click()
Client.Creditcard.should('be.visible').eq(1).click()
Client.Converttoaddcreditcards.should('be.visible')
Client.Converttoaddcreditcardstext.should('be.visible')
Client.Converttoclient.should('be.visible')
Client.AddtravelerCreditCards.scrollIntoView().should('be.visible')
//Client.AddtravelerCreditCardstext.should('be.visible')
Client.AddtravelerCreditCardstext1.should('be.visible')
Client.Converttoclient1.eq(1).click()
Client.Converttoclientdialoguebox.should('be.visible')
Client.Converttoclientdialogueboxtext.should('be.visible')
Client.Converttoclientdialogueboxtext1.should('be.visible')
Client.Converttoclientdialogueboxcancel.should('be.visible')
Client.Converttoclientdialogueboxconvert.should('be.visible').click()
cy.wait(3000)
})

})
it('Advisor_client_To verify the Associated traveller page', () => {
  cy.on('uncaught:exception', (err,runnable) => { 
      return false
  })  

  Client.Associatedtravelers.scrollIntoView().should('be.visible').click()
Client.Greentag.should('be.visible')
Client.clienttraveler.click()
cy.wait(3000)
Client.Traveleractionbutton.eq(2).click()
cy.wait(2000)
Client.UnlinkfromClient.should('be.visible')
Client.Editrealtionship.should('be.visible').click()
Client.CancelButton.click()
cy.wait(1000)
Client.Traveleractionbutton.eq(2).click()

Client.Editrealtionship.should('be.visible').click()
Client.Editrealtionshipwindow.should('be.visible')
Client.Editrealtionshipsubheader.should('be.visible')
Client.Realtionshiptoclientheader.should('be.visible')
Client.Realtionshiptoclientheaderdropdown.should('be.visible').click()
Client.Siblings.click()
cy.wait(1000)
Client.Save.click()
Client.Siblingstext.should('be.visible')
Client.Visitclientpage.click()
cy.wait(2000)
Client.Associatedtravelers.scrollIntoView().should('be.visible').click()
Client.Greentag.should('be.visible')
Client.clienttraveler.click()
Client.Traveleractionbutton.eq(2).click()
cy.wait(1000)
Client.UnlinkfromClient1.click()
Client.Unlinkclient.should('be.visible')
Client.Unlinkclientsubheader.should('be.visible')
Client.CancelButton.click()
Client.Traveleractionbutton.eq(2).click()
Client.UnlinkfromClient1.click()
cy.wait(1000)
Client.Unlinkbutton.click()
Client.Associatedtravelerstext.should('be.visible')
})
})
})
