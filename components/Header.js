import Link from "next/link"

const Header = () => {
    return (
        <header className="px-2 py-4 flex justify-between items-center bg-amber-100 shadow-md">
            <h1>Comision 71810</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/contacto">Conctacto</Link>
                <Link href="/nosotros">Nosotros</Link>
            </nav>
        </header>
    )
}
export default Header