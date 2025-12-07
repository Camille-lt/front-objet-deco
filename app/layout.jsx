"use client"; // 🔥 IMPORTANT : sinon AOS ne s'exécute pas

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Nunito_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

// Police
const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
});

export default function RootLayout({ children }) {
  
  // Initialisation d’AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,    // l’animation se relance à chaque scroll
      offset: 50,
    });
  }, []);

  return (
    <html lang="fr" className={nunito.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
