import React, { Component } from 'react';
import {TaskSlider} from './components/slider';
import 'react-awesome-slider/dist/styles.css';

import './App.css';

class App extends Component {

  reset() {
    window.location.reload();
  }
  render() {
  return (
    <div className="wrapper">
      <TaskSlider/>
      <button id="reset" onClick={this.reset}>Reset</button>
    </div>)


  }

}
export default App;

