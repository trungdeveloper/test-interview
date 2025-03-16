import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <div
        className="bg-[url('/background/header_background.png')] bg-no-repeat w-screen h-[90vh] 
                    bg-cover bg-center 
                    2xl:bg-cover 2xl:bg-center"
      >
        <NavBar />
        <Banner />
      </div>
    </>
  );
}

export default App;
