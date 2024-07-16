import styles from './header.module.css';

export const Header = () => {
    return (
        <header>
            <h1 className={styles.title}>Restaurants near you</h1>
        </header>
    );
};
