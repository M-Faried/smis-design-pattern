import { createContext, useContext, useCallback, useReducer } from "react";

const CounterContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'incrementByAmount':
            return { ...state, count: state.count + action.payload };
        default:
            throw new Error('unexpected action type');
    }
};

const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
    const decrement = useCallback(() => dispatch({ type: 'decrement' }), [dispatch]);
    const incrementByAmount = useCallback((amount) => dispatch({ type: 'incrementByAmount', payload: Number(amount) || 0 }), [dispatch]);
    const incrementAsync = useCallback((amount) => {
        setTimeout(() => {
            dispatch({ type: 'incrementByAmount', payload: Number(amount) || 0 });
        }, 1000);
    }, [dispatch]);

    const values = {
        count: state.count,
        increment,
        decrement,
        incrementByAmount,
        incrementAsync
    };

    return (
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    )
}

const useCounterContext = () => useContext(CounterContext);

export { useCounterContext as default, CounterContextProvider };

