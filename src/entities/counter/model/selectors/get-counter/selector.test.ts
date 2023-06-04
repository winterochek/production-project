import { DeepPartial } from "@reduxjs/toolkit"
import getCounter from "./selector"
import { StateSchema } from "app/providers/store-provider"

describe('get-counter', () => {
    test('should return object with value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 99,
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 99 })
    })
})