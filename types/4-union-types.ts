// union type - makes types more flexible

function combine(input1: number | string, input2: number | string) {
  let result: number | string;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = `${input1} ${input2}`;
  }

  return result;
}

console.log(combine(30, 26));
console.log(combine('Sean', 'Benedique'));
console.log(combine('Sean', 23));
console.log(combine(24, 'Cher'));
