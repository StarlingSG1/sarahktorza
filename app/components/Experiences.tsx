export default function Experiences() {
  const jobs = [
    {
      title: "Assistante administrative et commerciale",
      business: "Millenium",
      desc: "Réalisation de devis, suivi logistique des événements.",
      date: "Avril 2023 - Juillet 2023 - 4 mois",
      type: "Alternance",
      logo: "/assets/experiences/millenium.svg",
      location: "Igny, 91430",
    },
    {
      title: "Cheffe de projet événementiel",
      business: "Maison de la barbe à papa",
      desc: "Organisation des événements et suivi avec les clients, logistique de l’événement.",
      date: "Novembre 2022 - Janvier 2023 - 3 mois",
      type: "Alternance",
      logo: "/assets/experiences/barbe-a-papa.png",
      location: "Paris, 75015",
    },
    {
      title: "Chargée de projet événementiel",
      business: "ADBU",
      desc: "Organisation du congrès annuel de l'association et gestion des inscriptions et de la facturation, recherche de prestataire et demande de devis.",
      date: "Mars 2022 - Juillet 2022 - 5 mois",
      type: "Stage",
      logo: "/assets/experiences/adbu.jpeg",
      location: "Orsay, 91400",
    },
    {
      title: "Assistante évènementiel",
      business: "Office du tourisme de la Toussuire",
      desc: "Organisation du festival du rire et du concert de Benjamin Biolay",
      date: "Mai 2021 - Juillet 2021 - 3 mois",
      type: "Stage",
      logo: "/assets/experiences/la-toussuire.png",
      location: "La Toussuire, 73300",
    },
    {
      title: "Stagiaire",
      business: "Agence RJS",
      desc: "Recherche et prise de contact avec des prestataires, benchmark pour un podcast",
      date: "Juin 2020 - 5 semaines",
      type: "Stage",
      logo: "/assets/experiences/rjs.png",
      location: "Igny, 91430",
    },
    {
      title: "Stagiaire",
      business: "Real Expert",
      desc: "Gestion des réseaux sociaux, modélisation 3D sur Google Sketchup.",
      date: "Mai 2020 - 5 semaines",
      type: "Stage",
      logo: "/assets/experiences/real-expert.png",
      location: "Massy, 91300",
    },
  ];

  return (
    <section
      id="experiences"
      className="py-16  my-4 max-w-screen-lg mx-auto px-4 md:px-8"
    >
      <div>
        <h2 className="text-3xl text-gray-800 font-semibold text-center">
          MES EXPÉRIENCES
        </h2>
      </div>
      <ul className="mt-12 space-y-6">
        {jobs.map((item, idx) => (
          <li
            key={idx}
            className="p-5 bg-white rounded-md shadow-sm relative"
          >
            <img src={item.logo} alt={item.title} className={"absolute bottom-5 right-5 h-16 aspect-square rounded-md object-contain"}/>
            <div>
              <div>
                <div className="justify-between gap-2 sm:flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-primary">
                      {item.title} - {item.business}
                    </h3>
                    <p className="text-gray-500 mt-2 pr-2">{item.desc}</p>
                  </div>
                  <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                  <span className="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    {item.type}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
