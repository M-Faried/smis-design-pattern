import { configureStore } from '@reduxjs/toolkit';
import letterCounterReducer from './letterCounterSlice';

export default configureStore({
    reducer: {
        letterCounter: letterCounterReducer,
    },
});