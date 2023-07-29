import "./Newsletter.scss";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  
  
  return (
    <div className="Newsletter" id="Newsletter">
      <div className="news-content">
        <h6>NEWSLETTER</h6>
        <h3>sign up for latest update and offers</h3>
        <div className="form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">Will be used according to our Privacy Policy</div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={16} />
          </div>
          <div className="icon">
            <FaInstagram size={16} />
          </div>
          <div className="icon">
            <FaTwitter size={16} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
