import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./state-schema";
import { counterReducer } from "entities/counter";

export default function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__ || true,
        preloadedState: initialState
    })
}


