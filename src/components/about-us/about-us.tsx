import Detail from "./detail";
import DesignIcon from "assets/icons/design-icon.svg?react";
import TeamIcon from "assets/icons/team-icon.svg?react";
import TimeIcon from "assets/icons/time-icon.svg?react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-[1060px] mx-auto">
      <div className="px-4 md:px-0">
        <h1 className="font-playfair text-[40px] font-[900]">About Us</h1>
        <p className="text-[#757575] font-montserrat text-sm mt-4 leading-[140%]">
          Browse our selection of free online games and have a great time
          without leaving the site! Our Kids Games option also includes game
          reviews, extensive game cheats and walkthroughs, and much more. We
          have exclusive free downloads, videos, and articles as well. Etech
          reviews the most popular kids games from all the most popular video
          gaming platforms, so you don’t need to search around for fun anywhere
          else on the Internet. Explore a whole new world of gaming on Etech.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-10 font-montserrat">
          <div className="flex flex-col">
            <span className=" text-[#079BEE] tracking-[-1px] text-[44px] font-bold">
              600<span className="font-bold text-xl">M</span>+
            </span>
            <span className="font-bold text-2xl leading-[1.88rem]">Users</span>
          </div>
          <div className="flex flex-col">
            <span className=" text-[#079BEE] tracking-[-1px] text-[44px] font-bold">
              135+
            </span>
            <span className="font-bold text-2xl leading-[1.88rem]">Games</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#EEEEEE] px-4 py-10 gap-10">
        <Detail
          icon={<TimeIcon />}
          title={"24 - Hour"}
          description={
            "24/7 access ensures operators' businesses runs smoothly all year long."
          }
        />
        <Detail
          icon={<DesignIcon />}
          title={"Design"}
          description={
            "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay."
          }
        />
        <Detail
          icon={<TeamIcon />}
          title={"Team"}
          description={
            "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. "
          }
        />
      </div>
    </div>
  );
};

export default AboutUs;
