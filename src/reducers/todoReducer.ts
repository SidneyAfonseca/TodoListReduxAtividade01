import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as store from "../redux/store";

interface Task {
    name: string;
    completed: boolean;
}

interface TodoState {
    tasks: Task[];
}

const initialState: TodoState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        toggleTaskCompletion: (state, action: PayloadAction<number>) => {
            state.tasks[action.payload].completed = !state.tasks[action.payload].completed;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks.splice(action.payload, 1);
        },
    },
});

export const { addTask, toggleTaskCompletion, deleteTask } = todoSlice.actions;

export const selectTodoList = (state: Storage) => {
    return state.todos.tasks;
};

export default todoSlice.reducer;
