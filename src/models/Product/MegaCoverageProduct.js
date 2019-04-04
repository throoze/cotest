const Product = require('./Product');

class MegaCoverageProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }
}

module.exports = MegaCoverageProduct;