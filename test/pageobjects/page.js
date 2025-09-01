const Page = require('./page');

class InventoryPage extends Page {

    get pageTitle() {
        return $('.title');
    }

    open() {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();