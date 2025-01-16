import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="min-w-[250px]">
                <PageTitle>Filtros</PageTitle>
                <div className="flex flex-col gap-4">
                    <Link href="/product/cat/electro">electro</Link>
                    <Link href="/product/cat/home">hogar</Link>
                </div>
            </aside>
            <div className="grow">
                {children}
            </div>
        </div>
    );
}