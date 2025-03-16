import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";
import AboutUs from "./components/about-us/about-us";
import { LanguageProvider } from "./context/language-provider";
import OurGames from "./components/our-games";
import ScrollButton from "./scroll-button";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col gap-y-12 xl:gap-y-32">
        <div className="bg-[url('/assets/images/mobile-BG.png')] lg:bg-[url('/assets/images/BG.png')] lg:h-[1018px] bg-no-repeat w-full bg-cover bg-center 2xl:bg-cover 2xl:bg-center h-90vh overflow-x-hidden relative">
          <NavBar />
          <Banner />
          <div className="lg:absolute lg:left-0 z-0 bottom-0 max-sm:relative">
            <img
              src={"/assets/images/oldman.png"}
              className="w-1/3 height-auto min-w-60 max-sm:mx-auto"
              alt="Old Man"
            />
          </div>
        </div>
        <MobileMenu />
        <AboutUs />
        <OurGames />
        <ScrollButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
