/* eslint-disable @next/next/no-img-element */
export default function Skills() {
  const skills = [
    {
      img: "/assets/skills/anglais.svg",
      text: "#FFF",
      bg: "#26458F",
      label: "Anglais B1",
      type: "langue",
    },
    {
      img: "/assets/skills/espagnol.svg",
      text: "#FFF",
      bg: "#F3C926",
      label: "Espagnol B1",
      type: "langue",
    },
    {
      img: "/assets/skills/canva.svg",
      text: "#FFF",
      bg: "#00C4CC",
      label: "Canva",
      type: "skill",
    },
    {
      img: "/assets/skills/sketchup.svg",
      text: "#FFF",
      bg: "#E7242D",
      label: "Sketchup",
      type: "skill",
    },
    {
      img: "/assets/skills/office-365.svg",
      text: "#FFF",
      bg: "#DC3E14",
      label: "Office 365",
      type: "skill",
    },
    {
      img: "/assets/skills/premiere-pro.svg",
      text: "#9999FF",
      bg: "#00005B",
      label: "Premiere Pro",
      type: "skill",
    },
    {
      img: "/assets/skills/photoshop.svg",
      text: "#31A8FF",
      bg: "#001E36",
      label: "Photoshop",
      type: "skill",
    },
    {
      img: "/assets/skills/indesign.svg",
      text: "#FF3366",
      bg: "#49021F",
      label: "InDesign",
      type: "skill",
    },
  ];

  return (
    <div
      id="competences"
      className="py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold text-center">
            MES COMPÉTENCES
          </h2>

          <p className="text-gray-600 mt-3">
            Découvrez les langues et logicels que j&apos;utilise au quotidien
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="flex flex-wrap sm:inline-grid sm:grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <li key={index}>
                <div
                  className={`w-full h-12 gap-4 py-1.5 pl-3 pr-6 rounded min-w-max text-xl font-medium flex items-center my-auto `}
                  style={{
                    backgroundColor: skill.type === "skill" ? skill.bg : "#FFF",
                    border:
                      skill.type === "skill"
                        ? "none"
                        : `2.5px solid ${skill.bg} `,
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                  />
                  <p
                    style={{
                      color: skill.type === "skill" ? skill.text : skill.bg,
                    }}
                  >
                    {skill.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
