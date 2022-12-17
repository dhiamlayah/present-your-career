import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import logo from '../assets/logo.svg'
class Navbar extends Component {
  render() {
    return (
      <div className="project__navbar">
        <div className="project__navbar--links">
         

          <div className="project__navbar--links_logo">
            <div className="project__navbar--links_img">
              <img src="images/Present.png" alt="a" />
            </div>
            <div className="project__navbar--links_Name">
              <div className="part1"><h1>p</h1></div>
              <div className="part2">
                <h2> resent</h2>
                <h3>Your career</h3>
              </div>
            </div>
          </div>





          <div className="project__navbar--links_container">
            <p>
              <Link to="/Home">Home</Link>
            </p>
            <p>
              <Link to="/Sign">Models</Link>
            </p>
            <p>
              <Link to="#possibility">Espace entreprise</Link>
            </p>
            <p>
              <Link to="#features">FAQ</Link>
            </p>
          </div>
        </div>
        <div className="project__navbar--sign">
          <Link to="/SignIn" id="SignIn">sign in :</Link>
          <button type="button">
            <Link to="/SignUp" className="SignUp"> sign up </Link>
          </button>
        </div>
        <div className="project__navbar--menu"></div>
      </div>
    );
  }
}

export default Navbar;
