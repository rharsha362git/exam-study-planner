import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;