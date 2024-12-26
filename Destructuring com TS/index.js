"use strict";
function showProductDetails({ name, price }) {
    return `Produto: ${name}, por R$ ${price}`;
}
console.log(showProductDetails({ name: "Notebook Gamer", price: 3000 }));
