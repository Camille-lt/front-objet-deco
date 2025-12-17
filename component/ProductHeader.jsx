import React from 'react';

// Composant pour le bloc Titre, Prix, et Descriptions courtes
export default function ProductHeader({ product }) {
    
    // Formatage du prix pour l'affichage
    const formattedPrice = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(product.prix);

    const darkText = "text-[#272726]";
    const styleDetailClass = "text-gray-500 text-xs";

    return (
        // 🚨 BLOC 1 : TITRE, PRIX, DESCRIPTION COURTE (Fond Blanc)
        <div className="bg-white p-6 border border-gray-100"> 
            
            {/* Titre et Description */}
            <h1 className={`font-extrabold text-4xl uppercase ${darkText}`}>{product.nom}</h1>
            <p className="text-gray-600 text-sm mt-3 mb-10">{product.description}</p>
            
            {/* Prix */}
            <p className="text-2xl font-bold text-[#565450] mt-3">
                {formattedPrice}
            </p>
            
            {/* Détails du style/catégorie joints par l'API */}
            <div className="mt-2 pt-2 border-t border-gray-200 mb-5">
                <p className={styleDetailClass}>Style: {product.style_nom}</p>
                <p className={styleDetailClass}>Catégorie: {product.categorie_nom}</p>
            </div>
        </div>
    );
}