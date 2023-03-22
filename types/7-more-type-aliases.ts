/* Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. */

// you can simplify this code to the one below with type aliases

const greet = (user: { name: string; age: number }) => {
  console.log(`Hi, my name is ${user.name}`);
};

const isOlder = (user: { name: string; age: number }, checkAge: number) => {
  return checkAge > user.age;
};

// simplify it to this

type User = { name: string; age: number }; // Title case naming convention

const greet2 = (user: User) => {
  console.log(`Hi, my name is ${user.name}`);
};

const isOlder2 = (user: User, checkAge: number) => {
  return checkAge > user.age;
};
