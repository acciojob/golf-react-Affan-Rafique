import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    started: false,   // whether the ball should render
    left: 0           // ball's left position in px
  };

  componentDidMount() {
    // Listen for ArrowRight key presses
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Start button click -> show ball, hide button
  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  // Move ball right by 5px on ArrowRight
  handleKeyDown = (e) => {
    const code = e.keyCode || e.which;
    const isArrowRight = code === 39 || e.key === "ArrowRight";
    if (!this.state.started) return;
    if (isArrowRight) {
      this.setState((prev) => ({ left: prev.left + 5 }));
    }
  };

  // Decides whether to render the start button or the ball
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
        {/* Inline style controls dynamic position */}
        <div className="ball" style={{ left: `${left}px` }} />
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
