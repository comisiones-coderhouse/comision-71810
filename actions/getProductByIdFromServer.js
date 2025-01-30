import { db } from "@/firebase"
import { collection, doc, getDoc } from "firebase/firestore"

export const getProductByIdFromServer = async (id) => {

    const productsCollection = collection(db, "products")
    const docRef = doc(productsCollection, id)
    const query = await getDoc(docRef)

    const producto = query.data()
    producto.id = id

    return {
        payload: producto,
        error: false,
        message: "Se obtuvieron los productos!"
    }
}