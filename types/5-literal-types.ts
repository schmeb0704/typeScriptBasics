// literal types - concrete values, usually applies to const variables. You know exactly what the value is

/* in this example, we will pass a third argument to the combine function so that we could force a conversion from string to number. */

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // literal type
) {
  let result: number | string;

  if (resultConversion === 'as-text') {
    return (result = input1.toString() + ' ' + input2.toString());
  } else if (resultConversion === 'as-number') {
    result = +input1 + +input2;
    if (Number.isNaN(result)) {
      return `${input1} ${input2}`;
    } else {
      return result;
    }
  }
}

const number1 = 25; // literal type
const number2 = 15;

console.log(combine(2, 15, 'as-number')); // third argument is a literal type
console.log(combine('Sean', 'Ben', 'as-number'));
console.log(combine('Sean', 24, 'as-text'));
console.log(combine('15', '24', 'as-number'));
console.log(combine('Sean', 23, 'hatdog')); // produces error because it is not assigned in the type check
