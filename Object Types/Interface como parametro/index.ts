interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`)
    if (product.isAvailable) {
        console.log("Produto esta disponível")
    }
}

const shirt: Product = {
    name: "Teclado Gamer",
    price: 3000,
    isAvailable: true
}

showProductDetails(shirt)