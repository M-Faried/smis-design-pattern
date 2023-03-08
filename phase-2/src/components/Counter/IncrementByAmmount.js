import { useState } from 'react';
import styles from './Counter.module.css';
import { useCounterStateActions } from '../../appState/selectors/counterStateSelector';

const IncrementByAmmount = () => {

    const [incrementAmount, setIncrementAmount] = useState('2');
    const { incrementByAmount, incrementAsync } = useCounterStateActions();

    console.log('IncrementByAmmount Updated!!!');

    return (
        <>
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
            >
                Add Amount
            </button>
            <button
                className={styles.asyncButton}
                onClick={() => incrementAsync(Number(incrementAmount) || 0)}
            >
                Add Async
            </button>
        </>
    )
}

export default IncrementByAmmount