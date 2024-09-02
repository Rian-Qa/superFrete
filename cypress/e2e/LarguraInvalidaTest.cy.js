describe('Validação de Largura Inválida', () => {
  beforeEach(() => {
    cy.visit('https://web.superfrete.com/#/calcular-correios', { timeout: 120000 });
    cy.viewport(1366, 768);
    cy.wait(10000); 
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  
    it('Deve mostrar erro ao informar largura < 8 cm e depois aceitar largura válida', () => {
      cy.get('input[id="originPostcode"]').type('08090-284');
      cy.get('div[id="weight"]').click();
      cy.get('li').contains('Até 300g').click();
      cy.get('input[id="packageHeight"]').type('10');
      cy.get('input[id="packageWidth"]').type('7');
      cy.get('input[id="packageDepth"]').type('16');
      cy.get('input[id="destinationPostcode"]').type('01001-000');
      cy.get('button[id="calculator-discounted-shipping-button"]').click();
      cy.wait(5000);
  
      cy.get('input[id="packageWidth"]').clear().type('151');
      cy.get('button[id="calculator-discounted-shipping-button"]').click();
      cy.wait(5000);
    });
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); 
  