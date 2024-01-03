//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//The spread operator is ...
//I could use the spread operator to combine
//The 2 arrays
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//The rest operator is similar
//... but it goes at the end of the variable
//The rest of the information
const total = (x, y, ...rest) => {
  console.log(rest);
  return x + y;
};
total(1, 2, 3, 4, 5);

//Destructuring
//This allows us to break up and array or object into variables
//destructure an array
const [num1, num2] = [10, 15, 20];
//we just created 3 variables
console.log(num1);
console.log(num2);
// console.log(num3);
//destructuring with objects
const student = {
  name: "Josh",
  phone: "253-467-4353",
};
//This created two variables called name and phone
//it assigned the values from the student object
const { name, phone } = student;
console.log(name);
console.log(phone);
