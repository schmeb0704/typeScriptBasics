// never type
var userInput;
var userName;
userInput = 5;
userInput = 'Sean';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('an error occured', 500);
