/// <reference types="cypress" />

describe("Make login", () => {
    it("Must make login", () => {
        cy.visit('http://localhost:3000');

        cy.get('[id=email]').type('testeCypress818@gmail.com');
        cy.get('[id=password]').type('teste818@');

        cy.get('[id=btn-login]').click();
    })
})