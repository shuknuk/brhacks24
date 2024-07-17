import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
          <img
            src="/team.jpeg"
            alt="BRHacks 2023"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="bg-green-100 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-extrabold text-green-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            In the upcoming Fall of 2024, the C.O.D.E. Club is all set to host
            the Bridgewater-Raritan HS Hackathon, a vibrant, full-day, in-person
            event uniting over 100 high school students from across New Jersey.
            This hackathon has received official approval from the BRHS
            administration and is currently in the meticulous planning stages by
            the C.O.D.E. club team.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            During this exciting event, participants will join forces in teams
            to tackle a diverse range of STEM-related projects aimed at
            benefiting their community. These endeavors include the development
            of advanced computing solutions, the formation of mini-startup
            companies, the creation of innovative market prediction systems, the
            development of mobile apps to support diabetes management, and the
            design of environmentally-conscious solutions.
          </p>
          <button className="mt-4 text-white py-2 px-4 rounded-3xl hover:300 nav-item bg-green-600 drop-shadow-lg m-2 text-center">
            Register Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
