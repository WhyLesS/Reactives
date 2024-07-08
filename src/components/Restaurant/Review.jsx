import '../../index.css';

export const Review = ({ reviews }) => {
    return (
        <>
            {reviews && reviews.length > 0 ? (
                <div className="reviews">
                    <h3>Reviews:</h3>
                    {reviews.map((review) => (
                        <>
                            <ul className="reviewsContent">
                                <li>user: {review.user}</li>
                                <li>rating: {review.rating}</li>
                                <li>comment: {review.text}</li>
                            </ul>
                        </>
                    ))}
                </div>
            ) : (
                <div>No reviews</div>
            )}
        </>
    );
};
