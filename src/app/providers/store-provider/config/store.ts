import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./state-schema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";

export default function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__ || true,
        preloadedState: initialState
    })
}


