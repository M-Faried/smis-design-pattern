import styles from './LetterCounter.module.css';
import { useLetterCountData } from '../../appState/selectors/letterCountStateSelector';

const CounterDisplay = () => {
    const { count } = useLetterCountData();
    return (
        <span className={styles.value}>{count}</span>
    )
}

export default CounterDisplay;