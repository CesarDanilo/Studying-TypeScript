function showProductDetails({ name, price }: { name: string, price: number }): string {
    return `Produto: ${name}, por R$ ${price}`
}
console.log(showProductDetails({ name: "Notebook Gamer", price: 3000 }))