export default function Discover() {
  const posts = [
    {
      title: "Voyager",
      desc: "Tout comme le monde du voyage que j’apprécie car j’ai toujours eu la chance de pouvoir beaucoup voyager à travers divers pays, la Thaïlande, New York ou bien l’ile Maurice,  découvrir est quelque choses qui m’anime, me plait et ne construit pas de routine tout comme dans l’évènementiel !   ",
      img: "/assets/discover/plage.png",
      href: "#",
    },
    {
      title: "La photographie",
      desc: "J’aime aussi la photographie, qui est aussi un domaine complémentaire à l’événementiel mais aussi au voyage qui me permet d’allier deux de mes passion. La photo permet d’immortaliser et de garder en mémoire et graver à jamais des souvenir ou des moment qu’on ne revivra peut être jamais comme un événement qui est un moment unique et magique",
      img: "/assets/discover/photo.png",
      href: "#",
    },
    {
      title: "La danse",
      desc: "J’aime aussi la photographie, qui est aussi un domaine complémentaire à l’événementiel mais aussi au voyage qui me permet d’allier deux de mes passion. La photo permet d’immortaliser et de garder en mémoire et graver à jamais des souvenir ou des moment qu’on ne revivra peut être jamais comme un événement qui est un moment unique et magique",
      img: "/assets/discover/dance.png",
      href: "#",
    },
  ];

  return (
    <section
      id="decouvrir"
      className="py-16  my-4 mx-auto px-4 max-w-screen-xl md:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 font-semibold">ME DÉCOUVRIR</h2>
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
            <a href={items.href}>
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
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
