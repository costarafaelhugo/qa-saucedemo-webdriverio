const LoginPage = require('../pageobjects/login.page');

describe('Login - Credenciais Inválidas', () => {
    it('Deve exibir erro ao usar senha incorreta', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'senha_errada');

        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service'
        );
    });

    it('Deve exibir erro ao deixar campo de usuário vazio', async () => {
        await LoginPage.open();
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();

        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username is required'
        );
    });

    it('Deve exibir erro ao deixar campo de senha vazio', async () => {
        await LoginPage.open();
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.btnLogin.click();

        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Password is required'
        );
    });
});
