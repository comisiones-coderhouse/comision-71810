import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const getProductsFromServer = async () => {
    const productsCollection = collection(db, "products")
    const snapshot = await getDocs(productsCollection)
    return snapshot.docs.map((documentRef) => {
        const id = documentRef.id
        const productoData = {}
        productoData.id = id
        return productoData
    })
}