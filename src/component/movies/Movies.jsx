import { Component } from "react";
import "./movies.css";
import Movie from "../movie/Movie";
// import { movies } from "../constant/data";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
        // console.log(response);
      })
      .then((movies) => {
        this.setState(() => {
          return { movieList: movies };
        });
      });
  }

  render() {
    return (
      <main className="movie-list">
        {this.state.movieList.map((item) => {
          return <Movie key={item.id} item={item} />;
        })}
      </main>
    );
  }
}
