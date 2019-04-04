const test = (name, path) => {
  describe(name, () => {
      require(path);
  });
}

describe("Co Test", function() {

  test("Products", './productsSpec.js');
  test("CarInsurance", './carInsuranceSpec.js');

});
