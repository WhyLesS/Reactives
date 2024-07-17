import classNames from 'classnames';
import styles from './custom-button.module.css';
import { useTheme } from '../theme-context/theme-context';

export const CustomButton = ({ onClick, disabled, text }) => {
    const { value: theme } = useTheme();

    return (
        <button
            disabled={disabled}
            className={classNames(styles.tabButtons, {
                [styles.darkTheme]: theme === 'dark',
                [styles.lightTheme]: theme === 'light',
            })}
            onClick={onClick}
        >
            <div>{text}</div>
        </button>
    );
};
