// JudgesAndSpeakers.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const judgesAndSpeakers = [
  { name: "Andy Siyuan Feng", role: "Judge", imageUrl: "/person.svg" },
  { name: "Shajina Anand", role: "Judge", imageUrl: "/person.svg" },
  { name: "Professor Bajwa", role: "Speaker", imageUrl: "/person.svg" },
  { name: "Professor McKee", role: "Speaker", imageUrl: "/person.svg" },
];

const JudgesAndSpeakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section id="judges-speakers" className="max-w-7xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        Judges and Speakers
      </h1>
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        Panelists
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
        {judgesAndSpeakers.map((person) => (
          <div
            key={person.name}
            className="flex flex-col items-center space-y-5 p-5 bg-green-50 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
            data-aos="fade-up"
          >
            <img
              src={person.imageUrl}
              alt={person.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700">
              {person.name}
            </h3>
            <p className="text-black font-bold text-center">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JudgesAndSpeakers;
