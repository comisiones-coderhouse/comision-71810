export const createNewProduct = async (name, price) => {
    try {

        const producto = {
            name: name,
            price: price,
            category: "Living"
        }

        const response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto) //"{\"name\":\"Horacio\",\"price\":\"100\"}"
        })

    } catch (error) {
        return {
            message: "Error al crear el producto",
            error: true,
            payload: null
        }
    }
}