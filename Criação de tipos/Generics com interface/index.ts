interface MyInterface<T, U> {
    nome: string
    idade: T,
    sexo: U
}

type car = MyInterface<number, boolean>
type person = MyInterface<number, string>


const myCar: car = {
    nome: 'Fusca',
    idade: 10,
    sexo: false
}

const myPerson: person = {
    nome: 'Cesar',
    idade: 23,
    sexo: 'M'
}

console.log(myCar)
console.log(myPerson)