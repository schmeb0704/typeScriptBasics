// never type - not undefined, not void, it just NEVER returns anything

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sean';

if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

generateError('an error occured', 500);
