import React, { Component } from "react";
import "../styles.css"; // use "./styles.css" if the file sits in the same folder

class App extends Component {
  constructor(props) {
    super(props);
    // initial state (no class fields)
    this.state = {
      started: false,
      left: 0
    };
    // bind methods (no arrow class properties)
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // show ball & hide start button
  buttonClickHandler() {
    this.setState({ started: true });
  }

  // move ball 5px to the right on ArrowRight (keyCode 39)
  handleKeyDown(e) {
    const code = e.keyCode || e.which;
    if (!this.state.started) return;
    if (code === 39) {
      this.setState(prev => ({ left: prev.left + 5 }));
    }
  }

  renderChoice() {
    const { started, left } = this.state;

    if (!started) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div className="playground">
        {/* inline left controls position; className must be 'ball' */}
        <div
          className="ball"
          style={{ position: "absolute", left: `${left}px` }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="game">
        <h1 className="title">Golf Game</h1>
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
