import { Component } from "react";
import "./movies.css";
import Movie from "../movie/Movie";
import { movies } from "../constant/data";  // Import movies array

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movies, 
    };
  }

  render() {
    return (
      <main className="movie-list">
        {this.state.movieList.map((item) => (
          <Movie key={item.imdbID} item={item} />
        ))}
      </main>
    );
  }
}
