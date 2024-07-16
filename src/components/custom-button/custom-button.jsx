import classNames from 'classnames';
import styles from './custom-button.module.css';

export const CustomButton = ({ onClick, disabled, text }) => {
    return (
        <button
            disabled={disabled}
            className={classNames(styles.tabButtons)}
            onClick={onClick}
        >
            <div>{text}</div>
        </button>
    );
};
