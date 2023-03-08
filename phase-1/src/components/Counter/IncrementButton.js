import styles from './Counter.module.css';
import { useCounterStateActions } from '../../appState/selectors/counterStateSelector';

const IncrementButton = () => {

    const { increment } = useCounterStateActions();

    console.log('IncrementButton Updated!!!');

    return (
        <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => increment()}
        >
            +
        </button>
    )
}

export default IncrementButton