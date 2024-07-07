import { Menu } from './Menu';
import { Review } from './Review';
import '../../index.css'

export const Restaurant = ({ restaurantNow, counters, increment, decrement}) => {

    return (
        <div>
            {restaurantNow && restaurantNow.menu && restaurantNow.menu.length > 0 ? (
                <div className='mainContenet'>
                    <div className='names'> 
                        {restaurantNow.name}
                        <Menu 
                            menu={restaurantNow.menu}
                            counters={counters}
                            increment={increment}
                            decrement={decrement}/>
                        
                        <Review reviews={restaurantNow.reviews}/>
                    </div>
                </div>
            ) : (
                <div>No restaurants</div>
            )}
        </div>
    );
};