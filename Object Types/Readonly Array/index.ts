let myarray: ReadonlyArray<string> = ["Maçã", "Banana", "Laranja"]

myarray.forEach((item) => {
    console.log("Fruta: " + item)
})

myarray = myarray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myarray)
