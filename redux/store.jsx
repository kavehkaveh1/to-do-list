import { createStore } from "redux";
import Reducer from "./reducer/reducer";
import { loadState, saveState } from "./localStorage";

// Load persisted state from localStorage
const persistedState = loadState();

const store = createStore(Reducer, persistedState);

// Subscribe to store updates and save state changes to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
