class InventoryPage {

    get pageTitle() {
        return $('.title');
    }
    
    get inventoryContainer() {
        return $('#inventory_container');
    }
    
    get shoppingCart() {
        return $('.shopping_cart_link');
    }
    
    get menuButton() {
        return $('#react-burger-menu-btn');
    }


    async isOnInventoryPage() {
        return await this.inventoryContainer.isDisplayed();
    }


    async getPageTitle() {
        return await this.pageTitle.getText();
    }
}

module.exports = new InventoryPage();