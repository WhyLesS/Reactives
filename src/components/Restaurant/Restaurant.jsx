import { Menu } from './Menu';
import { Review } from './Review';
import '../../index.css';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            {restaurant && restaurant.menu && restaurant.menu.length > 0 ? (
                <div className="mainContenet">
                    <div className="names">
                        {restaurant.name}
                        <Menu menu={restaurant.menu} />

                        <Review reviews={restaurant.reviews} />
                    </div>
                </div>
            ) : (
                <div>No restaurants</div>
            )}
        </div>
    );
};
