"use client"
export default function Home() {
  return (
    <main className="min-h-screen">

      {/* 🟫 Section banderole */}
      <div className="w-full overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bannière"
          className="w-full h-[60vh] object-cover object-[center_60%]"
        />

        {/* Titre par-dessus l'image */}
        <h1 className="font-heading font-light text-white text-[7rem] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full m-0 tracking-[0.2em]">
          HOME MAKING
        </h1>
      </div>

      {/* Section texte et image inversée */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center p-20 m-10">
        <div>
          <h2 className="text-[3rem] mb-2 font-heading text-taupe">NOS VALEURS</h2>
          {/* Image carrée rognée */}
          <div className="w-full h-[60vh] overflow-hidden rounded-lg">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/17/04/56/tv-cabinet-6185022_1280.jpg"
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
        <div className="font-body text-[1rem] text-taupe space-y-4">
          <p>Chez nous, le design d'intérieur n'est pas seulement une question d'esthétique : <br />
            c'est un art de vivre.
          </p>
          <p>Nous avons créé ce site pour guider chacun dans la compréhension des styles qui façonnent les intérieurs les plus inspirants. <br /> À travers des conseils clairs et des clés de design accessibles, nous voulons vous aider à affiner votre regard, à structurer vos idées et à composer un espace qui reflète votre identité avec élégance.
          </p>
          <p>
            Nous croyons que maîtriser les codes du design ne doit pas être réservé aux professionnels. Sur notre siteweb, chacun peut apprendre à jouer avec les volumes, les textures, la lumière et les styles pour créer un intérieur harmonieux et sophistiqué.
          </p>
          <p>
            Un intérieur réussi n'est pas celui qui suit une tendance, mais celui qui vous ressemble. <br /> Nous encourageons autant la pureté d'un style unique que l'art de les mélanger subtilement : pièces modernes, éléments vintage, touches minimalistes ou influences plus chaleureuses…
          </p>
          <p>
            L'harmonie naît de l'équilibre que vous choisissez.
          </p>
        </div>
      </div>

      <div class="bg-[#8A8781] pl-30 pr-30 pb-20 pt-20">
        <h2 className="text-[2rem] mb-2 font-heading text-white pb-6">NOS VALEURS</h2>
        <p className="font-body text-[1rem] text-white pb-4">
          Il n’est pas toujours simple de trouver le style de décoration qui vous correspond vraiment. Nous vous aidons à découvrir les différents <br />
          univers de design et à apprendre comment les intégrer facilement dans votre intérieur.
        </p>
        <p className="font-body text-[1rem] text-white">
          Vous pouvez bien sûr vous inspirer d’un seul style, mais il est tout aussi possible de piocher dans plusieurs tendances pour créer un espace unique. <br />
          L’essentiel est de construire un intérieur harmonieux, qui reflète votre personnalité et dans lequel vous vous sentez
          pleinement chez vous.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center p-20 m-10">
        <div class="text-center">  <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="aspect-square w-3/4 mx-auto object-cover" alt="" />
          <h3 className="text-[2rem] mb-2 font-heading font-semibold text-taupe pt-6">SCANDINAV</h3>
        </div>
        <div class="text-center">  <img src="https://images.unsplash.com/photo-1583719445062-62d0d98c4d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="aspect-square w-3/4 mx-auto object-cover" alt="" />
          <h3 className="text-[2rem] mb-2 font-heading font-semibold text-taupe pt-6">INDUSTRIEL</h3>
        </div>
        <div class="text-center">  <img src="https://images.unsplash.com/photo-1717416700581-8948dcca7d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="aspect-square w-3/4 mx-auto object-cover" alt="" />
          <h3 className="text-[2rem] mb-2 font-heading font-semibold text-taupe pt-6">BOHEME CHIC</h3>
        </div>
      </div>

    </main>
  );
}
