const Products = require('./Product/index');

class CarInsurance {
    constructor(products = []) {
        if (products.length > 0) {
            this.products = products.map(product => {
                const constr = Products[product.name.split(' ').join('').concat("Product")];
                if (constr) {
                    return new constr(product.name, product.sellIn, product.price);
                } else {
                    return product;
                }
            });
        } else {
            this.products = products;
        }
    }
    
    updatePrice() {
        this.products.map(product => {
            return product.dailyUpdate();
        });
        return this.products;
    }
}

module.exports = CarInsurance;