import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slicer";

const store = configureStore({
    reducer: {
        counter: reducer,
    }
});

export default store;