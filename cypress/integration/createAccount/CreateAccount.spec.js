/// <reference types="cypress" />

describe("Create account", () => {
    it("Must create an account", () => {
        cy.visit('http://localhost:3000');

        cy.get('[id=createAccountOurMakeLogin]').click();
        cy.get('[id=name]').type('Teste');
        cy.get('[id=email]').type('testeCypress818@gmail.com');
        cy.get('[id=password]').type('teste818@');
        cy.get('[id=btn-createAccount]').click();

        cy.screenshot();
    })
})
