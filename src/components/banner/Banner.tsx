import CountdownTimer from "./Coundown";
import oldMan from "../../assets/old_man.svg";
import arrowRight from "../../assets/arrow-right.svg";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Trans, useLingui } from "@lingui/react/macro";

function Banner() {
  const targetDate = new Date("2025-04-30T00:00:00"); // Pick some date
  const { width = 0 } = useWindowDimensions();
  const smallScreen = width <= 1024;
  const { i18n } = useLingui();

  return (
    <div className="flex flex-col items-center justify-between lg:text-[5rem] text-[2.5rem] gap-[1.3125rem]">
      <div className="font-playfair text-white font-black text-center">
        <Trans>We’re {smallScreen && <br />}Getting Ready</Trans>
      </div>
      <div className="font-playfair z-10 leading-none">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="flex flex-col items-center justify-center z-10 mt-[4.75rem]">
        <span className="text-white text-[1.125rem] text-center w-[50vw]">
          <Trans>
            We will back to something amazing. Getting the latest updates about
            our games. Please sign up to our newsletter.
          </Trans>
        </span>
        <div className="flex justify-center items-center bg-white rounded-[8px] pr-[14px] mt-[2rem]">
          <input
            placeholder={i18n._("Enter your email")}
            className="bg-white rounded-[8px] placeholder:text-sm w-[85vw] lg:w-[30vw] py-[18px] px-[14px] h-[56px] border-none focus:outline-none text-sm"
          />
          <img src={arrowRight} className="cursor-pointer" alt="Enter Name" />
        </div>
      </div>
      <div className="old-man absolute left-[25vw] top-[65vh]  lg:bottom-[5%] lg:top-[unset] lg:left-0  z-0">
        <img
          src={oldMan}
          className="old-man-image lg:w-[50vw] h-auto 2xl:w-[50vw] w-[100vw]"
          alt="Old Man"
        />
      </div>
    </div>
  );
}

export default Banner;
