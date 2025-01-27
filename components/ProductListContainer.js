import { getProducts } from "@/actions/getProducts"
import ProductList from "./ProductList"
import PageTitle from "./PageTitle"

async function ProductListContainer({ categoria }) {

    const { payload: products, error, message } = await getProducts(categoria)

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