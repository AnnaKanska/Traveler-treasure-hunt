import React from "react";
import ReactDOM from "react-dom";
import TaskOne from "../views/task_one";
require("./style.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      error: false,
      task: false,
      email: "",
      success: false,
      time: null
    };
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  addEmail(e) {
    let currentTime = new Date().toString();
    this.setState({
      task: true,
      email: this.state.input,
      time: currentTime
    });
  }

  render() {
    console.log("Game has started at", this.state.time);
    if (this.state.task) {
      return <TaskOne />;
    } else {
      return (
        <div>
          <div className="title">
            <ul className="title-grid">
              <li className="letter color1">T</li>
              <li className="letter">R</li>
              <li className="letter color2">A</li>
              <li className="letter color4 ">V</li>
              <li className="letter">E</li>
              <li className="letter color1">L</li>
              <li className="letter">E</li>
              <li className="letter color3">R</li>
              <li className="letter">T</li>
              <li className="letter color3">R</li>
              <li className="letter">E</li>
              <li className="letter color1">A</li>
              <li className="letter color2">S</li>
              <li className="letter">U</li>
              <li className="letter color2">R</li>
              <li className="letter color1">E</li>
              <li className="letter color1">
                <img
                  className="icon"
                  src="https://image.flaticon.com/icons/svg/1078/1078005.svg"
                />
              </li>
              <li className="letter color2">
                <img
                  className="icon"
                  src="https://image.flaticon.com/icons/svg/71/71423.svg"
                />
              </li>
              <li className="letter color3">H</li>
              <li className="letter">U</li>
              <li className="letter color3">N</li>
              <li className="letter color1">T</li>
              <li className="letter">
                <img
                  className="icon"
                  src="https://image.flaticon.com/icons/svg/945/945967.svg"
                />
              </li>
              <li className="letter color4 ">
                <img
                  className="icon"
                  src="https://image.flaticon.com/icons/svg/685/685775.svg"
                />
              </li>
            </ul>
          </div>
          <div />
          <div className="email">
            <div>
              <input
                type="email"
                placeholder="your email here"
                required
                onChange={e => this.updateInput(e)}
              />
            </div>
            <div>
              <button onClick={e => this.addEmail(e)}>start</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
