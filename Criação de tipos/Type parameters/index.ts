interface Person {
    name: string,
    age: number,
    sex: 'M' | 'F'
}

const person: Person = {
    name: 'César',
    age: 23,
    sex: 'M'
}

function showMyPerson<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(showMyPerson(person, 'name'))