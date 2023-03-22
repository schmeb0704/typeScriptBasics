// callbacks

const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number) => {
  console.log(`Result: ${num}`);
};

const addAndHandle = (
  n1: number,
  n2: number,
  calback: (num: number) => void
) => {
  const result = n1 + n2;
  calback(result);
};

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(34, 35));
addAndHandle(34, 35, printResult);
