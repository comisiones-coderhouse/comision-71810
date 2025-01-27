import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthContextProvider from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "./globals.css";


export const metadata = {
  title: "Coder-Commerce - Aplicacion de comercio electrónico",
  authors: [{ name: "Horacio Gutierrez" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "comercio electrónico, aplicación, nextjs, tailwind, sass, react, lucide, tailwindcss, Horacio Gutierrez, programador, argentina, ecommerce"
}

function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-background min-h-screen flex flex-col">
        <AuthContextProvider>
          <Header />
          <main className="grow p-4 flex flex-col">
            {children}
          </main>
          <Footer />
          <ToastContainer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}

export default RootLayout