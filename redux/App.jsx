import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleDone, setNewTask } from "./action/action";
import "./style/app.css";
function App1() {
  const tasks = useSelector((state) => state.tasks);
  const newTask = useSelector((state) => state.newTask);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask));
    }
  };

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => dispatch(setNewTask(e.target.value))}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch(toggleDone(index))}
            />
            <button
              onClick={() => dispatch(deleteTask(index))}
              disabled={!task.done}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App1;
