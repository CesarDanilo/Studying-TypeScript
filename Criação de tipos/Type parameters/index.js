"use strict";
const person = {
    name: 'César',
    age: 23,
    sex: 'M'
};
function showMyPerson(obj, key) {
    return obj[key];
}
console.log(showMyPerson(person, 'name'));
