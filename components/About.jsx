import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const handleAlert = () => {
  alert("Register form coming soon...");
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation (ms)
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once while scrolling down
    });
  }, []);

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/team.jpeg"
            alt="BRHacks 2023"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          {/* Paragraph Box 1 */}
          <div
            className="bg-green-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Us
            </h2>
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
              className="mt-4 text-white py-2 px-6 rounded-lg bg-green-600 hover:bg-green-900 shadow-lg"
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
