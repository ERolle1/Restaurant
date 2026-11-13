import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Chef } from "./components/Chef/Chef";
import { Intro } from "./components/Intro/Intro";
import { Laurels } from "./components/Laurels/Laurels";
import { Gallery } from "./components/Gallery/Gallery";
import { FindUs } from "./components/FindUs/FindUs";
import { Footer } from "./components/Footer/Footer";
import { SpecialMenu } from "./components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
