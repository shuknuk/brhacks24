// index.js

import NavBar from "../components/NavBar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import About from "../components/About";
import Spacer from "../components/Spacer";
import Title from "../components/Title";
import Team from "../components/Team";
import Schedule from "../components/Schedule";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      {/* <Spacer /> */}

      <About />
      <FAQ />
      <Schedule />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
}
