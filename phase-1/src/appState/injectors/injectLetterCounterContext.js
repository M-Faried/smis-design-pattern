import { LetterCounterContextProvider } from "../context/LetterCounterContext"

const injectLetterCounterContext = (WrappedComponent) => {
    return (props) => (
        <LetterCounterContextProvider>
            <WrappedComponent {...props} />
        </LetterCounterContextProvider>
    )
}

export default injectLetterCounterContext;