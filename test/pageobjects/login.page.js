class LoginPage {

    get usernameInput() { 
        return $('[data-test="username"]'); 
    }
    
    get passwordInput() { 
        return $('[data-test="password"]'); 
    }
    
    get loginButton() { 
        return $('[data-test="login-button"]'); 
    }
    
    get errorMessage() { 
        return $('[data-test="error"]'); 
    }


    async open() {
        await browser.url('https://www.saucedemo.com/');
    }


    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }


    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed();
        return await this.errorMessage.getText();
    }


    async isOnLoginPage() {
        return await this.loginButton.isDisplayed();
    }
}

module.exports = new LoginPage();