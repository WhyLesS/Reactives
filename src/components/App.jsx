import { Layout } from './layout';
import { Restaurant } from './Restaurant/restaurant';
import { restaurants } from '../../materials/mock';
import { useState } from 'react';
import { ProgressBar } from './progress-bar';
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
                            <button
                                disabled={rest.id === restaurant.id}
                                className={styles.tabButtons}
                                key={rest.id}
                                onClick={() => changeRestaurant(rest.id)}
                            >
                                <div>{rest.name}</div>
                            </button>
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
