"use client";
import { useEffect, useState } from "react";
import ProductCard from "../component/productCard";

export default function ProduitsCarousel({ produitsProp }) {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = produitsProp
          ? { ok: true, json: async () => produitsProp }
          : await fetch("http://localhost:4000/api/produits");

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
  }, [produitsProp]);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Erreur : {error}</p>;

  return (
    <div className="w-full py-10 bg-white flex justify-center">
      <div
        className="w-[90%] max-w-[1400px] overflow-x-auto snap-x snap-mandatory flex gap-10 px-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {produits.map((p) => (
          <ProductCard key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}
