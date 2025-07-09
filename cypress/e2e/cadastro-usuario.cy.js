import { faker } from "@faker-js/faker";

describe("Cadastro de usuário", () => {
  let name, email, password;

  beforeEach(() => {
    name = faker.person.fullName();
    email = faker.internet.email({ provider: "remax.com.br" });
    password = faker.internet.password({ length: 8 });

    cy.visit("/register");

  });

  it("Cadastro com sucesso", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get("#btnRegister").click();

    cy.get("#swal2-title").should("have.text", "Cadastro realizado!");
    cy.get("#swal2-html-container")
    .should("have.text", `Bem-vindo ${name}`);

  });

  it("Cadastro com nome vazio", () => {

    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get("#btnRegister").click();

    cy.get("#errorMessageFirstName")
      .should("have.text", "O campo nome deve ser prenchido")
      .should("exist");
  });

  it("Cadastro com e-mail vazio", () => {
    cy.get("#user").type(name);
    cy.get("#password").type(password);

    cy.get("#btnRegister").click();

    cy.get("#errorMessageFirstName")
      .should("have.text", "O campo e-mail deve ser prenchido corretamente")
      .should("exist");
  });

  it("Cadastro com senha vazia", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(email);

    cy.get("#btnRegister").click(),
      cy.get("#errorMessageFirstName")
        .should("contain", "O campo senha deve ter pelo menos 6 dígitos")
        .should("exist");
  });

  it("Cadastro com campos vazios", () => {

    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("contain", "O campo nome deve ser prenchido")
      .should("exist");
  });

  it("Cadastro com e-mail inválido", () => {

    cy.get("#user").type(name);
    cy.get("#email").type("frangmail.com");
    cy.get("#password").type(password);

    cy.get("#btnRegister").click();

    cy.get("#errorMessageFirstName")
      .should("contain", "O campo e-mail deve ser prenchido corretamente")
      .should("exist");
  });

  it("Cadastro com senha invalida", () => {
    password = faker.internet.password({ length: 2 });

    cy.get("#user").type("Fran Bernardes"),
      cy.get("#email").type("frantester@gmail.com");
    cy.get("#password").type("654");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("contain", "O campo senha deve ter pelo menos 6 dígitos")
      .should("be.visible")
      .should("exist");
  });
});
