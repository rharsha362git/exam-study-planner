import "./SubjectCard.css";

function SubjectCard({
  subject,
  hours,
  color,
  onDelete,
  onEdit,
}) {
  return (
    <div
      className="subject-card"
      style={{
        borderLeft: `6px solid ${color}`,
      }}
    >
      <div className="subject-info">
        <h3>{subject}</h3>

        <p>
          📚 {hours} hours planned
        </p>
      </div>

      <div className="subject-actions">
        <button
          className="edit-button"
          onClick={() => onEdit(subject)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(subject)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default SubjectCard;