# ComparaOnline Test Requirements Specification

Hi, welcome to the Software Engineer CO Test. In this test we expect to see your approach to refactor a legacy code into a testeable, object oriented solution.

### We will only consider your application if you submit your own repository with the proposed solution. Forks or pull requests to our repo will DISCARD your application.

The code updates the price of products of our business unit, Car Insurance, based on rules explained bellow.

Here you have a description of the products.

- All Products have a `sellIn` value which denotes the number of days we have to sell the product.
- All Products have a `price` value which denotes how much the product cost.
- At the end of each day our system lowers both values for every product.

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `price` degrades twice as fast.
- The `price` of a product is never negative.
- **"Full Coverage"** actually increases in `price` the older it gets.
- The `price` of a product is never more than 50.
- **"Mega Coverage"**, being a legendary product, never has to be sold or decreases in `price`.
- **"Special Full Coverage"**, like full coverage, increases in `price` as its `sellIn` value approaches:
	- `price` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
	- `price` drops to 0 when no more days left (and the product is not valid anymore).

We have recently released a new kind of product *Super Sale product*. This requires an update to our system:

- **"Super Sale"** Products degrade in `price` twice as fast as normal Products.

Feel free to make any changes to the `updatePrice` method and add any new code as long as everything
still works correctly. However, DO NOT alter the constructor of `Product` class.

## Final notes

- Just for clarification, a product can never have its `price` increase above 50, however **"Mega Coverage"** is a
legendary product and as such its `price` is 80 and it never alters.

- On file `products_after_30_days.txt` you could see the behavior of the products in the period of 30 days. **The `Super Sale` product is not working properly. You have to implement it.**

## Evaluation rules
- Design an Object Oriented solution
- The solution must be scalable, we expect to be able to add new products on the future
- Meaningful git commits, we expect to see your solution approach as commit messages
- We expect a Node.js (>6) codebase, otherwise you should provide a `Dockerfile` with all the required dependencies to run the required commands.
- 100% code coverage, you should provide the report and the command to run the tests and get the coverage report.

### Required commands
- `npm run test`, should run the test suite and display the coverage report
- `npm run after-30-days`, should display an output similar to `products_after_30_days.txt`

You can use this code snipet as reference to implement the `after-30-days` script.

```js
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

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
```

### My solution

My solution was developed using `node v10.15.3`. The first step was to
describe the elements of the solution in their corresponding test
suites, and implement the tests. Afterwards, I started by refactoring
the `Product` and `CarInsurance` classes to their own modules.

Then I created subclasses for every known kind of non regular product,
and added the custom rules to their corresponding methods, usually
only the ones related to the price update.

If a new kind of product is created, the price update rules can be
specified by creating a new class that overrides the corresponding
method and updates the price according to the new rules. As long as
this new non regular product class is exported in the index of the
product module, and the classname matches the name of the product as
explained below, `CarInsurance` class will be able to access its
particular updating rules without major changes.

The convention for naming the non regular product subclasses is to take
the Product name, capitalize every word on it, join them and append
the word `Product` at the end. For example, if a new product is called
`"Super Mega Sale"`, the corresponding subclass name would be:
`SuperMegaSaleProduct`.

#### npm commands:

The required commands are implemented:

- `$ npm run test`: runs the test suites and displays a code coverage
  report in the standard output. It also generates an html code
  coverage report, that can be found in the `coverage` folder.

- `$ npm run after-30-days`: displays on the standard output an
  example of the evolution of a list of products on a 30 days timespan,
  similar to the specified format.