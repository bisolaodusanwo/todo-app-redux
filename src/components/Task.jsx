import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/taskSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDescription }));
    setIsEditing(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #ddd",
      margin: "10px 0",
    },
    text: {
      textDecoration: task.isDone ? "line-through" : "none",
      flexGrow: 1,
      marginRight: "10px",
    },
    button: {
      marginLeft: "5px",
      padding: "5px 10px",
      border: "none",
      borderRadius: "3px",
      backgroundColor: "#007BFF",
      color: "white",
      cursor: "pointer",
    },
    input: {
      padding: "5px",
      marginRight: "10px",
      border: "1px solid #333",
      borderRadius: "3px",
    },
  };

  return (
    <div style={styles.container}>
      {isEditing ? (
        <>
          <input
            style={styles.input}
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button style={styles.button} onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span style={styles.text}>{task.description}</span>
          <button style={styles.button} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button style={styles.button} onClick={handleToggle}>
            {task.isDone ? "Undo" : "Done"}
          </button>
          <button style={styles.button} onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
