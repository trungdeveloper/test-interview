import React from "react";
import Logo from "/logo.svg";
import { NAVS } from "../utils/constants";
import { Trans } from "@lingui/react/macro";

function NavBar() {
  return (
    <div className="font-montserrat flex justify-between  pt-[20px] pb-[82px] px-[80px] items-center text-[14px]">
      <div className="logo">
        <a href="https://vite.dev" target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="flex gap-[84px] text-white font-bold ">
        {NAVS.map((item) => (
          <a className="cursor-pointer" key={item.href} href={item.href}>
            <Trans>{item.title}</Trans>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
