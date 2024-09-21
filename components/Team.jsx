import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const teamData = {
  Official: [
    { name: "Saanvi G.", role: "Head", imageUrl: "/person.svg" },
    { name: "Kinshuk G.", role: "Tech & Design Head", imageUrl: "/person.svg" },
    { name: "Shreya G.", role: "Co-Finance Head", imageUrl: "/person.svg" },
    { name: "Divyansha N.", role: "Co-Finance Head", imageUrl: "/person.svg" },
    { name: "Joon D.", role: "Co-Outreach Head", imageUrl: "/person.svg" },
    { name: "Karolina T.", role: "Co-Outreach Head", imageUrl: "/person.svg" },
    { name: "Afraz A.", role: "Social Media Head", imageUrl: "/person.svg" },
    { name: "Arnav D.", role: "Co-Events & Logistics Head", imageUrl: "/person.svg" },
    { name: "Ayushmaan M.", role: "Co-Events & Logistics Head", imageUrl: "/person.svg" },
  ],
  Finance: [
    { name: "Vedaang V.", role: "Finance", imageUrl: "/person.svg" },
    { name: "Victoria W.", role: "Finance", imageUrl: "/person.svg" },
    { name: "Soham C.", role: "Finance", imageUrl: "/person.svg" },
    { name: "Anika S.", role: "Finance", imageUrl: "/person.svg" },
  ],
  Outreach: [
    { name: "Wesley L.", role: "Outreach", imageUrl: "/person.svg" },
    { name: "Dimah A.", role: "Outreach", imageUrl: "/person.svg" },
    { name: "Darsh S.", role: "Outreach", imageUrl: "/person.svg" },
  ],
  "Tech & Design": [
    { name: "Andrew Z.", role: "Tech & Design", imageUrl: "/person.svg" },
    { name: "Praghya B.", role: "Tech & Design", imageUrl: "/person.svg" },
    { name: "Mohit S.", role: "Tech & Design", imageUrl: "/person.svg" },
    { name: "Anika S.", role: "Tech & Design -- Contributor", imageUrl: "/person.svg" },
  ],
  "Social Media": [
    { name: "Harshini Y.", role: "Social Media", imageUrl: "/person.svg" },
    { name: "Vedika S.", role: "Social Media", imageUrl: "/person.svg" },
    { name: "Sri K.", role: "Social Media", imageUrl: "/person.svg" },
    { name: "Neha A.", role: "Social Media", imageUrl: "/person.svg" },
  ],
  "Events & Logistics": [
    { name: "Kush D.", role: "Events & Logistics", imageUrl: "/person.svg" },
    { name: "Advik J.", role: "Events & Logistics", imageUrl: "/person.svg" },
    { name: "Harshit K.", role: "Events & Logistics", imageUrl: "/person.svg" },
    { name: "Rebecca P.", role: "Events & Logistics", imageUrl: "/person.svg" },
  ],
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Official");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const teamMembers = teamData[selectedCategory];
  const topRowMembers = teamMembers.slice(0, 4);
  const bottomRowMembers = teamMembers.slice(4);

  return (
    <section id="team" className="max-w-7xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Our Team</h1>

      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold text-center">{selectedCategory}</h2>

        {/* Category Buttons */}
        <div className="hidden lg:flex space-x-4 mt-4">
          {Object.keys(teamData).map((category) => (
            <button
              key={category}
              className={`nav-item bg-green-600 drop-shadow-lg p-2 rounded transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-green-200 text-black hover:bg-green-700"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-6 mb-10"> {/* Added bottom margin to the top row */}
        {topRowMembers.map((member) => (
          <div
            key={member.name}
            className="relative mb-10 flex flex-col items-center space-y-5 p-3 bg-green-50 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <img
              src="/logNew.svg"
              alt="logNew"
              className="w-21 h-15 absolute bottom-[-45px]"
            />
            <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
            <h3 className="text-black z-0 ml-8 font-extrabold relative top-2 truncate max-w-[80%]">
              {member.role}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-6">
        {bottomRowMembers.map((member) => (
          <div
            key={member.name}
            className="relative mb-10 flex flex-col items-center space-y-5 p-3 bg-green-50 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <img
              src="/logNew.svg"
              alt="logNew"
              className="w-21 h-15 absolute bottom-[-45px]"
            />
            <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
            <h3 className="text-sm text-black z-0 ml-8 font-extrabold relative top-5 truncate max-w-[80%]"> {/* Reduced font size */}
              {member.role}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
