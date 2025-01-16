function PageTitle({ children = "Titulo de pagina" }) {
    return (
        <h2 className="mb-8 text-4xl font-bold text-primary">{children}</h2>
    )
}
export default PageTitle