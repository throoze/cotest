const Product = require('./Product');

class MegaCoverageProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }

    updatePrice() {
        // DO NOTHING
    }
    updateSellIn() {
        // DO NOTHING
    }
}

module.exports = MegaCoverageProduct;