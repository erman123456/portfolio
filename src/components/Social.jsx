import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/erman.sibarani/" },
  { Social: <FaTwitter />, link: "https://twitter.com/SibaraniErman/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/erman_sibarani/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/erman-sibarani-1a228b1a2/" },
  { Social: <FaGithub />, link: "https://github.com/erman123456" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
