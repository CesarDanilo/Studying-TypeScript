"use strict";
function showProductName(obj) {
    return `O nome do produto é ${obj.nome}`;
}
console.log(showProductName({ nome: 'Roupa', preco: 10 }));
// No generics é possível criar constraints para que o tipo passado seja obrigatório ter uma propriedade específica
