import styles from './LetterCounter.module.css';
import { useLetterCountData, useLetterCountActions } from '../../appState/selectors/letterCountStateSelector';

const TextInput = () => {

    const { text } = useLetterCountData();
    const { setText } = useLetterCountActions();

    return (
        <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={text}
            onChange={e => setText(e.target.value)}
        />
    )
}

export default TextInput;