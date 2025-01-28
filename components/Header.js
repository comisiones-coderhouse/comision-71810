import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import AuthLink from "./AuthLink"
import AdminLink from "./AdminLink"

function Header() {
    return (
        <header className="p-4 flex justify-between items-center bg-primary shadow-md text-white">
            <Link href="/">
                <h1 className="font-bold text-xl">Coder-Commerce</h1>
            </Link>
            <nav className="flex gap-4 capitalize">
                <Link href="/">home</Link>
                <Link href="/products">productos</Link>
                <AdminLink/>
                <Link href="/carrito">
                    <ShoppingCart />
                </Link>
                <AuthLink />
            </nav>
        </header>
    )
}
export default Header