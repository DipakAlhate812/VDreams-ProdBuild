import React from "react";
import "../styles/social-media-links.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <>
        <h2 style={{color:"white", margin:"18px"}}>Get Connected with us!</h2>
    
    <div className="social-media-links">

      {/* <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
      </a> */}
      <a
        href="https://www.instagram.com/vdreams_products"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        Follow us on Instagram for updates <FaInstagram />
      </a>

      <a
        href="https://www.youtube.com/@Vdreams-products"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        Subscribe on Youtube <FaYoutube />
      </a>
      <a
        href="mailto:victoriesoverdreams@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        Reach out to us on <FaEnvelope />
      </a>
    </div>
    </>
  );
};

export default SocialMediaLinks;
