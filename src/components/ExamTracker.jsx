import { useEffect, useState } from "react";
import "./ExamTracker.css";

function ExamTracker() {
  const [exams, setExams] = useState(() => {
    const savedExams = localStorage.getItem("exams");
    return savedExams ? JSON.parse(savedExams) : [];
  });

  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");

  useEffect(() => {
    localStorage.setItem("exams", JSON.stringify(exams));
  }, [exams]);

  const addExam = () => {
    if (examName === "" || examDate === "") {
      alert("Please enter exam name and date");
      return;
    }

    const newExam = {
      id: Date.now(),
      name: examName,
      date: examDate,
    };

    setExams([...exams, newExam]);

    setExamName("");
    setExamDate("");
  };

  const deleteExam = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  const getDaysRemaining = (date) => {
    const today = new Date();
    const examDay = new Date(date);

    today.setHours(0, 0, 0, 0);
    examDay.setHours(0, 0, 0, 0);

    const difference = examDay - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="exam-tracker">
      <h2>Upcoming Exams</h2>

      <div className="exam-form">
        <input
          type="text"
          placeholder="Exam name"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />

        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />

        <button onClick={addExam}>Add Exam</button>
      </div>

      <div className="exam-list">
        {exams.length === 0 ? (
          <p>No exams added yet.</p>
        ) : (
          exams.map((exam) => {
            const daysRemaining = getDaysRemaining(exam.date);

            return (
              <div className="exam-card" key={exam.id}>
                <div>
                  <h3>{exam.name}</h3>
                  <p>Exam Date: {exam.date}</p>

                  {daysRemaining > 0 ? (
                    <strong>{daysRemaining} days remaining</strong>
                  ) : daysRemaining === 0 ? (
                    <strong>Exam is today! 🎯</strong>
                  ) : (
                    <strong>Exam completed</strong>
                  )}
                </div>

                <button onClick={() => deleteExam(exam.id)}>
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ExamTracker;