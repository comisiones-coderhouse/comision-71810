import { getProducts } from "@/actions/getProducts";
import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";
import ProductListContainer from "@/components/ProductListContainer";
import { Suspense } from "react";

//Suspense

export default async function ProductPage() {

    /* const { payload: products, error, message } = await getProducts() */

    /* if (error) {
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>{message}</p>
            </>
        )
    } */

    return (
        <>
            <PageTitle>Productos</PageTitle>
            {/* <ProductList productos={products} /> */}

            <Suspense fallback={<div>Loading...</div>}>
                <ProductListContainer />
            </Suspense>

        </>
    );
}