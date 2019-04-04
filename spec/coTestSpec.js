// const expect = require('chai').expect;
// const CarInsurance = coTest.CarInsurance;

const test = (name, path) => {
  describe(name, () => {
      require(path);
  });
}

describe("Co Test", function() {

  test("Products", './productsSpec.js');

  // it("should foo", function() {
  //   const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
  //   const products = coTest.updatePrice();
  //   expect(products[0].name).equal("fixme");
  // });

});
