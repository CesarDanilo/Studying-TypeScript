"use strict";
let myarray = ["Maçã", "Banana", "Laranja"];
myarray.forEach((item) => {
    console.log("Fruta: " + item);
});
myarray = myarray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myarray);
