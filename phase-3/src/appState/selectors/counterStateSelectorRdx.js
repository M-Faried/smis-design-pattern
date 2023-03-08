import { useSelector, useDispatch } from 'react-redux';
import {
    increment as incrementRedux,
    decrement as decrementRedux,
    incrementByAmount as incrementByAmountRedux,
    incrementAsync as incrementAsyncRedux,
    selectCount,
} from '../redux/counterSlice';

const useCounterStateData = () => {
    const count = useSelector(selectCount);
    return { count };
}

const useCounterStateActions = () => {

    const dispatch = useDispatch();
    const increment = () => dispatch(incrementRedux());
    const decrement = () => dispatch(decrementRedux());
    const incrementByAmount = (amount) => dispatch(incrementByAmountRedux(Number(amount) || 0));
    const incrementAsync = (amount) => dispatch(incrementAsyncRedux(Number(amount) || 0));

    return { increment, decrement, incrementByAmount, incrementAsync };
}

export { useCounterStateData, useCounterStateActions };