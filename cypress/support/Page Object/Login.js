class Login {
    get signinwithfora() {
        return cy.xpath("//button[@class='mt-8 font-bold lg:w-full btn-primary justify-center']", { timeout: 5000 });
    }

    get fora() {
        return cy.get("img[alt='Fora logo']", { timeout: 5000 });
    }

    get supportlink() {
        return cy.xpath("//a[normalize-space()='support@fora.travel']", { timeout: 5000 });
    }

    get welcome() {
        return cy.get("h1[class='text-center text-titleLH36 lg:text-title font-bold mb-4 lg:mb-1']", { timeout: 5000 });
    }

    get accesstoken() {
        return cy.get('#input-accessToken-for-first-time-login-provider', { timeout: 5000 });
    }

    get loginusingacesstoken() {
        return cy.get(':nth-child(5) > form > button', { timeout: 5000 });
    }

    get Notanadvisor() {
        return cy.contains("Not an advisor?", { timeout: 5000 });
    }
}

export default new Login();
