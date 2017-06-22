//old way
// function Product (name, price) {
//   this.name = name;
//   this.price = price;
// }

// Product.prototype.priceAfterTax = function () {
//   return this.price * 1.06;
// };
//
// //reuse constructor Product
// function Electronic (productName, productPrice, productBrand) {
//   Product.call(this, productName, productPrice);
//   this.brand = productBrand;
// }
// //give access to Prototype functions
// Electronic.prototype = Object.create(Product.prototype);
//
//
// var myEcho = new Product ('amazon echo', 179.99);
// console.log(myEcho.priceAfterTax());
//
// var myStick = new Product ('Fire Stick', 29.99);
// console.log(Math.floor(myStick.priceAfterTax()));

//-----------------------------------------------
//new way in ES6
class Product {
  constructor (productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }

priceAfterTax () {
  return this.price * 1.07;
}
}

class Electronic extends Product {
  constructor (productName, productPrice, productBrand) {
    //super invokes constructor() of a product class
    super (productName, productPrice);
    this.brand = productBrand;
  }
}

var myEcho = new Product ('amazon echo', 179.99);
console.log(myEcho.priceAfterTax());

var myStick = new Product ('Fire Stick', 29.99);
console.log(Math.floor(myStick.priceAfterTax()));
