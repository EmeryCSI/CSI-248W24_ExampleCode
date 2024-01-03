//traditional
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));
//anonymous function syntax
const addition = (x, y) => {
  return x + y;
};
console.log(addition(2, 4));
//we can shorten this to one line
const addOneline = (x, y) => x + y;
console.log(addOneline(2, 100));
//lets turn this into an arrow function
// function sayHello() {
//   console.log("Hello World");
// }
const sayHello = () => console.log("Hello World");
sayHello();
