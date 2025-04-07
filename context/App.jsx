import React, { useContext } from "react";
import { taskContext } from "./TasksContext";
import "./style/app.css";

function App() {
  const { state, dispatch } = useContext(taskContext);
  const { tasks, newTask } = state;
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
  };
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) =>
            dispatch({ type: "SET_NEW_TASK", payload: e.target.value })
          }
        />
        <button onClick={handleAddTask}>AddTask</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch({ type: "TOGGLE_TASK", payload: index })}
            />
            <button
              onClick={() => dispatch({ type: "DELETE_TASK", payload: index })}
              disabled={!task.done}
            >
              DeleteTask
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
