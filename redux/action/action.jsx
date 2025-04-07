import { ADD_TASK , DELETE_TASK , TOGGLE_DONE , SET_NEW_TASK } from "./actionType";

export const addTask =(task)=>({
   type : ADD_TASK , 
   payload : task
})

export const deleteTask =(index)=>({
   type : DELETE_TASK ,
   payload : index
})

export const toggleDone =(index)=>({
  type : TOGGLE_DONE ,
  payload : index
})

export const setNewTask =(value)=>({
   type : SET_NEW_TASK , 
   payload : value
})