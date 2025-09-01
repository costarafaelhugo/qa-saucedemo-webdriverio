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

        await expect(browser).toHaveUrlContaining('inventory.html');
        // Observação: este usuário apresenta imagens quebradas propositalmente.
    });
});
