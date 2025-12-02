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
    <div className="max-w-[1400px] mx-auto p-25">
      <h1 className="text-3xl font-bold mb-10 text-center">Catalogue</h1>
      <ProductsGrid produits={produits} />
    </div>
  );
}