import "./ProgressTracker.css";
function ProgressTracker({ completed, total }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-tracker">
      <h2>Study Progress</h2>

      <p>
        Sessions Completed: <strong>{completed}</strong>
      </p>

      <p>
        Total Study Sessions: <strong>{total}</strong>
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <h3>{percentage}% Completed</h3>
    </div>
  );
}

export default ProgressTracker;