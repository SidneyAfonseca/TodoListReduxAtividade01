import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryItem {
    name: string;
    timestamp: string;
}

const historySlice = createSlice({
    name: 'history',
    initialState: [] as HistoryItem[],
    reducers: {
        addHistory: (state, action: PayloadAction<{ name: string }>) => {
            console.log(state, action);
            return [
                ...state,
                { name: action.payload.name, timestamp: new Date().toISOString() },
            ];
        },
    },
});

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;