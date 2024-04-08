import { atom } from "recoil";

export const UserData = atom({
    key: "userData",
    default: {
        username: localStorage.getItem("logged") ? JSON.parse(localStorage.getItem("logged"))[0].username : "",
        password: localStorage.getItem("logged") ? JSON.parse(localStorage.getItem("logged"))[0].password : "",
    },
})

export const userError = atom({
    key: "userErrorState",
    default: null,
})

export let isAuth = atom({    
    key: "authState",
    default: false,
})


