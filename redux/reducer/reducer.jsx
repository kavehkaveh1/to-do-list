import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_DONE,
  SET_NEW_TASK,
} from "../action/actionType";

const initialState = {
  tasks: [],
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
        alert("Task is not marked as done yet!");
        return state;
      }
    case TOGGLE_DONE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case SET_NEW_TASK:
      return { ...state, newTask: action.payload };
    default:
      return state;
  }
};

export default reducer;
