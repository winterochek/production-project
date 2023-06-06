import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/user";
import { loginReducer } from "features/auth-by-username";
import { StateSchema } from "./state-schema";

export default function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__ || true,
        preloadedState: initialState
    })
}


