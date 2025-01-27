import { NextResponse } from "next/server"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "@/firebase"

export async function GET(request) {

    const id = "0DT9KWqsw2x0sanAnk7a"

    const productsCollection = collection(db, "products")
    const docRef = doc(productsCollection, id)
    const query = await getDoc(docRef)

    const producto = query.data()
    producto.id = id

    return NextResponse.json({
        message: "Detalle de producto",
        error: false,
        payload: producto
    })
}