import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        tasks: [],
        done:[]
    },
    reducers: {
        addTask: (state,action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(e => e !== action.payload);
        },
        addDone: (state, action) => {
           state.done.push(action.payload);
        },
        deleteDone: (state, action) => {
            state.done = state.done.filter(e => e !== action.payload);
        }
    }
})


export const { addTask, deleteTask,addDone,deleteDone} = dataSlice.actions;
export default dataSlice.reducer