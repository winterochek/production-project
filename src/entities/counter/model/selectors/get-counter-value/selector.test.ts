import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/store-provider"
import getCounterValue from "./selector"

describe('get-counter', () => {
    test('should return exact value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 99,
            }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(99)
    })
})