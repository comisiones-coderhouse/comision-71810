"use client"

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        console.log("🚀 ~ handleAddToCart ~ product:", product)
        setCart([...cart, product])
    }

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(p => p.id !== product.id))
    }

    const handleClearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart, handleClearCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;