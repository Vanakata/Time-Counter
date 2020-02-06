import React from 'react';

class TimerCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,

        }

        this.startCounting = this.startCounting.bind(this);
        this.stopCounting = this.stopCounting.bind(this);
    }


    startCounting = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.refs.start.setAttribute("disabled", "disabled");
        this.refs.pause.removeAttribute("disabled", "disabled");


        this.interval = setInterval(() => {

            if (this.state.seconds >= 0 && this.state.seconds < 59) {

                this.setState({ seconds: this.state.seconds + 1 });
            } else {

                if (this.state.minutes >= 0 && this.state.minutes < 59) {

                    this.setState({
                        seconds: 0,
                        minutes: this.state.minutes + 1
                    })
                } else {
                    this.setState({
                        minutes: 0,
                        hours: this.state.hours + 1
                    })
                }
            }

        }, 1000);


    }

    stopCounting = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.refs.start.removeAttribute("disabled", "disabled");
        this.refs.pause.setAttribute("disabled", "disabled");
        clearInterval(this.interval);

    }

    render() {

        return (<div>
            <div>
                <button ref="start" onClick={this.startCounting}>
                    Start
            </button>
                <button ref="pause" onClick={this.stopCounting}>Pause</button>
            </div >
            <div>
                <span>{this.state.hours < 10 ? '0' + this.state.hours : this.state.hours}</span>:
                <span>{this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}</span>:
                <span>{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}</span>
            </div>
        </div>)
    }

}
export default TimerCounter;