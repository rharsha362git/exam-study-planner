import React from "react";
import SubjectCard from "./SubjectCard";

function Dashboard({ subjects }) {
  return (
    <div className="dashboard">
      <h2>Your Subjects</h2>
      {subjects.length === 0 ? (
        <p>No subjects added yet. Start adding some!</p>
      ) : (
        <div className="subject-list">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;