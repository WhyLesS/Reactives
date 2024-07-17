import classNames from 'classnames';
import { Menu } from './menu/menu';
import { Review } from './review/review';
import { ReviewForm } from './review/review-form';
import styles from './restaurant.module.css';
import { useTheme } from '../theme-context/theme-context';
import { useUser } from '../user-context/user-context';

export const Restaurant = ({ restaurant }) => {
    const { value: theme } = useTheme();
    const { value: user } = useUser();

    return (
        <div
            className={classNames({
                [styles.darkTeme]: theme === 'dark',
                [styles.lightTheme]: theme === 'light',
            })}
        >
            {restaurant && restaurant.menu && restaurant.menu.length > 0 ? (
                <div>
                    <Menu menu={restaurant.menu} />
                    <Review reviews={restaurant.reviews} />
                    {user !== undefined ? <ReviewForm /> : null}
                </div>
            ) : (
                <div>No restaurants</div>
            )}
        </div>
    );
};
