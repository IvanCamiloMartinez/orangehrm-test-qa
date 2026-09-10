/// <reference types="Cypress" />

describe ('Pruebas de validacion pagina de inicio', function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://opensource-demo.orangehrmlive.com")
      })

    it ('Validacion de logo superior', function (){
      cy.get('.orangehrm-login-branding > img').should('be.visible') 
    })

  it ('Validacion campo username existe', function (){
    cy.get('[name="username"]').should('be.visible')
  })
  it ('Validacion del texto del footer', function (){
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains('OrangeHRM')
  })
  it ('Validacion del boton login es visible', function (){
    cy.get('.oxd-button').should('be.visible')
  })
       
})

  