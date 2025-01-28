"use client"

import { AuthContext } from "@/providers/AuthProvider"
import { LogIn, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext } from "react"


function AuthLink() {

    const { loggedIn, handleLogin, handleLogout } = useContext(AuthContext)
    const router = useRouter()

    const handleClick = () => {
        if (loggedIn) {
            handleLogout()
        } else {
            router.push("/login")
        }
    }

    return (
        <button
            onClick={handleClick}
            title={loggedIn ? "Salir de la cuenta" : "Acceder a la cuenta"}
            className="cursor-pointer"
        >
            {loggedIn ? <LogOut /> : <LogIn />}
        </button>
    )
}
export default AuthLink