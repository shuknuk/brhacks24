// components/Team.jsx

import { useState } from 'react';

const teamData = {
  Official: [
    { name: 'Saanvi G.', role: 'Head', imageUrl: '/person.svg' },
    { name: 'Kinshuk G.', role: 'Tech & Design Head', imageUrl: '/person.svg'},
    { name: 'Shreya G.', role: 'Finance Head', imageUrl: '/person.svg' },
    { name: 'Divyansha N.', role: 'Finance Head', imageUrl: '/person.svg' },
    { name: 'Joon D.', role: 'Outreach Head', imageUrl: '/person.svg' },
    { name: 'Afraz A.', role: 'Social Media Head', imageUrl: '/person.svg' },
    { name: 'Arnav D.', role: 'Events & Logistics Head', imageUrl: '/person.svg' },
    { name: 'Ayushmaan M.', role: 'Events & Logistics Head', imageUrl: '/person.svg' },
  ],
  Finance: [
    { name: 'Wesley L.', role: 'Finance Member', imageUrl: '/person.svg' },
    { name: 'Victoria W.', role: 'Finance Member', imageUrl: '/person.svg' },
    { name: 'Navneet K.', role: 'Finance Member', imageUrl: '/person.svg' },
    { name: 'Vedaang V.', role: 'Finance Member', imageUrl: '/person.svg' },
    { name: 'Soham C.', role: 'Finance Member', imageUrl: '/person.svg' },
  ],
  Outreach: [
    { name: 'Wesley L.', role: 'Outreach Member', imageUrl: '/person.svg' },
    { name: 'Karolina T.', role: 'Outreach Member', imageUrl: '/person.svg' },
    { name: 'Dimah A.', role: 'Outreach Member', imageUrl: '/person.svg' },
  ],
  'Tech & Design': [
    { name: 'Anika S.', role: 'Tech & Design Member', imageUrl: '/person.svg' },
    { name: 'Andrew Z.', role: 'Tech & Design Member', imageUrl: '/person.svg' },
    { name: 'Praghya B.', role: 'Tech & Design Member', imageUrl: '/person.svg' },
  ],
  SocialMedia: [
    { name: 'Harshini Y.', role: 'Social Media Member', imageUrl: '/person.svg' },
    { name: 'Vedika S.', role: 'Social Media Member', imageUrl: '/person.svg' },
    { name: 'Sri K.', role: 'Social Media Member', imageUrl: '/person.svg' },
    { name: 'Neha A.', role: 'Social Media Member', imageUrl: '/person.svg' },
  ],
  'Events & Logistics': [
    { name: 'Kush D.', role: 'Events & Logistics Member', imageUrl: '/person.svg' },
    { name: 'Advik J.', role: 'Events & Logistics Member', imageUrl: '/person.svg' },
    { name: 'Harshit K.', role: 'Events & Logistics Member', imageUrl: '/person.svg' },
    { name: 'Rebecca P.', role: 'Events & Logistics Member', imageUrl: '/person.svg' },
  ],
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('Official');

  return (
    <section id="team" className="max-w-7xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Our Team</h1>
      <div className="flex flex-col md:flex-row items-start justify-center md:space-x-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <ul className="space-y-2">
            {Object.keys(teamData).map((category) => (
              <li key={category}>
                <button
                  className={`w-full text-left p-4 rounded transition-all duration-300 ${
                    selectedCategory === category ? 'bg-green-700 text-white' : 'bg-green-200 text-green-700 hover:bg-green-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="group relative inline-block">
                    {category}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right"></span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-3/4">
          {Object.keys(teamData).map((category) => (
            <div
              key={category}
              className={`transition-opacity duration-500 ${
                selectedCategory === category ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {teamData[category].map((member) => (
                  <div key={member.name} className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105">
                    <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
                    <div>
                      <h2 className="text-2xl font-semibold text-green-700">{member.name}</h2>
                      <p className="text-green-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
