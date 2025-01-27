export async function getProductById(id) {

    if (!id) {
        return {
            payload: null,
            message: "No se pudo obtener el producto",
            error: true
        }
    }

    try {

        const url = "http://localhost:3000/api/products/" + id

        const data = await fetch(url)
        const { payload: product } = await data.json()


        return {
            payload: product,
            message: "Se obtuvo el producto",
            error: false
        }

    } catch (error) {

        return {
            payload: null,
            message: "No se pudo obtener el producto",
            error: true
        }
    }

}