import { DeepPartial, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/user";
import { StateSchema } from "./state-schema";
import { createReducerManager } from "./reducer-manager";
import { $api } from "shared/api";
import { NavigateFunction } from "react-router-dom";

export default function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?: NavigateFunction) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__ || true,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
