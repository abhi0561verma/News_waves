import "../App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import insta from "./img/insta.png";
import github from "./img/github.png";
import lkin from "./img/linkedin.png";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News_waves
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0 mx-2 ">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div className="icon-link">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/abhi0561verma"
                  className="link"
                >
                  <img src={github} alt="github" className="icon mx-1" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/abhishek-kumar-verma-342575213/"
                  className="link"
                >
                  <img src={lkin} alt="linkedIn" className="icon mx-1" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="/kuch_nahi_abhi"
                  className="link"
                >
                  <img src={insta} alt="insta" className="icon mx-1" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
