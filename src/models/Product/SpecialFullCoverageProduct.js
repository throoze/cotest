const Product = require('./Product');

class SpecialFullCoverageProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }
}

module.exports = SpecialFullCoverageProduct;