"use client";
import { useState, useEffect } from "react";
import FilterToggle from "./FilterToggle";
import ProduitsCarousel from "./produitsCarousel";
// PAGE ou conteneur des produits // 

export default function ProduitsPage() {
  const [activeFilter, setActiveFilter] = useState("PRODUITS");
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRandomProducts = (data, count = 15) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = await fetch("http://localhost:4000/api/produits");
        if (!res.ok) throw new Error("Erreur lors de la récupération des produits");
        const data = await res.json();

        if (activeFilter === "PRODUITS") {
          setProduits(getRandomProducts(data, 15));
        } else {
          setProduits([]); // Rien à afficher en mode STYLES
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduits();
  }, [activeFilter]);

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
    setLoading(true);
  };

  return (
    <div className="p-6">
      <FilterToggle onChange={handleFilterChange} />

      {loading ? (
        <p className="text-center mt-10">Chargement...</p>
      ) : (
        <>
          {activeFilter === "PRODUITS" && (
            <ProduitsCarousel produits={produits} />
          )}

          {activeFilter === "STYLES" && (
            <p className="text-center mt-10 text-gray-500">
              (Tu affiches ici plus tard les styles)
            </p>
          )}
        </>
      )}
    </div>
  );
}
