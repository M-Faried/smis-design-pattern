import React from 'react';
import styles from './Counter.module.css';
import { useCounterStateActions } from '../../appState/selectors/counterStateSelector';

const DecrementButton = () => {

    const { decrement } = useCounterStateActions();

    console.log('DecrementButton Updated!!!');

    return (
        <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}
        >
            -
        </button>
    )
}

export default DecrementButton