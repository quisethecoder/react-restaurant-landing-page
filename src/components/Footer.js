import React from "react"
import Logo from "../Assets/Logo.svg";
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
  return <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Website Logo"/>
                </div>
            </div>
  </div>;  
};

export default Footer