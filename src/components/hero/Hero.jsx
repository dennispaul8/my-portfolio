import "./Hero.css";
import img from "../../../public/avatar.svg";
import { Link } from "react-router-dom";
import githubIcon from "../../../public/github-icon.png";
import twitterIcon from "../../../public/twitter-icon.png";
import linkedinIcon from "../../../public/linkedin-icon.png";

export const Hero = () => {
  return (
    <>
      <div className="hero-cont">
        <div className="hero-txt">
          <h1>Front-End React Developer</h1>
          <p className="hero-txt--about">
            Hi, I'm Oluwajuwonlo. A Front-end Developer based in Nigeria. <br />{" "}
            Let’s build something great together.{" "}
          </p>

          <div className="social-cont">
            <p className="social-txt">
              Socials |
              <span className="social-cont--icon">
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
              </span>
            </p>
          </div>
        </div>

        <div className="hero-img-cont">
          <img src={img} alt="avatar" />
        </div>
      </div>
    </>
  );
};
