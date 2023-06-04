import { Provider } from "react-redux"
import { StateSchema, createReduxStore } from "../config"
import { DeepPartial } from "@reduxjs/toolkit"

interface Props {
    children: JSX.Element,
    initialState?: DeepPartial<StateSchema>
}

export default function StoreProvider({ children,initialState }: Props) {
    const store = createReduxStore(initialState as StateSchema)
    return <Provider store={store}>{children}</Provider>
}
