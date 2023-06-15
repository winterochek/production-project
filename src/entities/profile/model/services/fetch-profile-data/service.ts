import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/store-provider";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (_, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.api.get<Profile>('/profile');
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Something went wrong')
        }
    }
)