const LoginPage = require('../pageobjects/login.page');

describe('Login - Usuário Bloqueado', () => {
    it('Deve exibir mensagem de erro ao tentar logar com locked_out_user e senha correta', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');

        await LoginPage.errorMessage.waitForDisplayed();
        
       
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Sorry, this user has been locked out.');
    });
});