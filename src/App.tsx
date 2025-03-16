import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";
import AboutUs from "./components/about-us/about-us";
import { LanguageProvider } from "./context/language-provider";
import OurGames from "./components/our-games";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col  gap-y-12 xl:gap-y-32">
        <div className="bg-[url('/background/header_background.png')] bg-no-repeat w-screen h-[90vh] bg-cover bg-center 2xl:bg-cover 2xl:bg-center mb-[8rem]">
          {/* <NavBar /> */}
          {/* <Banner /> */}
        </div>
        <MobileMenu />
        <AboutUs />
        <OurGames />
      </div>
    </LanguageProvider>
  );
}

export default App;
