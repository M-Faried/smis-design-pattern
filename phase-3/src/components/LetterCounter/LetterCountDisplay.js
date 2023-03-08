import styles from './LetterCounter.module.css';
import { useLetterCountData } from '../../appState/selectors/letterCountStateSelector';

const LetterCountDisplay = () => {
    const { count } = useLetterCountData();
    return (
        <span className={styles.value}>{count}</span>
    )
}

export default LetterCountDisplay;