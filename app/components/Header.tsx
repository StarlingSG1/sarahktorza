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
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/sarah-k-evenementiel/"
          target="_blank"
          className="text-black hover:text-primary duration-150"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 19H5V9H8V19ZM19 19H16V13.658C16 12.266 15.504 11.573 14.521 11.573C13.742 11.573 13.248 11.961 13 12.738V19H10C10 19 10.04 10 10 9H12.368L12.551 11H12.613C13.228 10 14.211 9.322 15.559 9.322C16.584 9.322 17.413 9.607 18.046 10.323C18.683 11.04 19 12.002 19 13.353V19Z"
              fill="currentColor"
            />
            <path
              d="M6.50001 8C7.35605 8 8.05001 7.32843 8.05001 6.5C8.05001 5.67157 7.35605 5 6.50001 5C5.64397 5 4.95001 5.67157 4.95001 6.5C4.95001 7.32843 5.64397 8 6.50001 8Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="mailto:sarahktorza@gmail.com"
          className="text-black hover:text-primary duration-150"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 4.6875H3C2.85082 4.6875 2.70774 4.74676 2.60225 4.85225C2.49676 4.95774 2.4375 5.10082 2.4375 5.25V18C2.4375 18.3481 2.57578 18.6819 2.82192 18.9281C3.06806 19.1742 3.4019 19.3125 3.75 19.3125H20.25C20.5981 19.3125 20.9319 19.1742 21.1781 18.9281C21.4242 18.6819 21.5625 18.3481 21.5625 18V5.25C21.5625 5.10082 21.5032 4.95774 21.3977 4.85225C21.2923 4.74676 21.1492 4.6875 21 4.6875ZM12 12.7369L4.44562 5.8125H19.5544L12 12.7369ZM9.53156 12L3.5625 17.4713V6.52875L9.53156 12ZM10.3641 12.7631L11.625 13.9144C11.7287 14.0092 11.8641 14.0619 12.0047 14.0619C12.1452 14.0619 12.2807 14.0092 12.3844 13.9144L13.6406 12.7631L19.5544 18.1875H4.44656L10.3641 12.7631ZM14.4684 12L20.4375 6.52875V17.4713L14.4684 12Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
