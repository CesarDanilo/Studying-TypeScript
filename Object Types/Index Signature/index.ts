interface CoordObj {
    [index: string]: number
}

const coords: CoordObj = {
    x: 12
}

coords.y = 13
coords.z = 16

console.log(coords)