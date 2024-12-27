interface Human {
    name: string,
    age: number
}

interface Gun {
    type: string,
    caliber: number
}

// type HumanWithGun = Human & Gun

const arnold: Human & Gun = {
    name: "Arnold",
    age: 23,
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)