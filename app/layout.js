import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "Comision 71810",
  authors: [{ name: "Horacio Gutierrez" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "comercio electrónico, aplicación, nextjs, tailwind, sass, react, lucide, tailwindcss, Horacio Gutierrez, programador, argentina, ecommerce"
}

function RootLayout({ children }) {

  return (
    <html lang="en">
      {/* <meta name="author" content="Horacio Gutierrez" />
      <title>Comision 71810</title> */}
      <body className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout