export default function Hero() {
  const navigation = [
    { title: "Customers", path: "#" },
    { title: "Careers", path: "#" },
  ];

  return (
    <section
      id="presentation"
      className="py-20  my-4 mx-auto max-w-screen-xl  px-4 items-center lg:flex md:px-8"
    >
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-black font-bold text-4xl xl:text-5xl">
          Sarah KTORZA <br />
          <span className="text-primary text-4xl">
            Cheffe de projet événementielle
          </span>
        </h1>
        <p className="text-black max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          Je suis actuellement en Master Événementiel et Relations Publiques à
          l&apos;ISEFAC et je suis à la recherche d&apos;une opportunité
          d&apos;alternance dans le domaine de l&apos;événementiel.
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <a
            href="#"
            className="px-7 py-3 w-full bg-primary text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Mon CV
          </a>
          <a
            href="#"
            className="px-7 py-3 w-full bg-black text-white text-center rounded-md block sm:w-auto"
          >
            Me découvrir
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img
          // src="/assets/hero-portrait.png"
          className="w-full mx-auto sm:w-10/12  lg:max-w-full"
          alt="Sarah Ktorza"
        />
      </div>
    </section>
  );
}
