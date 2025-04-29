import "./Contact.css";
import { Navbar } from "../../components/navbar/Navbar";

import { Footer } from "../../components/footer/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-cont">
        <p className="contact-txt">
          For any questions please mail us:
          <br />{" "}
          <span className="email-txt">oluwajuwonloogunyemi@gmail.com</span>
        </p>
      </div>
      <Footer />
    </>
  );
};
