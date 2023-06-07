import axios from "axios"
import loginByUsername from "./service";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/lib/tests/test-async-thunk";

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true)

describe('feature login by username', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('fulfilled', async () => {
        const userValue = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue)

    })
    test('rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Something went wrong')
    })
})