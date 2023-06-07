import { Provider } from "react-redux"
import { StateSchema, createReduxStore } from "../config"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"

interface Props {
    children: JSX.Element,
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export default function StoreProvider({ children, initialState, asyncReducers }: Props) {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)
    return <Provider store={store}>{children}</Provider>
}
