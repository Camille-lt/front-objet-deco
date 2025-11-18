import { Cinzel, Oswald } from 'next/font/google'
import "./globals.css";
import Navbar from "./component/navbar";

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700']
});

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['300', '400', '500', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${oswald.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
