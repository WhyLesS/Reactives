import { useCounters } from '../../hooks/useCounters';
import '../../index.css'

export const Restaurant = ({ restaurantNow, counters, increment, decrement}) => {
    //const { count, decrement, increment } = useCount();

    return (
        <div>
            {restaurantNow && restaurantNow.menu && restaurantNow.menu.length > 0 ? (
                <div className='mainContenet'>
                    <div className='names'> 
                        {restaurantNow.name}
                        <div className='menu'>
                            <h3>Menu:</h3>
                            <div className='menuContent'>
                                {restaurantNow.menu.map((item, index) =>
                                    (
                                        <>
                                            <div>name: {item.name} - price: {item.price}</div>
                                            <div>
                                                ingredients:
                                                <ul className='ingredients'>
                                                    {item.ingredients.map((ingredient) =>
                                                        <>
                                                            <li>{ingredient}</li>
                                                        </>
                                                    )}
                                                    
                                                </ul>
                                            </div>
                                            {counters && (
                                                <>
                                                    <button onClick={() => increment(index)}>+</button>
                                                        <span>{counters[index].count}</span>
                                                    <button onClick={() => decrement(index)}>-</button>
                                                </>
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                            
                        </div>
                        
                        {restaurantNow.reviews && restaurantNow.reviews.length > 0 ? (
                            <div className='reviews'>
                            <h3>Reviews:</h3>
                            {restaurantNow.reviews.map((review) => 
                                <>
                                    <ul className='reviewsContent'>
                                        <li>user: {review.user}</li>
                                        <li>rating: {review.rating}</li>
                                        <li>comment: {review.text}</li>
                                    </ul>
                                </>
                            )}
                        </div>
                        ) : (
                            <div>No reviews</div>
                        )}
                        
                    </div>
                </div>
            ) : (
                <div>No restaurants</div>
            )}
        </div>
    );
};