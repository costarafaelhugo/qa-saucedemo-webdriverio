const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Login Tests - Success', () => {
    
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {

        const username = 'standard_user';
        const password = 'secret_sauce';
        

        await LoginPage.login(username, password);
        

        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();
        await expect(LoginPage.errorMessage).not.toBeDisplayed();
    });

    it('should display error message with invalid credentials', async () => {

        const username = 'invalid_user';
        const password = 'wrong_password';
        

        await LoginPage.login(username, password);
        

        await expect(LoginPage.errorMessage).toBeDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Username and password do not match');
    });

    it('should display error message when username is empty', async () => {

        const username = '';
        const password = 'secret_sauce';
        

        await LoginPage.login(username, password);
        

        await expect(LoginPage.errorMessage).toBeDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Username is required');
    });

    it('should display error message when password is empty', async () => {

        const username = 'standard_user';
        const password = '';
        

        await LoginPage.login(username, password);
        

        await expect(LoginPage.errorMessage).toBeDisplayed();
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText).toContain('Password is required');
    });
});