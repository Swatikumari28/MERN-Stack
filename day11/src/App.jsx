import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        console.log("Timer running state changed", isTimerRunning);

        let intervalId = null;
        if (isTimerRunning) {
            intervalId = setInterval(() => {
                // setTimeInSec((prev) => prev + 1);
                setTimeInSec((prev) => {
                    return prev + 1;
                });
            }, 1000); //st1
        }

        return () => {
            console.log("Cleaning up interval...");
            clearInterval(intervalId);
        };
    }, [isTimerRunning]);

    const handlePause = () => {
        if (isTimerRunning) {
            setIsTimerRunning(false);
        }
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
    };

    return (
        <div>
            <h2>00:00:{timeInSec}</h2>
            {isTimerRunning ? <button onClick={handlePause}>PAUSE</button> : <button onClick={handlePlay}>PLAY</button>}
        </div>
    );
};

export default App;