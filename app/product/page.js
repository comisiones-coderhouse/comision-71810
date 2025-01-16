import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";

export default async function ProductPage() {

    const data = await fetch("https://dummyjson.com/products")
    const { products } = await data.json()

    return (
        <>
            <PageTitle>Productos</PageTitle>
            <ProductList productos={products} />
        </>
    );
}