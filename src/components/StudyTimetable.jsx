import "./StudyTimetable.css";

function StudyTimetable({ onStart }) {
  const timetable = [
    {
      time: "9:00 AM - 10:00 AM",
      subject: "Mathematics",
      task: "Practice Problems",
    },
    {
      time: "11:00 AM - 12:00 PM",
      subject: "Physics",
      task: "Revise Important Concepts",
    },
    {
      time: "2:00 PM - 3:00 PM",
      subject: "Programming",
      task: "Practice Coding",
    },
    {
      time: "5:00 PM - 6:00 PM",
      subject: "Database Management Systems",
      task: "SQL Practice",
    },
  ];

  return (
    <div className="timetable">
      <h2>Today's Study Timetable</h2>

      {timetable.map((item, index) => (
        <div className="study-session" key={index}>
          <div>
            <strong>{item.time}</strong>
            <h3>{item.subject}</h3>
            <p>{item.task}</p>
          </div>

          <button onClick={() => onStart(item.subject)}>
            Start
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudyTimetable;