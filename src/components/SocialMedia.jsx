import React from 'react';

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF , FaXTwitter, FaGithubAlt } from 'react-icons/fa6';

const handleLinkClick = (event, url) => {
  event.preventDefault();
  window.location.href = url;
};

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={(e) => handleLinkClick(e, process.env.REACT_APP_LINKEDIN_URL)}>
      <BsLinkedin />
    </div>
    <div onClick={(e) => handleLinkClick(e, process.env.REACT_APP_TWITTER_URL)}>
      <FaXTwitter />
    </div>
    <div onClick={(e) => handleLinkClick(e, process.env.REACT_APP_FACEBOOK_URL)}>
      <FaFacebookF />
    </div>
    <div onClick={(e) => handleLinkClick(e, process.env.REACT_APP_INSTAGRAM_URL)}>
      <BsInstagram />
    </div>
    <div onClick={(e) => handleLinkClick(e, process.env.REACT_APP_GITHUB_URL)}>
      <FaGithubAlt />
    </div>
  </div>
);

export default SocialMedia;
