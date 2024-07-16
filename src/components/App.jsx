import { Layout } from './layout';
import { restaurants } from '../../materials/mock';
import { useState } from 'react';
import { ProgressBar } from './progress-bar';
import { Restaurant } from './Restaurant/restaurant';
import { CustomButton } from './custom-button/custom-button';
import styles from './app.module.css';

export const App = () => {
    const [restaurant, setRestaurant] = useState(
        restaurants.length ? restaurants[0] : null
    );

    function changeRestaurant(restId) {
        const nextRestaurant = restaurants.find((r) => r.id === restId);
        setRestaurant(nextRestaurant);
    }

    return (
        <div>
            <ProgressBar />
            <Layout>
                <div className={styles.tabContainer}>
                    {restaurants.length ? (
                        restaurants.map((rest) => (
                            <>
                                <CustomButton
                                    onClick={() => changeRestaurant(rest.id)}
                                    disabled={rest.id === restaurant.id}
                                    text={rest.name}
                                />
                            </>
                        ))
                    ) : (
                        <div>Empty Restaurant</div>
                    )}
                </div>
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            </Layout>
        </div>
    );
};
