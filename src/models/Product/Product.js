class Product {
    constructor(name, sellIn, price) {
        this.checkPriceRange(name, price);
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    checkPriceRange(name, price) {
        if (price < 0)
            throw new RangeError("Price cannot be negative");
        else if (name !== "Mega Coverage" && price > 50)
            throw new RangeError("Price cannot be bigger than 50");
        else if (name === "Mega Coverage" && price !== 80)
            throw new RangeError("Mega Coverage always costs 80");
    }

    dailyUpdate() {
        this.updatePrice();
        this.updateSellIn();
    }

    updatePrice() {
        if (this.sellIn >= 0) {
            this.decrementPrice();
        } else {
            this.decrementPrice();
            this.decrementPrice();
        }
    }

    incrementPrice() {
        if (this.price < 50)
            this.price += 1;
    }

    decrementPrice() {
        if (this.price > 0)
            this.price -= 1;
    }

    updateSellIn() {
        this.sellIn -= 1;
    }
}

module.exports = Product;