import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const teamData = {
  Official: [
    { name: "Saanvi G.", role: "Head", imageUrl: "/person.svg" },
    { name: "Kinshuk G.", role: "Tech & Design Head", imageUrl: "/person.svg" },
    { name: "Shreya G.", role: "Finance Head", imageUrl: "/person.svg" },
    { name: "Divyansha N.", role: "Finance Head", imageUrl: "/person.svg" },
    { name: "Joon D.", role: "Outreach Head", imageUrl: "/person.svg" },
    { name: "Afraz A.", role: "Social Media Head", imageUrl: "/person.svg" },
    { name: "Arnav D.", role: "Events & Logistics Head", imageUrl: "/person.svg" },
    { name: "Ayushmaan M.", role: "Events & Logistics Head", imageUrl: "/person.svg" },
  ],
  Finance: [
    { name: "Vedaang V.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Victoria W.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Soham C.", role: "Finance Member", imageUrl: "/person.svg" },
    { name: "Anika S.", role: "Finance Member", imageUrl: "/person.svg" },
  ],
  Outreach: [
    { name: "Wesley L.", role: "Outreach Member", imageUrl: "/person.svg" },
    { name: "Karolina T.", role: "Outreach Member", imageUrl: "/person.svg" },
    { name: "Dimah A.", role: "Outreach Member", imageUrl: "/person.svg" },
    { name: "Darsh S.", role: "Outreach Member", imageUrl: "/person.svg" },
  ],
  "Tech & Design": [
    { name: "Andrew Z.", role: "Tech & Design Member", imageUrl: "/person.svg" },
    { name: "Praghya B.", role: "Tech & Design Member", imageUrl: "/person.svg" },
    { name: "Mohit S.", role: "Tech & Design Member", imageUrl: "/person.svg" },
    { name: "Anika S.", role: "Tech & Design -- Contributor", imageUrl: "/person.svg" },
  ],
  "Social Media": [
    { name: "Harshini Y.", role: "Social Media Member", imageUrl: "/person.svg" },
    { name: "Vedika S.", role: "Social Media Member", imageUrl: "/person.svg" },
    { name: "Sri K.", role: "Social Media Member", imageUrl: "/person.svg" },
    { name: "Neha A.", role: "Social Media Member", imageUrl: "/person.svg" },
  ],
  "Events & Logistics": [
    { name: "Kush D.", role: "Events & Logistics Member", imageUrl: "/person.svg" },
    { name: "Advik J.", role: "Events & Logistics Member", imageUrl: "/person.svg" },
    { name: "Harshit K.", role: "Events & Logistics Member", imageUrl: "/person.svg" },
    { name: "Rebecca P.", role: "Events & Logistics Member", imageUrl: "/person.svg" },
  ],
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Official");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation (ms)
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once while scrolling down
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <section id="team" className="max-w-7xl mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        Our Team
      </h1>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold text-center">{selectedCategory}</h2>

        {/* Dropdown menu for mobile view */}
        <div className="relative mt-4 lg:hidden">
          <button
            className="nav-item bg-green-600 drop-shadow-lg p-2 rounded transition-all duration-300 text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory} {isDropdownOpen ? "▲" : "▼"}
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-2xl">
              {Object.keys(teamData).map((category) => (
                <button
                  key={category}
                  className={`block w-full text-center p-2 rounded-2xl hover:bg-green-200 transition-all duration-300 ${
                    selectedCategory === category ? "bg-green-300" : "bg-white"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Horizontal layout for desktop view */}
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

      {/* Fade animations */}
      <div className="fade-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData[selectedCategory].map((member) => (
            <div
              key={member.name}
              className="relative mb-10 flex flex-col items-center space-y-5 p-3 bg-green-50 rounded-lg shadow-lg"
              data-aos="fade-up" // Apply AOS fade-up animation
              data-aos-duration="500" // Duration of the animation
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <img
                src="/logNew.svg"
                alt="logNew"
                className="w-21 h-15 absolute bottom-[-45px] "
              />
              <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
              <h3 className="text-black z-0 shadow-sm ml-8 font-extrabold relative top-2">{member.role}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
