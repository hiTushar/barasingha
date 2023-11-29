import React from "react";
import "./Footer.scss";
import user_logo from "../media/Extracted-Head 1.svg";
import ellipse from "../media/Ellipse 1.svg";
import x_icon from "../media/x-icon.svg";
import insta from "../media/instagram.svg";
import fb from "../media/facebook.svg";
import x from "../media/x.svg";
import { Link } from "react-router-dom";

export const Footer = ({ setShowContactUsModal = () => { } }) => {
  return (
    <div className="footer_container">
      <div className="footer_main">
        <div className="contents">
          <div className="section1">
            <div className="footer_category">
              <div className="links_column">Platform</div>
              <div className="links_container">
                <div className="link">Plans & Pricing</div>
              </div>
            </div>
            <div className="footer_category">
              <div className="links_column">Company</div>
              <div className="links_container">
                <Link to="/about" className="link">About Us</Link>
                <Link to="/career" className="link">Work With Us</Link>
                <Link to="/casestudy" className="link">Blog & News</Link>
              </div>
            </div>
            <div className="footer_category">
              <div className="links_column">Resources</div>
              <div className="links_container">
                <div className="link" onClick={() => setShowContactUsModal(true)}>Free Demo</div>
              </div>
            </div>
            <div className="footer_category">
              <div className="links_column">Legal</div>
              <div className="links_container">
                <div className="link">Terms of Service</div>
                <div className="link"><Link to="/PrivacyPolicy">Privacy Policy</Link></div>
              </div>
            </div>
          </div>
          <div className="tweet_container">
            <div className="tweet_sec_1">
              <div className="user_details">
                <div className="profile_picture_container">
                  <div className="ellipse">
                    <img src={ellipse} alt="ellipse" title="ellipse" />
                    <div className="profile_pic">
                      <img src={user_logo} alt="user_logo" title="user_logo" />
                    </div>
                  </div>
                </div>
                <div className="user">
                  <div className="name">Barasingha</div>
                  <div className="id">@barasingha_live</div>
                </div>
              </div>
              <div className="x_icon">
                <img src={x_icon} alt="x_icon" title="x_icon" />
              </div>
            </div>
            <div className="tweet_sec_2">
              We're just announced new feature that would help you increase your
              experience of using maxwell!
            </div>
          </div>
        </div>

        <div className="botton_bar">
          <div className="footer_line"></div>
          <div className="footer">
            <div className="barasingha">
              <div>
                <img src={user_logo} alt="user_logo" title="user_logo" />
              </div>
              <div className="year">Barasingha, 2023.</div>
            </div>
            <div className="social_logo">
              <div className="social_icon">
                <div className="logo_container">
                  <img src={insta} alt="insta" title="insta" />
                </div>
              </div>
              <div className="social_icon">
                <div className="logo_container">
                  <img src={fb} alt="fb" title="fb" />
                </div>
              </div>
              <div className="social_icon">
                <div className="logo_container">
                  <img src={x} alt="x" title="x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
