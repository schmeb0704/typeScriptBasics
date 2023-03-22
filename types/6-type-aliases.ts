// type aliases aka custom type

/* you can define types in advance and reuse them everywhere in you codebase */

type Combinable = number | string;
type Converter = 'as-number' | 'as-text';

function combine(
  input1: Combinable, // an alias is used here
  input2: Combinable, // and here as well
  resultConversion: Converter
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

console.log(combine(2, 15, 'as-number'));
console.log(combine('Sean', 'Ben', 'as-number'));
console.log(combine('Sean', 24, 'as-text'));
console.log(combine('15', '24', 'as-number'));
console.log(combine('Sean', 23, 'hatdog')); // produces error because it is not assigned in the type check
