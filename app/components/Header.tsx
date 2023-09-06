"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header({ active }: { active: number }) {
  const [items, setItems] = useState([
    { name: "Présentation", slug: "presentation" },
    { name: "Formations", slug: "formations" },
    { name: "Découvrir", slug: "decouvrir" },
    { name: "Compétences", slug: "competences" },
    { name: "Expériences", slug: "experiences" },
  ]);

  return (
    <div className="w-full h-16 sticky top-0 z-10 bg-white flex items-center justify-between px-6">
      <p className="text-xl font-black tracking-wider">SARAH KTORZA</p>
      <ul className="h-full absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 font-medium">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className={`uppercase ${
                active === index + 1 ? "text-black" : "text-gray-disabled"
              } hover:text-black duration-150 px-2 py-2`}
              href={`/#${item.slug}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full bg-black"></div>
        <div className="w-6 h-6 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}
