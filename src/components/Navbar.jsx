import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        📚 Study Planner
      </div>

      <div className="navbar-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#exams">Exams</a>
        <a href="#tasks">Tasks</a>
        <a href="#subjects">Subjects</a>
        <a href="#timetable">Timetable</a>
        <a href="#timer">Timer</a>
        <a href="#progress">Progress</a>
      </div>
    </nav>
  );
}

export default Navbar;