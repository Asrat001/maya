import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <div >
      <div className="footer">
        <BsInstagram size={25} className='icon'/>
        <FiGithub size={25} className='icon'/> 
        <FiLinkedin size={25} className='icon'/>
        <BsTelegram size={25} className='icon'/>
        <h3>Maya Production Digital 
                                 Archive</h3>

            <p>© 2022 Maya Production. All Rights Reserved. Design By <a href="https://t.me/+pyTZ-9r-TXs4MWE0" target='_blank'>AADH-Groups</a></p>
      </div>
      </div>
    
  );
}

export default Footer;
