import { CounterContainer } from '../counter/counter-container';
import styles from './menu.module.css';

export const Menu = ({ menu }) => {
    return (
        <div className={styles.menuContainer}>
            <h3>Menu positions</h3>
            <div className={styles.menuContent}>
                {/* я понимаю, что если у нас будет много элементов - они выйдут за границы
                    там придется гридом делать, но пока что просто так сделал */}
                {menu.map((item, index) => (
                    <div key={index} className={styles.positionContainer}>
                        <div>
                            {item.name} - {item.price}
                        </div>
                        <div>
                            ingredients:
                            <div className={styles.ingredients}>
                                {item.ingredients.map((ingredient, index) => (
                                    <div key={menu.id + index}>
                                        <div className={styles.ingredient}>
                                            {ingredient}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.counterContainer}>
                            <CounterContainer />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
