import React from "react";
import Logo from "/logo.svg";
import { NAVS } from "../utils/constants";

function NavBar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with ID '${sectionId}' not found.`);
    }
  };

  return (
    <div className="font-montserrat flex justify-between pt-[1.25rem] pb-[5.125rem] px-[5rem] items-center text-[0.875rem]">
      <div className="logo">
        <a href="https://vite.dev" target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="hidden lg:flex gap-[84px] text-white font-bold">
        {NAVS.map((item) => (
          <div
            className="cursor-pointer"
            key={item.key}
            onClick={() => scrollToSection(item.key)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
