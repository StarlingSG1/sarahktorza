export default function Project() {

    const openMagazine = () => {
        window.open("/projects/magazine.pdf", "_blank");
    };


    return (
        <section id={"projects"} className={"py-16 grid my-4 max-w-screen-lg mx-auto px-4 md:px-8"}>
            <div>
                <h2 className="text-3xl text-gray-800 font-semibold text-center">
                    MES PROJETS
                </h2>
            </div>
            <div className={"mt-12 flex flex-col gap-4"}>
                <h3>Création d’un magazine en 2021 dans le cadre d’un projet de classe : <button onClick={openMagazine}
                                                                                  className={"underline text-primary"}>voir
                    le magazine</button></h3>

                <h3>Réalisation en groupe d&apos;un Pop Up store pour la marque The Kooples : <a href={"/video"}
                                                                                                className={"underline text-primary"}>voir la vidéo</a></h3>
            </div>
        </section>
    )
}