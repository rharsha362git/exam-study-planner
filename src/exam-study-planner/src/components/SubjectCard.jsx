import React from "react";

const SubjectCard = ({ subject, onDelete }) => {
  return (
    <div className="subject-card">
      <h2>{subject.name}</h2>
      <p>Exam Date: {subject.date}</p>
      <p>Details: {subject.details}</p>
      <button onClick={() => onDelete(subject.id)}>Delete</button>
    </div>
  );
};

export default SubjectCard;