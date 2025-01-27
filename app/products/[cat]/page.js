import { getProducts } from "@/actions/getProducts"
import PageTitle from "@/components/PageTitle"
import ProductList from "@/components/ProductList"
import ProductListSection from "@/components/ProductListSection"

export default async function ProductsByCategoryPage({ params }) {

  const { cat } = await params
  const { payload: products, error, message } = await getProducts(cat)

  if (error) {
    return (
      <>
        <PageTitle>Error</PageTitle>
        <p>{message}</p>
      </>
    )
  }


  return (
    <>
      <PageTitle>Productos de {cat}</PageTitle>
      <ProductListSection categoria={cat} />
    </>
  )
}