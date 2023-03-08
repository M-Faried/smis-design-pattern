import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import letterCounterReducer from './letterCounterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        letterCounter: letterCounterReducer,
    },
});