"use client";
import { useState } from 'react';
// 🚨 UTILISATION DU CHEMIN FOURNI : Assurez-vous que c'est le bon chemin relatif !
import Button from '../component/button'; 

// Options de filtre statiques PRODUITS / STYLES
const FILTER_OPTIONS = ['PRODUITS', 'STYLES'];

export default function FilterToggle() {
  // État local pour savoir quel onglet est actif
  const [activeFilter, setActiveFilter] = useState(FILTER_OPTIONS[0]);

  // Fonction pour gérer la bascule
  const handleToggle = (filterName) => {
    setActiveFilter(filterName);
    console.log("Filtre actif:", filterName);
  };

  return (
    // Conteneur général : Coins arrondis (8px), Flexbox.
    // NOTE: Le fond gris et l'ombre sont maintenant appliqués aux DIV internes (ou au bouton actif)
    <div className="rounded-lg pt-2 pb-2 pr-2 pl-2  flex max-w-xs mx-auto font-sans bg-gray-300/50 shadow-md">
      
      {FILTER_OPTIONS.map((filter) => {
        const isActive = activeFilter === filter;
        
        // Classes pour le style du conteneur (fond blanc, ombre)
        const containerClasses = isActive
          // Onglet actif : Fond blanc, ombre forte.
          ? "bg-white shadow-xl" 
          // Onglet inactif : Fond transparent ou légèrement coloré au survol.
          : "bg-transparent hover:bg-white/50";
          
        // Classes pour le style du texte
        const textClasses = isActive
          ? "text-gray-800 font-bold" 
          : "text-gray-500 font-medium hover:text-gray-700";

        return (
          <div 
            key={filter} 
            // 🚨 Application de l'effet de bascule sur le conteneur DIV
            className={`flex-1 rounded-lg transition-all duration-100 ${containerClasses}`}
          >
            <Button
              onClick={() => handleToggle(filter)}
              // Retrait de tous les styles de fond/ombre du Button lui-même, il est maintenant juste un calque de texte.
              className={`w-full text-base ${textClasses}`}
              // Surcharge du style en ligne du bouton (fond transparent)
              style={
                isActive ? 
                { color: '#565450', backgroundColor: 'transparent' } : 
                { color: '#A0A0A0', backgroundColor: 'transparent' }
              }
            >
              {filter}
            </Button>
          </div>
        );
      })}
    </div>
  );
}