import "./Navbar.css";
import logo from "../../../public/dennis.dev.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid move">
          <a className="navbar-brand nav-img" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse yo" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-txt">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/technologies" className="nav-link">
                Tech Stack
              </Link>
              <Link to="/project" className="nav-link">
                Projects
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
