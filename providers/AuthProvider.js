"use client";
//1) importar createContext
import { auth } from "@/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

//2) crear un contexto en una variable
export const AuthContext = createContext();

//3) sacarle el Provider al contexto
const { Provider } = AuthContext;


//4) crear un nuevo componente que use el Provider dentro de su retorno
const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })

    }, [])

    const handleLogin = async () => {
        const resultado = await signInWithEmailAndPassword(auth, "test1@test.com", "123456")
        console.log("🚀 ~ handleLogin ~ resultado:", resultado)
    }

    const handleLogout = async () => {
        await signOut(auth)
    }

    //5) configurar el prop "value" del Provider
    return (
        <Provider value={{ loggedIn, handleLogin, handleLogout }}>
            {/* <CarritoProvider> */}
                {props.children}
            {/* </CarritoProvider> */}
        </Provider>
    );
}

export default AuthContextProvider;