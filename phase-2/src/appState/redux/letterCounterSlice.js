import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'letterCounter',
    initialState: {
        text: '',
        letterCount: 0
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
            state.letterCount = action.payload.length;
        }
    }
})

export const { setText } = counterSlice.actions;

export default counterSlice.reducer
