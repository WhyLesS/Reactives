import { Layout } from './Layout';
import { Restaurant } from './Restaurant/Restaurant';
import { restaurants } from '../../materials/mock';
import { useState } from 'react';
import { ProgressBar } from './progress-bar';
import './app.css';

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
                {restaurants.length ? (
                    restaurants.map((rest) => (
                        <button
                            key={rest.id}
                            onClick={() => changeRestaurant(rest.id)}
                        >
                            {rest.name}
                        </button>
                    ))
                ) : (
                    <div>Empty Restaurant</div>
                )}
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            </Layout>
        </div>
    );
};
