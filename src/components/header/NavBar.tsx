import { useLingui } from "@lingui/react/macro";
import { NAVS } from "../utils/constants";
import Logo from "/logo.svg";

function NavBar() {
  const { i18n } = useLingui();

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
            {i18n._(item.title)}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
