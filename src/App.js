import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      copy: "",
    };

    this.repetidor = this.repetidor.bind(this);
  }

  repetidor(e) {
    this.setState({
      copy: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          onChange={this.repetidor}
          placeholder="Empieza a escribir algo"
        />
        <p className="repeater">{this.state.copy}</p>
      </div>
    );
  }
}

export default App;
