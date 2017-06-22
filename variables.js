// let and const, variable scoop
//can't reassign const variable but can change key values in const objects and arrays
//let vs var: let stays local to the function, loop, expression it was declared in n won't be available outside it

//--WORKS--
const nizar = {
  name: 'Nizar',
  age: 30
};
nizar.name = 'Kevin';
nizar.country = "puerto-rico";
//--WORKS--

const PI = 3.1415;
for (let i = 1; i <= 42; i += 1) {
  let food = 'cookies';
}
//ERROR since let variable is not available outside for loop
console.log(i);
//ERROR same thing
console.log(food);

function hello () {
  var name = 'Nizar';
  console.log ('Hello' + name);
}

hello();
