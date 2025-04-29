import "./About.css";
import bootstrapicon from "../../../public/bootstrap-icon.svg";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-cont">
        <div className="about-cont--intro">
          <h2 className="about-cont-intro--heading">About Me</h2>

          <p className="about-cont-intro--txt">
            I’m a Frontend Developer with a strong drive for crafting intuitive,
            accessible, and high-performance web applications. With hands-on
            experience in React.js, TypeScript, Redux, and Next.js, I specialize
            in building responsive user interfaces that deliver real value to
            users.
          </p>
          <p className="about-cont-intro--txt">
            I enjoy solving problems through code, collaborating with
            cross-functional teams, and constantly learning new technologies to
            stay ahead in a fast-evolving ecosystem. When I’m not coding, you’ll
            find me exploring design trends, tinkering with side projects, or
            digging into articles about the future of web development.
            <br />
            <br />
            Let’s build something great together.
          </p>
        </div>

        <div className="about-cont--experience">
          <h2 className="about-cont-experience--heading">Work Experience</h2>

          <div className="work-exp">
            <div className="role-cont">
              <h3 className="role-cont--role">Frontend Developer</h3>

              <button className="role-cont--contract">Full Time</button>
            </div>

            <div className="role-location--cont">
              <p className="role-employer">
                <div className="app-icon">
                  <i class="bi bi-building"></i>
                </div>
                Tabs
              </p>

              <p className="role-location">
                <div className="app-icon">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                Remote
              </p>

              <p className="role-duration">
                <div className="app-icon">
                  <i class="bi bi-calendar3"></i>
                </div>
                Nov 2024 - Present
              </p>
            </div>
          </div>

          <div className="work-exp">
            <div className="role-cont">
              <h3 className="role-cont--role">Frontend Developer</h3>

              <button className="role-cont--contract">Full Time</button>
            </div>

            <div className="role-location--cont">
              <p className="role-employer">
                <div className="app-icon">
                  <i class="bi bi-building"></i>
                </div>
                Retink
              </p>

              <p className="role-location">
                <div className="app-icon">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                Remote
              </p>

              <p className="role-duration">
                <div className="app-icon">
                  <i class="bi bi-calendar3"></i>
                </div>
                Sep 2022 - July 2023
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div className="about-cont--education">
          <h2 className="about-cont-edu--heading">Education</h2>

          <div className="edu">
            <div className="edu-cont">
              <h3 className="edu-cont--course">
                B.SC. Information and Communication Science
              </h3>

              <button className="edu-cont--contract">Full Time</button>
            </div>

            <div className="education-location--cont">
              <p className="school">
                <div className="app-icon">
                  <i class="bi bi-building"></i>
                </div>
                University of Ilorin
              </p>

              <p className="education-duration">
                <div className="app-icon">
                  <i class="bi bi-calendar3"></i>
                </div>
                Nov 2018 - Oct 2023
              </p>
            </div>
          </div>

          {/* <hr /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
