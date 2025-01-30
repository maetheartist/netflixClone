import { Component } from "react";
import "./searchbar.css";

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }

  handleChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchQuery: searchString });

    // Call the parent function to update search state in Movies
    this.props.onSearchChange(searchString);
  };

  render() {
    return (
      <input
        type="search"
        className="search-input"
        placeholder="Search movies..."
        value={this.state.searchQuery}
        onChange={this.handleChange}
      />
    );
  }
}
