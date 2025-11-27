"use client"
import Button from "../component/button";
import FilterToggle from '../component/FilterToggle';

export default function Valeurs() {
  return (
    <main className="min-h-screen">
{/* 🟫 Section banderole */}
<div className="w-full overflow-hidden relative">
    <img
      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Bannière"
      className="w-full h-[90vh] object-cover object-[center_65%] "
    />
    {/* Nouvelle couche de superposition noire */}
    <div className="absolute inset-0 bg-black opacity-40"></div>
    {/* NOUVEAU CONTENEUR pour centrer le TITRE et le PARAGRAPHE ensemble */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Titre : classes de positionnement absolu retirées */}
        <h1 className="font-heading font-bold text-[#E4B969] text-[3rem] text-center tracking-widest mb-4">
          TROUVEZ VOTRE STYLE ET VOS AMBIANCES
        </h1>
        {/* Paragraphe : classes de positionnement absolu retirées */}
        <p className="underline decoration-1 font-heading font-semibold text-[#E4B969] text-[1.5rem] text-center tracking-wider">
            POUR UN CHEZ VOUS QUI VOUS RESSEMBLE
        </p>
    </div>
</div>
{/* 🟫 Section banderole */}
<div className="w-full overflow-hidden relative pt-10">
    <img
      src="https://images.unsplash.com/photo-1662781256805-3ac89ffbeae0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Bannière"
      className="w-full h-[90vh] object-cover object-[center_65%] "
    />
    {/* Nouvelle couche de superposition noire */}
    <div className="absolute inset-0"></div>
    {/* NOUVEAU CONTENEUR pour centrer le TITRE et le PARAGRAPHE ensemble */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Titre : classes de positionnement absolu retirées */}
        <h1 className="font-heading font-bold text-[#E4B969] text-[3rem] text-center tracking-widest  mb-4">
          NOTRE SELECTION JUSQU'À -50% PAR STYLES
        </h1>
        {/* Paragraphe : classes de positionnement absolu retirées */}
        <p className="underline decoration-1 font-heading font-medium text-[#E4B969] text-[1.5rem] text-center tracking-wider">
            DÉCOUVREZ NOS MOBILIERS ICI
        </p>
    </div>
</div>
{/* button filtrage */}
<div className="flex justify-center my-16">
    <FilterToggle />
</div>

<div className="text-center p-10">
  <p className="underline decoration-1 text-[#8A8781] text-[1.5rem] pb-10">
    Voir tous nos mobiliers
  </p>
  <p className="font-heading font-bold text-[#272726] text-[1.5rem] ">
    HOME MAKING croit qu’un intérieur réussi se construit à votre image, petit à petit, <br />
    à partir des pièces que vous choisissez et des styles que vous aimez. <br />
    Chaque meuble, chaque objet peut se mêler à d’autres influences, <br />
    pour composer un espace qui vous ressemble vraiment.
  </p>
</div>
<div className="text-center p-10">
  <p className="underline decoration-1 text-[#8A8781] text-[1.5rem] pb-10">
    Découvrez nos engagements
  </p>
</div>
    </main>
  );
}
