import React, { Component } from 'react';
import TimerCounter from './components/timer';

class App extends Component {

  reset(){
    window.location.reload();
  }
  render() {

    return (
      <div>
        <span>Sport:</span><TimerCounter />
        <br/>
        <span>Coding:</span><TimerCounter />
        <br/>
        <span>Work:</span><TimerCounter />
        <br/>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
export default App;