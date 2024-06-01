import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { Time: "9:00 AM", Event: "Check In Opens", Location: "Large Cafeteria" },
    { Time: "10:00 AM", Event: "Opening Ceremony", Location: "Auditorium" },
    { Time: "10:30 AM", Event: "Team Bonding During Opening Ceremony", Location: "Large Cafeteria" },
    { Time: "11:15 AM", Event: "Intro Python", Location: "171" },
    { Time: "11:15 AM", Event: "Intro to C++", Location: "172" },
    { Time: "11:15 AM", Event: "Intro to Github", Location: "103" },
    { Time: "12:00 PM", Event: "Lunch - Chess Tournament Sign ups", Location: "Large Cafeteria" },
    { Time: "12:30 PM", Event: "Lunch/Chess Tournament", Location: "Large Cafeteria" },
    { Time: "1:00 PM", Event: "Coding With a Purpose Workshop", Location: "172" },
    { Time: "1:00 PM", Event: "3D Printing Workshop", Location: "Small Cafeteria - 2hrs" },
    { Time: "1:00 PM", Event: "AI/Machine Learning Workshop", Location: "173" },
    { Time: "1:45 PM", Event: "General CS Knowledge Competition", Location: "Large Cafeteria" },
    { Time: "2:30 PM", Event: "Intro to Java", Location: "103" },
    { Time: "2:30 PM", Event: "Will AI Be Able To Model Human Emotion?", Location: "173" },
    { Time: "3:15 PM", Event: "Cybersecurity Workshop", Location: "171" },
    { Time: "3:15 PM", Event: "Intro to Data Structures and Algorithms", Location: "172" },
    { Time: "4:00 PM", Event: "Engineering Workshop", Location: "173" },
    { Time: "4:00 PM", Event: "Neuroscience Workshop", Location: "103" },
    { Time: "4:45 PM", Event: "Competitive Programming Competition", Location: "Small Cafeteria" },
    { Time: "5:45 PM", Event: "Game Dev Workshop", Location: "173" },
    { Time: "5:45 PM", Event: "Women In STEM", Location: "103" },
    { Time: "6:30 PM", Event: "Data Visualization", Location: "172" },
    { Time: "6:30 PM", Event: "Web Development", Location: "171" },
    { Time: "7:00 PM", Event: "Hacking Ends", Location: "Large Cafeteria" },
    { Time: "7:15 PM", Event: "Dinner", Location: "Large Cafeteria" },
    { Time: "7:15 PM", Event: "Judging Begins", Location: "" },
    { Time: "7:30 PM", Event: "Cup Stacking", Location: "Large Cafeteria" },
    { Time: "8:30 PM", Event: "Judging Finishes", Location: "" },
    { Time: "9:00 PM", Event: "Closing Ceremony", Location: "Auditorium" },
  ];

  return (
    <section id="schedule">
        <div className="max-w-4xl mx-auto my-8 p-4">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Schedule (subject to change)</h1>
        <div className="grid grid-cols-3 gap-4">
            {scheduleData.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-green-100 hover:bg-green-200 transition duration-300 transform hover:scale-105 ">
                <h2 className="text-lg font-bold underline cursor-default text-green-700 mb-2">{item.Time}</h2>
                <p className="text-green-700 cursor-default mb-1">{item.Event === "Hacking Starts" ? "Hacking Begins" : item.Event}</p>
                <p className="text-green-700 cursor-default">{item.Location}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default Schedule;
