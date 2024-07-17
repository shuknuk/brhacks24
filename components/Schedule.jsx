import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Schedule = () => {
  const scheduleData = [
    { Time: "9:00 AM", Event: "Check In Opens", Location: "Large Cafeteria" },
    { Time: "10:00 AM", Event: "Opening Ceremony", Location: "Auditorium" },
    {
      Time: "10:30 AM",
      Event: "Team Bonding During Opening Ceremony",
      Location: "Large Cafeteria",
    },
    { Time: "11:15 AM", Event: "Intro Python", Location: "Room 171" },
    { Time: "11:15 AM", Event: "Intro to C++", Location: "Room 172" },
    { Time: "11:15 AM", Event: "Intro to Github", Location: "Room 103" },
    {
      Time: "12:00 PM",
      Event: "Lunch - Chess Tournament Sign ups",
      Location: "Large Cafeteria",
    },
    {
      Time: "12:30 PM",
      Event: "Lunch/Chess Tournament",
      Location: "Large Cafeteria",
    },
    {
      Time: "1:00 PM",
      Event: "Coding With a Purpose Workshop",
      Location: "Room 172",
    },
    {
      Time: "1:00 PM",
      Event: "3D Printing Workshop",
      Location: "Small Cafeteria - 2hrs",
    },
    { Time: "1:00 PM", Event: "AI/Machine Learning Workshop", Location: "Room 173" },
    {
      Time: "1:45 PM",
      Event: "General CS Knowledge Competition",
      Location: "Large Cafeteria",
    },
    { Time: "2:30 PM", Event: "Intro to Java", Location: "Room 103" },
    {
      Time: "2:30 PM",
      Event: "Will AI Be Able To Model Human Emotion?",
      Location: "Room 173",
    },
    { Time: "3:15 PM", Event: "Cybersecurity Workshop", Location: "Room 171" },
    {
      Time: "3:15 PM",
      Event: "Intro to Data Structures and Algorithms",
      Location: "Room 172",
    },
    { Time: "4:00 PM", Event: "Engineering Workshop", Location: "Room 173" },
    { Time: "4:00 PM", Event: "Neuroscience Workshop", Location: "Room 103" },
    {
      Time: "4:45 PM",
      Event: "Competitive Programming Competition",
      Location: "Small Cafeteria",
    },
    { Time: "5:45 PM", Event: "Game Dev Workshop", Location: "Room 173" },
    { Time: "5:45 PM", Event: "Women In STEM", Location: "Room 103" },
    { Time: "6:30 PM", Event: "Data Visualization", Location: "Room 172" },
    { Time: "6:30 PM", Event: "Web Development", Location: "Room 171" },
    { Time: "7:00 PM", Event: "Hacking Ends", Location: "Large Cafeteria" },
    { Time: "7:15 PM", Event: "Dinner", Location: "Large Cafeteria" },
    { Time: "7:15 PM", Event: "Judging Begins", },
    { Time: "7:30 PM", Event: "Cup Stacking", Location: "Large Cafeteria" },
    { Time: "8:30 PM", Event: "Judging Finishes", },
    { Time: "9:00 PM", Event: "Closing Ceremony", Location: "Auditorium" },
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
              className="flex flex-col md:flex-row items-center bg-green-100 rounded-lg shadow-md p-4"
            >
              <div className="bg-green-500 text-white shadow-md rounded-full px-4 py-2 text-center text-sm md:text-base font-medium hover:bg-green-600 transition-colors w-24 mb-2 md:mb-0">
                {item.Time}
              </div>
              <div className="flex-1 text-center md:text-left px-4">
                <span className="font-semibold">
                  <i className="fas fa-calendar-alt mr-2"></i>Event:{" "}
                </span>
                <span className="">{item.Event}</span>
              </div>
              <div className="text-center md:text-left px-4">
                <span className="text-amber-700 font-semibold">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  <i className="fas fa-map-marker-alt mr-2"></i>Location:{" "}
                </span>
                <span className="text-amber-800">{item.Location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
