const Product = require('./Product');

class FullCoverageProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }

    updatePrice() {
        this.incrementPrice();
    }
}

module.exports = FullCoverageProduct;