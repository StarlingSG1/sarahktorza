"use client";
import {useEffect, useState} from "react";

export default function Frise() {
    const [showDiv, setShowDiv] = useState<boolean>(false);

    useEffect(() => {
        setShowDiv(true);
    }, []);

    const data = [
        {
            img: "",
            year: "2019",
            title: "Baccalauréat STMG",
            school: "Groupe Scolaire Sophie Barat",
            logo: "/assets/formations/sophie-barat.png",
            description:
                "J’ai obtenu mon Bac STMG option mercatique au lycée Sophie Barat à Châtenay-Malabry dans les Hauts-de-Seine (92).",
            style: `transition-all duration-500 sm:w-auto w-[350px] opacity-${
                showDiv ? "100" : "0"
            }`,
        },
        {
            img: "",
            year: "2022",
            title: "Bachelor Chef de projet évènementiel",
            school: "Isefac Bachelor",
            logo: "/assets/formations/isefac.png",
            description:
                "En 2019, je rentre à l’Isefac. J’effectue mes 3 premières années d’études supérieures, qui me permettent de découvrir l’évènementiel et également de réaliser des projets.",
            style: `transition-all duration-500 sm:w-auto w-[350px] delay-500 opacity-${
                showDiv ? "100" : "0"
            }`,
        },
        {
            img: "",
            year: "2023 - 2024",
            title: "MBA évènementiel et relations publiques",
            school: "Isefac",
            logo: "/assets/formations/isefac.png",
            description:
            "Je poursuis par un MBA  en alternance toujours à Isefac, afin d’allier études et entré dans le vie active professionnel.",
            style: `transition-all duration-500 sm:w-auto w-[350px] delay-1000 opacity-${
                showDiv ? "100" : "0"
            }`,
        },
    ];

    return (
        <div
            className="py-16  my-4"
            id="formations"
        >
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl text-gray-800 font-semibold text-center">
                    MES FORMATIONS
                </h2>
                <div
                    className={`transition-all duration-[1500ms] ease-in-out ${
                        showDiv ? "w-screen" : "w-0"
                    } absolute left-0 translate-y-[175%] h-1.5 bg-primary mt-16`}
                ></div>
                <div className="w-full overflow-x-auto overflow-y-hidden">
                    <div className="w-[1000px] sm:w-full flex sm:grid sm:grid-cols-3 gap-6 mt-16">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={item.style}
                            >
                                <div className="rounded-full w-7 h-7 bg-primary mb-5"></div>
                                <div className={"flex gap-4 items-end justify-between"}>
                                <h3 className="text-2xl font-black">{item.year} <span
                                    className={"text-sm text-gray-800 font-normal italic"}>{item.school}</span></h3>
                                </div>
                                <div className={"h-1.5 w-8 mt-2 bg-primary rounded-full"}></div>
                                <p className="font-medium text-lg my-2">{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
