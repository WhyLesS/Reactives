import { useCount } from '../../../hooks/useCount';
import { Counter } from './Counter';

export const CounterContainer = () => {
    const { count, decrement, increment } = useCount(5, 0);

    return (
        <Counter count={count} increment={increment} decrement={decrement} />
    );
};
