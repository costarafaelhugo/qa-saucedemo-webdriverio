const LoginPage = require('../pageobjects/login.page');

describe('Login - Credenciais Inválidas', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('Deve exibir erro ao usar senha incorreta', async () => {
        await LoginPage.login('standard_user', 'senha_errada');

        await LoginPage.errorMessage.waitForDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Username and password do not match any user in this service');
    });

    it('Deve exibir erro ao usar usuário incorreto', async () => {
        await LoginPage.login('standar', 'secret_sauce');

        await LoginPage.errorMessage.waitForDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Username and password do not match any user in this service');
    });

    it('Deve exibir erro ao deixar campo de usuário vazio', async () => {
 
        await LoginPage.passwordInput.setValue('secret_sauce');
        await LoginPage.loginButton.click();

        await LoginPage.errorMessage.waitForDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Username is required');
    });

    it('Deve exibir erro ao deixar campo de senha vazio', async () => {
     
        await LoginPage.usernameInput.setValue('standard_user');
        await LoginPage.loginButton.click();

        await LoginPage.errorMessage.waitForDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Password is required');
    });
});