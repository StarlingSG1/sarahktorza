"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Frise from "./components/Frise";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    // Function to check if a section is in the viewport
    const isSectionInView = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // Function to handle scroll events
    const handleScroll = () => {
      if (isSectionInView("presentation")) {
        setActiveTab(1);
      } else if (isSectionInView("formations")) {
        setActiveTab(2);
      } else if (isSectionInView("decouvrir")) {
        setActiveTab(3);
      } else if (isSectionInView("competences")) {
        setActiveTab(4);
      } else if (isSectionInView("experiences")) {
        setActiveTab(5);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    document.addEventListener("DOMContentLoaded", function () {
      const links = document.querySelectorAll("a[href^='#']");
  
      links.forEach((link: any) => {
        link.addEventListener("click", (e: any) => {
          e.preventDefault();
  
          const targetId = link.getAttribute("href").substring(1); // Get the target section's ID
          const targetSection = document.getElementById(targetId);
  
          if (targetSection) {
            const offset = 50; // Adjust the offset as needed
  
            // Calculate the scroll position
            const scrollPosition =
              targetSection.getBoundingClientRect().top + window.scrollY + offset;
  
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth",
            });
          }
        });
      });
    });
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Header active={activeTab} />
      <Hero />
      <Frise />
      <Discover />
      <Skills />
      <Experiences />
    </>
  );
}
