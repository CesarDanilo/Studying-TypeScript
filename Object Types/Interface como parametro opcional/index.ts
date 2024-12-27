interface User {
    email: string,
    role?: boolean
}

function showUserDetails(user: User) {

    if (user.role) {
        return `Usuario: ${user.email}, ADMIN? ${user.role}`
    }

    return `Usuario: ${user.email}`
}

const u1: User = {
    email: "cesardanilopalacios@gmail.com",
    role: true
}

console.log(showUserDetails(u1))