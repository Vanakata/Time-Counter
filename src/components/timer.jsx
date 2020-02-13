import React from 'react';


class TimerCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
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
                    if (this.state.hours >= 0 && this.state.hours < 24) {

                        this.setState({
                            minutes: 0,
                            hours: this.state.hours + 1
                        })
                    } else {
                        this.setState({
                            hours: 0,
                            days: this.state.days + 1
                        })
                    }
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

        return (
            
            <div>
                <div className="cd-box">
                    <p className="numbers days">{this.state.days < 10 ? '0' + this.state.days : this.state.days}</p>
                    <p className="strings timeRefDays">Days:</p>
                </div >
                <div className="cd-box">
                    <p className="numbers hours">{this.state.hours < 10 ? '0' + this.state.hours : this.state.hours}</p>
                    <p className="strings timeRefHours">Hours:</p>
                </div >
                <div className="cd-box">
                    <p className="numbers minutes">{this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}</p>
                    <p className="strings timeRefMinutes">Minutes:</p>
                </div>
                <div className="cd-box">
                    <p className="numbers seconds">{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}</p>
                    <p className="strings timeRefSeconds">Seconds:</p>
                </div>
                <div className="buttons">
                    <button id="start" ref="start" onClick={this.startCounting}>Start</button>
                    <button id="pause" ref="pause" onClick={this.stopCounting}>Pause</button>
                </div>
            </div>
            
        )
    }

}
export default TimerCounter;