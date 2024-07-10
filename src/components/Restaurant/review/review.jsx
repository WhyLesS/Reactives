import styles from './review.module.css';

export const Review = ({ reviews }) => {
    return (
        <>
            {reviews && reviews.length > 0 ? (
                <div>
                    <h3>Reviews:</h3>
                    {reviews.map((review) => (
                        <>
                            <div className={styles.review}>
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
