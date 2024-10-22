class Foraemail{

    get Foraemail()
    {
        return cy.contains("Fora Email",{timeout:5000})
    }
}
export default new Foraemail