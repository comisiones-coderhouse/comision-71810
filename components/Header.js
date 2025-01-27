import { ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <header className="p-4 flex justify-between items-center bg-primary shadow-md text-white">
            <Link href="/">
                <h1 className="font-bold text-xl">Comision 71810</h1>
            </Link>
            <nav className="flex gap-4 capitalize">
                <Link href="/">home</Link>
                <Link href="/products">productos</Link>
                <Link href="/admin">admin</Link>
                <Link href="/carrito">
                    <ShoppingCart />
                </Link>
            </nav>
        </header>
    )
}
export default Header