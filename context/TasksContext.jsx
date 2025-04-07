import { createContext, useEffect, useReducer } from "react";
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_NEW_TASK } from "./taskType";

//load data
const initialState = {
  tasks: JSON.parse(localStorage.getItem("data")) || [],
  newTask: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, done: false }],
        newTask: "",
      };

    case DELETE_TASK:
      if (state.tasks[action.payload].done) {
        return {
          ...state,
          tasks: state.tasks.filter((_, index) => index !== action.payload),
        };
      } else {
        alert("task is not done yet");
        return state;
      }

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, done: !task.done } : task
        ),
      };

    case SET_NEW_TASK:
      return {
        ...state,
        newTask: action.payload,
      };

    default:
      return state;
  }
};

export const taskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //save data
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.tasks));
  }, [state.tasks]);
  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};
