import { Layout } from "./Layout";
import { Restaurant } from "./Restaurant/Restaurant";
import { restaurants } from '../../materials/mock'
import { useCounters } from "../hooks/useCounters";
import { useState } from "react";

export const App = () => {
    const [restaurant, setRestaurant] = useState(restaurants.length ? restaurants[0]: null);

    const menuItems = restaurant?.menu;
    const {counters, increment, decrement, update} = useCounters(menuItems);
    
    function changeRestaurant(restId) {
        const nextRestaurant = restaurants.find((r) => r.id === restId);
        update(nextRestaurant.menu);
        setRestaurant(nextRestaurant);
    }

    return (
        <div>
            <Layout>
                {restaurants.length ? (restaurants.map((rest) => 
                    <button 
                        key={rest.id} 
                        onClick={() => changeRestaurant(rest.id)}>
                        {rest.name}
                    </button>
                )) : (
                    <div> 
                        Empty Restaurant
                    </div>
                )}
                <Restaurant 
                    restaurantNow={restaurant}
                    counters={counters}
                    increment={increment}
                    decrement={decrement}/>
            </Layout>
        </div>
    );
};