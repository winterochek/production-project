import { StateSchema } from "app/providers/store-provider";

const getCounter = (state: StateSchema) => state.counter

export default getCounter
