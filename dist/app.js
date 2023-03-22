"use strict";
const person = {
    name: 'Sean',
    age: 27,
    hobbies: ['coding', 'eating', 'playing'],
};
const person2 = {
    name: 'Cher',
    age: 24,
    hobbies: ['reading', 'tarot card reading', 'surfing the web'],
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
person.age = 23;
console.log(person, copiedPerson);
const { age, name: personName } = copiedPerson;
const [hobby1, hobby2, hobby3] = person.hobbies;
console.log(age, personName);
console.log(hobby1);
