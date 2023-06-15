import { StateSchema } from "app/providers/store-provider"
import { getLoginState } from "./selector"

describe('getLoginState selector', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            isLoading: true,
            password: '222',
            username: '222',
            error: 'happened'
        }
    }
    test('should return provided values', () => {
        expect(getLoginState(state as StateSchema))
            .toEqual({
                isLoading: true,
                password: '222',
                username: '222',
                error: 'happened'
            })
    })
    test('should return default values', () => {
        expect(getLoginState())
            .toEqual({
                isLoading: false,
                password: '',
                username: '',
                error: ''
            })
    })
})