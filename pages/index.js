import NavBar from '../components/NavBar';
import TitleScreen from '../components/TitleScreen';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* add spacing */}
      
      <About />
      <FAQ />
      {/* Hero Section */}

      {/* Rest of your sections */}
      <section id="about" className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          About
        </h1>
      </section>
      <section id="blog" className="text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>
      <section id="contact" className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact
        </h1>
      </section>
      <section id="projects" className="text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
      <Footer />
    </div>
  );
}