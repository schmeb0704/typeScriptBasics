const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // predefined length is 2. You can push values, but not manually add it. See below
} = {
  name: 'Sean', // name: string;
  age: 23, // age: number;
  hobbies: ['coding', 'music', 'eating', 'chess'], // hobbies: string[]
  role: [2, 'front-end dev'], // tuple - array with predefined length ang types. in this case (number || string) [] - || is a union operator. The positioning is fixed as well
};

person.role.push('junior dev'); // push is an exception in tuples, you can push.
person.role[1] = 25; // error because there you have explicitly announced it's types in the beginning

person.role = [0, 'lead', 'admin']; // gives an error because the length is fixed.
