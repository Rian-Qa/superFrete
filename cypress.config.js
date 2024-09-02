const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar event listeners válidos aqui

      on('before:browser:launch', (browser = {}, launchOptions) => {
        // Modifique o lançamento do navegador se necessário
        // Exemplo: adicionando argumentos personalizados para o navegador
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });

      on('task', {
        // Defina tarefas personalizadas aqui se necessário
      });

      // Se precisar ignorar erros não capturados em testes, use dentro de um bloco de testes
      // cy.on('uncaught:exception', (err, runnable) => {
      //   return false; 
      // });
    },
    baseUrl: 'https://web.superfrete.com/#/calcular-correios',
    pageLoadTimeout: 120000, // 2 minutos para carregamento da página
    defaultCommandTimeout: 10000, // Timeout padrão para comandos
    viewportWidth: 1280, // Largura da viewport para os testes
    viewportHeight: 720, // Altura da viewport para os testes
  },
});
