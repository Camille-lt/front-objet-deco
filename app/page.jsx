"use client"
import Button from "../component/button";
import FilterToggle from '../component/FilterToggle';

// 🚨 La page est renommée HomePage pour clarifier qu'elle est la page racine
export default function HomePage() {
  
  // Utilisation de classes partagées pour la typographie
  const goldText = 'text-[#E4B969]';
  const darkText = 'text-[#272726]'; 
  const taupeText = 'text-[#8A8781]';
  const titleClasses = 'font-extrabold text-[2.5rem] text-center tracking-widest mb-4 font-sans';
  const subTitleClasses = 'underline decoration-1 font-bold text-[1.5rem] text-center tracking-wider font-sans';

  return (
    <main className="min-h-screen font-sans">
        
        {/* 🚨 BANIÈRE 1 : Style et ambiance */}
        <div className="w-full overflow-hidden relative">
            <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bannière de salon"
            className="w-full h-[90vh] object-cover object-[center_65%] "
            />
            {/* Couche de superposition noire (filtre) */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            {/* Contenu centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                {/* Titre : font-heading retiré, font-sans utilisé */}
                <h1 className={` ${goldText} ${titleClasses}`}>
                TROUVEZ VOTRE STYLE ET VOS AMBIANCES
                </h1>
                {/* Paragraphe : font-heading retiré, font-sans utilisé */}
                <p className={` ${goldText} ${subTitleClasses}`}>
                    POUR UN CHEZ VOUS QUI VOUS RESSEMBLE
                </p>
            </div>
        </div>

        {/* 🚨 BANIÈRE 2 : Promotion saisonnière */}
        <div className="w-full overflow-hidden relative pt-10">
            <img
            src="https://images.unsplash.com/photo-1662781256805-3ac89ffbeae0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bannière de promotion"
            className="w-full h-[90vh] object-cover object-[center_65%] "
            />
            {/* 🚨 CORRECTION : Ajout de l'opacité au filtre pour qu'il soit visible */}
            <div className="absolute inset-0 bg-black opacity-15"></div> 

            {/* Contenu centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
                {/* Titre : font-heading retiré, font-sans utilisé */}
                <h1 className={` ${goldText} ${titleClasses}`}>
                NOTRE SELECTION JUSQU'À -50% PAR STYLES
                </h1>
                {/* Paragraphe : font-heading retiré, font-sans utilisé */}
                <p className={` ${goldText} ${subTitleClasses}`}>
                    DÉCOUVREZ NOS MOBILIERS ICI
                </p>
            </div>
        </div>

        {/* 🚨 Sélecteur de filtre (ProductGridController) */}
        <div className="flex justify-center py-16">
            <FilterToggle />
        </div>

        {/* Bloc d'inspiration/storytelling */}
        <div className="text-center p-10">
            <p className={`underline decoration-1 ${taupeText} text-[1.5rem] pb-10 cursor-pointer hover:text-gray-900 transition-colors`}>
                Voir tous nos mobiliers
            </p>
            {/* Bloc de texte des valeurs */}
            <p className={`font-bold ${darkText} text-[1.5rem] font-sans leading-relaxed max-w-4xl mx-auto`}>
                HOME MAKING croit qu’un intérieur réussi se construit à votre image, petit à petit, 
                à partir des pièces que vous choisissez et des styles que vous aimez. 
                Chaque meuble, chaque objet peut se mêler à d’autres influences, 
                pour composer un espace qui vous ressemble vraiment.
            </p>
        </div>

        {/* Bloc d'engagement */}
        <div className="text-center p-10 pb-20">
            <p className={`underline decoration-1 ${taupeText} text-[1.5rem] cursor-pointer hover:text-gray-900 transition-colors`}>
                Découvrez nos engagements
            </p>
        </div>
    </main>
  );
}