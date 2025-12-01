"use client"
import { useState, useEffect } from "react";
import ProduitsList from "../../component/produitsList";

export default function CataloguePage() {
  const [produits, setProduits] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Récupération des produits depuis l'API
  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = await fetch("http://localhost:4000/api/produits");
        if (!res.ok) throw new Error("Erreur lors de la récupération des produits");
        const data = await res.json();
        setProduits(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduits();
  }, []);

// Filtrage sécurisé des produits
const filteredProduits = produits.filter((p) =>
  p.name?.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main className="min-h-screen">
      {/* Bannière 1 */}
      <div className="w-full relative overflow-hidden h-[45vh]">
        {/* Image statique */}
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Bannière"
          className="w-full h-full object-cover object-[center_75%]" // image statique
        />
      </div>
{/* Barre de recherche */}
      <div className="flex justify-center mb-8 pt-10">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4B969]"
        />
      </div>

      {/* Liste des produits */}
      {loading ? (
        <p className="text-center">Chargement des produits...</p>
      ) : filteredProduits.length > 0 ? (
        <ProduitsList produits={filteredProduits} />
      ) : (
        <p className="text-center">Aucun produit trouvé.</p>
      )}
    </main>
  );
}
