// FAQ.jsx

import React, { useState } from "react";
import Image from "next/image";
import qanda from "../public/qanda.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const linkTree = () => {
    window.open("https://linktr.ee/brhacks");
  };

  const address = () => {
    window.open("https://maps.app.goo.gl/Ew9QnzCTgM2tKXAf7");
  };

  const faqData = [
    {
      question: "Visit Our LinkTree!",
      answer: (
        <button
          className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800"
          onClick={linkTree}
        >
          Visit our LinkTree
        </button>
      ),
    },
    {
      question: "What time does registration start?",
      answer: "Registration starts at 9AM.",
    },
    {
      question: "Where is the Hackathon?",
      answer: (
        <button
          className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800"
          onClick={() => address("https://maps.app.goo.gl/Ew9QnzCTgM2tKXAf7")}
        >
          600 Garretson Road, Bridgewater, NJ, 08807
        </button>
      ),
    },
    {
      question: "When will the Hackathon be?",
      answer: "Fall of 2024",
    },
    {
      question: "Where should I register?",
      answer: "Coming soon!",
      // answer: <a className="text-green-700 font-bold hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdKk9JREyQIzhI4Y4_G-xd2BC8R-eBEEif5zrfqQ_UY4yd8TA/viewform">Register Here!</a>
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your computer, charger, snacks, and any other electronics you may need.",
    },
    {
      question: "Is there a fee for participation?",
      answer:
        "No, everything (including food) is free, thanks to our wonderful sponsors.",
    },
    {
      question: "Can I participate if I am new to Hackathon?",
      answer:
        "Yes! We will have plenty of beginner-friendly events, workshops, and competitions for you to join.",
    },
    {
      question: "What can I learn?",
      answer:
        "We have a variety of events rich with content. These events include topics from computer science, business, psychology, and more. You can check out our events below on our website.",
    },
    {
      question: "Do I need a team?",
      answer:
        "You are not required to have a team. We will have opportunities for you during the competition to network and form your own teams at the Hackathon.",
    },
    {
      question: "Will there be food?",
      answer:
        "Yes! We will have snacks and drinks throughout the Hackathon. We will also serve lunch and dinner.",
    },
    {
      question: "What prizes will there be?",
      answer: "To be decided, but they will be very well worth it!",
    },
    {
      question: "Who can attend?",
      answer: "Any high schooler is free to join regardless of where you are.",
    },
    {
      question: "I have another question.",
      answer:
        "We would be happy to help you. You can contact us with your questions at brhacks.team@gmail.com",
    },
  ];

  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto my-8 p-4">
        <div className="flex flex-col items-center mb-6">
          <Image src={qanda} alt="Q&A" className="h-16 w-16 mb-2" />
          <h1 className="text-3xl font-bold text-green-700">FAQ</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left p-4 bg-green-200 rounded hover:bg-green-300 focus:outline-none group relative"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right"></span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-screen p-4 bg-green-50"
                    : "max-h-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
