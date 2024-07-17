import classNames from 'classnames';
import { useTheme } from '../../theme-context/theme-context';
import { CounterContainer } from '../counter/counter-container';
import styles from './menu.module.css';
import { useUser } from '../../user-context/user-context';

export const Menu = ({ menu }) => {
    const { value: theme } = useTheme();
    const { value: user } = useUser();

    return (
        <div className={styles.menuContainer}>
            <h3>Menu positions</h3>
            <div className={styles.menuContent}>
                {/* я понимаю, что если у нас будет много элементов - они выйдут за границы
                    там придется гридом делать, но пока что просто так сделал */}
                {menu.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(styles.positionContainer, {
                            [styles.lightTheme]: theme === 'light',
                            [styles.darkTheme]: theme === 'dark',
                        })}
                    >
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
                        {user !== undefined ? (
                            <div className={styles.counterContainer}>
                                <CounterContainer />
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};
