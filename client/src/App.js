import React from "react";
import axios from "axios";
import { PlayerCards } from "./components/PlayerCards";
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
        <header>
          <h1>Most Searched Womans Soccer Players</h1>
        </header>
        {this.state.data.map(i => (
          <PlayerCards key={i.id} data={i} />
        ))}
      </div>
    );
  }
}

export default App;
