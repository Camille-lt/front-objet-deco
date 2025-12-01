"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../component/button"; // Assurez-vous que ce chemin est correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 768px est l'équivalent de 'md' en Tailwind par défaut
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // 🚨 CONVERSION TAILWIND 🚨
    <nav
      className="font-sans py-4 bg-[#F6F6F6] text-[#565450] shadow-sm"
    >
      {/* 🔹 Structure principale : logo - menu - bouton (Centrée dans un conteneur) */}
      <div className="mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* 🔹 1️⃣ Logo à gauche */}
        <div>
          <Link 
            href="/" 
            className="flex text-[#565450] font-bold text-xl md:text-3xl tracking-wide"
          >
            HOME MAKING
          </Link>
        </div>

        {/* 🔹 2️⃣ Centre : menu ou burger */}
        <div className="flex">
          {isMobile ? (
            // 🔸 Burger sur mobile
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-xl border-none bg-transparent cursor-pointer flex flex-col items-center justify-center space-y-1.5"
            >
              <div className="w-6 h-0.5 bg-gray-800 rounded-full" />
              <div className="w-6 h-0.5 bg-gray-800 rounded-full" />
              <div className="w-6 h-0.5 bg-gray-800 rounded-full" />
            </button>
          ) : (
            // 🔸 Menu desktop
            <ul className="hidden md:flex  p-0 m-0 space-x-10 uppercase text-base font-semibold ">
              {/* 🚨 CORRECTION SYNTAXE: Espace entre hover:text-[#E4B969] et transition-colors */}
              <li><Link href="/" className="hover:text-[#E4B969] transition-colors">ACCUEIL</Link></li>
              <li><Link href="/catalogue" className="hover:text-[#E4B969] transition-colors">CATALOGUE</Link></li>
              <li><Link href="/inspirations" className="hover:text-[#E4B969] transition-colors">PRODUITS</Link></li>
              <li><Link href="/valeurs" className="hover:text-[#E4B969] transition-colors">NOS VALEURS</Link></li>
            </ul>
          )}
        </div>

        {/* 🔹 3️⃣ Bouton à droite (visible sur desktop) */}
        <div className="bg-[#565450] text-white  text-xlfont-medium rounded-lgtransition-color">
          <Button 
            onClick={() => console.log("Connexion clic !")}
            className="rounded-lgtransition-color"
            // Le composant Button doit accepter et appliquer 'className'
          >
            ESPACE CLIENT
          </Button>
        </div>
      </div>

      {/* 🔹 Menu mobile déroulant */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-white text-[#565450] z-50 flex flex-col items-center justify-center"
        >
          {/* Bouton Fermer */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
            className="absolute top-4 right-4 text-3xl p-2 border-none bg-transparent cursor-pointer text-gray-800"
          >
            &times;
          </button>

          <ul className="list-none p-0 m-0 flex flex-col gap-8 text-lg font-semibold uppercase">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link href="/catalogue" onClick={() => setIsOpen(false)}>Catalogue</Link></li>
            <li><Link href="/produits" onClick={() => setIsOpen(false)}> Produits</Link></li>
            <li><Link href="/valeurs" onClick={() => setIsOpen(false)}>Nos Valeurs</Link></li>
          </ul>

          {/* 🔹 Bouton aussi dans le menu mobile */}
          <div className="">
            <Button 
              onClick={() => setIsOpen(false)}
              className="bg-[#565450] text-white font-medium text-sm px-1 py-1 rounded-lg transition-color"> 
              ESPACE CLIENT
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
