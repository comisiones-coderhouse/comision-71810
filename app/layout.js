import "./globals.css";
import Header from "@/components/Header";

function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header/>        
        {children}
      </body>
    </html>
  );
}

export default RootLayout