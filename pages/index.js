// index.js

import NavBar from "../components/NavBar";
import HomeComponent from "../components/Home";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import About from "../components/About";

import Team from "../components/Team";
import Schedule from "../components/Schedule";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeComponent /> 
      {/* <Spacer /> */}

      <About />
      <Team />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}
