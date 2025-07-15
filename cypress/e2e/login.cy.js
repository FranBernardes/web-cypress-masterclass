/// <reference types="cypress"/>

const login_page = require("../support/pages/login-page");
describe("Login", () => {
  it("Acessar Login", () => {
    //acessar a pagina
    //cy.visit("/login"); substitui pelo login-page
    login_page.acessarLogin();
    //preencher os campos
    login_page.preencherEmail("fran@tester.com");
    login_page.preencherSenha(123456);
    //clicar em Login
    login_page.clicarLogin();
    //validar mensagem
    cy.get("#swal2-title").should("contain", "Login realizado");
  });

  it("Login com senha inválida", () => {
    login_page.acessarLogin();
    login_page.preencherEmail("fran@tester.com");
    login_page.preencherSenha(123);
    login_page.clicarLogin();

    cy.get(".invalid_input").should("contain", "Senha inválida.");
  });

  it("Login com email inválida", () => {
    //acessar a pagina
    cy.visit("/login");
    //preencher os campos
    cy.get("#user").click();
    cy.get("#password").type(123456);
    //clicar em Login
    cy.get("#btnLogin").click();
    //validar mensagem
    cy.get(".invalid_input").should("contain", "E-mail inválido.");
  });

  it("Login com campos vazios", () => {
    //acessar a pagina
    cy.visit("/login");
    //preencher os campos
    cy.get("#user").click();
    cy.get("#password").click();
    //clicar em Login
    cy.get("#btnLogin").click();
    //valida mensagem
  });
});
