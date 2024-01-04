import React, { Component } from "react";
import Student from "./components/Student";
import "./index.js";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <Student />
      </div>
    );
  }
}

export default App;
