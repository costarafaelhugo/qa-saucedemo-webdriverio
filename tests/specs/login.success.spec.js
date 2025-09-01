const LoginPage = require('../pageobjects/login.page');

describe('Login - Sucesso', () => {
    it('Deve logar com usuário e senha corretos', async () => {
        // CORREÇÃO: Passa uma string vazia '' para navegar para a URL base
        await LoginPage.open('');
        
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});