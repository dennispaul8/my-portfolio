import "./Footer.css";
import logo from "../../../public/dennis.dev.png";
import githubIcon from "../../../public/github-icon.png";
import twitterIcon from "../../../public/twitter-icon.png";
import linkedinIcon from "../../../public/linkedin-icon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <hr className="hr" />
        <div className="contact-info">
          <div className="logo-cont">
            <img src={logo} alt="" />
          </div>

          <div className="contact-info--txt">
            <p className="phone-no">+234 806 112 4910</p>

            <p className="email-address">oluwajuwonloogunyemi@gmail.com</p>
          </div>

          <div className="social-icons--cont">
            <Link to="https://www.github.com/dennispaul8" target="_blank">
              <img src={githubIcon} alt="" />
            </Link>
            <Link to="https://www.twitter.com/dennis_icode" target="_blank">
              <img src={twitterIcon} alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/oluwajuwonlo-ogunyemi/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="" />
            </Link>
          </div>
        </div>
        {/* <p>©2024. All rights are reserved.</p> */}
      </div>
    </>
  );
};
