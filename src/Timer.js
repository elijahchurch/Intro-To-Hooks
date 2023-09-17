import React from "react";
import useTimer from "./hooks/useTimer";

function Timer() {
    const [isActive, timer, setIsActive] = useTimer();

    return (
        <React.Fragment>
            <h1>{timer}</h1> 
            <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
        </React.Fragment>
    );
}

export default Timer;