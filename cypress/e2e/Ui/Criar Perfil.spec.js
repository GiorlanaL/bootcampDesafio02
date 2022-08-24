/// <reference types="cypress" />

describe('criar perfil', () =>{

it('Criar perfil', () =>{
    cy.login('giorlanajr@gmail.com', 'mudar123')//tive que chamar o método do login para consegui acessar a página

    cy.visit('criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-1"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('ViaHub')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.viahub.com.br/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Caetano')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes manuais, testes automatizados, C#')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('giorlanalopes')
    cy.get('[rows="1"]').type('Sou QA na Via')
    cy.get('[data-test="profile-submit"]').click()

    cy.get('.large').should('have.text', 'Dashboard')
    cy.get('.container > :nth-child(4)').should('have.text','Experiências')
   })
})