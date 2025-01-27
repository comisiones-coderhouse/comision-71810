import { Suspense } from "react"
import ProductsLoader from "./ProductsLoader"
import ProductListContainer from "./ProductListContainer"

function ProductListSection({ categoria }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Suspense fallback={<ProductsLoader />}>
                <ProductListContainer categoria={categoria} />
            </Suspense>
        </section>
    )
}
export default ProductListSection