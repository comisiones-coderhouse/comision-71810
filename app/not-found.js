import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver al home</Link>
    </div>
  )
}
export default NotFoundPage