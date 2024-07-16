import styles from './counter.module.css';

export const Counter = ({ count, decrement, increment }) => {
    return (
        <div className={styles.counterContainer}>
            <div>set your rating: {count}</div>
            <div className={styles.buttonsContainer}>
                <button className={styles.counterButton} onClick={increment}>
                    +
                </button>
                <button className={styles.counterButton} onClick={decrement}>
                    -
                </button>
            </div>
        </div>
    );
};
