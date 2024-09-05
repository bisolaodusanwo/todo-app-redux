import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { useDispatch } from "react-redux";
import { filterTask } from "./redux/taskSlice";

const App = () => {
  const dispatch = useDispatch();

  const styles = {
    appContainer: {
      textAlign: "center",
      padding: "20px",
    },
    button: {
      margin: "0 10px",
      padding: "10px 20px",
      backgroundColor: "#008CBA",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.appContainer}>
      <h1>ToDo App</h1>
      <AddTask />
      <div>
        <button
          style={styles.button}
          onClick={() => dispatch(filterTask("all"))}
        >
          All
        </button>
        <button
          style={styles.button}
          onClick={() => dispatch(filterTask("done"))}
        >
          Done
        </button>
        <button
          style={styles.button}
          onClick={() => dispatch(filterTask("not_done"))}
        >
          Not Done
        </button>
      </div>
      <ListTask />
    </div>
  );
};

export default App;
