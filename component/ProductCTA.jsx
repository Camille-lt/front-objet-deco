"use client";
import React, { useState } from 'react';

// Composant pour le bloc de contrôle Quantité et Ajout au panier
export default function ProductCTA({ product }) {
    // 🚨 L'ID du produit est essentiel pour l'API
    const productId = product?.id; 
    const [quantity, setQuantity] = useState(1);
    const [statusMessage, setStatusMessage] = useState('');
    
    // Fonction asynchrone pour envoyer l'article au backend
    const handleAddToCart = async () => {
        if (!productId) {
            setStatusMessage("Erreur: ID produit manquant.");
            return;
        }

        setStatusMessage("Ajout en cours...");
        
        try {
            const response = await fetch('http://localhost:4000/api/panier/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    productId: productId, 
                    quantity: quantity
                }),
            });
            
            const data = await response.json();

            if (response.ok) {
                // Succès de l'ajout (le backend gère l'incrémentation ON CONFLICT)
                setStatusMessage(`✅ ${quantity} article(s) ajouté(s) au panier !`);
            } else {
                // Erreur serveur
                setStatusMessage(`❌ Erreur: ${data.error || "Problème API lors de l'ajout."}`);
            }
            
        } catch (error) {
            setStatusMessage(`❌ Erreur réseau: Impossible de joindre le serveur.`);
            console.error("Erreur Fetch Panier:", error);
        }
        
        // Cacher le message de statut après 5 secondes
        setTimeout(() => setStatusMessage(''), 5000);
    };

    return (
        // BLOC 2 : SECTION ACHAT / CTA (Fond Blanc)
        <div className=""> 
            
            {/* Ligne principale CTA */}
            <div className="flex items-center space-x-4"> 
                
                {/* Contrôle Quantité */}
                <div className="flex items-center border border-gray-400 bg-white rounded-md overflow-hidden">
                    <button 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                        className="px-3 py-2 text-lg hover:bg-gray-100 transition-colors"
                        aria-label="Diminuer la quantité"
                    >
                        -
                    </button>
                    <span className="p-2 font-medium w-8 text-center border-gray-500">{quantity}</span>
                    <button 
                        onClick={() => setQuantity(q => q + 1)} 
                        className="px-3 py-2 text-lg hover:bg-gray-100 transition-colors"
                        aria-label="Augmenter la quantité"
                    >
                        +
                    </button>
                </div> 
                
                {/* Bouton Panier (LIAISON AVEC L'API) */}
                <button 
                    onClick={handleAddToCart}
                    className="grow bg-[#565450] text-white font-extrabold text-lg p-3 shadow-md hover:bg-gray-700 transition-colors"
                    disabled={!productId} // Désactivé si pas d'ID produit
                >
                    AJOUTER AU PANIER
                </button>
                
                {/* Bouton Favoris */}
                <button 
                    className="p-3 border border-gray-400 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    aria-label="Ajouter aux favoris"
                >
                    🤍
                </button>
            </div>

            {/* Message de statut (Succès / Erreur) */}
            {statusMessage && (
                <p className={`mt-4 text-sm font-medium ${statusMessage.startsWith('❌') ? 'text-red-500' : 'text-green-600'}`}>
                    {statusMessage}
                </p>
            )}
        </div>
    );
}