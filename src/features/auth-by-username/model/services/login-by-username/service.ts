import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "../../../../../entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";
import { ThunkExtraArg } from "app/providers/store-provider";

interface Args {
    username: string,
    password: string
}

const loginByUsername = createAsyncThunk<User, Args, { rejectValue: string, extra: ThunkExtraArg }>(
    'login/loginByUsername',
    async (data, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post<User>('/login', data)
            const { data: user } = response
            if (!user) {
                throw new Error('No user returned by server')
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
            dispatch(userActions.setAuthData(user))
            return user
        } catch (error) {
            console.log(error)
            return rejectWithValue('Something went wrong')
        }

    }
)

export default loginByUsername



