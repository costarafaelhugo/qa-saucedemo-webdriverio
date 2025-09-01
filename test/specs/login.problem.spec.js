const LoginPage = require('../pageobjects/login.page');

describe('Login - Usuário Problemático', () => {
    it('Deve logar, mas apresentar comportamentos inconsistentes (problem_user)', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory.html'),
            {
                timeout: 5000,
                timeoutMsg: 'URL não redirecionou para inventory.html'
            }
        );

        // Sintaxe correta do WebdriverIO - Opção 1
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain('inventory.html');
        
        // Observação: este usuário apresenta imagens quebradas propositalmente.
        console.log('⚠️ Usuário problemático logado - imagens podem estar quebradas');
    });
});