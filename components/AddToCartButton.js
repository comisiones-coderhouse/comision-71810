"use client"

import { useContext } from "react"
import Button from "./Button"
import { CartContext } from "@/providers/CartProvider"

export default function AddToCartButton({ producto }) {

    const { handleAddToCart } = useContext(CartContext)

    const handleClick = () => {
        handleAddToCart(producto)
    }

    return (
        <Button onClick={handleClick}>Agregar al carrito</Button>
    )
}