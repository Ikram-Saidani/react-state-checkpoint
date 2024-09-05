import React, { Component } from "react";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    Person: {
      fullName: "Ahmed",
      bio: "I am a student",
      imgSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      profession: "student",
    },
    shows: false,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ ...this.state, timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            width: "100px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "50px",
          }}
          onClick={() =>
            this.setState({ ...this.state, shows: !this.state.shows })
          }
        >
          Show
        </button>
        <div>{this.state.shows && <Profile person={this.state.Person} />}</div>
        <h1>
          Timer : {this.state.timer}
        </h1>
        <h2 style={{ color: "red" }}>{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}
