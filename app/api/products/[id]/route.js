import { NextResponse } from "next/server"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "@/firebase"

export async function GET(request, { params }) {

    const { id } = await (params)

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