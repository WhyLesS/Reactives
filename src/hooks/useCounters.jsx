import { useCallback, useState } from 'react';

export const useCounters = (itemsNumber) => {
    const [counters, setCounters] = useState(() =>
        Array.from({ length: itemsNumber }, () => ({ count: 0 }))
    );

    const increment = useCallback((index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] = {
                ...newCounters[index],
                count: Math.min(newCounters[index].count + 1, 5),
            };
            return newCounters;
        });
    }, []);

    const decrement = useCallback((index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] = {
                ...newCounters[index],
                count: Math.max(newCounters[index].count - 1, 0),
            };
            return newCounters;
        });
    }, []);

    const reset = useCallback(() => {
        setCounters(Array.from({ length: itemsNumber }, () => ({ count: 0 })));
    }, [itemsNumber]);

    return { counters, increment, decrement, reset };
};
