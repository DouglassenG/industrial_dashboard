describe("Dashboard de Monitoramento", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("exibe o header com título correto", () => {
    cy.contains("Dashboard de Monitoramento").should("be.visible");
  });

  it("exibe o status de conexão", () => {
    cy.contains("Conectado").should("be.visible");
  });

  it("exibe os 4 cards de métricas", () => {
    cy.contains("Estado Máquina").should("be.visible");
    cy.contains("Temperatura").should("be.visible");
    cy.contains("RPM").should("be.visible");
    cy.contains("Tempo de Operação").should("be.visible");
  });

  it("exibe o gráfico de métricas", () => {
    cy.contains("Gráfico de Métricas").should("be.visible");
  });

  it("exibe o painel de alertas", () => {
    cy.contains("Alertas Recentes").should("be.visible");
  });

  it("exibe as métricas de eficiência", () => {
    cy.contains("Métricas de Eficiência").should("be.visible");
    cy.contains("OEE").should("be.visible");
    cy.contains("Disponibilidade").should("be.visible");
    cy.contains("Performance").should("be.visible");
    cy.contains("Qualidade").should("be.visible");
  });

  it("alterna entre dark e light mode", () => {
    cy.contains("Dark").click();
    cy.get("html").should("have.class", "dark");
    cy.contains("Light").click();
    cy.get("html").should("not.have.class", "dark");
  });

  it("atualiza os dados em tempo real", () => {
    cy.contains("Temperatura")
      .parent()
      .then(($card) => {
        const tempInicial = $card.text();
        cy.wait(4000);
        cy.contains("Temperatura")
          .parent()
          .then(($cardAtualizado) => {
            const tempAtualizada = $cardAtualizado.text();
            expect(tempInicial).not.to.equal(tempAtualizada);
          });
      });
  });
});
