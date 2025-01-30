import { Component } from "react";
import "./navbar.css";
import { navigationLink } from "../constant/data";
import Button from "../button/Button";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">ZT Movies</div>
          <ul className="navlist">
            {navigationLink.map((link) => {
              return (
                <li key={link.text} className="nav-item">
                  <a href={link.href} className="navlink">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="btn">
            <Button smallBtn="small-btn">Login </Button>
            <Button mediumBtn="btn-lg">Sign Up </Button>
          </div>
        </div>
      </nav>
    );
  }
}
