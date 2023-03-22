function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(`${phrase} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';
const person = {
  name: 'Sean',
  age: 23,
  hobbies: ['coding', 'music', 'eating'],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
