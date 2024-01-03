//ternary operator
//shortcut for if/else
//syntax: boolean condition ? what to do if true : what to do if false
console.log(2 > 3 ? "The statement is true" : "The statement is false");
//lets try ternary operator with a function
//function that takes two numbers are returns the larger number
const isLarger = (x, y) => (x > y ? x : y);
//this will always log the larger number
console.log(isLarger(8, 7));
