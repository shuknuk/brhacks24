// FAQ.jsx

import React, { useState } from 'react';

const FAQ = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const openWin = () => {
    window.open("https://linktr.ee/brhacks");
  };

  return (
    <div className="bodycls">
      <div>
        <table className="Questions">
          <thead>
            <tr>
              <th className="faq">FAQ</th>
            </tr>
          </thead>
          <tbody className="Question1">
            {[
              {
                question: "Visit Our LinkTree!",
                answer: <button className="visit" onClick={openWin}>Visit our LinkTree</button>,
              },
              { question: "What time does registration start?", answer: "Registration starts at 9AM." },
              { question: "Where is the Hackathon?", answer: "The Hackathon will be hosted in the main building of Bridgewater-Raritan High School. The address is: 600 Garretson Road, Bridgewater, NJ, 08807." },
              { question: "When will the Hackathon be?", answer: "Fall of 2023" },
              { question: "Where should I register?", answer: <a className="rrr" href="https://docs.google.com/forms/d/e/1FAIpQLSdKk9JREyQIzhI4Y4_G-xd2BC8R-eBEEif5zrfqQ_UY4yd8TA/viewform">Register Here!</a> },
              { question: "What should I bring?", answer: "Bring your computer, charger, snacks, and any other electronics you may need." },
              { question: "Is there a fee for participation?", answer: "No, everything (including food) is free, thanks to our wonderful sponsors." },
              { question: "Can I participate if I am new to Hackathon?", answer: "Yes! We will have plenty of beginner-friendly events, workshops, and competitions for you to join." },
              { question: "What can I learn?", answer: "We have a variety of events rich with content. These events include topics from computer science, business, psychology, and more. You can check out our events below on our website." },
              { question: "Do I need a team?", answer: "You are not required to have a team. We will have opportunities for you during the competition to network and form your own teams at the Hackathon." },
              { question: "Will there be food?", answer: "Yes! We will have snacks and drinks throughout the Hackathon. We will also serve lunch and dinner." },
              { question: "What prizes will there be?", answer: "To be decided, but they will be very well worth it!" },
              { question: "Who can attend?", answer: "Any high schooler is free to join regardless of where you are." },
              { question: "I have another question.", answer: "We would be happy to help you. You can contact us with your questions at brhacks.team@gmail.com." },
            ].map((item, index) => (
              <tr className="row1" key={index}>
                <td className="hover-underline-animation">
                  <button className="accordion" onClick={() => togglePanel(index)}>{item.question}</button>
                  <div className="panel" style={{ display: activePanel === index ? "block" : "none" }}>
                    {item.answer}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQ;
