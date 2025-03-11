import { useState } from "react";
import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <div className="bg-[url('/background/header_background.png')] bg-no-repeat h-[1018px] bg-contain">
        <NavBar />
        <Banner />
      </div>
    </>
  );
}

export default App;
