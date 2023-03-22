// literal types - concrete values, usually applies to const variables. You know exactly what the value is
/* in this example, we will pass a third argument to the combine function so that we could force a conversion from string to number. */
function combine(input1, input2, resultConversion // literal type
) {
    var result;
    if (resultConversion === 'as-text') {
        return (result = input1.toString() + ' ' + input2.toString());
    }
    else if (resultConversion === 'as-number') {
        result = +input1 + +input2;
        if (Number.isNaN(result)) {
            return "".concat(input1, " ").concat(input2);
        }
        else {
            return result;
        }
    }
}
var number1 = 25; // literal type
var number2 = 15;
console.log(combine(2, 15, 'as-number')); // third argument is a literal type
console.log(combine('Sean', 'Ben', 'as-number'));
console.log(combine('Sean', 24, 'as-text'));
console.log(combine('15', '24', 'as-number'));
console.log(combine('Sean', 23, 'as-hatdog'));
