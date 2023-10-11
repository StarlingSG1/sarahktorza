"use client";



import Frise from "../components/Frise";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Project from "../components/Project";
import Benevole from "../components/Benevole";

export default function Video() {

    return (
        <div className={"w-screen h-screen flex px-4 items-center justify-center"}>
            <a
                href="/#projects"
                className="px-7 absolute top-4 left-4 py-3 bg-black text-white text-center rounded-md block sm:w-auto"
            >
                Retour
            </a>
            <video className={"aspect-[9/16] max-h-[75%] object-cover"} autoPlay loop muted>
                <source src={"/popup.MOV"} type={"video/mp4"}/>
            </video>

        </div>
    );
}
