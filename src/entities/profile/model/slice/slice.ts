import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";
import { fetchProfileData } from "../services/fetch-profile-data/service";


const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.payload
            })

    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice