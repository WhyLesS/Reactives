import { useEffect, useState } from 'react';
import styles from './app.module.css';

export const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPercentage =
                (scrollPosition / (documentHeight - windowHeight)) * 100;
            setScrollProgress(scrollPercentage);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div
            className={styles.bar}
            style={{ width: `${scrollProgress}%` }}
        ></div>
    );
};
