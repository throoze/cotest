const expect = require('chai').expect;
const CarInsurance = require('../src/models/CarInsurance');
const Product = require('../src/models/Product');

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
];

describe("#updatePrice", () => {
    context("with an empty list of products", () => {
        it("should do nothing", () => {
            const emptyList = [];
            const carInsurance = new CarInsurance(emptyList);
            expect(carInsurance.updatePrice()).to.equal(emptyList);
            expect(carInsurance.products).to.equal(emptyList);
        });
    });

    context("with a regular Product", () => {
        context("with a non negative sellIn value", () => {
            it("should decrease the price and the sellIn value by 1", () => {
                const productList = [new Product('regular product', 10, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(41);
                expect(carInsurance.products[0].sellIn).to.be.equal(9);
            });
        });

        context("with a negative sellIn", () => {
            it("should decrease the sellIn value by 1, but the price by 2", () => {
                const productList = [new Product('regular product', -1, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(40);
                expect(carInsurance.products[0].sellIn).to.be.equal(-2);
            });
        });

        context("with a price of value equal to 0", () => {
            it("should decrease the sellIn value by 1 but not the price value", () => {
                const productList = [new Product('regular product', 42, 0)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(0);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });
    });

    context("with a Full Coverage product", () => {
        context("with a price value less than 50", () => {
            it("should increase the price by 1 and decrease the sellIn value by 1", () => {
                const productList = [new Product('Full Coverage', 42, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(43);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });

        context("with a price value of 50", () => {
            it("should decrease the sellIn value, but keep price value", () => {
                const productList = [new Product('Full Coverage', 42, 50)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(50);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });
    });

    context("with a Mega Coverage product", () => {
        it("should do nothing", () => {
            const productList = [new Product('Mega Coverage', 0, 80)];
            const carInsurance = new CarInsurance(productList);
            expect(carInsurance.updatePrice()).to.equal(productList);
            expect(carInsurance.products).to.equal(productList);
        });
    });

    context("with a Special Full Coverage product", () => {
        context("with a sellIn value greater than 10", () => {
            it("should increase the price by 1 and decrease the sellIn value by 1", () => {
                const productList = [new Product('Special Full Coverage', 42, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(43);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });

        context("with a sellIn value between 10 and 6", () => {
            it("should increase the price by 2 and decrease the sellIn value by 1", () => {
                const productList = [new Product('Special Full Coverage', 8, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(44);
                expect(carInsurance.products[0].sellIn).to.be.equal(7);
            });
        });

        context("with a sellIn value between 5 and 1", () => {
            it("should increase the price by 3 and decrease the sellIn value by 1", () => {
                const productList = [new Product('Special Full Coverage', 3, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(45);
                expect(carInsurance.products[0].sellIn).to.be.equal(2);
            });
        });

        context("with a sellIn value of 0 or less", () => {
            it("should decrease the sellIn value by 1 and set the price to 0", () => {
                const productList = [new Product('Special Full Coverage', 0, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(0);
                expect(carInsurance.products[0].sellIn).to.be.equal(-1);
            });
        });
    });

    context("with a Super Sale product", () => {
        context("with a non negative sellIn value", () => {
            it("should decrease the sellIn value by 1 and the price by 2", () => {
                const productList = [new Product('Super Sale', 42, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(40);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });

        context("with a negative sellIn", () => {
            it("should decrease the sellIn value by 1, and the price by 4", () => {
                const productList = [new Product('Super Sale', -1, 42)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(38);
                expect(carInsurance.products[0].sellIn).to.be.equal(-2);
            });
        });

        context("with a price of value equal to 0", () => {
            it("should decrease the sellIn value by 1 but not the price value", () => {
                const productList = [new Product('Super Sale', 42, 0)];
                const carInsurance = new CarInsurance(productList);
                carInsurance.updatePrice();
                expect(carInsurance.products[0].price).to.be.equal(0);
                expect(carInsurance.products[0].sellIn).to.be.equal(41);
            });
        });
    });
});