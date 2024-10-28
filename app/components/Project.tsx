import Link from "next/link";

const statuses = {
    Sketchup: 'text-white bg-[#e7242d] ',
    InDesign: 'text-[#ff3366] bg-[#49021f]',
    '': '',
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Project() {

    const openMagazine = () => {
        window.open("/projects/magazine.pdf", "_blank");
    };

    const openSketchup = () => {
        window.open("/projects/portfolio-sketchup.pdf", "_blank");
    }

    const projects = [
        {
            id: 1,
            name: "Création d'un magazine",
            href: openMagazine,
            status: 'InDesign',
            createdBy: 'Leslie Alexander',
            dueDate: 'Création d’un magazine en 2021 dans le cadre d’un projet de classe :',
            buttonText: 'Voir le magazine'
        },
        {
            id: 2,
            name: "Réalisation d'un Pop Up store",
            href: '/video',
            status: '',
            createdBy: 'Leslie Alexander',
            dueDate: "Réalisation en groupe d'un Pop Up store pour la marque The Kooples :",
            buttonText: 'Voir la vidéo'
        },
        {
            id: 3,
            name: 'Modélisations 3D Sketchup',
            href: openSketchup,
            status: 'Sketchup',
            createdBy: 'Courtney Henry',
            dueDate: 'Mes réalisations sur Sketchup au cours des mes expériences professionnelles :',
            buttonText: 'Voir mes réalisations Sketchup'
        },
    ]


    return (
        <section id={"projects"} className={"py-16 grid my-4 max-w-screen-lg mx-auto px-4 md:px-8"}>
            <div>
                <h2 className="text-3xl text-gray-800 font-semibold text-center">
                    MES PROJETS
                </h2>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                {projects.map((project) => (
                    <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm font-medium leading-6 text-gray-900">{project.name}</p>
                                {project.status !== "" && <p
                                    className={classNames(
                                        // @ts-ignore
                                        statuses[project.status],
                                        'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium',
                                    )}
                                >
                                    {project.status}
                                </p>}
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                <p className="whitespace-nowrap">
                                    {project.dueDate}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            {project.id === 2 ? <Link
                                    href={project.href as string}
                                    target={"_blank"}
                                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                                >
                                    View project<span className="sr-only">, {project.name}</span>
                                </Link>
                                : <button
                                    // @ts-ignore
                                    onClick={project.href}
                                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                                >
                                    View project<span className="sr-only">, {project.name}</span>
                                </button>
                            }
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
}
