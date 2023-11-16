import React from 'react';
import '../Styles/Footer.scss';
import facebookLogo from './Icons/facebook.svg';
import instagramLogo from './Icons/instagram.svg';
import twitterLogo from './Icons/twitter.svg';
import tiktokLogo from './Icons/tiktok.svg';

const Footer = () => {
  return (
    <section className="footer-container">
      <ul>
        <li>Home</li>
        <li>Page 1</li>
        <li>Page 2</li>
      </ul>
      <hr />
      <div className="social-container">
        <img src={facebookLogo} alt="facebookLogo" className="social_icon" />
        <img src={instagramLogo} alt="instagramLogo" className="social_icon" />
        <img src={twitterLogo} alt="twitterLogo" className="social_icon" />
        <img src={tiktokLogo} alt="tiktokLogo" className="social_icon" />
      </div>
      <p>© Logo, Inc.</p>
    </section>
  );
};

export default Footer;
