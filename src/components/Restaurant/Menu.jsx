import { useCounters } from '../../hooks/useCounters';
import '../../index.css';

export const Menu = ({ menu }) => {
    const { counters, increment, decrement } = useCounters(
        menu.length ? menu.length : 0
    );

    return (
        <div className="menu">
            <h3>Menu:</h3>
            <div className="menuContent">
                {menu.map((item, index) => (
                    <>
                        <div>
                            name: {item.name} - price: {item.price}
                        </div>
                        <div>
                            ingredients:
                            <ul className="ingredients">
                                {item.ingredients.map((ingredient, index) => (
                                    <>
                                        <li key={menu.id + index}>
                                            {ingredient}
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                        {counters && (
                            <>
                                <button onClick={() => increment(index)}>
                                    +
                                </button>
                                <span>{counters[index].count}</span>
                                <button onClick={() => decrement(index)}>
                                    -
                                </button>
                            </>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};
