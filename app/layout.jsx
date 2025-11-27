import { Nunito_Sans } from 'next/font/google'; // Playfair_Display retiré
import "./globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

// Déclarations des polices
// Playfair Display retiré

// 2. Nunito Sans (Utilisé pour TOUT)
const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
});


export default function RootLayout({ children }) {
  return (
    // Application de la variable Nunito uniquement
    <html 
      lang="fr" 
      className={nunito.variable} // Playfair.variable retiré
    >
      
      {/* Utilisation de la police Nunito par défaut pour le corps du texte (font-sans) */}
      <body className={`font-sans antialiased`}> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};