import Image from "next/image";
import Link from "next/link";

function ProductList({ productos }) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productos.map((producto) => {
                return (
                    <article className="p-2 shadow-md rounded-md relative aspect-[1/1.15] overflow-hidden group" key={producto.id}>
                        <Image
                            src={producto.thumbnail}
                            alt={`Thumbnail de ${producto.title}`}
                            fill
                            className="group-hover:scale-125 transition-all"
                        />
                        <div className="z-10 absolute bottom-0 bg-secondary/20 backdrop-blur-xl left-0 w-full p-2">
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl max-w-[180px] truncate">{producto.title}</h2>
                                <p>$ {producto.price}</p>
                            </div>
                            <Link href={`/product/${producto.id}`}>ver mas</Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}
export default ProductList