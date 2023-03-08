import useLetterCounterContext from '../context/LetterCounterContext';

const useLetterCountData = () => {
    const { count, text } = useLetterCounterContext();
    return { count, text };
}

const useLetterCountActions = () => {
    const { setText } = useLetterCounterContext();
    return { setText };
}

export { useLetterCountData, useLetterCountActions };