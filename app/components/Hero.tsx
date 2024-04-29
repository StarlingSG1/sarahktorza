export default function Hero() {

    const openCV = () => {
        window.open("/sarah-ktorza-cv.pdf", "_blank");
    };

    return (
        <section
            id="presentation"
            className="py-20  my-4 mx-auto max-w-screen-xl  px-4 items-center lg:flex md:px-8"
        >
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h1 className="text-black font-bold text-4xl xl:text-5xl">
                    Sarah KTORZA <br/>
                    <span className="text-primary text-4xl">
            Cheffe de projet événementielle
          </span>
                </h1>
                <p className="text-black max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Actuellement en <strong>Master Événementiel et Relations Publiques</strong> à
                    <strong> l&apos;ISEFAC</strong> en <strong>alternance</strong>, je suis à la recherche d&apos;une
                    opportunité
                    en <strong className={""}>CDI</strong> en tant que <strong className={""}>cheffe de projet
                    événementiel</strong>.
                </p>
                <div
                    className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <button
                        onClick={openCV}
                        className="px-7 py-3 w-full bg-primary text-white text-center rounded-md shadow-md block sm:w-auto"
                    >
                        Mon CV
                    </button>
                    <a
                        href="#formations"
                            className="px-7 py-3 w-full bg-black text-white text-center rounded-md block sm:w-auto"
                    >
                        Me découvrir
                    </a>
                </div>
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img
                    src="/assets/hero-portrait.png"
                    className="w-full mx-auto sm:w-2/3 bg-primary rounded-full aspect-square object-cover object-top  lg:max-w-full"
                    alt="Sarah Ktorza"
                />
            </div>
        </section>
    );
}
