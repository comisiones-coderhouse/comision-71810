"use client"
import { createNewProduct } from "@/actions/createNewProduct"
import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import { AuthContext } from "@/providers/AuthProvider"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"


function AdminPage() {

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const { loggedIn } = useContext(AuthContext)
    const router = useRouter()

    const metodos = {
        "name": setNombre,
        "price": setPrecio,
        //etc..
    }


    useEffect(() => {
        if (!loggedIn) {
            router.push("/login")
        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        createNewProduct(nombre, precio)
        toast("Producto creado con exito", { type: "success" })
        setNombre("")
        setPrecio("")
    }

    const handleChange = (e) => {
        const valor = e.target.value
        const name = e.target.name
        metodos[name](valor)
    }

    return (
        <>
            <PageTitle>Admin Panel</PageTitle>
            <form noValidate="" action="" className="flex flex-col mx-auto space-y-12" onSubmit={handleSubmit}>
                <fieldset className="grid grid-cols-4 gap-6">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Carga de producto</p>
                        <p className="text-xs">Aca podes cargar tus productos de manera divertida (?</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">Nombre de producto</label>
                            <input name="name" id="name" type="text" placeholder="Ej.: Monitor de pantalla" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600  border-primary/20 border bg-white p-2" onChange={handleChange} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="price" className="text-sm">Precio (en pesos)</label>
                            <input name="price" id="price" type="text" placeholder="Ej.: $100" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600  border-primary/20 border bg-white p-2" onChange={handleChange} />
                        </div>
                        <Button className="col-span-full sm:col-span-3">Crear producto</Button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export default AdminPage