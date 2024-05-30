// About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="bg-[#003329] py-10">
      <div className="bodycls">
        <div><img src="greencircle.png" className="logo py-10" alt="Logo" /></div>
        <div className="para shrink-0 sm:w-2/5 md:w-1/8 lg:w-1/9 lg:px-3">
          <p className="font-helmetneue rounded-xl mg-4 bg-emerald-400 shadow-lg px-4 py-2"> 
            In the upcoming Fall of 2023, the C.O.D.E. Club is all set to host the Bridgewater-Raritan HS Hackathon, a vibrant, full-day, in-person event uniting over 100 high school students from across New Jersey. This hackathon has received official approval from the BRHS administration and is currently in the meticulous planning stages by the CODE club team.
          </p>
          <p className="py-2.5"/>
          <p className="font-helmetneue rounded-xl mg-4 bg-emerald-400 shadow-lg px-4 py-3">
            During this exciting event, participants will join forces in teams to tackle a diverse range of STEM-related projects aimed at benefiting their community. These endeavors include the development of advanced computing solutions, the formation of mini-startup companies, the creation of innovative market prediction systems, the development of mobile apps to support diabetes management, and the design of environmentally-conscious solutions.
          </p>
        </div>
        {/* <div>
          <img src="green.png" className="picture" width="1180" height="300" alt="Event Banner" />
        </div> */}
        <br /><br /><br /><br />
        <div><img src="leaf-4888.svg" className="imagetwo" alt="Second Event Image" /></div>
        <div className="para2">
          <p className="font-helmetneue rounded-xl mg-4 bg-emerald-400 shadow-lg px-4 py-2">In essence, this hackathon serves as a platform for students to unleash their creativity and push the boundaries of their imagination, all while achieving their goals through unwavering dedication and hard work. Beyond the main competition, CODE Club will also collaborate with other computer science clubs at BRHS to offer a variety of engaging workshops. During this exciting event, participants will join forces in teams to tackle a diverse range of STEM-related projects aimed at benefiting their community. These endeavors include the development of advanced computing solutions, the formation of mini-startup companies, the creation of innovative market prediction systems, the development of mobile apps to support diabetes management, and the design of environmentally-conscious solutions.</p>
        </div>
        <br /><br /><br />
      </div>
    </div>
  );
};

export default About;