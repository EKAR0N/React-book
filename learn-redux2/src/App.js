import React, { Component } from "react";

import "./App.css";
import PaletteContainer from "./containers/PaletteContainer";
import WaitingListContainer from "./containers/WaitingListContainer";
import CounterContainder from "./containers/CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainder />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
