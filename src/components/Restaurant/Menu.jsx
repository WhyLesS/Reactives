import { CounterContainer } from './counter/counter-container';

export const Menu = ({ menu }) => {
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
                        <CounterContainer />
                    </>
                ))}
            </div>
        </div>
    );
};
