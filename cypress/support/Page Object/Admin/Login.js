class Login {
    get signinwithfora()
    {
        return cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']")
    }
    get fora()
    {
        return cy.get(" img[alt='Fora logo']")
    }
    get supportlink()
    {
        return cy.xpath("//a[normalize-space()='support@fora.travel']")
    }
   get welcome()
   {
   return cy.get(" h1[class='text-center text-titleLH36 lg:text-title font-bold mb-4 lg:mb-1']")
   }

}
export default new Login