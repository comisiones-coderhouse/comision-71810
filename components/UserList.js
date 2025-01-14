"use client";

import { Trash } from "lucide-react";

const UserList = ({ usuarios }) => {

    const handleDelete = () => {
        console.log("delete")
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {usuarios.map((usuario) => {
                return (
                    <article className="p-2 shadow-md rounded-md">
                        <h2>{usuario.name}</h2>
                        <p>{usuario.email}</p>
                        <button onClick={handleDelete}>
                            <Trash />
                        </button>
                    </article>
                )
            })}
        </section>
    )
}
export default UserList