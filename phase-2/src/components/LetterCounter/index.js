import LetterCountDisplay from "./LetterCountDisplay";
import TextInput from "./TextInput";
import styles from './LetterCounter.module.css';

const LetterCounter = () => {
    return (
        <div>
            <h1>Counts The Letters In Text</h1>
            <div className={styles.row}><TextInput /></div>
            <div className={styles.row}><LetterCountDisplay /></div>
        </div>
    )
}

export default LetterCounter;