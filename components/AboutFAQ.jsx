import React, { useState } from 'react';


const AboutFAQ = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const openWin = () => {
    window.open("https://linktr.ee/brhacks");
  };

  return (
    <div className="bodycls">
      <div className="headercls">
        <header className="about">ABOUT US.</header>
      </div>
      <div className="bodycls">
        <div><img src="greencircle.png" className="logo" alt="Logo" /></div>
        <div className="para">
          <p>In the upcoming Fall of 2023, the C.O.D.E. Club is all set to host the Bridgewater-Raritan HS Hackathon, a
            vibrant, full-day, in-person event uniting over 100 high school students from across New Jersey. This hackathon
            has received official approval from the BRHS administration and is currently in the meticulous planning stages by
            the CODE club team.</p>
          <p>
            During this exciting event, participants will join forces in teams to tackle a diverse range of STEM-related
            projects aimed at benefiting their community. These endeavors include the development of advanced computing
            solutions, the formation of mini-startup companies, the creation of innovative market prediction systems, the
            development of mobile apps to support diabetes management, and the design of environmentally-conscious
            solutions.
          </p>
        </div>
        <br /><br /><br /><br />

        <div>
          <img src="green.png" className="picture" width="1180" height="300" alt="Event" />
        </div>
        <br /><br /><br /><br />
        <div><img src="green2.png" className="imagetwo" width="400" height="300" alt="Event 2" /></div>
        <div className="para2">
          <p>In essence, this hackathon serves as a platform for students to unleash their creativity and push the
            boundaries of their imagination, all while achieving their goals through unwavering dedication and hard work. Beyond the main
            competition, CODE Club will also collaborate with other computer science clubs at BRHS to offer a variety of
            engaging workshops.</p>
          <p> During this exciting event, participants will join forces in teams to tackle a diverse range of
            STEM-related projects aimed at benefiting their community. These endeavors include the development of advanced
            computing solutions, the formation of mini-startup companies, the creation of innovative market prediction systems,
            the development of mobile apps to support diabetes management, and the design of environmentally-conscious solutions.</p>
        </div>
        <br /><br /><br />
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
      <div id="page-container">
        <div id="content-wrap">
          {/* all other page content */}
        </div>
        <footer id="footer" className="footercls">
          <div className="footer_img_cls">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="github.png" className="git_css" width="55" height="55" alt="github" />
            </a>
            <span>&nbsp;</span>
            <a href="https://www.instagram.com/brhs.hacks/" target="_blank" rel="noopener noreferrer">
              <img src="insta.png" className="insta_css" width="50" height="50" alt="insta" />
            </a>
          </div>
          <div id="footer_copyrt">
            Copyright © Hack BRHS
          </div>
          <div className="footer_privacy">
            <a href="https://mlh.io/privacy" target="_blank" rel="noopener noreferrer" className="footer_links">Privacy Policy</a>
            <span>|</span>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="footer_links">Code of Conduct</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutFAQ;
