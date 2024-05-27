// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
