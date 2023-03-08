import styles from './Counter.module.css';
import { useCounterStateData } from '../../appState/selectors/counterStateSelector';

const CounterDisplay = () => {

    const { count } = useCounterStateData();

    console.log('CounterDisplay Updated!!!');

    return (
        <span className={styles.value}>{count}</span>
    )
}

export default CounterDisplay