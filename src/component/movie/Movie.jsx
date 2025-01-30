import { Component } from "react";
import "./movie.css";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.item);
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={this.props.item.Poster} alt="picture of movie" />
        </div>
        <h3 className="movie-title"> {this.props.item.name}</h3>
        <h4 className="movie-year">{this.props.item.username}</h4>
      </div>
    );
  }
}
