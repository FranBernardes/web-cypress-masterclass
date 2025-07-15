export function acessarLogin(){
 cy.visit("/login");
}

export function preencherEmail (email){
    cy.get("#user").type("emil");
}

export function preencherSenha (senha){
     cy.get("#password").type(senha);
}

export function clicarLogin(){
     cy.get("#btnLogin").click();
}