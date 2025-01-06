type Character = {
    name: string,
    age: number,
    hasDriveLicense: boolean
}

type c = keyof Character

const mycharacter: Character = {
    name: "cesar",
    age: 24,
    hasDriveLicense: true
}

function showCharacter(obj: Character, key: c): string {
    return `${obj[key]}`
}

console.log(showCharacter(mycharacter, "hasDriveLicense"))