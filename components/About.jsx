// About.jsx

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const handleAlert = (e) => {
  e.stopPropagation(); // Prevent the click event from propagating to the parent
  window.open("https://forms.gle/wATGGMEjPcV1Ppd89", "_blank");
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation (ms)
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once while scrolling down
    });
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('/spotts.svg')] bg-contain bg-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-8">
        <div
          className="w-full lg:w-1/2 mb-8 bg-emerald-100 lg:mb-0 relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={toggleModal}
        >
          <img
            src="/team.jpeg"
            alt="BRHacks 2023"
            className="w-full h-full object-cover"
          />
          {/* blur background 
          <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <p className="text-sm text-gray-500 text-center font-bold mt-3">Click to Enlarge</p>
          {/* Register Button */}
          <div className="text-center mb-4">
  <button
    onClick={(e) => {
      e.stopPropagation();
      window.open("https://forms.gle/wATGGMEjPcV1Ppd89", "_blank");
    }}
    className="mt-4 text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg transition duration-300 ease-in-out mb-4"
  >
    Register Now!
  </button>
</div>

  <div className="text-center mb-4">
    <button
      onClick={(e) => {
        e.stopPropagation();
        window.open("https://brhs-hackathon-2024.devpost.com", "_blank");
      }}
      className="text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg transition duration-300 ease-in-out mb-4"
    >
      Submit Project to DevPost
    </button>
  </div>

  <div className="text-center mb-4">
    <button
      onClick={(e) => {
        e.stopPropagation();
        window.open("https://docs.google.com/presentation/d/1dfMl4KqjjRHynXWXTEjjSXi6eW7BPf_Q/edit?usp=sharing&ouid=107838871474242393229&rtpof=true&sd=true", "_blank");
      }}
      className="text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg transition duration-300 ease-in-out mb-4"
    >
      Opening Presentation
    </button>
  </div>

  <div className="text-center mb-4">
    <button
      onClick={(e) => {
        e.stopPropagation();
        window.open("https://docs.google.com/presentation/d/1yV5fajqmH7EMQFNZ6PocXtSKOJnRXoNnN9c-8p-0-Ck/edit?usp=sharing", "_blank");
      }}
      className="text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg transition duration-300 ease-in-out mb-4"
    >
      McKee's Presentation - Social Engineering
    </button>
  </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          {/* Paragraph Box 1 */}
          <div className="bg-green-200 p-6 rounded-3xl shadow-lg relative" data-aos="fade-up">
            {/* Leaf Image 1 - Top Left */}
            <img
              src="/group-136@2x.svg"
              alt="Leaf Decoration"
              className="absolute top-[-84px] left-[-80px] w-140.92 h-130.29"
            />
            <h2 className="text-3xl font-extrabold text-gray-900 ">About Us</h2>
            <p className="text-lg text-gray-700 p-2">
              In the upcoming Fall of 2024, the C.O.D.E. Club is all set to host
              the Bridgewater-Raritan HS Hackathon, a vibrant, full-day, in-person
              event uniting over 100 high school students from across New Jersey.
              This hackathon has received official approval from the BRHS
              administration and is currently in the meticulous planning stages by
              the C.O.D.E. club team.
            </p>
            {/* Leaf Image 2 - Bottom Right */}
            <img
              src="/group-137@2x.svg"
              alt="Leaf Decoration"
              className="absolute bottom-[-30px] right-[-22px] w-140.92 h-130.29"
            />
          </div>

          {/* Paragraph Box 2 */}
          <div
            className="bg-green-200 p-6 rounded-3xl shadow-lg top-[-1000px] "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/LeafSvg2.svg"
              alt="Leaf Decoration"
              className="absolute bottom-[-77px] right-[-20px] "
              // width and height doesn't matter bcuz it's an svg
            />
            <p className="text-lg text-gray-700 p-2">
              During this exciting event, participants will join forces in teams
              to tackle a diverse range of STEM-related projects aimed at
              benefiting their community. These endeavors include the development
              of advanced computing solutions, the formation of mini-startup
              companies, the creation of innovative market prediction systems, the
              development of mobile apps to support diabetes management, and the
              design of environmentally-conscious solutions.
            </p>
          </div>

        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={toggleModal}
          style={{ opacity: isModalOpen ? 1 : 0 }}
        >
          <div className="relative">
            <img
              src="/team.jpeg"
              alt="BRHacks 2023 Enlarged"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              style={{ transition: "opacity 0.3s ease-in-out" }}
            />
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-1 shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
