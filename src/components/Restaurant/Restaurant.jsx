import { Menu } from './menu/menu';
import { Review } from './review/review';
import { ReviewForm } from './review/review-form';
import '../../index.css';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            {restaurant && restaurant.menu && restaurant.menu.length > 0 ? (
                <div>
                    <Menu menu={restaurant.menu} />
                    <Review reviews={restaurant.reviews} />
                    <ReviewForm />
                </div>
            ) : (
                <div>No restaurants</div>
            )}
        </div>
    );
};
