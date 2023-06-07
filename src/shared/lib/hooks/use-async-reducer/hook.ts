import { Reducer } from "@reduxjs/toolkit";
import { ReduxWithManager, StateSchemaKey } from "app/providers/store-provider/config";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export default function useAsyncReducer(key: StateSchemaKey, reducer: Reducer, removeAfterUnMount = true): null {
    const { reducerManager } = useStore() as ReduxWithManager;
    const dispatch = useDispatch()

    useEffect(() => {
        reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` })
        return () => {
            if (!removeAfterUnMount) return
            reducerManager.remove(key)
            dispatch({ type: `@REMOVE ${key} reducer` })
        }
    }, [])

    return null
}