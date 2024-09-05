import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not_done") return !task.isDone;
    return true;
  });

  const styles = {
    container: {
      margin: "20px 0",
      width: "60%",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container}>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
