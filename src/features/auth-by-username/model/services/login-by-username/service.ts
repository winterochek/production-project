import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";

interface Args {
    username: string,
    password: string
}

const loginByUsername = createAsyncThunk<User, Args, { rejectValue: string }>(
    'login/loginByUsername',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', data)
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



