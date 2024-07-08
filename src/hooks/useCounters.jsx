import { useState } from 'react';

export const useCounters = (initMenus) => {
    const initialCounters = (menus) =>
        menus.map(() => {
            return { count: 0 };
        });

    const [counters, setCounters] = useState(initialCounters(initMenus));

    const increment = (index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] = {
                ...newCounters[index],
                count: Math.min(newCounters[index].count + 1, 5),
            };
            return newCounters;
        });
    };

    const decrement = (index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] = {
                ...newCounters[index],
                count: Math.max(newCounters[index].count - 1, 0),
            };
            return newCounters;
        });
    };

    return { counters, increment, decrement };
};
