import React, { Component } from 'react';

import './App.css';
import PaletteContainer from './containers/PaletteContainer';
import WaitingList from './components/WaitingList';
import CounterContainder from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainder />
        <WaitingList />
      </div>
    );
  }
}

export default App;
