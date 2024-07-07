import '../../index.css'

export const Menu = ({menu, counters, increment, decrement}) => {
    
    return (
        <div className='menu'>
            <h3>Menu:</h3>
            <div className='menuContent'>
                {menu.map((item, index) =>
                    (
                        <>
                            <div>name: {item.name} - price: {item.price}</div>
                            <div>
                                ingredients:
                                <ul className='ingredients'>
                                    {item.ingredients.map((ingredient) =>
                                        <>
                                            <li>{ingredient}</li>
                                        </>
                                    )}
                                    
                                </ul>
                            </div>
                            {counters && (
                                <>
                                    <button onClick={() => increment(index)}>+</button>
                                        <span>{counters[index].count}</span>
                                    <button onClick={() => decrement(index)}>-</button>
                                </>
                            )}
                        </>
                    )
                )}
            </div>
            
        </div>
    )
}