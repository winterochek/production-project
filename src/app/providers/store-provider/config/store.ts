import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./state-schema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { loginReducer } from "features/auth-by-username";

export default function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__ || true,
        preloadedState: initialState
    })
}


