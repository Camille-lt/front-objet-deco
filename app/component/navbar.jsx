"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../component/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#F6F6F6",
        color: "#565450",
      }}
    >
      {/* 🔹 Structure principale : logo - menu - bouton */}
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily:"Oswald",
        }}>
        {/* 🔹 1️⃣ Logo à gauche */}
        <div>
          <Link href="/" style={{  display:'flex', textDecoration: "none", color: "whitesmoke", fontWeight: "bold", fontSize: "1.5rem", paddingLeft: '1rem' }}>
            M.
          </Link>
        </div>

        {/* 🔹 2️⃣ Centre : menu ou burger */}
        <div>
          {isMobile ? (
            // 🔸 Burger sur mobile
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                fontSize: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* <div style={{ width: 25, height: 3, backgroundColor: "#333" }} />
              <div style={{ width: 25, height: 3, backgroundColor: "#333" }} />
              <div style={{ width: 25, height: 3, backgroundColor: "#333" }} /> */}
            </button>
          ) : (
            // 🔸 Menu desktop
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "3rem",
                margin: 0,
                padding: 0,
                fontFamily: "Oswald",
              }}
            >
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/mobilier">Mobilier</Link></li>
              <li><Link href="/inspirations">Inspirations</Link></li>
            </ul>
          )}
        </div>

        {/* 🔹 3️⃣ Bouton à droite */}
        {/* <div style={{ color: 'black', backgroundColor: '#E4DCD2', borderRadius: '11px',fontWeight: '800'}}></div> */}
        <div style={{ color: '#FFFFF', backgroundColor: "#C8C5BF", fontWeight: '400', fontFamily: "Oswald", fontSize: " 1rem" }}>
          <Button onClick={() => console.log("Connexion clic !")}>
            ESPACE CLIENT
          </Button>
        </div>
      </div>

      {/* 🔹 Menu mobile déroulant */}
      {isMobile && isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            color: "#FFFFFF",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontSize: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#333",
            }}
          >
            &times;
          </button>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "3.5rem",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
          >
            <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link href="/mobilier" onClick={() => setIsOpen(false)}>Mobilier</Link></li>
            <li><Link href="/inspirations" onClick={() => setIsOpen(false)}> Inspirations</Link></li>
          </ul>

          {/* 🔹 Bouton aussi dans le menu mobile */}
          <div style={{ marginTop: "3rem" }}>
            <Button onClick={() => setIsOpen(false)}>ESPACE CLIENT</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
