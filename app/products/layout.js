import PageTitle from "@/components/PageTitle";
import Link from "next/link";

//https://localhost:3000/product?cat=home
//https://localhost:3000/product/[cat]/[id]

//https://localhost:3000/products -> todos los productos
//https://localhost:3000/products/electro -> todos los productos de electro
//https://localhost:3000/products/hogar -> todos los productos de hogar
//https://localhost:3000/product/[id]

export default function ProductLayout({ children }) {

    const categorias = [
        { id: 1, name: "laptops" },
        { id: 2, name: "tablets" },
    ]

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="min-w-[250px]">
                <PageTitle>Filtros</PageTitle>
                <div className="flex flex-col gap-4">
                    <Link href="/products">todos</Link>
                    {categorias.map((categoria) => {
                        return (
                            <Link key={categoria.id} href={`/products/${categoria.name}`}>{categoria.name}</Link>
                        )
                    })}
                </div>
            </aside>
            <div className="grow">
                {children}
            </div>
        </div>
    );
}