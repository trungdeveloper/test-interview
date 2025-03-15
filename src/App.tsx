import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";
import AboutUs from "./components/about-us/about-us";
import { LanguageProvider } from "./language-provider";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col">
        {/* <div className="bg-[url('/background/header_background.png')] bg-no-repeat h-[1018px] bg-contain">
        <NavBar />
        <Banner />
      </div> */}
        <MobileMenu />
        <AboutUs />
      </div>
    </LanguageProvider>
  );
}

export default App;
