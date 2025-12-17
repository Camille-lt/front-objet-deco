"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Composant pour la page Panier
export default function PanierPage() {
    // État pour stocker les données du panier { panier: [], total: 0 }
    const [panierData, setPanierData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiError, setApiError] = useState(null); // Pour afficher les erreurs de suppression

    // Fonction pour formater le prix en EUR
    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        }).format(price);
    };

    // Fonction de récupération du contenu du panier (rendu réutilisable)
    const fetchPanier = useCallback(async () => {
        setLoading(true);
        setApiError(null);
        try {
            // 🚨 Appel à la route GET /api/panier (définie dans panierRoutes.js)
            const response = await fetch('http://localhost:4000/api/panier');
            
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du panier.");
            }

            const data = await response.json();
            setPanierData(data); // data contient { panier: [...], total: X }

        } catch (err) {
            setError(err.message);
            console.error("Erreur Fetch Panier:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    // 1. Hook pour le chargement initial
    useEffect(() => {
        fetchPanier();
    }, [fetchPanier]);
    
    // 2. Fonction de suppression d'article
    const handleDeleteItem = async (panier_ligne_id) => {
        setApiError(null);
        try {
            // Requête DELETE vers l'API Express pour supprimer l'article
            const response = await fetch(`http://localhost:4000/api/panier/delete/${panier_ligne_id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                 const data = await response.json();
                 throw new Error(data.error || "Impossible de supprimer l'article.");
            }
            
            // Re-fetch des données pour mettre à jour l'interface
            await fetchPanier(); 
            
        } catch (error) {
            setApiError(`❌ Erreur: ${error.message}`);
            setTimeout(() => setApiError(null), 5000);
        }
    };


    if (loading) return <div className="text-center py-20 font-sans text-gray-600">Chargement du panier...</div>;
    if (error) return <div className="text-center py-20 font-sans text-red-500">Erreur de connexion : {error}</div>;

    const { panier, total } = panierData;

    // 3. Rendu si le panier est vide
    if (!panier || panier.length === 0) {
        return (
            <main className="min-h-screen font-sans bg-[#F6F6F6] flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-extrabold text-[#565450] mb-4">Votre Panier est vide</h1>
                <p className="text-gray-600 mb-8">Commencez vos achats dès maintenant.</p>
                <Link href="/catalogue" className="bg-[#565450] text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-700 transition-colors">
                    VOIR LE CATALOGUE
                </Link>
            </main>
        );
    }

    // 4. Rendu du panier (Articles + Récapitulatif)
    return (
        <main className="min-h-screen font-sans bg-[#F6F6F6] p-8">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-extrabold text-[#565450] mb-8 uppercase">Votre Panier</h1>
                
                {apiError && (
                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6" role="alert">
                        {apiError}
                     </div>
                )}


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Colonne 1 & 2: Liste des Articles (2/3 de la largeur) */}
                    <div className="lg:col-span-2 space-y-4">
                        {panier.map((item) => (
                            <div 
                                // Utilisez l'ID de la ligne du panier comme clé unique
                                key={item.panier_id} 
                                className="flex bg-white rounded-lg shadow-md overflow-hidden p-4 items-center space-x-4 border border-gray-100"
                            >
                                {/* Image du produit */}
                                <img
                                    src={item.image_url}
                                    alt={item.nom}
                                    className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/A0A0A0/FFFFFF?text=Image"; }}
                                />
                                
                                {/* Détails du produit */}
                                <div className="flex-grow">
                                    {/* Lien vers la page produit détaillée */}
                                    <Link href={`/produit/${item.produit_id}`} className="font-semibold text-lg text-gray-800 hover:text-[#E4B969] transition-colors">{item.nom}</Link>
                                    <p className="text-sm text-gray-600">Quantité: {item.quantite}</p>
                                </div>
                                
                                {/* Prix et Suppression */}
                                <div className="text-right flex flex-col items-end space-y-2">
                                    <p className="font-bold text-lg text-[#565450]">{formatPrice(item.prix * item.quantite)}</p>
                                    {/* 🚨 CORRECTION : Ajout de la fonction onClick pour la suppression */}
                                    <button 
                                        onClick={() => handleDeleteItem(item.panier_id)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Colonne 3: Récapitulatif de Commande (1/3 de la largeur) */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-xl border border-gray-100 h-fit">
                        <h2 className="text-xl font-bold mb-4 border-b pb-3 text-gray-800 uppercase">Récapitulatif</h2>
                        
                        {/* Sous-total */}
                        <div className="flex justify-between mb-2">
                            <span>Sous-total articles:</span>
                            <span className="font-medium">{formatPrice(total)}</span>
                        </div>
                        
                        {/* Frais de livraison (statique) */}
                        <div className="flex justify-between mb-4 border-b pb-3">
                            <span>Frais de livraison:</span>
                            <span className="font-medium">Gratuits</span>
                        </div>

                        {/* Total Final */}
                        <div className="flex justify-between text-xl font-extrabold mb-6">
                            <span>Total à payer:</span>
                            <span className="text-[#565450]">{formatPrice(total)}</span>
                        </div>

                        {/* Bouton de Validation / Paiement */}
                        <button
                            className="w-full bg-[#E4B969] text-white font-extrabold py-3 rounded-md shadow-md hover:bg-yellow-700 transition-colors uppercase"
                        >
                            VALIDER ET PAYER
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}