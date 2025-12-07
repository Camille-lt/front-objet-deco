"use client";
import AOS from 'aos';


export default function ProductCard({ produit }) {
  return (
    <div
      className="
        flex flex-col bg-white overflow-visible
        hover:shadow-lg transition-shadow duration-200
        group
      " 
      data-aos="fade-up"
    >
      {/* Image */}
      <div className="w-full h-[200px] overflow-hidden relative">
        <img
          src={produit.image_url}
          alt={produit.nom}
          className="w-full h-full object-cover"
        />

        {/* Bouton Hover */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            bg-black/60 text-white text-center
            py-2 text-sm font-semibold
            translate-y-full group-hover:translate-y-0
            transition-all duration-300
          "
        >
          Ajouter au panier
        </div>
      </div>

      {/* Texte */}
      <div className="p-3 flex flex-col justify-between">
        <h3 className="text-lg font-extrabold truncate">{produit.nom}</h3>
        <p className="text-gray-500 text-xs line-clamp-2 h-8">
          {produit.description}
        </p>
        <p className="text-black font-bold text-sm pt-1.5">
          {produit.prix} €
        </p>
      </div>
    </div>
  );
}
