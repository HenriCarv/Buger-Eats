import signup from "../Pages/SignupPage";

describe("cadastro", () => {
  beforeEach(function () {
    cy.fixture("deliver").then((d) => {
      this.deliver = d;
      cy.log(JSON.stringify(d.Signup));
    });
  });

  it("Usuario deve se tornar um entregador", function () {
    signup.go();
    signup.fillform(this.deliver.Signup);
    signup.submit();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("CPF incorreto", function () {
    signup.go();
    signup.fillform(this.deliver.cpf_inv);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("E-mail incorreto", function () {
    signup.go();
    signup.fillform(this.deliver.email_Inv);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });
});
