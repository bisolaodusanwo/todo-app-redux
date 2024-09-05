import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim()) {
      const newTask = { id: Date.now(), description, isDone: false };
      dispatch(addTask(newTask));
      setDescription("");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px 0",
    },
    input: {
      padding: "10px",
      marginRight: "10px",
      border: "2px solid #333",
      borderRadius: "5px",
      width: "250px",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button style={styles.button} onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
