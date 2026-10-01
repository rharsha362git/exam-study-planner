import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import Dashboard from "./components/Dashboard";
import "./styles/Dashboard.css";

import SubjectForm from "./components/SubjectForm";
import "./styles/SubjectForm.css";


function App() {

  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects");
    
    if (savedSubjects) {
      return JSON.parse(savedSubjects);
    }

    return [];
  });
  
  useEffect(() => {
      localStorage.setItem("subjects", JSON.stringify(subjects));
    }, [subjects]);


  return (
    <>
      <Navbar />

      <Dashboard subjects={subjects} />

      <SubjectForm
        subjects={subjects}
        setSubjects={setSubjects}
      />

      <div style={{ padding: "40px" }}>
        <h1>Welcome 👋</h1>
        <p>Let's plan your exams efficiently.</p>
      </div>
    </>
  );
}

export default App;