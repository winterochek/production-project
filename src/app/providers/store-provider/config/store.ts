import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/user";
import { StateSchema } from "./state-schema";
import { createReducerManager } from "./reducer-manager";

export default function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__ || true,
        preloadedState: initialState
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}


