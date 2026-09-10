/// <reference types="Cypress" />

describe ('Suite de pruebas Saucedemo', function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://www.saucedemo.com/")
      })

    it('Login exitoso', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('Login usuario incorrecto', function () {
        cy.get('[data-test="username"]').type('wrong_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it('Login usuario vacio', function () {
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username is required')
    })
    it('Login password vacio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Password is required')
    })
    it('Login password incorrecto', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()
    })

       
})

  