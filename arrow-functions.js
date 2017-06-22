//arrow functions
//avoids problems with 'this' in anonymous functions
var myFoods = ['cookies', 'sandwiches', 'pizza', 'bagels'];

myFoods.forEach((x) => { console.log (x); });

//old way to map
myFoods.map(function (x){
  return x.toUpperCase();
});

//now with fat arrow
myFoods.map(x => x.toUpperCase()); // curly braces and return can be omitted if it's in a same line
//parenthasis around x can be omitted only if it's the only argument


setTimeout(function (){
  console.log('5 seconds later');
}, 5000);

//fat arrow function
setTimeout(() => {
  console.log('7 seconds later');
}, 7000);

class Counter {
  constructor () {
    this.count = 1;
  }

  countUp () {
    // var thisReference = this; <---> will work
    setInterval(function () { //setInterval(() => {  <---> will work
      console.log(this.count);
      this.count += 1;// <---> won't work since 'this' is not defined inside setInterval. Solution: use fat arrow.
    }, 1000);
  }
}

const myCounter = new Counter();
myCounter.countUp();
