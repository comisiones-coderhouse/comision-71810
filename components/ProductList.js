import Image from "next/image";
import Link from "next/link";

function ProductList({ productos }) {

    return (
        <>
            {productos.map((producto) => {
                return (
                    <article className="p-2 shadow-md rounded-md relative aspect-[1/1.15] overflow-hidden group" key={producto.id}>
                        <Image
                            src={producto.image || "https://placehold.co/600x400?text=No+Image"}
                            alt={`Thumbnail de ${producto.name}`}
                            fill
                            className="group-hover:scale-125 transition-all"
                        />
                        <div className="z-10 absolute bottom-0 bg-secondary/20 backdrop-blur-xl left-0 w-full p-2">
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl max-w-[180px] truncate">{producto.name}</h2>
                                <p>$ {producto.price}</p>
                            </div>
                            <Link href={`/product/${producto.id}`}>ver mas</Link>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
export default ProductList