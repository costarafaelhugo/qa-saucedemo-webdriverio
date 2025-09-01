const LoginPage = require('../pageobjects/login.page');

describe('Login - Performance Glitch', () => {
    it('Deve logar, mas com atraso maior que o normal (performance_glitch_user)', async () => {
        await LoginPage.open();

        const start = Date.now();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory.html'),
            {
                timeout: 10000,
                timeoutMsg: 'URL não redirecionou para inventory.html'
            }
        );

        const end = Date.now();
        const duration = end - start;

        console.log(`⏱ Tempo de login: ${duration} ms`);
        if (duration > 5000) {
            console.warn('⚠️ Login demorou mais que o esperado (> 5s)');
        }

        await expect(browser).toHaveUrlContaining('inventory.html');
    });
});
