/// <reference types="cypress" />

describe('Funcionalidade: Login x cadastro' , ()=>{

    it('Cadastrar usuário inválido', ()=>{        
        cy.login('giorlanajrgmail.com', 'mudar1234567')
        cy.get('.MuiFormHelperText-root').should('contain', 'Digite um email válido')   
    })

    it('Cadastrar o login com suscesso', ()=> {
        cy.login('giorlanajr@gmail.com', 'mudar123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Giorlana')
        
    })
   
 })


