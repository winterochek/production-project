import { counterReducer, counterActions } from "./slice";
import { CounterSchema } from "../types";

describe('counter slice testing', () => {
    test('Incrementing', () => {
        const state: CounterSchema = {
            value: 99,
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 100 })

    })
    test('Decrementing', () => {
        const state: CounterSchema = {
            value: 99,
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 98 })

    })
    test('Should work with empty state', () => {
        const state: CounterSchema = {
            value: 99,
        }
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })

    })
})