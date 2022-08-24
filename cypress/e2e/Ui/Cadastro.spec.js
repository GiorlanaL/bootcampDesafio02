/// <reference types="cypress" />
const faker = require('faker-br')

describe('Funcionalidade: Cadastro', ()=> {
    
    it('Deve fazer o cadastro com sucesso', () =>{
        cy.visit('cadastrar')
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Giorlana')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('test1234')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('test1234')
        cy.get('[data-test="register-submit"]').click()

        //resultado esperado do teste
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').click()
    })


})

