import "./TaskManager.css";

function TaskManager({ tasks, setTasks }) {
  const addTask = () => {
    const taskName = prompt("Enter your study task:");

    if (!taskName || taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="task-manager">
      <h2>Study Tasks</h2>

      <button onClick={addTask}>+ Add Task</button>

      <p className="task-summary">
        Completed: {completedTasks} / {tasks.length}
      </p>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No study tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              className={`task-card ${
                task.completed ? "completed" : ""
              }`}
              key={task.id}
            >
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <span>{task.name}</span>
              </div>

              <button
                className="delete-task"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskManager;