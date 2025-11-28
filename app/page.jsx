"use client";
import { useState, useEffect } from "react";
import Button from "../component/button";
import FilterToggle from "../component/FilterToggle";
import ProduitsList from "@/component/produitsList";

export default function HomePage() {
  const goldText = "text-[#E4B969]";
  const darkText = "text-[#272726]";
  const taupeText = "text-[#8A8781]";
  const titleClasses = "font-extrabold text-[2.5rem] text-center tracking-widest mb-4 font-sans";
  const subTitleClasses = "underline decoration-1 font-bold text-[1.5rem] text-center tracking-wider font-sans";

  // État pour gérer le toggle et les produits
  const [activeFilter, setActiveFilter] = useState("PRODUITS");
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour choisir aléatoirement 15 produits
  const getRandomProducts = (data, count = 15) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Récupération des produits depuis l'API
  useEffect(() => {
    async function fetchProduits() {
      try {
        const res = await fetch("http://localhost:4000/api/produits");
        if (!res.ok) throw new Error("Erreur lors de la récupération des produits");
        const data = await res.json();

        if (activeFilter === "PRODUITS") {
          setProduits(getRandomProducts(data, 15));
        } else {
          // Pour STYLES, on pourra filtrer différemment
          setProduits(data);
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
    <main className="min-h-screen font-sans">
      {/* Bannière 1 */}
      <div className="w-full overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Bannière de salon"
          className="w-full h-[90vh] object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className={`${goldText} ${titleClasses}`}>
            TROUVEZ VOTRE STYLE ET VOS AMBIANCES
          </h1>
          <p className={`${goldText} ${subTitleClasses}`}>
            POUR UN CHEZ VOUS QUI VOUS RESSEMBLE
          </p>
        </div>
      </div>

      {/* Bannière 2 */}
      <div className="w-full overflow-hidden relative pt-10">
        <img
          src="https://images.unsplash.com/photo-1662781256805-3ac89ffbeae0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Bannière de promotion"
          className="w-full h-[90vh] object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className={`${goldText} ${titleClasses}`}>
            NOTRE SELECTION JUSQU'À -50% PAR STYLES
          </h1>
          <p className={`${goldText} ${subTitleClasses}`}>
            DÉCOUVREZ NOS MOBILIERS ICI
          </p>
        </div>
      </div>

      {/* 🚨 FilterToggle et ProduitsList */}
      <div className="flex flex-col items-center py-16">
        <FilterToggle onChange={handleFilterChange} />
        {loading ? (
          <p className="text-center mt-10">Chargement...</p>
        ) : (
          <ProduitsList produits={produits} />
        )}
      </div>

      {/* Bloc d'inspiration/storytelling */}
      <div className="text-center p-10">
        <p className={`underline decoration-1 ${taupeText} text-[1.5rem] pb-10 cursor-pointer hover:text-gray-900 transition-colors`}>
          Voir tous nos mobiliers
        </p>
        <p className={`font-bold ${darkText} text-[1.5rem] font-sans leading-relaxed max-w-4xl mx-auto`}>
          HOME MAKING croit qu’un intérieur réussi se construit à votre image, petit à petit, 
          à partir des pièces que vous choisissez et des styles que vous aimez. 
          Chaque meuble, chaque objet peut se mêler à d’autres influences, 
          pour composer un espace qui vous ressemble vraiment.
        </p>
      </div>

      {/* Bloc d'engagement */}
      <div className="text-center p-10 pb-20">
        <p className={`underline decoration-1 ${taupeText} text-[1.5rem] cursor-pointer hover:text-gray-900 transition-colors`}>
          Découvrez nos engagements
        </p>
      </div>
    </main>
  );
}
