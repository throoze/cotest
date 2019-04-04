const Product = require('./Product');

class SpecialFullCoverageProduct extends Product {
    constructor(name, sellIn, price){
        super(name, sellIn, price);
    }

    updatePrice() {
        if (this.sellIn > 10) {
            this.incrementPrice();
        } else if (this.sellIn > 5 && this.sellIn <=10) {
            this.incrementPrice();
            this.incrementPrice();
        } else if (this.sellIn > 0 && this.sellIn <=5) {
            this.incrementPrice();
            this.incrementPrice();
            this.incrementPrice();
        } else {
            this.price = 0;
        }
    }
}

module.exports = SpecialFullCoverageProduct;