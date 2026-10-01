import { useEffect, useState } from "react";

import SubjectCard from "./components/SubjectCard";
import StudyTimetable from "./components/StudyTimetable";
import PomodoroTimer from "./components/PomodoroTimer";
import ProgressTracker from "./components/ProgressTracker";
import Dashboard from "./components/Dashboard";
import ExamTracker from "./components/ExamTracker";
import TaskManager from "./components/TaskManager";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";

function App() {
  // Subjects
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects");

    return savedSubjects
      ? JSON.parse(savedSubjects)
      : [
          {
            subject: "Mathematics",
            hours: 2,
            color: "#4f46e5",
          },
          {
            subject: "Physics",
            hours: 1.5,
            color: "#16a34a",
          },
          {
            subject: "Programming",
            hours: 2,
            color: "#dc2626",
          },
        ];
  });

  const [showForm, setShowForm] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newHours, setNewHours] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [editingSubject, setEditingSubject] = useState(null);

  // Completed study sessions
  const [completedSessions, setCompletedSessions] = useState(() => {
    const savedSessions = localStorage.getItem("completedSessions");

    return savedSessions ? Number(savedSessions) : 0;
  });

  // Tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studyTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply theme
  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Save subjects
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  // Save completed sessions
  useEffect(() => {
    localStorage.setItem(
      "completedSessions",
      completedSessions.toString()
    );
  }, [completedSessions]);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add or update subject
  const addSubject = () => {
    if (newSubject.trim() === "" || newHours === "") {
      alert("Please enter subject and study hours");
      return;
    }

    if (editingSubject) {
      const updatedSubjects = subjects.map((item) => {
        if (item.subject === editingSubject) {
          return {
            ...item,
            subject: newSubject.trim(),
            hours: Number(newHours),
          };
        }

        return item;
      });

      setSubjects(updatedSubjects);
      setEditingSubject(null);
    } else {
      const newItem = {
        subject: newSubject.trim(),
        hours: Number(newHours),
        color: "#f59e0b",
      };

      setSubjects([...subjects, newItem]);
    }

    setNewSubject("");
    setNewHours("");
    setShowForm(false);
  };

  // Delete subject
  const deleteSubject = (subjectName) => {
    setSubjects(
      subjects.filter((item) => item.subject !== subjectName)
    );
  };

  // Edit subject
  const editSubject = (subjectName) => {
    const subjectToEdit = subjects.find(
      (item) => item.subject === subjectName
    );

    if (!subjectToEdit) {
      return;
    }

    setNewSubject(subjectToEdit.subject);
    setNewHours(subjectToEdit.hours);
    setEditingSubject(subjectName);
    setShowForm(true);
  };

  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />

      {/* Theme Toggle */}
      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Exam Study Planner</h1>

        <p>
          Plan your studies. Track your progress. Achieve your goals.
        </p>
      </header>

      {/* Dashboard */}
      <section id="dashboard">
        <Dashboard
          subjects={subjects}
          completedSessions={completedSessions}
          totalSessions={4}
          tasks={tasks}
        />
      </section>

      {/* Exams */}
      <section id="exams">
        <ExamTracker />
      </section>

      {/* Tasks */}
      <section id="tasks">
        <TaskManager
          tasks={tasks}
          setTasks={setTasks}
        />
      </section>

      {/* Subjects */}
      <section id="subjects">

        <h2>My Subjects</h2>

        <button
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add Subject"}
        </button>

        {showForm && (
          <div className="subject-form">

            <input
              type="text"
              placeholder="Subject name"
              value={newSubject}
              onChange={(e) =>
                setNewSubject(e.target.value)
              }
            />

            <input
              type="number"
              min="0.5"
              step="0.5"
              placeholder="Study hours"
              value={newHours}
              onChange={(e) =>
                setNewHours(e.target.value)
              }
            />

            <button onClick={addSubject}>
              {editingSubject ? "Update" : "Add"}
            </button>

          </div>
        )}

        <div className="subjects">

          {subjects.map((item, index) => (
            <SubjectCard
              key={`${item.subject}-${index}`}
              subject={item.subject}
              hours={item.hours}
              color={item.color}
              onDelete={deleteSubject}
              onEdit={editSubject}
            />
          ))}

        </div>

      </section>

      {/* Timetable */}
      <section id="timetable">
        <StudyTimetable
          onStart={(subject) =>
            setSelectedSubject(subject)
          }
        />
      </section>

      {/* Pomodoro Timer */}
      <section id="timer">
        <PomodoroTimer
          subject={selectedSubject}
          onComplete={() =>
            setCompletedSessions(
              (previous) => previous + 1
            )
          }
        />
      </section>

      {/* Progress */}
      <section id="progress">
        <ProgressTracker
          completed={completedSessions}
          total={4}
        />
      </section>

    </div>
  );
}

export default App;