import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import AuthContextProvider from "@/providers/AuthProvider";


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
        <AuthContextProvider>
          {/* <CarritoProvider> */}
            <Header />
            <main className="grow p-4">
              {children}
            </main>
            <Footer />
          {/* </CarritoProvider> */}
        </AuthContextProvider>
      </body>
    </html>
  );
}

export default RootLayout