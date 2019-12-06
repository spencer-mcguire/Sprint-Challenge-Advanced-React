import React from "react";
import axios from "axios";
import { PlayerCards } from "./components/PlayerCards";
import { NavBar } from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log("ERRRRROR : ", err));
  }
  render() {
    return (
      <div className="App">
        <header data-testid="header">
          <NavBar />
        </header>
        <section className="card-container" data-testid="card-container">
          {this.state.data.map(i => (
            <PlayerCards key={i.id} data={i} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
