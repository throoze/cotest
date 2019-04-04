const Product = require('./Product');

class SuperSaleProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }

    updatePrice() {
        if (this.sellIn >= 0) {
            this.decrementPrice();
            this.decrementPrice();
        } else {
            this.decrementPrice();
            this.decrementPrice();
            this.decrementPrice();
            this.decrementPrice();
        }
    }
}

module.exports = SuperSaleProduct;