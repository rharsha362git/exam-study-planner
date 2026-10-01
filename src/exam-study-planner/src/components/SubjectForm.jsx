import { useState } from "react";

function SubjectForm({ subjects, setSubjects }) {
  const [subjectName, setSubjectName] = useState("");
  const [subjectDate, setSubjectDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subjectName || !subjectDate) return;

    const newSubject = {
      id: Date.now(),
      name: subjectName,
      date: subjectDate,
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName("");
    setSubjectDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="subject-form">
      <input
        type="text"
        placeholder="Subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        required
      />
      <input
        type="date"
        value={subjectDate}
        onChange={(e) => setSubjectDate(e.target.value)}
        required
      />
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;