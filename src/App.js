import React, { Component } from 'react';
import TimerCounter from './components/timer';

class App extends Component {

  reset(){
    window.location.reload();
  }
  render() {

    return (
      <div>
        <span><strong>Sport:</strong></span><TimerCounter />
        <br/>
        <span><strong>Coding:</strong></span><TimerCounter />
        <br/>
        <span><strong>Work:</strong></span><TimerCounter />
        <br/>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
export default App;