import { Action, AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from '../../../../entities/user'
import { LoginSchema } from "features/auth-by-username";
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    user: UserSchema,
    // Async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export type ReducersList = {
    [key in StateSchemaKey]: Reducer
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: NavigateFunction
}

export interface ReducerManager {
    getReducerMap: () => { user: Reducer<UserSchema, Action<any>>; loginForm?: Reducer<LoginSchema, Action<any>>; }
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}