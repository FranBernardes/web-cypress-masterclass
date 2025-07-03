/// <reference types="cypress"/>

describe("Login", () => {

  it("Acessar Login", () => {
    //acessar a pagina
    cy.visit("https://automationpratice.com.br/login");
    //preencher os campos
    cy.get("#user").type("fran@tester.com");
    cy.get("#password").type(123456);
    //clicar em Login
    cy.get("#btnLogin").click();
    //validar mensagem
    cy.get("#swal2-title").should("contain", "Login realizado");
  });
  it("Login com seha inválida", () => {
    //acessar a pagina
    cy.visit("https://automationpratice.com.br/login");
    //preencher os campos
    cy.get("#user").type("fran@tester.com");
    cy.get("#password").click();
    //clicar em Login
    cy.get("#btnLogin").click();
    //validar mensagem
    cy.get(
      "#login_area > div > div > div > div > div:nth-child(3) > span"
    ).should("contain", "Senha inválida.");
  });

  it("Login com email inválida", () => {
    //acessar a pagina
    cy.visit("https://automationpratice.com.br/login");
    //preencher os campos
    cy.get("#user").click();
    cy.get("#password").type(123456);
    //clicar em Login
    cy.get("#btnLogin").click();
    //validar mensagem
    cy.get(
      "#login_area > div > div > div > div > div:nth-child(2) > span"
    ).should("contain", "E-mail inválido.");
  });

  it("Login com campos vazios", () => {
    //acessar a pagina
    cy.visit("https://automationpratice.com.br/login");
    //preencher os campos
    cy.get("#user").click();
    cy.get("#password").click();
    //clicar em Login
    cy.get("#btnLogin").click();
    //valida mensagem
   
  });
});
