import { useState, useCallback } from 'react';

export const useCount = (max, min) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevState) => Math.min(prevState + 1, max));
    }, [max]);

    const decrement = useCallback(() => {
        setCount((prevState) => Math.max(prevState - 1, min));
    }, [min]);

    return {
        count,
        increment,
        decrement,
    };
};
