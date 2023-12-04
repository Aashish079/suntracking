import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTimeUnit = unit => unit < 10 ? `0${unit}` : unit;

    return (
        <div className="clock-container">
            <div className="clock">
                <div id="Date">
                    {currentTime.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <ul>
                    <li id="hours">{formatTimeUnit(currentTime.getHours())}</li>
                    <li id="point">:</li>
                    <li id="min">{formatTimeUnit(currentTime.getMinutes())}</li>
                    <li id="point">:</li>
                    <li id="sec">{formatTimeUnit(currentTime.getSeconds())}</li>
                </ul>
            </div>
        </div>
    );
}

export default Clock;
