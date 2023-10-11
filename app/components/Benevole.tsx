export default function Benevole() {


    const data = [
        {
            title: "Woof run",
            date: "Septembre 2023",
            desc: "Deux jours de bénévolat sur le premier festival pour chien",
            img: "/assets/benevolat/woofrun.png",
        }, {
            title: "Maddy Keynote",
            date: "Janvier 2020",
            desc: "Conférence qui rassemble entrepreneurs, investisseurs, médias ...",
            img: "/assets/benevolat/maddy.png",
        }, {
            title: "Imagine for Margo",
            date: "Septembre 2017",
            desc: "Association qui mène des actions de sensibilisation et de collecte de fonds afin d’aider la recherche du cancer chez l’enfant",
            img: "/assets/benevolat/margo.png",
        },
    ]

    return (
        <section className={"py-16 my-4 max-w-screen-lg mx-auto px-4 md:px-8"}>
            <div>
                <h2 className="text-3xl text-gray-800 font-semibold text-center">
                    MES ACTIONS BÉNÉVOLES
                </h2>
            </div>
            <div className={"mt-12 grid grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8"}>
                {data.map(({title, date, desc, img}, index) => (
                    <div className={"flex w-full flex-col gap-4 items-center"}>
                        <img className={"w-full bg-[#F7F7F7] object-contain aspect-video"} src={img}></img>
                        <h3 className={"text-xl font-medium text-primary"}>{title}</h3>
                        <p className={"text-gray-500"}>{date}</p>
                        <p className={"text-center"}>{desc}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}