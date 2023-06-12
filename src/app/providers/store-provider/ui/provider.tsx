import { Provider } from "react-redux"
import { StateSchema, createReduxStore } from "../config"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"

interface Props {
    children: JSX.Element,
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export default function StoreProvider({ children, initialState, asyncReducers }: Props) {
    const navigate = useNavigate()
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate)
    return <Provider store={store}>{children}</Provider>
}
