"use client";
import { useState, useEffect } from "react";
// 🚨 Assurez-vous que les imports sont corrects
import ProduitsCarousel from '../../../component/produitsCarousel';
import ButtonGhost from '../../../component/ButtonGhost';
import ProductHeader from '../../../component/ProductHeader'; 
import ProductCTA from '../../../component/ProductCTA';     

export default function ProductDetailClient({ product }) {
    
    const darkText = "text-[#272726]";
    const taupeText = "text-[#8A8781]";
    
    // Si la donnée est manquante, afficher un message d'erreur
    if (!product) return <div className="text-center py-20 font-sans text-red-500">Produit non disponible.</div>;

    // --- Logique du Carrousel (Fetch pour les suggestions en bas) ---
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const getRandomProducts = (data, count = 15) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        async function fetchProduits() {
            try {
                // Fetch de tous les produits pour sélection des suggestions
                const res = await fetch(`http://localhost:4000/api/produits`);
                if (!res.ok) throw new Error("Erreur lors de la récupération des produits.");
                const data = await res.json();
                setProduits(getRandomProducts(data, 15));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProduits();
    }, []); 

    // Rendu en cas d'erreur de chargement du carrousel
    if (error) return <p className="text-center mt-10 text-red-500">Erreur : {error}</p>;

    // Rendu du composant
    return (
        <main className="min-h-screen font-sans bg-[#F6F6F6]">
            
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start lg:min-h-[70vh]">

                    {/* 1. Bloc Image (Gauche) */}
                    <div className="w-full relative h-full">
                        <img
                            src={product.image_url} // Utilise la prop 'product' réelle
                            alt={product.nom}
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x600/A0A0A0/FFFFFF?text=Image+Produit"; }}
                        />
                    </div>

                    {/* 2. Bloc Détails (Droite) : ASSEMBLEUR */}
                    <div className="space-y-6">

                        {/* BLOC 1 : EN-TÊTE (ProductHeader) */}
                        <ProductHeader product={product} />

                        {/* BLOC 2 : QUANTITÉ / PANIER (ProductCTA) */}
                        <ProductCTA product={product} />

                        {/* BLOC 3 : SERVICES STATIQUES (Description/Livraison/Retours) */}
                        {/* Ce bloc utilise des classes pour correspondre au style ProductHeader/CTA */}
                        <div className="bg-white p-6 shadow-md border border-gray-100 rounded-lg space-y-3">
                            
                            {/* 1. Description & dimensions */}
                            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-sm transition-colors border-b">
                                <span className="font-medium text-gray-800">Description & dimensions produit</span>
                                <span className="text-xl text-gray-500">›</span>
                            </div>

                            {/* 2. Livraison rapide (Fictif) */}
                            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-sm transition-colors border-b">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-800">🚚 Livraison rapide</span>
                                    <span className="text-xs text-gray-500">sous 3 à 10 jours ouvrés</span>
                                </div>
                                <span className="text-xl text-gray-500">›</span>
                            </div>

                            {/* 3. Retours (Fictif) */}
                            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-sm transition-colors">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-800">🔄 Retours</span>
                                    <span className="text-xs text-gray-500">sous 14 jours</span>
                                </div>
                                <span className="text-xl text-gray-500">›</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bloc du carrousel de suggestions (en bas) */}
            <div className="flex flex-col items-center py-16">
                
                <h2 className={`font-bold ${darkText} text-[1.8rem] font-sans leading-relaxed max-w-4xl mx-auto mb-10`}>
                    COMPLÉTER VOTRE SÉLECTION
                </h2>

                {loading ? (
                    <p className="text-center mt-10">Chargement...</p>
                ) : (
                    // On passe les suggestions au carrousel
                    <ProduitsCarousel produitsProp={produits} /> 
                )}
                
                <ButtonGhost
                    href="/catalogue"
                    className={`${taupeText} text-[1.2rem] font-bold mt-10`}
                >
                    VOIR TOUS NOS MOBILIERS
                </ButtonGhost>
            </div>
            
        </main>
    );
}