import React, { Component } from 'react';
import TimerCounter from './components/timer';
import Slider from '@farbenmeer/react-spring-slider';
import './App.css';

class App extends Component {

  reset() {
    window.location.reload();
  }
  render() {

    return (
      <div className="wrapper">
        <div className="countdown">
          <p className="tasks">Sport:</p>
          <TimerCounter />
          <hr />
          <p className="tasks">Coding:</p>
          <TimerCounter />
          <hr />
          <p className="tasks">Working:</p>
          <TimerCounter />
          <hr />
          <p className="tasks">Rest:</p>
          <TimerCounter />
        </div>
        <button id="reset" onClick={this.reset}>Reset</button>
      </div>)
  }
}
export default App;