import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";


const initialState: UserSchema = {
    authData: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user: User | undefined = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) || '');
            if (user) {
                state.authData = user;
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.authData = undefined
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice