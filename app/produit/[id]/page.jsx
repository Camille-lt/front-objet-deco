import React from 'react';
import { notFound } from 'next/navigation';
// L'importation du composant client pour le rendu final
import ProductDetailClient from './ProductDetailClient'; 

/**
 * Fonction pour récupérer un produit unique depuis l'API Express
 * @param {string} id - L'ID du produit à récupérer depuis l'URL
 */
async function fetchProduct(id) {
    // Sécurité : évite d'appeler l'API si l'ID est invalide ou "undefined"
    if (!id || id === 'undefined') {
        console.error("ID de produit non défini lors du fetch.");
        return null;
    }

    try {
        // Appel à l'API Express (Port 4000)
        const res = await fetch(`http://localhost:4000/api/produits/${id}`, {
            // On désactive le cache pour le développement pour voir les changements en BDD
            cache: 'no-store'
        });
        
        if (res.status === 404) {
            return null; // Produit non trouvé en base
        }

        if (!res.ok) {
            // En cas d'erreur serveur (500, etc.), logguer et retourner null
            console.error(`Erreur API lors du fetch du produit ${id}: ${res.status}`);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error(`Erreur réseau lors de la récupération du produit ${id}:`, error.message);
        return null;
    }
}

/**
 * Composant principal de la Page Produit Détaillée (Server Component)
 * 🚨 IMPORTANT : Dans Next.js 15, 'params' est une Promise.
 */
export default async function ProductDetailPage({ params }) {
    // 🚨 Correction : On doit attendre (await) les paramètres avant de les utiliser
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    // Récupération des données réelles du produit
    const product = await fetchProduct(id);

    // Si le produit n'existe pas ou si l'ID était "undefined"
    if (!product) {
        return notFound();
    }
    
    // Passe les données réelles au Client Component pour l'affichage (ProductHeader, ProductCTA...)
    return (
        <ProductDetailClient product={product} />
    );
}