import { getProducts } from "@/actions/getProducts"
import ProductList from "./ProductList"

async function ProductListContainer() {

    const { payload: products, error, message } = await getProducts()

    if (error) {
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>{message}</p>
            </>
        )
    }

    return (
        <ProductList productos={products} />
    )
}
export default ProductListContainer