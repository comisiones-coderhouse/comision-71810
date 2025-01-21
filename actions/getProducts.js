export async function getProducts(categoria) {

    try {

        const url = categoria
            ? "https://dummyjson.com/products/category/" + categoria
            : "http://localhost:3000/api/products"

        const data = await fetch(url)
        const { payload: products } = await data.json()

        return {
            payload: products,
            message: "Se obtuvieron los productos",
            error: false
        }

    } catch (error) {

        return {
            payload: null,
            message: "No se pudieron obtener los productos",
            error: true
        }
    }

}