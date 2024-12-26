"use strict";
function showUserDetails(user) {
    console.log(`Usuario: ${user.email}`);
    if (user.role) {
        console.log("Esse usuario é admin");
    }
}
const u1 = {
    email: "cesardanilo@gmail.com",
    role: true
};
showUserDetails(u1);
