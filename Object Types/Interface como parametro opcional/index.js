"use strict";
function showUserDetails(user) {
    if (user.role) {
        return `Usuario: ${user.email}, ADMIN? ${user.role}`;
    }
    return `Usuario: ${user.email}`;
}
const u1 = {
    email: "cesardanilopalacios@gmail.com",
    role: true
};
console.log(showUserDetails(u1));
