import { ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <header className="px-2 py-4 flex justify-between items-center bg-primary shadow-md text-white">
            <h1 className="font-bold text-xl">Comision 71810</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/product">productos</Link>
                <Link href="/admin">admin</Link>
                <Link href="/carrito">
                    <ShoppingCart />
                </Link>
            </nav>
        </header>
    )
}
export default Header