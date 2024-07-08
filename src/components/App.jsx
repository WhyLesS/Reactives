import { Layout } from './Layout';
import { Restaurant } from './Restaurant/Restaurant';
import { restaurants } from '../../materials/mock';
import { useEffect, useState } from 'react';
import './app.css';

export const App = () => {
    const [restaurant, setRestaurant] = useState(
        restaurants.length ? restaurants[0] : null
    );
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPercentage =
                (scrollPosition / (documentHeight - windowHeight)) * 100;
            setScrollProgress(scrollPercentage);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    function changeRestaurant(restId) {
        const nextRestaurant = restaurants.find((r) => r.id === restId);
        setRestaurant(nextRestaurant);
    }

    return (
        <div>
            <div className="bar" style={{ width: `${scrollProgress}%` }}></div>
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
                <Restaurant key={restaurant.id} restaurant={restaurant} />
                <Restaurant key={restaurant.id} restaurant={restaurant} />
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            </Layout>
        </div>
    );
};
