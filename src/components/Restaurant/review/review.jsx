import classNames from 'classnames';
import { useTheme } from '../../theme-context/theme-context';
import styles from './review.module.css';

export const Review = ({ reviews }) => {
    const { value: theme } = useTheme();

    return (
        <>
            {reviews && reviews.length > 0 ? (
                <div>
                    <h3>Reviews:</h3>
                    {reviews.map((review) => (
                        <>
                            <div
                                className={classNames(styles.review, {
                                    [styles.lightTheme]: theme === 'light',
                                    [styles.darkTheme]: theme === 'dark',
                                })}
                            >
                                <div>
                                    {review.user} - rating: {review.rating}
                                </div>
                                <div className={styles.comment}>
                                    comment: {review.text}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            ) : (
                <div>No reviews</div>
            )}
        </>
    );
};
