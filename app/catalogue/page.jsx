"use client";
import { useEffect, useState } from "react";
import ProductsGrid from "../../component/ProductsGrid";


export default function ProduitsPage() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = await fetch("http://localhost:4000/api/produits");
        if (!res.ok) throw new Error("Erreur lors de la récupération des produits");
        const data = await res.json();
        setProduits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduits();
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Erreur : {error}</p>;

  return (

    <>
     <main className="bg-[#f7f6f4] min-h-screen"> 
      {/* Bannière */}
      <div
        className="w-full h-60 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/banner.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Titre */}
      <h1 className="text-black text-5xl text-center font-extrabold mt-12">
        Nos Mobiliers
      </h1>

      {/* Contenu */}
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <ProductsGrid produits={produits} />
      </div>
    </main>
    </>
  );
}