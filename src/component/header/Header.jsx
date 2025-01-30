import { Component } from "react";
import Searchbar from "../searchbar/Searchbar"
import "./header.css";
import Button from "../button/Button";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Unlimited Movies and More</h1>
          <p className="header-subtitle">Watch anywhere, Cancel anytime</p>
          <p>Ready to watch? Search your favorite movie</p>
          <div className="searchbox" style={{ textAlign: "center" }}>
            <Searchbar />
            <Button mediumBtn="btn-lg" btnSearch="btn-search">
              {" "}
              Search
            </Button>
          </div>
        </div>
      </header>
    );
  }
}
