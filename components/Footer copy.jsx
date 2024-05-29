import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#598863] w-full text-white text-center font-serif leading-8 py-5">
      <div className="flex justify-center items-center mb-4">
        <a href="" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="github.png" className="hover:scale-120 transition duration-350" width="55" height="55" alt="github" />
        </a>
        <span>&nbsp;</span>
        <a href="https://www.instagram.com/brhs.hacks/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="insta.png" className="hover:scale-120 transition duration-350" width="50" height="50" alt="insta" />
        </a>
      </div>
      <div id="footer_copyrt font-breulgroteska" className="text-base">
        Copyright © Hack BRHS
      </div>
      <div className="text-lg">
        <a href="https://mlh.io/privacy" target="_blank" rel="noopener noreferrer" className="text-white no-underline font-breulgroteska hover:font-bold mx-2">Privacy Policy</a>
        <span>|</span>
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="text-white font-breulgroteska no-underline hover:font-bold mx-2">Code of Conduct</a>
      </div>
    </footer>
  );
};

export default Footer;
