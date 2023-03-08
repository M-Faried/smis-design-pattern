import { CounterContextProvider } from "../context/CounterContext";

const injectCounterContext = (WrappedComponent) => {
    return (props) => {
        return (
            <CounterContextProvider>
                <WrappedComponent {...props} />
            </CounterContextProvider>
        )
    }
}

export default injectCounterContext;
