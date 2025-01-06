"use strict";
const mycharacter = {
    name: "cesar",
    age: 24,
    hasDriveLicense: true
};
function showCharacter(obj, key) {
    return `${obj[key]}`;
}
console.log(showCharacter(mycharacter, "hasDriveLicense"));
