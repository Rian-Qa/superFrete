describe('Cálculo de Frete com Desconto - Sucesso', () => {

  beforeEach(() => {
    cy.visit('https://web.superfrete.com/#/calcular-correios', { timeout: 120000 });
    cy.viewport(1366, 768);
    cy.wait(10000); 
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Deve realizar o cálculo de frete com sucesso', () => {
    cy.get('input[id="originPostcode"]').type('08090-284');
    cy.get('div[id="weight"]').click();
    cy.get('li').contains('Até 300g').click();
    cy.get('input[id="packageHeight"]').type('2');
    cy.get('input[id="packageWidth"]').type('11');
    cy.get('input[id="packageDepth"]').type('16');
    cy.get('input[id="destinationPostcode"]').type('01001-000');
    cy.get('button[id="calculator-discounted-shipping-button"]').click();
    cy.contains('button', 'EMITIR FRETE COM DESCONTO', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
}); 
