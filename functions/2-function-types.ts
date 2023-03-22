// function as type

const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number) => {
  console.log(`Result: ${num}`);
};

// let combineValues; doing it like this makes this variable is any type

// combineValues = 5 // produces error because 5 is not a function

/*
let combineValues: Function;
combineValues = add;
combineValues = printResult // will produce unwanted behaviour because now, you can just input any function here
*/

let combineValues: (a: number, b: number) => number; // this now expects a function that takes 2 params and returns a number

//combineValues = printResult; // produces error because printResult doesn't return anything and only takes one value

combineValues = add; // requirements satisfied

console.log(combineValues(34, 35));
