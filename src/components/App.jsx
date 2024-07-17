import { Layout } from './Layout';
import { restaurants } from '../../materials/mock';
import { useState } from 'react';
import { ProgressBar } from './progress-bar';
import { Restaurant } from './Restaurant/Restaurant';
import { CustomButton } from './custom-button/custom-button';
import { ThemeContextProvider } from './theme-context/theme-context';
import styles from './app.module.css';
import { UserContextProvider } from './user-context/user-context';

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
            <ThemeContextProvider>
                <UserContextProvider>
                    <ProgressBar />
                    <Layout>
                        <div className={styles.tabContainer}>
                            {restaurants.length ? (
                                restaurants.map((rest) => (
                                    <>
                                        <CustomButton
                                            onClick={() =>
                                                changeRestaurant(rest.id)
                                            }
                                            disabled={rest.id === restaurant.id}
                                            text={rest.name}
                                        />
                                    </>
                                ))
                            ) : (
                                <div>Empty Restaurant</div>
                            )}
                        </div>
                        <Restaurant
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </div>
    );
};
