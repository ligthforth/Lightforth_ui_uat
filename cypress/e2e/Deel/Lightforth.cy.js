/// <reference types="cypress" />

// using POM
import common from "../../POM/common.js";

describe('visit Deel', () => {

    const Cm = new common();

    before(() => {

        cy.visit('https://lightforth.org')
        cy.title().should('eq', 'lightforth')
        cy.location('protocol').should('eq', 'https:')
        cy.contains('Tap into data-driven salary insights').click({ timeout: 2000 })
        cy.url().should('include', 'salary-insights')
        cy.reload({ timeout: 130000 })

    })


    it('it should visit LightForthnsite', () => {

        cy.visit('https://lightforth.org')
        cy.wait(5000)
        

    })


})