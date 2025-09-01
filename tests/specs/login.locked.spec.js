const LoginPage = require('../pageobjects/login.page');

describe('Login - Usuário Bloqueado', () => {
    it('Deve exibir mensagem de erro ao tentar logar com locked_out_user e senha correta', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');

        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});
