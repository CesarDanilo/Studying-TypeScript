// interface MyInterface<T, U> {
//     nome: string
//     idade: T,
//     sexo: U
// }

// type car = MyInterface<number, boolean>
// type person = MyInterface<number, string>


// const myCar: car = {
//     nome: 'Fusca',
//     idade: 10,
//     sexo: false
// }

// const myPerson: person = {
//     nome: 'Cesar',
//     idade: 23,
//     sexo: 'M'
// }

// console.log(myCar)
// console.log(myPerson)


interface MyInterface<T, U, Z> {
    nome: string
    idade: T,
    sexo: U,
    marca: Z
}

type person = MyInterface<number, string, boolean>
type car = MyInterface<number, boolean, string>

const myPerson: person = {
    nome: 'Cesar',
    idade: 23,
    sexo: 'M',
    marca: false
}

const mayCar: car = {
    nome: 'Fusca',
    idade: 10,
    sexo: false,
    marca: 'Volkswagen'
}