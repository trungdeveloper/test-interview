import { useLingui } from "@lingui/react/macro";
import { NAVS } from "../utils/constants";
import Logo from "/logo.svg";

function NavBar() {
  const { i18n } = useLingui();

  return (
    <div className="font-montserrat flex justify-between pt-[1.25rem] pb-[5.125rem] px-[5rem] items-center text-[0.875rem]">
      <div className="logo">
        <a href="https://vite.dev" target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="hidden lg:flex gap-[84px] text-white font-bold">
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
