import loginByUsername from "../services/login-by-username/service";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/login-schema";


const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = undefined
                state.username = action.payload.username
            })
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Unhandled error'
            })

    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice