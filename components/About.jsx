import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const handleAlert = () => {
  alert("Register form coming soon...");
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
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-8">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={toggleModal}
        >
          <img
            src="/team.jpeg"
            alt="BRHacks 2023"
            className="w-full h-full object-cover"
          />
          <p className="text-sm text-gray-500 text-center">Click to Enlarge</p>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          {/* Paragraph Box 1 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              In the upcoming Fall of 2024, the C.O.D.E. Club is all set to host
              the Bridgewater-Raritan HS Hackathon, a vibrant, full-day, in-person
              event uniting over 100 high school students from across New Jersey.
              This hackathon has received official approval from the BRHS
              administration and is currently in the meticulous planning stages by
              the C.O.D.E. club team.
            </p>
          </div>

          {/* Paragraph Box 2 */}
          <div
            className="bg-green-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-lg text-gray-700">
              During this exciting event, participants will join forces in teams
              to tackle a diverse range of STEM-related projects aimed at
              benefiting their community. These endeavors include the development
              of advanced computing solutions, the formation of mini-startup
              companies, the creation of innovative market prediction systems, the
              development of mobile apps to support diabetes management, and the
              design of environmentally-conscious solutions.
            </p>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button
              onClick={handleAlert}
              className="mt-4 text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg transition duration-300 ease-in-out"
            >
              Register Now!
            </button>
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
