import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {

    const { id } = await params
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const productDetail = await data.json()

    if(productDetail.message) {
        return (
            <>
                <PageTitle>Producto no encontrado</PageTitle>
                <p>El producto con id {id} no existe, intentalo de nuevo</p>
                <Link href="/product">Volver a productos</Link>
            </>
        )
    }

    return (
        <>
            <PageTitle>Detalle del producto {id}</PageTitle>
        </>
    );
}