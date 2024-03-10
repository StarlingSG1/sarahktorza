export default function Discover() {
  const posts = [
    {
      title: "Voyager",
      desc: "J'ai toujours eu un grand intérêt pour le domaine du voyage, une passion que j'ai cultivée grâce à mes opportunités de voyager fréquemment dans divers pays tels que la Thaïlande, New York et l'île Maurice. L'exploration et la découverte ont toujours été des sources d'inspiration pour moi, car elles échappent à la routine, un aspect que je trouve tout aussi captivant que dans le domaine de l'événementiel.",
      img: "/assets/discover/plage.png",
    },
    {
      title: "La photographie",
      desc: "J’aime aussi la photographie, qui est aussi un domaine complémentaire à l’événementiel mais aussi au voyage qui me permet d’allier deux de mes passion. La photo permet d’immortaliser et de garder en mémoire et graver à jamais des souvenir ou des moment qu’on ne revivra peut être jamais comme un événement qui est un moment unique et magique",
      img: "/assets/discover/photo.png",
    },
    {
      title: "La danse",
      desc: "Pendant de nombreuses années de ma jeunesse, j'ai consacré une part significative de mon temps à la pratique de la danse, notamment dans des styles tels que le moderne jazz, le street jazz et l'initiation à la danse classique. Ces activités m'ont offert l'opportunité à plusieurs reprises de participer à des représentations sur scène, tout en m'impliquant également en coulisses pour contribuer à la préparation des spectacles.",
      img: "/assets/discover/dance.png",
    },
  ];

  return (
    <section
      id="decouvrir"
      className="py-16  my-4 mx-auto px-4 max-w-screen-xl md:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 font-semibold uppercase">MES PASSIONS</h2>
        <p className="mt-3 text-gray-500">
          Découvrez mes passions et mes centres d&apos;intérêts
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <div>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-64 rounded-t-md object-cover"
              />
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
