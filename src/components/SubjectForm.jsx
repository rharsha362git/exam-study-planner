
import { useState } from "react";
import "../styles/SubjectForm.css";

function SubjectForm({ subjects, setSubjects }) {
  // State variables
  const [subject, setSubject] = useState("");
  const [examDate, setExamDate] = useState("");
  const [studyHours, setStudyHours] = useState("");

  // Function to add a subject
  function addSubject() {
    if (!subject || !examDate || !studyHours) {
      alert("Please fill all fields");
      return;
    }

    const newSubject = {
      subject,
      examDate,
      studyHours,
    };

    setSubjects([...subjects, newSubject]);

    // Clear input fields
    setSubject("");
    setExamDate("");
    setStudyHours("");
  }

  // Function to delete a subject
  function deleteSubject(index) {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  }

  return (
    <div className="subject-form">
      <h2>Add New Subject</h2>

      <input
        type="text"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Daily Study Hours"
        value={studyHours}
        onChange={(e) => setStudyHours(e.target.value)}
      />

      <button onClick={addSubject}>
        Add Subject
      </button>

      <hr />

      <h3>Your Subjects</h3>

      {subjects.length === 0 ? (
        <p>No subjects added yet.</p>
      ) : (
        subjects.map((item, index) => (
          <div key={index} className="subject-card">
            <h4>{item.subject}</h4>

            <p>📅 {item.examDate}</p>

            <p>⏰ {item.studyHours} hrs/day</p>

            <button onClick={() => deleteSubject(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SubjectForm;