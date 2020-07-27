import React, { Component } from "react";
import Products from "./Products";
import Cart from "./Cart";
require("../App.css");

export class App extends Component {
  render() {
    return (
      <div className="MainPage">
        <Products />
        <Cart />
      </div>
    );
  }
}

export default App;
