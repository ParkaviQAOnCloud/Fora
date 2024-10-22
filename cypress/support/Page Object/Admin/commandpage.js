class Commands{
   get  commands()
   {
return cy.xpath("//h2[normalize-space()='Commands']")
   }
   get commandnav()
   {
      return cy.get('[href="/commands/"]')//cy.xpath("")
   }
get sendailyemailrun()
{
   return cy.xpath("//form[normalize-space()='Send Daily Emails']//input[@value='Run']")
}
get commissionupdatecacherun()
{
   return cy.xpath("//form[normalize-space()='Commission Update Cache']//input[@value='Run']")
}
get Nonerun()
{
   return cy.xpath("//p[normalize-space()='None ran!']")
}
get dailyrunmsg()
{
   return cy.contains("'send_daily_emails' ran!")
}
get commissionrunmsg()
{
   return cy.contains("'commission_update_cache' ran!")
}
   }
   export default new Commands

