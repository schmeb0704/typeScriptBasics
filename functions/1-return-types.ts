// return type - describes the return type of the function. You can, most of the time, just let TypeScript infer the return type

const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

// void return type - the function returns nothing here, it just prints out something. Technically returns undefined

const printResult = (num: number) => {
  console.log(`Result: ${num}`);
};

printResult(add(5, 12));
