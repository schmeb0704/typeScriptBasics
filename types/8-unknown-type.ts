// unknown type - can store any value without getting any errors

let userInput: unknown; // you cannot assign this to a value that expects a different type, for that use case, use any type
let userName: string;

userInput = 5;
userInput = 'Sean';
userName = userInput; // produces error that unknown type is not assignable to string

// extra guard rail. much more secure than any type
if (typeof userInput === 'string') {
  userName = userInput;
}
