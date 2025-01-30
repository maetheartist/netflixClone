import { Component } from "react";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Movies from "./component/movies/Movies";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
       <Navbar /> 
        <Header />
        <Movies />
        <Footer />
      </div>
    );
  }
}
