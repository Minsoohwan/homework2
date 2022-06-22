import { configureStore } from '@reduxjs/toolkit';
import postReducer from './modules/post';
const store = configureStore({
    reducer: {
        post: postReducer,
    },
});

export default store;
