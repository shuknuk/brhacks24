// components/Team.jsx

import { useState } from "react";

const teamData = {
  Official: [
    { name: "Saanvi G.", role: "Head", imageUrl: "/person.svg" },
    { name: "Kinshuk G.", role: "Tech & Design Head", imageUrl: "/person.svg" },
    { name: "Shreya G.", role: "Finance Head", imageUrl: "/person.svg" },
    { name: "Divyansha N.", role: "Finance Head", imageUrl: "/person.svg" },
    { name: "Joon D.", role: "Outreach Head", imageUrl: "/person.svg" },
    { name: "Afraz A.", role: "Social Media Head", imageUrl: "/person.svg" },
    {
      name: "Arnav D.",
      role: "Events & Logistics Head",
      imageUrl: "/person.svg",
    },
    {
      name: "Ayushmaan M.",
      role: "Events & Logistics Head",
      imageUrl: "/person.svg",
    },
  ],
  Finance: [
    { name: "Wesley L.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Victoria W.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Navneet K.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Vedaang V.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Soham C.", role: "Finance Member", imageUrl: "/person.svg" },
  ],
  Outreach: [
    { name: "Wesley L.", role: "Outreach Member", imageUrl: "/person.svg" },
    { name: "Karolina T.", role: "Outreach Member", imageUrl: "/person.svg" },
    { name: "Dimah A.", role: "Outreach Member", imageUrl: "/person.svg" },
  ],
  "Tech & Design": [
    { name: "Anika S.", role: "Tech & Design Member", imageUrl: "/person.svg" },
    {
      name: "Andrew Z.",
      role: "Tech & Design Member",
      imageUrl: "/person.svg",
    },
    {
      name: "Praghya B.",
      role: "Tech & Design Member",
      imageUrl: "/person.svg",
    },
    {
      name: "Mohit S.",
      role: "Tech & Design Memeber",
      imageUrl: "/person.svg",
    },
  ],
  "Social Media": [
    {
      name: "Harshini Y.",
      role: "Social Media Member",
      imageUrl: "/person.svg",
    },
    { name: "Vedika S.", role: "Social Media Member", imageUrl: "/person.svg" },
    { name: "Sri K.", role: "Social Media Member", imageUrl: "/person.svg" },
    { name: "Neha A.", role: "Social Media Member", imageUrl: "/person.svg" },
  ],
  "Events & Logistics": [
    {
      name: "Kush D.",
      role: "Events & Logistics Member",
      imageUrl: "/person.svg",
    },
    {
      name: "Advik J.",
      role: "Events & Logistics Member",
      imageUrl: "/person.svg",
    },
    {
      name: "Harshit K.",
      role: "Events & Logistics Member",
      imageUrl: "/person.svg",
    },
    {
      name: "Rebecca P.",
      role: "Events & Logistics Member",
      imageUrl: "/person.svg",
    },
  ],
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Official");

  return (
    <section id="team" className="max-w-7xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        Our Team
      </h1>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold text-center">{selectedCategory}</h2>
        <div className="flex space-x-4 mt-4">
          {Object.keys(teamData).map((category) => (
            <button
              key={category}
              className={`nav-item bg-green-600 drop-shadow-lg p-2 rounded transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-green-200 text-black hover:bg-green-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData[selectedCategory].map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center space-y-4 p-4 bg-green-50 rounded-lg shadow-lg"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700">
              {member.name}
            </h3>
            <p className="text-green-600">{member.role}</p>
            {/* <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-green-700">$575</span>
              <span className="text-sm text-green-500">Buy Now</span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
