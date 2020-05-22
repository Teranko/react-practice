import React from 'react';

class StopWatch extends React.Component {
    render(){
        return(
            <div className="stopwatch">
                <span class="stopwatch-timer">00.00.00</span>
                <button
                    type="button"
                    onClick={ () => console.log('start')}
                >
                    Start
                </button>
                <button
                    type="button"
                    onClick={ () => console.log('stop')}
                >
                    Stop
                </button>
            </div>
        )
    }
}

export default StopWatch;