import { Component } from "react";
import "./button.css";

export default class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <button
        className={`btn ${this.props.smallBtn} ${this.props.mediumBtn} ${this.props.btnSearch}`}
      >
        {this.props.children}
      </button>
    );
  }
}
