"use client"
import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import { AuthContext } from "@/providers/AuthProvider"
import { useContext } from "react"


function AdminPage() {

    const { loggedIn, handleLogin, handleLogout } = useContext(AuthContext)

    return (
        <>
            <PageTitle>Admin Panel</PageTitle>
            {loggedIn
                ? <Button onClick={handleLogout}>log out</Button>
                : <Button onClick={handleLogin}>log in</Button>
            }
        </>
    )
}
export default AdminPage