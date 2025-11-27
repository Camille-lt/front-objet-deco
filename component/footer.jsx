"use client"
import Link from 'next/link';
import { Truck, MessageCircleMore, UserRound, MailOpen, WalletCards  } from 'lucide-react';

export default function Footer() {
    // Couleurs basées sur le thème
    const bgColor = 'bg-[#F6F6F6]';
    const textColor = 'text-black'; 
    const linkClasses = `block text-sm hover:underline font-normal`;

    // Structure du bouton Newsletter
    const newsletterButtonClasses = "bg-gray-800 text-white font-bold p-3 rounded-sm hover:bg-gray-700 transition-colors text-sm w-full";

    return (
        <footer className={`w-full ${bgColor} ${textColor} font-sans`}>
            
            {/* 1. Section Principale : Liens et Newsletter */}
            <div className="border-t border-gray-300 pl-10 pr-10  mx-auto  py-10">
                {/* Structure de la grille 5 colonnes (1-1-1-2) pour un alignement parfait */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    
                    {/* Colonne 1: LIVRAISON & PAIEMENT (lg:col-span-1) */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="mb-1">
                          <Truck className="h-6 w-6" /> 
                         </div>
                        <h4 className="font-extrabold text-sm mb-3 uppercase">
                         LIVRAISON RAPIDE
                        </h4>
                        <p className="text-sm">En 3 à 5 jours ouvrables*</p>
                        
                        <h4 className="font-extrabold text-sm pt-4 uppercase mb-2">
                         PAIEMENT SÉCURISÉ
                        </h4>
                            <WalletCards /> 
                        <div className="text-xl pt-1">
                            {/* Icône de carte (simulée) */}
                        </div>
                    </div>

                    {/* Colonne 2: AIDE ET CONTACT (lg:col-span-1) */}
                    <div className="lg:col-span-1 space-y-2">
                        <div className="mb-01">
                        <MessageCircleMore className="h-5 w-5" />
                        </div>
                        <h4 className="font-extrabold text-sm mb-3 uppercase">AIDE ET CONTACT</h4>
                        <Link href="/retours" className={linkClasses}>Retours</Link>
                        <Link href="/contact" className={linkClasses}>Contactez-nous</Link>
                    </div>

                    {/* Colonne 3: VOTRE COMPTE + NOS VALEURS (lg:col-span-1) */}
                    <div className="lg:col-span-1 space-y-2">
                      <div className="mb-1">
                            <UserRound className="h-6 w-6" />
                        </div>
                        <h4 className="font-extrabold text-sm mb-3 uppercase">VOTRE COMPTE</h4>
                        <Link href="/giftcard" className={linkClasses}>Carte Cadeau</Link>
                        <Link href="/signup" className={linkClasses}>S'inscrire</Link>
                        <Link href="/login" className={linkClasses}>Se connecter</Link>
                        
                        {/* Ajout du lien Nos Valeurs sous le compte, comme dans la requête */}
                        <div className="pt-4">
                            <h4 className="font-extrabold text-sm mb-3 uppercase">Nos valeurs</h4>
                            <Link href="/valeurs" className={linkClasses}>Découvrez notre manifeste</Link>
                        </div>
                    </div>

                    {/* Colonne 4/5: NEWSLETTER (lg:col-span-2) */}
                    <div className="lg:col-span-2">
                      <div className="pb-1">
                            <MailOpen className="h-6 w-6" />
                        </div>

                        <h4 className="font-extrabold text-sm mb-4 uppercase">S'abonner à la newsletter</h4>
                        <p className="text-sm mb-4">
                            Inscrivez-vous à notre newsletter, pour rester informé·e 
                            de nos dernières tendances en matières de décoration d'intérieur
                        </p>
                        
                        {/* Formulaire de Newsletter */}
                        <form className="flex flex-col gap-3 max-w-sm">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="p-3 border bg-white border-gray-400 rounded-sm focus:border-gray-800 text-gray-800"
                            />
                            <button 
                                type="submit"
                                className={newsletterButtonClasses}
                            >
                                S'ABONNER MAINTENANT
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* 2. Ligne de Séparation Mentions Légales */}
            <div className="mx-auto px-6 pt-4 border-t border-gray-300">
                <p className="text-xs text-gray-500">Mentions Légales</p>
            </div>

            {/* 3. Section Tout en bas (Copyright) */}
            <div className="bg-[#F6F6F6] p-5 ">
                <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p className="font-bold text-sm text-gray-500 pb-5">HOME MAKING - 2025 © HOME MAKING - By Camille Lebigot</p>

                </div>
            </div>
        </footer>
    );
}