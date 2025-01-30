"use client"

import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import { CartContext } from "@/providers/CartProvider"
import Link from "next/link"
import { useContext } from "react"

function CarritoPage() {

    const { cart } = useContext(CartContext)

    return (
        <>
            <PageTitle>Mi Carrito</PageTitle>
            {cart.length > 0 && (
                <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                        {cart.map((producto) => {
                            return (
                                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                                        <div className="flex flex-col justify-between w-full pb-4">
                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{producto.name}</h3>
                                                    <p className="text-sm dark:text-gray-600">{producto.type}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-semibold">${producto.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex text-sm divide-x">
                                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                        <rect width="32" height="200" x="168" y="216"></rect>
                                                        <rect width="32" height="200" x="240" y="216"></rect>
                                                        <rect width="32" height="200" x="312" y="216"></rect>
                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                    </svg>
                                                    <span>Remover</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold">357 €</span>
                        </p>
                        <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" className="px-6 py-2 border rounded-md ">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                        <Button>
                            <Link href="/checkout">
                                Proceder al pago
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
            {cart.length <= 0 && (
                <Button>
                    <Link href="/products">Carrito vacio! Anda paya bobo</Link>
                </Button>
            )}
        </>
    )
}

export default CarritoPage