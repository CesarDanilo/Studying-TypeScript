interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superPower: string[]
}

const human: Human = {
    name: "Renan",
    age: 28
}

console.log(human)

const superHuman: SuperHuman = {
    name: "CÉSAR",
    age: 23,
    superPower: ["voar", "super-força"]
}

console.log(superHuman.superPower[1])