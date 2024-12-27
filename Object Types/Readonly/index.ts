interface Car {
    brand: string,
    readonly wheels: number // ESSE COMANDO NÃO DEIXA MUDAR O VALOR DESSA PROPRIEDADE, APOS DECLARALO EM UM OBJETO
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)