interface User {
    email: string,
    role?: boolean
}

function showUserDetails(user: User) {
    console.log(`Usuario: ${user.email}`)
    if (user.role) {
        console.log("Esse usuario é admin")
    }
}

const u1: User = {
    email: "cesardanilo@gmail.com",
    role: true
}

showUserDetails(u1)