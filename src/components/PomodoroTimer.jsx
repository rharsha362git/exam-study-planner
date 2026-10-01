import { useEffect, useState } from "react";
import "./PomodoroTimer.css";

function PomodoroTimer({ subject, onComplete }) {
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
  clearInterval(timer);
  setIsRunning(false);
  onComplete();
  alert("Study session completed!");
  return 25 * 60;
}

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(10);
  };

  return (
    <div className="pomodoro">
      <h2>Pomodoro Timer</h2>
      {subject && <h3>Studying: {subject}</h3>}

      <div className="timer">
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </div>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;