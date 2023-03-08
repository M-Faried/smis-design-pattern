import { createContext, useContext, useState } from 'react';


const LetterCounterContext = createContext(null);

const LetterCounterContextProvider = ({ children }) => {
    const [state, setState] = useState({
        count: 0,
        text: '',
    });

    const setText = (text) => {
        setState({
            count: text.length,
            text: text,
        })
    }

    const values = {
        ...state,
        setText,
    }

    return (
        <LetterCounterContext.Provider value={values}>
            {children}
        </LetterCounterContext.Provider>
    )
}

const useLetterCounterContext = () => useContext(LetterCounterContext);

export { useLetterCounterContext as default, LetterCounterContextProvider };