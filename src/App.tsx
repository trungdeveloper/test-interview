import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";

function App() {
  return (
    <>
      <div className="bg-[url('/background/header_background.png')] bg-no-repeat h-[1018px] bg-contain">
        <NavBar />
        <Banner />
      </div>
      <MobileMenu />
    </>
  );
}

export default App;
