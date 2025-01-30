import { Component } from "react";
import { footerList } from "../constant/data";
import Button from "../button/Button";
import "../header/header.css";
import "./footer.css";
export default class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Ready to Watch? Enter your email to create or restart your mentorship.
        </p>
        <div
          className="searchbox footer-search"
          style={{ textAlign: "center" }}
        >
          <input
            type="email"
            placeholder="Enter email"
            className="search-input"
          />
          <Button btnSearch="btn-search">Get Started</Button>
        </div>

        <div className="footer">
          <ul className="footer-list">
            {footerList.map((list) => {
              return (
                <li key={list.id}>
                  {" "}
                  <a href={list.href}>{list.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    );
  }
}
