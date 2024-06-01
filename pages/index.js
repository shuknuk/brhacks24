// index.js

import NavBar from '../components/NavBar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import About from '../components/About';
import Spacer from '../components/Spacer';
import Title from '../components/Title';
import Team from '../components/Team'; 

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Spacer />
      
      <About />
      <FAQ />
      <Team />
      {/* Hero Section */}

      {/* Rest of your sections */}
      <section id="blog" className="text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>
      <section id="projects" className="text-white h-screen bg-green-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Sponsors and Register Coming Soon...
        </h1>
      </section>
      <Footer />
    </div>
  );
}