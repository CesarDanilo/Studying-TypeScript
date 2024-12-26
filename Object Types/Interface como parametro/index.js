"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
    if (product.isAvailable) {
        console.log("Produto esta disponível");
    }
}
const shirt = {
    name: "Teclado Gamer",
    price: 3000,
    isAvailable: true
};
showProductDetails(shirt);
