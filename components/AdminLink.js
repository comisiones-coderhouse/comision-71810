"use client"

import { AuthContext } from "@/providers/AuthProvider"
import Link from "next/link"
import { useContext } from "react"

function AdminLink() {

    const { loggedIn } = useContext(AuthContext)

    if (!loggedIn) return null

    return (
        <Link href="/admin">admin</Link>
    )
}
export default AdminLink