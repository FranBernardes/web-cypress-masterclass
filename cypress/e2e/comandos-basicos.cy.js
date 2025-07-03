/// <reference types="cypress"/>

describe("Comandos básicos", () => {
  it("Acessar uma URL", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Encontrar elementos", () => {
    cy.visit("https://automationpratice.com.br/login");

    // get() - selecionar/encontrar um elemento
    cy.get("#user");
    // find() - ele vai selecionar um elemento
    // diminuimos o escopo com o get antes
    cy.get("#mc_embed_signup").find(".form-control");

    // contains() - ele vai selecionar um elemento por TEXTO!
    // diminuimos o escopo com o get antes
    cy.get(".footer_one_widget").contains(" Send Mail");
  });

    it("Preencher campo", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#mc_embed_signup").find(".form-control").type("fran@teste.com");
  });

  it("click", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#btnLogin").click(); //1 click
    //cy.get('#btnLogin').dblcclick() //dois click´s
    //cy.get('#btnLogin').rightclick() //clicar com botão direito
  });

  it("click com enter", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#mc_embed_signup")
      .find(".form-control")
      .type("fran@teste.com{enter}");
  });

  it("Select", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get("#country").select(1);
  });

  it("check/Radio", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get("#materialUnchecked").check();
    //cy.get('#materialUnchecked').uncheck() //desselecionar
    //cy.get('#css').check() //Selecionar o radio OBS: Ele nunca pode ser desselicionado
  });

  it("Validar um texto", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#createAccount")
      .should("contain", "Ainda não tem conta?")
      .should("be.visible");
  });
});
