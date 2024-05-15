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
  { Social: <FaGithub />, link: "https://github.com/erman123456" },,
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://www.linkedin.com/in/erman-sibarani-1a228b1a2/"
              target="_blank"
              rel="noreferrer"
            >
              Erman Sibarani
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
