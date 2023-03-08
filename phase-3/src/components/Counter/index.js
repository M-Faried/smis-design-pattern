import styles from './Counter.module.css';
import CounterDisplay from './CounterDisplay';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import IncrementByAmmount from './IncrementByAmmount';
import injectCounterContext from '../../appState/injectors/injectCounterContext';

const Counter = () => {
    return (
        <div>
            <h1>Simple Counter</h1>
            <div className={styles.row}>
                <DecrementButton />
                <CounterDisplay />
                <IncrementButton />
            </div>
            <div className={styles.row}>
                <IncrementByAmmount />
            </div>
        </div>
    );
}

export default injectCounterContext(Counter);