import { DeepPartial, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/user";
import { StateSchema } from "./state-schema";
import { createReducerManager } from "./reducer-manager";

export default function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


