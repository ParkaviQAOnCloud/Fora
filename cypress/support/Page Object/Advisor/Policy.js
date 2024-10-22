class Policy {

 get Policy()
 {
    return cy.get('.pt-1 > [href="/community-guidelines"]')
 }
 get Infobanner()
 {
    return cy.xpath("//div[@data-testid='banner-info']")
 }
 get Policiesandguidelines()
 {
    return cy.xpath("//h1[normalize-space()='Policies & Community Guidelines']")
 }
 get Text()
 {
    return cy.xpath("//b[contains(text(),'Why we believe a large and diverse community is th')]")
 }
 get Text1()
 {
    return cy.get('ul.list-disc.pl-8')
 }
  get Policessubheader()
 {
    return cy.xpath("//b[normalize-space()='Policies']")
 } 
 
 get PolicesText()
 {
    return cy.contains("We expect every Fora Advisor to be aware of and follow the community guidelines, including the policies outlined below, and be a good steward of the community. ")
 } 
 get PolicesText1()
 {
    return cy.contains("If we learn of behavior that is not in accordance with guidelines and policies, we will reach out with a formal reminder We reserve the right to take further action such as suspending membership or revoking membership entirely depending on the circumstances.")
 } 
 get Textlist()
 {
    return cy.get('[class="list-disc pl-8"]')
 } 
 get Communityguideline()
 {
    return cy.xpath("//b[normalize-space()='Community Guidelines']")
 } 
 get Communityguidelinesubheader()
 {
    return cy.contains("We are a community")
 } 
 get Communityguidelinesubheader1()
 {
    return cy.contains("We believe we can go further together.")
 } 
 get Communityguidelinesubheader2()
 {
    return cy.contains("We are professionals")
 }
 get Communityguidelinesubheader3()
 {
    return cy.contains("We are all travel entrepreneurs")
 }
 get Communityguidelinesubheader4()
 {
    return cy.contains("We are different on purpose")
 }
 get Policylink()
 {
    return cy.xpath("//a[@rel='noopener noreferrer']//u[contains(text(),'policy')]")
 }
 get Accesstopartnerpolicy()
 {
   return cy.xpath("//h1[normalize-space()='Access to Partners Policy']")
 }
 get Accesstopartnerpolicytext()
 {
   return cy.contains("As a Fora Advisor, you are set up from day one to make bookings, VIP your clients and learn about properties. Over time, you will develop relationships with partners as you drive business to their properties. As with all professional relationships, these must be cared for and maintained.")
 }
 get Certifiedandadvancestatus()
 {
   return cy.xpath("//b[normalize-space()='Certified & Advanced Status']")
 }
 get Partnercontact()
 {
   return cy.xpath("(//b[contains(text(),'Partner Contacts')])[1]")
 }
 get Partnercontacttext()
 {
   return cy.contains("Certified and Advanced advisors should leverage weekly instructor-led partner trainings, on-demand webinars and training sessions, Forum and Google for reservation desk partner contacts.")
 }
 get Partnercontacttext1()
 {
   return cy.contains("Advisors should reach out to the relevant hotel-level reservations teams when looking to VIP their clients. Please note the following requirements:")
 } 
 get Partnercontactlink()
 {
   return cy.xpath("//u[normalize-space()='gsotraveldesk@marriott.com']")
 } 
 get Partnercontactlink1()
 {
   return cy.xpath("//a[2]//u[1]")
 } 
 get Partnercontactlink2()
 {
   return cy.xpath("//a[contains(@href,'https://advisor.fora.travel/virtuoso-policy')]//u[contains(text(),'here')]")
 }
 get   Partnercontactlink3()
 {
   return cy.xpath("//u[normalize-space()='support@fora.travel']")
 }

 get Partnerevent()
 {
   return cy.xpath("//b[normalize-space()='Partner Events']")
 }
 get Partnerproandstatus()
 {
   return cy.xpath("//b[normalize-space()='Pro & X Status']")
 }
 get Partnerlogin()
 {
   return cy.xpath("//b[normalize-space()='Partner Logins']")
 }
 get Partnerproandstatuslink()
 {
   return cy.xpath("//ul[2]//li[1]//p[1]//a[1]//u[1]")
 }
 get Partnercontactsheader()
 {
   return cy.xpath("(//b[contains(text(),'Partner Contacts')])[2]")
 }
 get Partnercontactstext()
 {
   return cy.contains("Pro and X advisors may have access to contact information for sales representatives or senior operational team members through their Virtuoso account. This information should be used and maintained with care.")
 }
 get Partnercontactstext1()
 {
   return cy.contains("As an experienced advisor, please only reach out to senior hotel team members when you have exhausted other contacts. You should not contact the Director of Sales to VIP clients, though you may cc them on requests. These contacts are best used to escalate service issues or problems that cannot be solved by the front of house teams. ")
 }
 get Partnercontactstext2()
 {
   return cy.contains("Please be mindful about how/when/where you share any contact information within the community.")
 }
}

export default new Policy