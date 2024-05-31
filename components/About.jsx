import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url(/forestwhoa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mb-8 backdrop-blur-lg bg-green-800/30 rounded-xl p-4">
            <div className="bg-green-500 w-full lg:w-1/2 h-64 rounded-xl flex-shrink-0 mb-4 lg:mb-0 bg-cover bg-center" style={{ backgroundImage: 'url(/forestwhoa.jpg)' }}>
              {/* Placeholder for image */}
            </div>
            <div className="lg:ml-8 w-full lg:w-1/2 text-white">
              <h2 className="text-4xl font-ubuntu mb-4">About Us</h2>
              <p className="font-helmetneue bg-green-600/60 shadow-lg px-4 py-2 rounded-xl"> 
                In the upcoming Fall of 2023, the C.O.D.E. Club is all set to host the Bridgewater-Raritan HS Hackathon, a vibrant, full-day, in-person event uniting over 100 high school students from across New Jersey. This hackathon has received official approval from the BRHS administration and is currently in the meticulous planning stages by the CODE club team.
              </p>
              <p className="py-3"/>
              <p className="font-helmetneue bg-green-600/60 shadow-lg px-4 py-2 rounded-xl"> 
                  During this exciting event, participants will join forces in teams to tackle a diverse range of STEM-related projects aimed at benefiting their community. These endeavors include the development of advanced computing solutions, the formation of mini-startup companies, the creation of innovative market prediction systems, the development of mobile apps to support diabetes management, and the design of environmentally-conscious solutions.
              </p>
            </div>
          </div>
          <div className="w-full backdrop-blur-lg bg-green-800/30 shadow-lg px-4 py-2 rounded-xl text-white">
            <p className="font-helmetneue">
              In essence, this hackathon serves as a platform for students to unleash their creativity and push the boundaries of their imagination, all while achieving their goals through unwavering dedication and hard work. Beyond the main competition, CODE Club will also collaborate with other computer science clubs at BRHS to offer a variety of engaging workshops. During this exciting event, participants will join forces in teams to tackle a diverse range of STEM-related projects aimed at benefiting their community. These endeavors include the development of advanced computing solutions, the formation of mini-startup companies, the creation of innovative market prediction systems, the development of mobile apps to support diabetes management, and the design of environmentally-conscious solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
