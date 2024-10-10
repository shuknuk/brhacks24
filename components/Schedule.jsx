// Schedule.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Schedule = () => {
  const scheduleData = [
    { Time: "10:00 AM", Event: "Opening Ceremony 🎉", Location: "Auditorium" },
    { Time: "11:00 AM", Event: "Data Visualization", Location: "Room 104" },
    { Time: "11:00 AM", Event: "Professor Bajwa", Location: "Auditorium" },
    { Time: "12:00 PM", Event: "Lunch", Location: "Big Cafe" },
    { Time: "1:00 PM", Event: "Competitions", Location: "Room 103" },
    { Time: "1:00 PM", Event: "AI / ML", Location: "Room 105" },
    { Time: "1:00 PM", Event: "Girls Who Code", Location: "Room 172" },
    { Time: "2:00 PM", Event: "Python", Location: "Room 104" },
    { Time: "2:00 PM", Event: "Professor McKee", Location: "Auditorium" },
    { Time: "3:00 PM", Event: "Automotive Mechanical Club", Location: "Room 103" },
    { Time: "3:00 PM", Event: "Java", Location: "Room 105" },
    { Time: "3:00 PM", Event: "SCYE", Location: "Room 172" },
    { Time: "4:00 PM", Event: "BR Prints", Location: "Room 104" },
    { Time: "4:00 PM", Event: "CyBR Hacks", Location: "Room 171" },
    { Time: "4:00 PM", Event: "C++", Location: "Room 173" },
    { Time: "5:00 PM", Event: "Women in STEM", Location: "Room 103" },
    { Time: "5:00 PM", Event: "Web Dev", Location: "Room 172" },
    { Time: "6:00 PM", Event: "Robotics Team", Location: "Room 104" },
    { Time: "6:00 PM", Event: "Quantum Computing", Location: "Room 171" },
    { Time: "6:00 PM", Event: "Data Struc", Location: "Room 173" },
    { Time: "7:00 PM", Event: "Dinner 🍝", Location: "Big Cafe" },
    { Time: "7:30 PM", Event: "Judging Begins", Location: "Big Cafe" },
  ];

  return (
    <section id="schedule">
      <div className="max-w-4xl mx-auto my-8 p-4 ">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Event Schedule</h1>
        </div>
        <div className="space-y-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-green-200 rounded-lg shadow-md p-4"
            >
              {/* Green Leaf Image */}
              <img
                src="/butterfly.svg"
                alt="Leaf Decoration"
                className="w-24 p-3 h-24 md:mb-0"
              />
              <div className="bg-green-500 text-black shadow-md rounded-full px-4 py-2 text-center text-sm md:text-base font-medium hover:bg-green-700 transition-colors w-24 mb-2 md:mb-0">
                {item.Time}
              </div>
              <div className="flex-1 text-center text-lg md:text-left px-4">
                <span className="font-semibold">
                  <i className="fas fa-calendar-alt text-xl mr-2"></i>Event:{" "}
                </span>
                <span className="">{item.Event}</span>
              </div>
              <div className="text-center md:text-left px-4">
                <span className="text-amber-700 font-semibold">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  <i className="fas fa-map-marker-alt font-bold text-lg mr-2"></i>Location:{" "}
                </span>
                <span className="text-amber-800 text-lg font-bold">{item.Location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
