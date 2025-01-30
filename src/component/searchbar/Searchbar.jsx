import { Component } from "react";
import "./searchbar.css";

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }

  render() {
    console.log(this.state.searchQuery);
    return (
      // <div>
      <input
        type="search"
        className="search-input"
        placeholder="search movies"
        onChange={(event) => {
          const searchString = event.target.value;
          this.setState(() => {
            return { searchQuery: searchString };
          });
        }}
      />
      // </div>
    );
  }
}
