import { createSelector } from "@reduxjs/toolkit";
import getCounter from "../get-counter/selector";


const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value
)

export default getCounterValue

