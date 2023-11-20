// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import historyReducer from './historySlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    history: historyReducer,
});

export default rootReducer;