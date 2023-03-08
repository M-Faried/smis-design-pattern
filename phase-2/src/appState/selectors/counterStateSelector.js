import useCounterContext from '../context/CounterContext';

const useCounterStateData = () => {
    const { count } = useCounterContext();
    return { count };
}

const useCounterStateActions = () => {
    const { increment, decrement, incrementByAmount, incrementAsync } = useCounterContext();
    return { increment, decrement, incrementByAmount, incrementAsync };
}

export { useCounterStateData, useCounterStateActions };