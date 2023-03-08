///////////////////////////////////////////////////////////////// Context Implementation
// import useLetterCountContext from '../context/LetterCounterContext';

// const useLetterCountData = () => {
//     const { count, text } = useLetterCounterContext();
//     return { count, text };
// }

// const useLetterCountActions = () => {
//     const { setText } = useLetterCounterContext();
//     return { setText };
// }


///////////////////////////////////////////////////////////////// Redux Implementation
import { useSelector, useDispatch } from 'react-redux';
import { setText as setTextRdx } from '../redux/letterCounterSlice';

const useLetterCountData = () => {
    const { text, letterCount } = useSelector(state => state.letterCounter);
    return { count: letterCount, text };
}

const useLetterCountActions = () => {
    const dispatch = useDispatch();
    const setText = (text) => dispatch(setTextRdx(text));
    return { setText };
}

export { useLetterCountData, useLetterCountActions };