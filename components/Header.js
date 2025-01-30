"use client"
import { Menu, ShoppingCart, X } from "lucide-react"
import Link from "next/link"
import AuthLink from "./AuthLink"
import AdminLink from "./AdminLink"
import { useContext, useState } from "react"
import { CartContext } from "@/providers/CartProvider"

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const { cart } = useContext(CartContext)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <header className="p-4 flex justify-between items-center bg-primary shadow-md text-white">
            <Link href="/">
                <h1 className="font-bold text-xl">Coder-Commerce</h1>
            </Link>
            <nav className={`flex gap-4 capitalize flex-col md:flex-row fixed md:static top-0 h-screen w-4/5 bg-primary/50 backdrop-blur-lg z-10 justify-center items-center md:backdrop-blur-none md:bg-transparent md:w-fit md:h-auto transition-[left]  ${isOpen ? "left-0" : "-left-full"}`}>
                <Link href="/" onClick={handleClose}>home</Link>
                <Link href="/products" onClick={handleClose}>productos</Link>
                <AdminLink handle={handleClose} />
                <Link href="/carrito" onClick={handleClose} className="relative">
                    <ShoppingCart />
                    {cart.length > 0 ? <span className="ml-2 absolute rounded-full  bg-accent aspect-square block w-6 flex justify-center items-center -bottom-3 -right-3">{cart.length}</span> : null}
                </Link>
                <AuthLink handle={handleClose} />
            </nav>
            {isOpen
                ? <X className="cursor-pointer md:hidden" onClick={toggleMenu} />
                : <Menu className="cursor-pointer md:hidden" onClick={toggleMenu} />
            }
        </header>
    )
}
export default Header