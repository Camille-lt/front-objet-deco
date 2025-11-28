"use client";
import { useEffect, useState } from "react";

export default function ProduitsCarousel() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = await fetch("http://localhost:4000/api/produits");
        if (!res.ok) throw new Error("Erreur lors de la récupération des produits");
        const data = await res.json();
        setProduits(data.slice(0, 10));
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
    <div className="w-full py-10 bg-white flex justify-center">

      {/* ⬇️ Zone du carrousel */}
<div
  className="
    w-[90%] max-w-[1400px]
    overflow-x-auto
    snap-x snap-mandatory
    flex gap-10
    px-15
    scroll-smooth
    relative
  "
  style={{
    scrollbarWidth: "none", // pour Firefox
    msOverflowStyle: "none", // pour IE et Edge
    paddingBottom: "10px",
  }}
>
        {produits.map((p) => (
          <div
  key={p.id}
  className="
    flex-none 
    w-[220px] 
    snap-center
    bg-white
    shadow-md
    hover:shadow-md 
    transition-shadow 
    duration-100 
    overflow-hidden
    flex flex-col
    min-h-[280px]  /* Ajuste selon le contenu total */
  "
>
  {/* Image */}
  <div className="w-full h-[180px] overflow-hidden ">
    <img
      src={p.image_url}
      alt={p.nom}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Texte */}
  <div className="p-4 flex flex-col justify-between flex-1">
    <h3 className="text-lg font-extrabold truncate">{p.nom}</h3>
    <p className="text-gray-500 text-xs line-clamp-2 h-8">{p.description}</p>
    <p className="text-black font-bold text-sm">{p.prix} €</p>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}
