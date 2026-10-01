import "./Dashboard.css";

function Dashboard({
  subjects,
  completedSessions,
  totalSessions,
  tasks,
}) {
  const totalSubjects = subjects.length;

  const totalStudyHours = subjects.reduce(
    (total, item) => total + Number(item.hours),
    0
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const taskProgress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const studyProgress =
    totalSessions === 0
      ? 0
      : Math.round(
          (completedSessions / totalSessions) * 100
        );

  return (
    <div className="dashboard">
      <h2>Study Dashboard</h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Subjects</h3>
          <h1>{totalSubjects}</h1>
        </div>

        <div className="card">
          <h3>Study Hours</h3>
          <h1>{totalStudyHours}</h1>
          <p>hours planned</p>
        </div>

        <div className="card">
          <h3>Study Sessions</h3>
          <h1>{completedSessions}</h1>
          <p>completed</p>
        </div>

        <div className="card">
          <h3>Study Progress</h3>
          <h1>{studyProgress}%</h1>
          <p>sessions completed</p>
        </div>

        <div className="card">
          <h3>Tasks Completed</h3>
          <h1>{completedTasks}</h1>
          <p>of {tasks.length} tasks</p>
        </div>

        <div className="card">
          <h3>Task Progress</h3>
          <h1>{taskProgress}%</h1>
          <p>tasks completed</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;