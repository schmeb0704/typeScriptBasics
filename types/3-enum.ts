// enums - enumerated global constan identifiers
// basically key-value pairs, the value and it's index

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// if (person.role === ADMIN) {
//   console.log('is admin');
// } else if (person.role === READ_ONLY) {
//   console.log('is read-only');
// } else {
//   console.log('is author');
// }

/* 
this apprach is okay, but you do have to assign each number one-by-one, and now your role is just a number, it's clear what it is anymore. Enums solve that problem
*/

// ENUMS

enum Role { // see how much cleaner this is
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Sean',
  age: 23,
  hobbies: ['coding', 'music', 'eating', 'chess'],
  role: Role.READ_ONLY,
};
