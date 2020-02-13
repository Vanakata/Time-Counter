import React from 'react';
import TimerCounter from './timer';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const TaskSlider = () => {

    return (
        <div className="countdown">
            <AwesomeSlider>
                <div>
                    <p className="tasks">Sport:</p>
                    <TimerCounter />
                    <hr />
                </div>
                <div>
                    <p className="tasks">Coding:</p>
                    <TimerCounter />
                    <hr />
                </div>
                <div>
                    <p className="tasks">Working:</p>
                    <TimerCounter />
                    <hr />
                </div>
                <div>
                    <p className="tasks">Rest:</p>
                    <TimerCounter />
                </div>
            </AwesomeSlider>
        </div>
    )



}

