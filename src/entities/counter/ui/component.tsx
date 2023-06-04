import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice';
import { Button } from 'shared/ui/app-button';

import { getCounterValue } from '../model/selectors';

interface Props {
}

export default function Counter({ }: Props) {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
    }
    return <div data-testid='counter-component'>
        <h1 data-testid='counter-value-title'>{counterValue}</h1>
        <Button data-testid='counter-value-increment-button' onClick={handleIncrement}>increment</Button>
        <Button data-testid='counter-value-decrement-button' onClick={handleDecrement}>decrement</Button>
    </div>
}
