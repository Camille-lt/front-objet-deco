"use client";
import React from 'react';
import Link from 'next/link';

/**
 * Composant de carte produit.
 * 🚨 CORRECTION : On s'assure que l'ID existe avant de générer le lien.
 */
export default function ProductCard({ product, produit }) {
  
  // Supporte les deux noms de props (product ou produit) pour éviter les erreurs "undefined"
  const p = product || produit;

  if (!p) return null; 
    
  // Extraction des données. 🚨 Vérifiez que votre colonne en BDD s'appelle bien 'id'
  const { nom, image_url, description, prix, style_nom, categorie_nom, id } = p; 
  
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(prix || 0);

  // Si l'ID est manquant, on ne rend pas le lien pour éviter de casser la page produit
  if (!id) {
    console.warn(`Le produit "${nom}" n'a pas d'ID valide.`, p);
    return null;
  }

  return (
    <Link 
        href={`/produit/${id}`} 
        className="block max-w-xs  overflow-hidden  bg-white transform transition-transform duration-300 hover: font-sans group"
    >
      {/* Image du produit */}
      <div className="w-full h-64 overflow-hidden relative"> 
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover" 
          src={image_url || "https://placehold.co/400x500?text=Mobilier"} 
          alt={nom} 
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="text-white font-bold text-xs uppercase tracking-widest border border-white p-2">Voir le détail</span>
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-4">
        <h3 className="font-extrabold text-lg mb-1 uppercase text-gray-800 truncate">
          {nom}
        </h3>
        <p className="text-gray-500 text-xs font-light line-clamp-2 h-8">
          {description}
        </p>
        <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-[#565450]">
              {formattedPrice}
            </p>
        </div>
      </div>
    </Link> 
  );
}