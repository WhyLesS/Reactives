import classNames from 'classnames';
import styles from './header.module.css';
import { useTheme } from '../theme-context/theme-context';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button';
import { UserAuthButton } from '../auth-user-button/auth-user-button';

export const Header = () => {
    const { value: theme } = useTheme();

    return (
        <header
            className={classNames({
                [styles.darkHeader]: theme === 'dark',
                [styles.lightHeader]: theme === 'light',
            })}
        >
            <div className={styles.authButton}>
                <UserAuthButton />
            </div>
            <h1 className={styles.title}>Restaurants near you</h1>
            <div className={styles.themeButton}>
                <ToggleThemeButton />
            </div>
        </header>
    );
};
