const expect = require('chai').expect;
const Product = require('../src/models/Product/Product');

it("should have a name", () => {
    expect(new Product('Medium Coverage', 42, 42)).to.have.property('name');
});

it("should have a string as a name", () => {
    let product = new Product('Medium Coverage', 42, 42);
    expect(product.name).to.be.a('string');
});

it("should have a number of days to be sold in", () => {
    let product = new Product('Medium Coverage', 42, 42);
    expect(product).to.have.property('sellIn');
    expect(product.sellIn).to.be.a('number')
});

it("should have a number as a price", () => {
    let product = new Product('Medium Coverage', 42, 42);
    expect(product).to.have.property('price');
    expect(product.price).to.be.a('number')
});

context("with a negative price", () => {
    it("should throw a RangeError", () => {
        expect(() => new Product('Medium Coverage', 42, -1)).to.throw(RangeError, "Price cannot be negative");
    });
});

context("if it's different from Mega Coverage", () => {
    context("with a price bigger than 50", () => {
        it("should throw a RangeError", () => {
            expect(() => new Product('_', 42, 51)).to.throw(RangeError, "Price cannot be bigger than 50");
        });
    });
});

context("if it's Mega Coverage", () => {
    context("with a price different than 80", () => {
        it("should throw a RangeError", () => {
            expect(() => new Product('Mega Coverage', 42, 42)).to.throw(RangeError, "Mega Coverage always costs 80");
        });
    });
});